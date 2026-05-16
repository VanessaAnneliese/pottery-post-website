"use client";

import Link from "next/link";
import SearchForm from "./SearchForm";
import LogoMark from "./LogoMark";

export default function Nav() {
  return (
    <header style={{ background: "#C9B99A" }} className="px-6">

      {/* ── Mobile layout ── */}
      <div className="flex flex-col items-center py-5 gap-4 md:hidden">
        <Link href="/" style={{ textDecoration: "none" }}>
          <LogoMark
            logoColor="#5C3D2E"
            tagColor="#5C3D2E"
            logoClassName="text-2xl"
            logoLetterSpacing="0.2em"
            className="items-center"
          />
        </Link>
        <SearchForm defaultOpen={true} />
        <nav className="flex gap-6 text-sm tracking-wider uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
          <Link href="/directory" className="hover:text-white transition-colors whitespace-nowrap">Pottery Directory</Link>
          <Link href="/gallery" className="hover:text-white transition-colors whitespace-nowrap">Pottery Gallery</Link>
        </nav>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden md:flex flex-col items-center py-6 gap-4">
        <Link href="/" style={{ textDecoration: "none" }}>
          <LogoMark
            logoColor="#5C3D2E"
            tagColor="#5C3D2E"
            logoClassName="text-3xl"
            logoLetterSpacing="0.2em"
            className="items-center"
          />
        </Link>
        <SearchForm defaultOpen={true} />
        <nav className="flex gap-8 text-sm tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
          <Link href="/directory" className="hover:text-white transition-colors whitespace-nowrap">Pottery Directory</Link>
          <Link href="/gallery" className="hover:text-white transition-colors whitespace-nowrap">Pottery Gallery</Link>
        </nav>
      </div>

    </header>
  );
}
