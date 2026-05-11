"use client";

import Link from "next/link";
import SearchForm from "./SearchForm";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ background: "#5C3D2E" }} className="px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 gap-6">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight shrink-0 md:w-fit" style={{ color: "#F5F0E8", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
          <span className="text-2xl md:text-3xl font-bold uppercase whitespace-nowrap" style={{ fontFamily: "Georgia, serif", letterSpacing: "0.2em" }}>
            The Pottery Post
          </span>
          <span className="uppercase text-center sm:text-left tracking-[0.4em] md:w-full md:[text-align-last:justify]" style={{ color: "#E8D5B7", fontFamily: "system-ui, sans-serif", fontSize: "0.8rem" }}>
            For Makers &amp; Admirers
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8 text-sm tracking-widest uppercase" style={{ color: "#E8D5B7", fontFamily: "system-ui, sans-serif" }}>
            <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
            <Link href="/directory" className="hover:text-white transition-colors">Directory</Link>
          </nav>
          <SearchForm />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="block w-6 h-0.5 transition-all" style={{ background: "#E8D5B7" }} />
          <span className="block w-6 h-0.5 transition-all" style={{ background: "#E8D5B7" }} />
          <span className="block w-6 h-0.5 transition-all" style={{ background: "#E8D5B7" }} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t pb-6 pt-4" style={{ borderColor: "#4A3025" }}>
          <nav className="flex flex-col gap-5 text-sm tracking-widest uppercase mb-6" style={{ color: "#E8D5B7", fontFamily: "system-ui, sans-serif" }}>
            <Link href="/gallery" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/directory" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Directory</Link>
          </nav>
          <SearchForm />
        </div>
      )}
    </header>
  );
}
