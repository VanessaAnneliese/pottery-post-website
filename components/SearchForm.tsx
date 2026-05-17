"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const PROVINCES: Record<string, { label: string; value: string }[]> = {
  CA: [
    { label: "Alberta", value: "Alberta" },
    { label: "British Columbia", value: "British Columbia" },
    { label: "Manitoba", value: "Manitoba" },
    { label: "New Brunswick", value: "New Brunswick" },
    { label: "Newfoundland", value: "Newfoundland and Labrador" },
    { label: "Nova Scotia", value: "Nova Scotia" },
    { label: "Ontario", value: "Ontario" },
    { label: "Prince Edward Island", value: "Prince Edward Island" },
    { label: "Quebec", value: "Quebec" },
    { label: "Saskatchewan", value: "Saskatchewan" },
  ],
  US: [
    { label: "Alabama", value: "Alabama" },
    { label: "Alaska", value: "Alaska" },
    { label: "Arizona", value: "Arizona" },
    { label: "Arkansas", value: "Arkansas" },
    { label: "California", value: "California" },
    { label: "Colorado", value: "Colorado" },
    { label: "Connecticut", value: "Connecticut" },
    { label: "Florida", value: "Florida" },
    { label: "Georgia", value: "Georgia" },
    { label: "Idaho", value: "Idaho" },
    { label: "Illinois", value: "Illinois" },
    { label: "Indiana", value: "Indiana" },
    { label: "Iowa", value: "Iowa" },
    { label: "Kansas", value: "Kansas" },
    { label: "Kentucky", value: "Kentucky" },
    { label: "Louisiana", value: "Louisiana" },
    { label: "Maine", value: "Maine" },
    { label: "Maryland", value: "Maryland" },
    { label: "Massachusetts", value: "Massachusetts" },
    { label: "Michigan", value: "Michigan" },
    { label: "Minnesota", value: "Minnesota" },
    { label: "Mississippi", value: "Mississippi" },
    { label: "Missouri", value: "Missouri" },
    { label: "Montana", value: "Montana" },
    { label: "Nebraska", value: "Nebraska" },
    { label: "Nevada", value: "Nevada" },
    { label: "New Hampshire", value: "New Hampshire" },
    { label: "New Jersey", value: "New Jersey" },
    { label: "New Mexico", value: "New Mexico" },
    { label: "New York", value: "New York" },
    { label: "North Carolina", value: "North Carolina" },
    { label: "North Dakota", value: "North Dakota" },
    { label: "Ohio", value: "Ohio" },
    { label: "Oklahoma", value: "Oklahoma" },
    { label: "Oregon", value: "Oregon" },
    { label: "Pennsylvania", value: "Pennsylvania" },
    { label: "Rhode Island", value: "Rhode Island" },
    { label: "South Carolina", value: "South Carolina" },
    { label: "South Dakota", value: "South Dakota" },
    { label: "Tennessee", value: "Tennessee" },
    { label: "Texas", value: "Texas" },
    { label: "Utah", value: "Utah" },
    { label: "Vermont", value: "Vermont" },
    { label: "Virginia", value: "Virginia" },
    { label: "Washington", value: "Washington" },
    { label: "West Virginia", value: "West Virginia" },
    { label: "Wisconsin", value: "Wisconsin" },
    { label: "Wyoming", value: "Wyoming" },
  ],
  AU: [
    { label: "ACT", value: "Australian Capital Territory" },
    { label: "New South Wales", value: "New South Wales" },
    { label: "New Zealand", value: "New Zealand" },
    { label: "Queensland", value: "Queensland" },
    { label: "South Australia", value: "South Australia" },
    { label: "Tasmania", value: "Tasmania" },
    { label: "Victoria", value: "Victoria" },
    { label: "Western Australia", value: "Western Australia" },
  ],
  EU: [
    { label: "Belgium", value: "Belgium" },
    { label: "Czech Republic", value: "Czech Republic" },
    { label: "Estonia", value: "Estonia" },
    { label: "France", value: "France" },
    { label: "Germany", value: "Germany" },
    { label: "Hungary", value: "Hungary" },
    { label: "Iceland", value: "Iceland" },
    { label: "Italy", value: "Italy" },
    { label: "Latvia", value: "Latvia" },
    { label: "Lithuania", value: "Lithuania" },
    { label: "Netherlands", value: "Netherlands" },
    { label: "Poland", value: "Poland" },
    { label: "Romania", value: "Romania" },
    { label: "Spain", value: "Spain" },
    { label: "United Kingdom", value: "United Kingdom" },
  ],
};

export default function SearchForm({ defaultOpen = false, label }: { defaultOpen?: boolean; label?: string }) {
  const [open, setOpen] = useState(defaultOpen);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [province, setProvince] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleRegionChange(val: string) {
    setRegion(val);
    setProvince("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    const params = new URLSearchParams();
    if (region) params.set("region", region);
    if (province) params.set("province", province);
    if (q) params.set("q", q);
    router.push(`/directory?${params.toString()}`);
    setQuery("");
  }

  function handleOpen() {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  const baseField: React.CSSProperties = {
    background: "#F5F0E8",
    color: "#3B2314",
    fontFamily: "system-ui, sans-serif",
    border: "none",
    outline: "none",
    height: "2.25rem",
    fontSize: "0.875rem",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: "0.75rem",
    borderRadius: label ? "6px" : "2px",
    boxSizing: "border-box",
  };

  // Selects: strip native appearance, add custom chevron via background SVG
  const selectStyle: React.CSSProperties = {
    ...baseField,
    appearance: "none" as const,
    paddingRight: "1.75rem",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235C3D2E' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.6rem center",
  };

  // Input: wider on desktop, full-flex on mobile
  const inputStyle: React.CSSProperties = {
    ...baseField,
    paddingRight: "0.75rem",
    ...(label ? { minWidth: "260px" } : {}),
  };

  const provinceOptions = region ? PROVINCES[region] ?? [] : [];

  return (
    <div className="flex justify-center items-center w-full md:w-auto">
      {open ? (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full md:w-auto">
          {label && (
            <span className="text-sm font-bold whitespace-nowrap" style={{ color: "#FFFFFF", fontFamily: "system-ui, sans-serif" }}>
              {label}
            </span>
          )}
          {label && (
            <select
              value={region}
              onChange={(e) => handleRegionChange(e.target.value)}
              style={selectStyle}
            >
              <option value="">Everywhere</option>
              <option value="CA">Canada</option>
              <option value="US">U.S.A</option>
              <option value="AU">Australia</option>
              <option value="EU">Europe</option>
            </select>
          )}
          {label && (
            <select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              style={selectStyle}
              disabled={!region}
            >
              <option value="">{region ? "All regions" : "All provinces & states"}</option>
              {provinceOptions.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          )}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Potters, Guilds, Classes, Supply Shops"
            className="flex-1 md:flex-none"
            style={inputStyle}
          />
          <button
            type="submit"
            className="text-xs tracking-widest uppercase px-4 rounded-sm whitespace-nowrap"
            style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif", height: "2.25rem" }}
          >
            Go
          </button>
        </form>
      ) : (
        <button
          onClick={handleOpen}
          className="text-sm tracking-widest uppercase"
          style={{ color: "#FFFFFF", fontFamily: "system-ui, sans-serif" }}
          aria-label="Search"
        >
          Search
        </button>
      )}
    </div>
  );
}
