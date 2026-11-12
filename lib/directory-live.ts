// Server-only: turn stored (paid) listing records into Pottery directory entries.
// Imported by the directory server component, never by client code — it pulls in
// the Blob/fs store. Only "live" records surface; flagged/removed/past_due are hidden.
//
// Pottery keeps FOUR typed arrays (guilds, potters, teachingStudios, suppliers)
// rather than one unified Listing list, so each record's `category` decides which
// array it joins:
//   potter   -> potters        (offersClasses honoured)
//   guild    -> guilds
//   class    -> teachingStudios (a studio offering classes)
//   kiln     -> teachingStudios (offersKilnSharing forced true)
//   supplier -> suppliers       (offersKilnSharing honoured)
import { listListings } from "./listings-store";
import type { Country, Guild, Potter, Supplier, TeachingStudio } from "./directory-data";

const COUNTRIES: Country[] = ["CA", "US", "EU", "AU"];
const isCountry = (v?: string): v is Country => !!v && (COUNTRIES as string[]).includes(v);

export interface LiveListings {
  guilds: Guild[];
  potters: Potter[];
  teachingStudios: TeachingStudio[];
  suppliers: Supplier[];
}

export async function getLiveListings(): Promise<LiveListings> {
  const out: LiveListings = { guilds: [], potters: [], teachingStudios: [], suppliers: [] };

  const records = await listListings();
  for (const r of records) {
    if (r.status !== "live") continue;
    if (!r.name || !isCountry(r.country)) continue;

    const base = {
      name: r.name,
      city: r.city ?? "",
      province: r.region ?? "",
      country: r.country,
      website: r.website || undefined,
      bio: r.bio || undefined,
    };

    switch (r.category) {
      case "guild":
        out.guilds.push({ ...base });
        break;
      case "potter":
        out.potters.push({
          ...base,
          studio: r.studio || undefined,
          guild: r.guild || undefined,
          ...(r.offersClasses ? { offersClasses: true } : {}),
        });
        break;
      case "class":
        out.teachingStudios.push({
          ...base,
          ...(r.offersKilnSharing ? { offersKilnSharing: true } : {}),
        });
        break;
      case "kiln":
        out.teachingStudios.push({ ...base, offersKilnSharing: true });
        break;
      case "supplier":
        out.suppliers.push({
          ...base,
          ...(r.offersKilnSharing ? { offersKilnSharing: true } : {}),
        });
        break;
      default:
        // Unknown/absent category — skip rather than guess.
        break;
    }
  }

  return out;
}
