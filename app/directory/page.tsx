import {
  guilds as seedGuilds,
  potters as seedPotters,
  teachingStudios as seedStudios,
  suppliers as seedSuppliers,
} from "@/lib/directory-data";
import { getLiveListings } from "@/lib/directory-live";
import DirectoryClient from "@/components/DirectoryClient";

// Server component: merge the seed directory with any published (paid) listings
// from the store, then hand the combined arrays to the client UI. ISR keeps it
// fresh; the Stripe webhook also calls revalidatePath("/directory") on changes.
export const revalidate = 60;

export default async function DirectoryPage() {
  const live = await getLiveListings();
  return (
    <DirectoryClient
      guilds={[...seedGuilds, ...live.guilds]}
      potters={[...seedPotters, ...live.potters]}
      teachingStudios={[...seedStudios, ...live.teachingStudios]}
      suppliers={[...seedSuppliers, ...live.suppliers]}
    />
  );
}
