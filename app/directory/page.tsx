"use client";

import { useState } from "react";
import Link from "next/link";
import { guilds, potters, groupByProvince, type Guild, type Potter } from "@/lib/directory-data";

function ProvinceSection({ province, country }: { province: string; country: string }) {
  return (
    <h3 className="text-xs tracking-widest uppercase mt-10 mb-4 pb-2 border-b" style={{ color: "#9E8572", borderColor: "#E8D5B7", fontFamily: "system-ui, sans-serif", letterSpacing: "0.3em" }}>
      {province} &mdash; {country === "CA" ? "Canada" : "United States"}
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

export default function DirectoryPage() {
  const [country, setCountry] = useState<"CA" | "US">("CA");

  const filteredGuilds = guilds.filter((g) => g.country === country);
  const filteredPotters = potters.filter((p) => p.country === country);
  const guildsByProvince = groupByProvince(filteredGuilds);
  const pottersByProvince = groupByProvince(filteredPotters);

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        North America
      </p>
      <div className="flex items-end justify-between mb-4">
        <h1 className="text-4xl font-bold" style={{ fontFamily: "Georgia, serif" }}>The Potter&rsquo;s Directory</h1>
        <Link
          href="/directory/submit"
          className="px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm"
          style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
        >
          Add your listing
        </Link>
      </div>
      <p className="mb-10 max-w-lg" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        A directory of potters and potter&rsquo;s guilds across North America. Know a potter who should be here? Send them our way.
      </p>

      {/* Country Toggle */}
      <div className="flex gap-2 mb-16">
        {(["CA", "US"] as const).map((c) => (
          <button
            key={c}
            onClick={() => setCountry(c)}
            className="px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm transition-colors"
            style={{
              background: country === c ? "#5C3D2E" : "#E8D5B7",
              color: country === c ? "#F5F0E8" : "#5C3D2E",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {c === "CA" ? "Canada" : "United States"}
          </button>
        ))}
      </div>

      {/* Guilds */}
      <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>Guilds</h2>
      {guildsByProvince.length === 0 ? (
        <p className="py-8" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>No guild listings yet for this region.</p>
      ) : guildsByProvince.map(({ province, country: c, items }) => (
        <div key={province}>
          <ProvinceSection province={province} country={c} />
          {items.map((guild) => <GuildCard key={guild.name} guild={guild} />)}
        </div>
      ))}

      {/* Potters */}
      <h2 className="text-2xl font-bold mt-20 mb-2" style={{ fontFamily: "Georgia, serif" }}>Potters</h2>
      {pottersByProvince.length === 0 ? (
        <p className="py-8" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>No potter listings yet for this region.</p>
      ) : pottersByProvince.map(({ province, country: c, items }) => (
        <div key={province}>
          <ProvinceSection province={province} country={c} />
          {items.map((potter) => <PotterCard key={potter.name} potter={potter} />)}
        </div>
      ))}
    </section>
  );
}
