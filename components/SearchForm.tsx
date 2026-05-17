"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm({ defaultOpen = false, label }: { defaultOpen?: boolean; label?: string }) {
  const [open, setOpen] = useState(defaultOpen);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    const params = new URLSearchParams({ q });
    if (region) params.set("region", region);
    router.push(`/search?${params.toString()}`);
    setQuery("");
  }

  function handleOpen() {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  const inputStyle = { background: "#F5F0E8", color: "#3B2314", fontFamily: "system-ui, sans-serif" };

  return (
    <div className="flex items-center w-full md:w-auto">
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
              onChange={(e) => setRegion(e.target.value)}
              className="text-sm px-3 py-1 rounded-sm outline-none"
              style={inputStyle}
            >
              <option value="">Everywhere</option>
              <option value="CA">Canada</option>
              <option value="US">U.S.A</option>
              <option value="AU">Australia</option>
            </select>
          )}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search potters, guilds, classes..."
            className="text-sm px-3 py-1 rounded-sm outline-none flex-1 md:flex-none"
            style={{ ...inputStyle, minWidth: "200px" }}
          />
          <button
            type="submit"
            className="text-xs tracking-widest uppercase px-3 py-1 rounded-sm"
            style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
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
