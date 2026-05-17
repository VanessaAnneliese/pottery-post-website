"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm({ defaultOpen = false, label }: { defaultOpen?: boolean; label?: string }) {
  const [open, setOpen] = useState(defaultOpen);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    setOpen(false);
    setQuery("");
  }

  function handleOpen() {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  return (
    <div className="flex items-center w-full md:w-auto">
      {open ? (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full md:w-auto">
          {label && (
            <span className="text-sm tracking-widest uppercase whitespace-nowrap" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
              {label}
            </span>
          )}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search potters, guilds, classes..."
            className="text-sm px-3 py-1 rounded-sm outline-none flex-1 md:flex-none"
            style={{ background: "#F5F0E8", color: "#3B2314", fontFamily: "system-ui, sans-serif", minWidth: "200px" }}
          />
          <button
            type="submit"
            className="text-xs tracking-widest uppercase px-3 py-1 rounded-sm"
            style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
          >
            Go
          </button>
          <button
            type="button"
            onClick={() => { setOpen(false); setQuery(""); }}
            className="text-xs"
            style={{ color: "#E8D5B7" }}
          >
            ✕
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
