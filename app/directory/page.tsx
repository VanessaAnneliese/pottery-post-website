"use client";

import { useState } from "react";
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
          {potter.offersClasses && <p className="text-xs mt-1 tracking-widest uppercase" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>Offers Classes</p>}
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

function TeachingStudioCard({ studio }: { studio: TeachingStudio }) {
  return (
    <div className="py-4 border-b" style={{ borderColor: "#E8D5B7" }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-bold" style={{ fontFamily: "Georgia, serif" }}>{studio.name}</p>
          <p className="text-sm mt-1" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>{studio.city}, {studio.province}</p>
          {studio.bio && <p className="text-sm mt-2" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>{studio.bio}</p>}
        </div>
        {studio.website && (
          <a href={studio.website} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase underline shrink-0" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
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
          {supplier.bio && <p className="text-sm mt-2" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>{supplier.bio}</p>}
        </div>
        {supplier.website && (
          <a href={supplier.website} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase underline shrink-0" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
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
          {items.map((guild) => <GuildCard key={guild.name} guild={guild} />)}
        </div>
      ))}
      {regionPotters.map(({ province, country, items }) => (
        <div key={province}>
          <ProvinceSection province={province} country={country} />
          {items.map((potter) => <PotterCard key={potter.name} potter={potter} />)}
        </div>
      ))}
      {regionClassPotters.map(({ province, country, items }) => (
        <div key={`class-potter-${province}`}>
          <ProvinceSection province={province} country={country} />
          {items.map((potter) => <PotterCard key={potter.name} potter={potter} />)}
        </div>
      ))}
      {regionTeachingStudios.map(({ province, country, items }) => (
        <div key={`studio-${province}`}>
          {(regionGuilds.length > 0 || regionPotters.length > 0 || regionClassPotters.length > 0) && (
            <ProvinceSection province={province} country={country} />
          )}
          {!(regionGuilds.length > 0 || regionPotters.length > 0 || regionClassPotters.length > 0) && (
            <ProvinceSection province={province} country={country} />
          )}
          {items.map((studio) => <TeachingStudioCard key={studio.name} studio={studio} />)}
        </div>
      ))}
      {regionSuppliers.map(({ province, country, items }) => (
        <div key={province}>
          <ProvinceSection province={province} country={country} />
          {items.map((supplier) => <SupplierCard key={supplier.name} supplier={supplier} />)}
        </div>
      ))}
    </div>
  );
}

export default function DirectoryPage() {
  const [selectedType, setSelectedType] = useState<DirectoryType | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Country | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  const isFullDirectory = selectedType === null && selectedRegion === null;

  const filteredGuilds = guilds
    .filter((g) => !selectedRegion || g.country === selectedRegion)
    .filter((g) => !selectedProvince || g.province === selectedProvince);

  const filteredPotters = potters
    .filter((p) => !selectedRegion || p.country === selectedRegion)
    .filter((p) => !selectedProvince || p.province === selectedProvince);

  const filteredClassPotters = filteredPotters.filter((p) => p.offersClasses);

  const filteredSuppliers = suppliers
    .filter((s) => !selectedRegion || s.country === selectedRegion)
    .filter((s) => !selectedProvince || s.province === selectedProvince);

  const filteredTeachingStudios = teachingStudios
    .filter((s) => !selectedRegion || s.country === selectedRegion)
    .filter((s) => !selectedProvince || s.province === selectedProvince);

  const guildsByProvince = groupByProvince(filteredGuilds);
  const pottersByProvince = groupByProvince(filteredPotters);
  const classPottersByProvince = groupByProvince(filteredClassPotters);
  const suppliersByProvince = groupByProvince(filteredSuppliers);
  const teachingStudiosByProvince = groupByProvince(filteredTeachingStudios);

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

  const showGuilds = selectedType !== "potters" && selectedType !== "suppliers" && selectedType !== "classes";
  const showPotters = selectedType !== "guilds" && selectedType !== "suppliers" && selectedType !== "classes";
  const showSuppliers = selectedType !== "guilds" && selectedType !== "potters" && selectedType !== "classes";
  const showClasses = selectedType === "classes";

  return (
    <>
    <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Worldwide
      </p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
        <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Georgia, serif" }}>The Pottery Directory</h1>
        <div className="flex flex-wrap gap-2 self-start sm:self-auto">
          <Link
            href="/directory/submit"
            className="px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm"
            style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
          >
            Add your listing
          </Link>
          <Link
            href="/directory/update"
            className="px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm"
            style={{ background: "#E8D5B7", color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}
          >
            Update your listing
          </Link>
        </div>
      </div>
      <p className="mb-10 max-w-lg" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        A potter&rsquo;s directory spanning three continents. Know a pottery guild, potter, pottery class, or pottery supply shop who should be here? Send them our way.
      </p>

      {/* Row 1: Full Directory */}
      <div className="mb-3">
        <NavButton label="Full Directory" active={isFullDirectory} onClick={handleFullDirectory} />
      </div>

      {/* Row 2: Type filter */}
      <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b" style={{ borderColor: "#E8D5B7" }}>
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
          {showClasses && (
            <>
              {classPottersByProvince.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "Georgia, serif", color: "#D4622A" }}>Potters Offering Classes</h2>
                  {classPottersByProvince.map(({ province, country, items }) => (
                    <div key={province}>
                      <ProvinceSection province={province} country={country} />
                      {items.map((potter) => <PotterCard key={potter.name} potter={potter} />)}
                    </div>
                  ))}
                </>
              )}
              {teachingStudiosByProvince.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mt-16 mb-2" style={{ fontFamily: "Georgia, serif", color: "#D4622A" }}>Teaching Studios</h2>
                  {teachingStudiosByProvince.map(({ province, country, items }) => (
                    <div key={province}>
                      <ProvinceSection province={province} country={country} />
                      {items.map((studio) => <TeachingStudioCard key={studio.name} studio={studio} />)}
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
                  <ProvinceSection province={province} country={country} />
                  {items.map((supplier) => <SupplierCard key={supplier.name} supplier={supplier} />)}
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
    {selectedType === "guilds" && <QuoteBlock quote="Some things are shaped slowly, on purpose." />}
    {selectedType === "potters" && <QuoteBlock quote="To center the clay is to center yourself." />}
    {selectedType === "classes" && <QuoteBlock quote="Every piece carries a little of the maker's heart." />}
    {selectedType === "suppliers" && <QuoteBlock quote="What's made by hand is never truly ordinary." />}
    </>
  );
}
