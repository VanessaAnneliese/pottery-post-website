"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { guilds, potters, suppliers, teachingStudios, groupByProvince, type Guild, type Potter, type Supplier, type TeachingStudio, type Country } from "@/lib/directory-data";
import QuoteBlock from "@/components/QuoteBlock";

type DirectoryType = "guilds" | "potters" | "suppliers" | "classes";

const REGIONS: { code: Country; label: string }[] = [
  { code: "CA", label: "Canada" },
  { code: "US", label: "United States" },
  { code: "EU", label: "Europe" },
  { code: "AU", label: "Australia" },
];

function countryLabel(country: Country): string {
  switch (country) {
    case "CA": return "Canada";
    case "US": return "United States";
    case "EU": return "Europe";
    case "AU": return "Australia";
  }
}

function NavButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 text-xs tracking-widest uppercase font-bold rounded-sm transition-colors cursor-pointer"
      style={{
        background: active ? "#5C3D2E" : "#E8D5B7",
        color: active ? "#F5F0E8" : "#5C3D2E",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {label}
    </button>
  );
}

function groupByCity<T extends { city: string }>(items: T[]): { city: string; items: T[] }[] {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const city = item.city || "Other";
    if (!map.has(city)) map.set(city, []);
    map.get(city)!.push(item);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([city, cityItems]) => ({ city, items: cityItems }));
}

function ProvinceSection({ province, country }: { province: string; country: Country }) {
  return (
    <h3 className="text-xs font-bold tracking-widest uppercase mt-10 mb-4 pb-2 border-b" style={{ color: "#9E8572", borderColor: "#E8D5B7", fontFamily: "system-ui, sans-serif", letterSpacing: "0.3em" }}>
      {province} &middot; {countryLabel(country)}
    </h3>
  );
}

function CitySection({ city }: { city: string }) {
  return (
    <h4 className="text-xs tracking-widest uppercase mt-6 mb-2" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif", letterSpacing: "0.2em" }}>
      {city}
    </h4>
  );
}

