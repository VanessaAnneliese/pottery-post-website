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
}: {
  code: Country;
  guildsByProvince: ReturnType<typeof groupByProvince<Guild>>;
  pottersByProvince: ReturnType<typeof groupByProvince<Potter>>;
}) {
  const regionGuilds = guildsByProvince.filter((g) => g.country === code);
  const regionPotters = pottersByProvince.filter((p) => p.country === code);
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
  const [selectedRegion, setSelectedRegion] = useState<Country | "all">("all");
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  const filteredGuilds = guilds
    .filter((g) => selectedRegion === "all" || g.country === selectedRegion)
    .filter((g) => !selectedProvince || g.province === selectedProvince);

  const filteredPotters = potters
    .filter((p) => selectedRegion === "all" || p.country === selectedRegion)
    .filter((p) => !selectedProvince || p.province === selectedProvince);

  const guildsByProvince = groupByProvince(filteredGuilds);
  const pottersByProvince = groupByProvince(filteredPotters);

  const allItems = [...guilds, ...potters];
  const provinces = Array.from(
    new Set(
      allItems
        .filter((i) => selectedRegion === "all" || i.country === selectedRegion)
        .map((i) => i.province)
    )
  ).sort();

  function handleRegionClick(c: Country) {
    if (selectedRegion === c) {
      setSelectedRegion("all");
      setSelectedProvince(null);
    } else {
      setSelectedRegion(c);
      setSelectedProvince(null);
    }
  }

  function handleProvinceClick(p: string) {
    setSelectedProvince(selectedProvince === p ? null : p);
  }

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
        A potter&rsquo;s directory spanning four continents. Know a potter who should be here? Send them our way.
      </p>

      {/* Region Navigation */}
      <div className="flex flex-wrap gap-2 mb-4">
        <NavButton label="Full Directory" active={selectedRegion === "all"} onClick={() => { setSelectedRegion("all"); setSelectedProvince(null); }} />
        {REGIONS.map(({ code, label }) => (
          <NavButton key={code} label={label} active={selectedRegion === code} onClick={() => handleRegionClick(code)} />
        ))}
      </div>

      {/* Province / State / Country Sub-Navigation */}
      {selectedRegion !== "all" && (
        <div className="flex flex-wrap gap-2 mb-12 pt-4 border-t" style={{ borderColor: "#E8D5B7" }}>
          {provinces.map((p) => (
            <NavButton
              key={p}
              label={p}
              active={selectedProvince === p}
              onClick={() => handleProvinceClick(p)}
            />
          ))}
        </div>
      )}

      {selectedRegion === "all" && <div className="mb-12" />}

      {/* Full Directory view — grouped by region then province */}
      {selectedRegion === "all" ? (
        <>
          {REGIONS.map(({ code }) => (
            <RegionBlock
              key={code}
              code={code}
              guildsByProvince={guildsByProvince}
              pottersByProvince={pottersByProvince}
            />
          ))}
        </>
      ) : (
        <>
          {/* Guilds */}
          {guildsByProvince.length > 0 && (
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

          {/* Potters */}
          {pottersByProvince.length > 0 && (
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

          {guildsByProvince.length === 0 && pottersByProvince.length === 0 && (
            <p className="py-8" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>No listings yet for this region.</p>
          )}
        </>
      )}
    </section>
  );
}
