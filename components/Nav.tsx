"use client";

import Link from "next/link";
import SearchForm from "./SearchForm";
import LogoMark from "./LogoMark";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ background: "#C9B99A" }} className="px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 gap-6">
        {/* Logo */}
        <Link href="/" className="shrink-0" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
          <LogoMark
            logoColor="#5C3D2E"
            tagColor="#5C3D2E"
            logoClassName="text-2xl md:text-3xl"
            logoLetterSpacing="0.2em"
            className="items-start"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8 text-sm tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            <Link href="/directory" className="hover:text-white transition-colors">Pottery Directory</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Pottery Gallery</Link>
          </nav>
          <SearchForm />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="block w-6 h-0.5 transition-all" style={{ background: "#5C3D2E" }} />
          <span className="block w-6 h-0.5 transition-all" style={{ background: "#5C3D2E" }} />
          <span className="block w-6 h-0.5 transition-all" style={{ background: "#5C3D2E" }} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t pb-6 pt-4" style={{ borderColor: "#FFFFFF" }}>
          <nav className="flex flex-col gap-5 text-sm tracking-widest uppercase mb-6" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            <Link href="/directory" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Pottery Directory</Link>
            <Link href="/gallery" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Pottery Gallery</Link>
          </nav>
          <SearchForm />
        </div>
      )}
    </header>
  );
}