function GuildCard({ guild }: { guild: Guild }) {
  return (
    <div className="py-4 border-b" style={{ borderColor: "#E8D5B7" }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-bold" style={{ fontFamily: "Georgia, serif" }}>{guild.name}</p>
          <p className="text-sm mt-1" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>{guild.city}, {guild.province}</p>
          {guild.bio && <p className="text-sm mt-2" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>{guild.bio}</p>}
        </div>
        {guild.website && (
          <a href={guild.website} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase underline shrink-0" style={{ color: "#009999", fontFamily: "system-ui, sans-serif" }}>
            Website
          </a>
        )}
      </div>
    </div>
  );
}

function PotterCard({ potter }: { potter: Potter }) {
  return (
    <div className="py-4 border-b" style={{ borderColor: "#E8D5B7" }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-bold" style={{ fontFamily: "Georgia, serif" }}>{potter.name}{potter.studio ? `, ${potter.studio}` : ""}</p>
          {potter.guild && <p className="text-xs mt-0.5" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>{potter.guild}</p>}
          <p className="text-sm mt-1" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>{potter.city}, {potter.province}</p>
          {potter.offersClasses && <p className="text-xs mt-1 tracking-widest uppercase" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>Offers Classes</p>}
          {potter.bio && <p className="text-sm mt-2" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>{potter.bio}</p>}
        </div>
        {potter.website && (
          <a href={potter.website} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase underline shrink-0" style={{ color: "#009999", fontFamily: "system-ui, sans-serif" }}>
            Website
          </a>
        )}
      </div>
    </div>
  );
}

function TeachingStudioCard({ studio }: { studio: TeachingStudio }) {
  return (
    <div className="py-4 border-b" style={{ borderColor: "#E8D5B7" }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-bold" style={{ fontFamily: "Georgia, serif" }}>{studio.name}</p>
          <p className="text-sm mt-1" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>{studio.city}, {studio.province}</p>
          {studio.offersKilnSharing && <p className="text-xs mt-1 tracking-widest uppercase" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>Community Kiln</p>}
          {studio.bio && <p className="text-sm mt-2" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>{studio.bio}</p>}
        </div>
        {studio.website && (
          <a href={studio.website} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase underline shrink-0" style={{ color: "#009999", fontFamily: "system-ui, sans-serif" }}>
            Website
          </a>
        )}
      </div>
    </div>
  );
}

function SupplierCard({ supplier }: { supplier: Supplier }) {
  return (
    <div className="py-4 border-b" style={{ borderColor: "#E8D5B7" }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-bold" style={{ fontFamily: "Georgia, serif" }}>{supplier.name}</p>
          <p className="text-sm mt-1" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>{supplier.city}, {supplier.province}</p>
          {supplier.offersKilnSharing && <p className="text-xs mt-1 tracking-widest uppercase" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>Community Kiln</p>}
          {supplier.bio && <p className="text-sm mt-2" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>{supplier.bio}</p>}
        </div>
        {supplier.website && (
          <a href={supplier.website} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase underline shrink-0" style={{ color: "#009999", fontFamily: "system-ui, sans-serif" }}>
            Website
          </a>
        )}
      </div>
    </div>
  );
}

function RegionBlock({
  code,
  guildsByProvince,
  pottersByProvince,
  classPottersByProvince,
  teachingStudiosByProvince,
  suppliersByProvince,
  selectedType,
}: {
  code: Country;
  guildsByProvince: ReturnType<typeof groupByProvince<Guild>>;
  pottersByProvince: ReturnType<typeof groupByProvince<Potter>>;
  classPottersByProvince: ReturnType<typeof groupByProvince<Potter>>;
  teachingStudiosByProvince: ReturnType<typeof groupByProvince<TeachingStudio>>;
  suppliersByProvince: ReturnType<typeof groupByProvince<Supplier>>;
  selectedType: DirectoryType | null;
}) {
  const isClasses = selectedType === "classes";
  const regionGuilds = (selectedType === "potters" || selectedType === "suppliers" || isClasses) ? [] : guildsByProvince.filter((g) => g.country === code);
  const regionPotters = (selectedType === "guilds" || selectedType === "suppliers" || isClasses) ? [] : pottersByProvince.filter((p) => p.country === code);
  const regionClassPotters = isClasses ? classPottersByProvince.filter((p) => p.country === code) : [];
  const regionTeachingStudios = (selectedType === null || isClasses) ? teachingStudiosByProvince.filter((s) => s.country === code) : [];
  const regionSuppliers = (selectedType === "guilds" || selectedType === "potters" || isClasses) ? [] : suppliersByProvince.filter((s) => s.country === code);

  if (regionGuilds.length === 0 && regionPotters.length === 0 && regionClassPotters.length === 0 && regionTeachingStudios.length === 0 && regionSuppliers.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-bold mt-10 mb-2" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
        {countryLabel(code)}
      </h3>
      {regionGuilds.map(({ province, country, items }) => (
        <div key={province}>
          <ProvinceSection province={province} country={country} />
          {groupByCity(items).map(({ city, items: cityItems }) => (
            <div key={city}>
              <CitySection city={city} />
              {cityItems.map((guild) => <GuildCard key={guild.name} guild={guild} />)}
            </div>
          ))}
        </div>
      ))}
      {regionPotters.map(({ province, country, items }) => (
        <div key={province}>
          <ProvinceSection province={province} country={country} />
          {groupByCity(items).map(({ city, items: cityItems }) => (
            <div key={city}>
              <CitySection city={city} />
              {cityItems.map((potter) => <PotterCard key={potter.name} potter={potter} />)}
            </div>
          ))}
        </div>
      ))}
      {regionClassPotters.map(({ province, country, items }) => (
        <div key={`class-potter-${province}`}>
          <ProvinceSection province={province} country={country} />
          {groupByCity(items).map(({ city, items: cityItems }) => (
            <div key={city}>
              <CitySection city={city} />
              {cityItems.map((potter) => <PotterCard key={potter.name} potter={potter} />)}
            </div>
          ))}
        </div>
      ))}
      {regionTeachingStudios.map(({ province, country, items }) => (
        <div key={`studio-${province}`}>
          <ProvinceSection province={province} country={country} />
          {groupByCity(items).map(({ city, items: cityItems }) => (
            <div key={city}>
              <CitySection city={city} />
              {cityItems.map((studio) => <TeachingStudioCard key={studio.name} studio={studio} />)}
            </div>
          ))}
        </div>
      ))}
      {regionSuppliers.map(({ province, country, items }) => (
        <div key={province}>
          <ProvinceSection province={province} country={country} />
          {groupByCity(items).map(({ city, items: cityItems }) => (
            <div key={city}>
              <CitySection city={city} />
              {cityItems.map((supplier) => <SupplierCard key={supplier.name} supplier={supplier} />)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function DirectoryContent() {
  const searchParams = useSearchParams();
  const [selectedType, setSelectedType] = useState<DirectoryType | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Country | null>(
    () => (searchParams.get("region") as Country | null) ?? "CA"
  );
  const [selectedProvince, setSelectedProvince] = useState<string | null>(
    () => searchParams.get("province")
  );
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Sync URL params → state when a new search is submitted (even from within the directory page)
  // This pattern is intentional: URL changes (from search) need to reset filter state.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setSelectedRegion((searchParams.get("region") as Country | null) ?? "CA");
    setSelectedProvince(searchParams.get("province"));
    setSelectedLetter(null);

    // Auto-select type button when query is a known category keyword
    const q = (searchParams.get("q") ?? "").trim().toLowerCase();
    if (["potter", "potters", "ceramicist", "ceramics"].includes(q)) {
      setSelectedType("potters");
    } else if (["guild", "guilds", "association"].includes(q)) {
      setSelectedType("guilds");
    } else if (["class", "classes", "workshop", "workshops", "lesson", "lessons"].includes(q)) {
      setSelectedType("classes");
    } else if (["supplier", "suppliers", "supply", "supply shop", "supply shops", "store", "stores"].includes(q)) {
      setSelectedType("suppliers");
    } else {
      setSelectedType(null);
    }
  }, [searchParams]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const textQuery = searchParams.get("q")?.trim().toLowerCase() ?? "";

  function matchesQuery<T extends { name: string; bio?: string; city?: string; province?: string }>(
    item: T,
    extraTags = ""
  ): boolean {
    if (!textQuery) return true;
    const words = textQuery.split(/\s+/).filter(Boolean);
    const fields = [
      item.name.toLowerCase(),
      item.bio?.toLowerCase() ?? "",
      item.city?.toLowerCase() ?? "",
      item.province?.toLowerCase() ?? "",
      ...(extraTags ? [extraTags.toLowerCase()] : []),
    ];
    // Every word must appear in at least one field, so "potter toronto" finds potters in Toronto
    return words.every(word => fields.some(field => field.includes(word)));
  }

  // Category tags: type keywords in a search always find the right category
  const CLASS_TAGS    = "class classes workshop lesson pottery ceramics";
  const POTTER_TAGS   = "potter potters ceramicist ceramics pottery";
  const GUILD_TAGS    = "guild guilds association pottery";
  const SUPPLIER_TAGS = "supplier suppliers supply shop shops store pottery";

  // Sort so items whose city matches a query word appear first
  function sortByLocation<T extends { city?: string }>(items: T[]): T[] {
    if (!textQuery) return items;
    const words = textQuery.split(/\s+/).filter(Boolean);
    return [...items].sort((a, b) => {
      const scoreA = words.filter(w => a.city?.toLowerCase().includes(w)).length;
      const scoreB = words.filter(w => b.city?.toLowerCase().includes(w)).length;
      return scoreB - scoreA;
    });
  }

  const filteredGuilds = sortByLocation(guilds
    .filter((g) => !selectedRegion || g.country === selectedRegion)
    .filter((g) => !selectedProvince || g.province === selectedProvince)
    .filter((g) => matchesQuery(g, GUILD_TAGS)));

  const filteredPotters = sortByLocation(potters
    .filter((p) => !selectedRegion || p.country === selectedRegion)
    .filter((p) => !selectedProvince || p.province === selectedProvince)
    .filter((p) => matchesQuery(p, POTTER_TAGS)));

  // Class potters: start fresh from potters so "class" in query always finds them
  const filteredClassPotters = sortByLocation(potters
    .filter((p) => !selectedRegion || p.country === selectedRegion)
    .filter((p) => !selectedProvince || p.province === selectedProvince)
    .filter((p) => p.offersClasses)
    .filter((p) => matchesQuery(p, CLASS_TAGS)));

  const filteredSuppliers = sortByLocation(suppliers
    .filter((s) => !selectedRegion || s.country === selectedRegion)
    .filter((s) => !selectedProvince || s.province === selectedProvince)
    .filter((s) => matchesQuery(s, SUPPLIER_TAGS)));

  // Teaching studios: always match class-related search words
  const filteredTeachingStudios = sortByLocation(teachingStudios
    .filter((s) => !selectedRegion || s.country === selectedRegion)
    .filter((s) => !selectedProvince || s.province === selectedProvince)
    .filter((s) => matchesQuery(s, CLASS_TAGS)));

  const hasTextSearch = !!textQuery;

  // If a type button is selected, always respect it (narrows text search results too).
  // If no type button, and text search is active, show all types that have matching results.
  // If no type button and no text search, show guilds/potters/suppliers but not classes.
  const showGuilds    = selectedType ? selectedType === "guilds"    : (hasTextSearch ? filteredGuilds.length > 0    : true);
  const showPotters   = selectedType ? selectedType === "potters"   : (hasTextSearch ? filteredPotters.length > 0   : true);
  const showSuppliers = selectedType ? selectedType === "suppliers" : (hasTextSearch ? filteredSuppliers.length > 0 : true);
  const showClasses   = selectedType ? selectedType === "classes"   : (hasTextSearch ? (filteredClassPotters.length > 0 || filteredTeachingStudios.length > 0) : true);

  const letterFilter = <T extends { name: string }>(items: T[]): T[] =>
    selectedLetter ? items.filter((i) => i.name[0]?.toUpperCase() === selectedLetter) : items;

  const availableLetters = new Set([
    ...(showGuilds ? filteredGuilds : []),
    ...(showPotters && !showClasses ? filteredPotters : []),
    ...(showClasses ? [...filteredClassPotters, ...filteredTeachingStudios] : []),
    ...(showSuppliers ? filteredSuppliers : []),
  ].map((i) => i.name[0]?.toUpperCase()).filter(Boolean) as string[]);

  const guildsByProvince = groupByProvince(letterFilter(filteredGuilds));
  const pottersByProvince = groupByProvince(letterFilter(filteredPotters));
  const classPottersByProvince = groupByProvince(letterFilter(filteredClassPotters));
  const suppliersByProvince = groupByProvince(letterFilter(filteredSuppliers));
  const teachingStudiosByProvince = groupByProvince(letterFilter(filteredTeachingStudios));

  const provinceSource = [
    ...(selectedType !== "potters" && selectedType !== "suppliers" && selectedType !== "classes" ? guilds : []),
    ...(selectedType !== "guilds" && selectedType !== "suppliers" ? potters : []),
    ...(selectedType !== "guilds" && selectedType !== "potters" && selectedType !== "classes" ? suppliers : []),
    ...(selectedType === "classes" || selectedType === null ? teachingStudios : []),
  ].filter((i) => !selectedRegion || i.country === selectedRegion);

  const provinces = Array.from(new Set(provinceSource.map((i) => i.province))).sort();

  function handleTypeClick(type: DirectoryType) {
    setSelectedType(selectedType === type ? null : type);
    setSelectedProvince(null);
    setSelectedLetter(null);
  }

  function handleRegionClick(code: Country) {
    if (selectedRegion === code) return; // already selected, radio-button behaviour
    setSelectedRegion(code);
    setSelectedProvince(null);
    setSelectedLetter(null);
  }

  return (
    <>
    {selectedType === null && <QuoteBlock quote="A bowl made by hand carries something no factory can put into it. The particular attention of a particular person, on a particular day, who decided to make something beautiful." className="pt-24 md:pt-32 pb-12 md:pb-16" />}
    {selectedType === "guilds" && <QuoteBlock quote="When potters gather, the energy in the room is its own kind of fire." className="pt-24 md:pt-32 pb-12 md:pb-16" />}
    {selectedType === "potters" && <QuoteBlock quote="What a potter makes with their hands, they first made with their whole self." className="pt-24 md:pt-32 pb-12 md:pb-16" />}
    {selectedType === "classes" && <QuoteBlock quote="There is a version of you that exists only when your hands are in clay. A pottery class is how you meet them." className="pt-24 md:pt-32 pb-12 md:pb-16" />}
    {selectedType === "suppliers" && <QuoteBlock quote={<>Behind every potter who makes something extraordinary is a supply shop<span className="hidden md:inline"><br /></span>{" "}who makes<span className="hidden md:inline"><br /></span>{" "}it possible.</>} className="pt-24 md:pt-32 pb-12 md:pb-16" />}
    <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Worldwide
      </p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
        <div>
          <h1 className="text-4xl font-bold" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>Pottery Directory</h1>
          <p className="mt-3 mb-1 text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif" }}>
            {potters.length + guilds.length + teachingStudios.length + suppliers.length} listings and counting
          </p>
        </div>
        <div className="flex flex-wrap gap-2 self-start sm:self-auto">
          <Link
            href="/directory/submit"
            className="px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm bg-[#D4622A] hover:bg-[#B8501F] transition-colors"
            style={{ color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
          >
            Add your listing
          </Link>
          <Link
            href="/directory/update"
            className="px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm bg-[#E8D5B7] hover:bg-[#C5B59C] transition-colors"
            style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}
          >
            Update your listing
          </Link>
        </div>
      </div>
      <p className="mb-3 max-w-lg" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        The Pottery Post&rsquo;s Pottery Directory spans three continents. Know a pottery guild, potter, pottery class, or pottery supply shop who should be here? Send them our way.
      </p>
      <p className="mb-10 max-w-lg text-sm italic" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        Every addition and update is made by hand, by a real person. Please allow up to 48 hours.
      </p>

      {/* Row 1: Type filter */}
      <div className="flex flex-wrap gap-2 mb-4 mt-3 pb-4 border-b" style={{ borderColor: "#E8D5B7" }}>
        <NavButton label="All" active={selectedType === null} onClick={() => { setSelectedType(null); setSelectedProvince(null); setSelectedLetter(null); }} />
        <NavButton label="Guilds" active={selectedType === "guilds"} onClick={() => handleTypeClick("guilds")} />
        <NavButton label="Potters" active={selectedType === "potters"} onClick={() => handleTypeClick("potters")} />
        <NavButton label="Classes" active={selectedType === "classes"} onClick={() => handleTypeClick("classes")} />
        <NavButton label="Supply Shops" active={selectedType === "suppliers"} onClick={() => handleTypeClick("suppliers")} />
      </div>

      {/* Row 3: Region filter */}
      <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b" style={{ borderColor: "#E8D5B7" }}>
        {REGIONS.map(({ code, label }) => (
          <NavButton key={code} label={label} active={selectedRegion === code} onClick={() => handleRegionClick(code)} />
        ))}
      </div>

      {/* Province sub-nav */}
      {selectedRegion && provinces.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4 pb-4 pt-2 border-b" style={{ borderColor: "#E8D5B7" }}>
          {provinces.map((p) => (
            <NavButton
              key={p}
              label={p}
              active={selectedProvince === p}
              onClick={() => { setSelectedProvince(selectedProvince === p ? null : p); setSelectedLetter(null); }}
            />
          ))}
        </div>
      )}

      {/* A–Z nav */}
      <div className="flex flex-wrap gap-0.5 mb-10 pb-4 border-b" style={{ borderColor: "#E8D5B7" }}>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
          const available = availableLetters.has(letter);
          const active = selectedLetter === letter;
          return (
            <button
              key={letter}
              onClick={() => available && setSelectedLetter(active ? null : letter)}
              className="w-7 h-7 text-xs font-bold rounded-sm transition-colors"
              style={{
                fontFamily: "system-ui, sans-serif",
                background: active ? "#5C3D2E" : "transparent",
                color: active ? "#F5F0E8" : available ? "#5C3D2E" : "#C9BAA8",
                cursor: available ? "pointer" : "default",
              }}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </section>
    <section className="px-6 pb-12 md:pb-20 max-w-4xl mx-auto">
      {/* NC quote */}
      {selectedRegion === "US" && selectedProvince === "North Carolina" && (
        <QuoteBlock quote="In the hills of North Carolina, families have passed a pottery wheel from grandmother to grandchild for two hundred years. The clay is the same. The river is the same. The love that goes into it is the same. Some things refuse to be lost." className="my-8" />
      )}
      {/* Content */}
      {!selectedRegion ? (
        <>
          {REGIONS.map(({ code }) => (
            <RegionBlock
              key={code}
              code={code}
              guildsByProvince={guildsByProvince}
              pottersByProvince={pottersByProvince}
              classPottersByProvince={classPottersByProvince}
              teachingStudiosByProvince={teachingStudiosByProvince}
              suppliersByProvince={suppliersByProvince}
              selectedType={selectedType}
            />
          ))}
        </>
      ) : (
        <>
          {showGuilds && guildsByProvince.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "Georgia, serif", color: "#D4622A" }}>Guilds</h2>
              {guildsByProvince.map(({ province, country, items }) => (
                <div key={province}>
                  {!selectedProvince && <ProvinceSection province={province} country={country} />}
                  {groupByCity(items).map(({ city, items: cityItems }) => (
                    <div key={city}>
                      <CitySection city={city} />
                      {cityItems.map((guild) => <GuildCard key={guild.name} guild={guild} />)}
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
          {showPotters && pottersByProvince.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mt-16 mb-2" style={{ fontFamily: "Georgia, serif", color: "#D4622A" }}>Potters</h2>
              {pottersByProvince.map(({ province, country, items }) => (
                <div key={province}>
                  {!selectedProvince && <ProvinceSection province={province} country={country} />}
                  {groupByCity(items).map(({ city, items: cityItems }) => (
                    <div key={city}>
                      <CitySection city={city} />
                      {cityItems.map((potter) => <PotterCard key={potter.name} potter={potter} />)}
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
          {showClasses && (
            <>
              {classPottersByProvince.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mt-16 mb-2" style={{ fontFamily: "Georgia, serif", color: "#D4622A" }}>Potters Offering Classes</h2>
                  {classPottersByProvince.map(({ province, country, items }) => (
                    <div key={province}>
                      {!selectedProvince && <ProvinceSection province={province} country={country} />}
                      {groupByCity(items).map(({ city, items: cityItems }) => (
                        <div key={city}>
                          <CitySection city={city} />
                          {cityItems.map((potter) => <PotterCard key={potter.name} potter={potter} />)}
                        </div>
                      ))}
                    </div>
                  ))}
                </>
              )}
              {teachingStudiosByProvince.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mt-16 mb-2" style={{ fontFamily: "Georgia, serif", color: "#D4622A" }}>Pottery Classes</h2>
                  {teachingStudiosByProvince.map(({ province, country, items }) => (
                    <div key={province}>
                      {!selectedProvince && <ProvinceSection province={province} country={country} />}
                      {groupByCity(items).map(({ city, items: cityItems }) => (
                        <div key={city}>
                          <CitySection city={city} />
                          {cityItems.map((studio) => <TeachingStudioCard key={studio.name} studio={studio} />)}
                        </div>
                      ))}
                    </div>
                  ))}
                </>
              )}
              {classPottersByProvince.length === 0 && teachingStudiosByProvince.length === 0 && (
                <p className="py-8" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>No classes listings yet for this selection.</p>
              )}
            </>
          )}
          {showSuppliers && suppliersByProvince.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mt-16 mb-2" style={{ fontFamily: "Georgia, serif", color: "#D4622A" }}>Supply Shops</h2>
              {suppliersByProvince.map(({ province, country, items }) => (
                <div key={province}>
                  {!selectedProvince && <ProvinceSection province={province} country={country} />}
                  {groupByCity(items).map(({ city, items: cityItems }) => (
                    <div key={city}>
                      <CitySection city={city} />
                      {cityItems.map((supplier) => <SupplierCard key={supplier.name} supplier={supplier} />)}
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
          {(!showGuilds || guildsByProvince.length === 0) && (!showPotters || pottersByProvince.length === 0) && !showClasses && (!showSuppliers || suppliersByProvince.length === 0) && (
            <p className="py-8" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>No listings yet for this selection.</p>
          )}
        </>
      )}
    </section>
    {selectedType === null && <QuoteBlock quote={<>Every name in this directory is a person who chose to make something with their hands.<br className="md:hidden" /> That choice deserves to<br className="md:hidden" /> be found.</>} className="pb-24 md:pb-32" />}
    {selectedType === "guilds" && <QuoteBlock quote="A guild is where individual voices learn to make something larger than themselves." />}
    {selectedType === "classes" && <QuoteBlock quote="No one picks up clay for the first time and walks away unchanged." />}
    {selectedType === "potters" && <QuoteBlock quote="What's made by hand is made twice, once in the mind, once in the world." />}
    {selectedType === "suppliers" && <QuoteBlock quote="A supplier who understands pottery understands that what they offer will one day be held by a stranger, and loved." className="py-20 md:py-24" />}
    </>
  );
}

export default function DirectoryPage() {
  return (
    <Suspense>
      <DirectoryContent />
    </Suspense>
  );
}
