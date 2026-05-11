"use client";

import { useState } from "react";
import Link from "next/link";
import { guilds, potters, groupByProvince, type Guild, type Potter, type Country } from "@/lib/directory-data";

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
      className="px-5 py-2 text-xs tracking-widest uppercase font-bold rounded-sm transition-colors"
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

function ProvinceSection({ province, country }: { province: string; country: Country }) {
  return (
    <h3 className="text-xs tracking-widest uppercase mt-10 mb-4 pb-2 border-b" style={{ color: "#9E8572", borderColor: "#E8D5B7", fontFamily: "system-ui, sans-serif", letterSpacing: "0.3em" }}>
      {province} &mdash; {countryLabel(country)}
    </h3>
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
          <a href={guild.website} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase underline shrink-0" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
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
          <p className="font-bold" style={{ fontFamily: "Georgia, serif" }}>{potter.name}{potter.studio ? ` — ${potter.studio}` : ""}</p>
          {potter.guild && <p className="text-xs mt-0.5" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>{potter.guild}</p>}
          <p className="text-sm mt-1" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>{potter.city}, {potter.province}</p>
          {potter.bio && <p className="text-sm mt-2" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>{potter.bio}</p>}
        </div>
        {potter.website && (
          <a href={potter.website} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase underline shrink-0" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
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
  selectedType,
}: {
  code: Country;
  guildsByProvince: ReturnType<typeof groupByProvince<Guild>>;
  pottersByProvince: ReturnType<typeof groupByProvince<Potter>>;
  selectedType: "guilds" | "potters" | null;
}) {
  const regionGuilds = selectedType === "potters" ? [] : guildsByProvince.filter((g) => g.country === code);
  const regionPotters = selectedType === "guilds" ? [] : pottersByProvince.filter((p) => p.country === code);
  if (regionGuilds.length === 0 && regionPotters.length === 0) return null;
  return (
    <div>
      <h3 className="text-lg font-bold mt-10 mb-2" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
        {countryLabel(code)}
      </h3>
      {regionGuilds.map(({ province, country, items }) => (
        <div key={province}>
          <ProvinceSection province={province} country={country} />
          {items.map((guild) => <GuildCard key={guild.name} guild={guild} />)}
        </div>
      ))}
      {regionPotters.map(({ province, country, items }) => (
        <div key={province}>
          <ProvinceSection province={province} country={country} />
          {items.map((potter) => <PotterCard key={potter.name} potter={potter} />)}
        </div>
      ))}
    </div>
  );
}

export default function DirectoryPage() {
  const [selectedType, setSelectedType] = useState<"guilds" | "potters" | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Country | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  const isFullDirectory = selectedType === null && selectedRegion === null;

  const filteredGuilds = guilds
    .filter((g) => !selectedRegion || g.country === selectedRegion)
    .filter((g) => !selectedProvince || g.province === selectedProvince);

  const filteredPotters = potters
    .filter((p) => !selectedRegion || p.country === selectedRegion)
    .filter((p) => !selectedProvince || p.province === selectedProvince);

  const guildsByProvince = groupByProvince(filteredGuilds);
  const pottersByProvince = groupByProvince(filteredPotters);

  const provinceSource = [
    ...(selectedType !== "potters" ? guilds : []),
    ...(selectedType !== "guilds" ? potters : []),
  ].filter((i) => !selectedRegion || i.country === selectedRegion);

  const provinces = Array.from(new Set(provinceSource.map((i) => i.province))).sort();

  function handleTypeClick(type: "guilds" | "potters") {
    setSelectedType(selectedType === type ? null : type);
    setSelectedProvince(null);
  }

  function handleRegionClick(code: Country) {
    setSelectedRegion(selectedRegion === code ? null : code);
    setSelectedProvince(null);
  }

  function handleFullDirectory() {
    setSelectedType(null);
    setSelectedRegion(null);
    setSelectedProvince(null);
  }

  const showGuilds = selectedType !== "potters";
  const showPotters = selectedType !== "guilds";

  return (
    <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Worldwide
      </p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
        <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Georgia, serif" }}>The Potter&rsquo;s Directory</h1>
        <Link
          href="/directory/submit"
          className="px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm self-start sm:self-auto"
          style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
        >
          Add your listing
        </Link>
      </div>
      <p className="mb-10 max-w-lg" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        A potter&rsquo;s directory spanning three continents. Know a potter who should be here? Send them our way.
      </p>

      {/* Row 1: Full Directory */}
      <div className="mb-3">
        <NavButton label="Full Directory" active={isFullDirectory} onClick={handleFullDirectory} />
      </div>

      {/* Row 2: Type filter */}
      <div className="flex flex-wrap gap-2 mb-3">
        <NavButton label="Guilds" active={selectedType === "guilds"} onClick={() => handleTypeClick("guilds")} />
        <NavButton label="Potters" active={selectedType === "potters"} onClick={() => handleTypeClick("potters")} />
      </div>

      {/* Row 3: Region filter */}
      <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b" style={{ borderColor: "#E8D5B7" }}>
        {REGIONS.map(({ code, label }) => (
          <NavButton key={code} label={label} active={selectedRegion === code} onClick={() => handleRegionClick(code)} />
        ))}
      </div>

      {/* Province sub-nav — shown when a region is selected */}
      {selectedRegion && provinces.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-12 pt-2">
          {provinces.map((p) => (
            <NavButton
              key={p}
              label={p}
              active={selectedProvince === p}
              onClick={() => setSelectedProvince(selectedProvince === p ? null : p)}
            />
          ))}
        </div>
      )}

      {(!selectedRegion || provinces.length === 0) && <div className="mb-8" />}

      {/* Content */}
      {isFullDirectory || !selectedRegion ? (
        // Full directory or type-only filter: group by region
        <>
          {REGIONS.map(({ code }) => (
            <RegionBlock
              key={code}
              code={code}
              guildsByProvince={guildsByProvince}
              pottersByProvince={pottersByProvince}
              selectedType={selectedType}
            />
          ))}
        </>
      ) : (
        // Region selected: show guilds then potters with section headings
        <>
          {showGuilds && guildsByProvince.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "Georgia, serif", color: "#D4622A" }}>Guilds</h2>
              {guildsByProvince.map(({ province, country, items }) => (
                <div key={province}>
                  <ProvinceSection province={province} country={country} />
                  {items.map((guild) => <GuildCard key={guild.name} guild={guild} />)}
                </div>
              ))}
            </>
          )}
          {showPotters && pottersByProvince.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mt-16 mb-2" style={{ fontFamily: "Georgia, serif", color: "#D4622A" }}>Potters</h2>
              {pottersByProvince.map(({ province, country, items }) => (
                <div key={province}>
                  <ProvinceSection province={province} country={country} />
                  {items.map((potter) => <PotterCard key={potter.name} potter={potter} />)}
                </div>
              ))}
            </>
          )}
          {(!showGuilds || guildsByProvince.length === 0) && (!showPotters || pottersByProvince.length === 0) && (
            <p className="py-8" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>No listings yet for this selection.</p>
          )}
        </>
      )}
    </section>
  );
}
