"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchForm from "./SearchForm";
import LogoMark from "./LogoMark";

export default function Nav() {
  const pathname = usePathname();

  function navLinkClass(href: string): string {
    const active = pathname === href || pathname.startsWith(href + "/");
    return active
      ? "text-white whitespace-nowrap transition-colors"
      : "text-[#5C3D2E] hover:text-white whitespace-nowrap transition-colors";
  }

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
        <nav className="flex flex-wrap justify-center gap-6 text-sm tracking-wider uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
          <Link href="/directory" className={navLinkClass("/directory")}>Pottery Directory</Link>
          <Link href="/gallery" className={navLinkClass("/gallery")}>Pottery Gallery</Link>
          <Link href="/postmarks" className={navLinkClass("/postmarks")}>Pottery Postmarks</Link>
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
        <SearchForm defaultOpen={true} label="Search directory" />
        <nav className="flex gap-8 text-sm tracking-widest uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
          <Link href="/directory" className={navLinkClass("/directory")}>Pottery Directory</Link>
          <Link href="/gallery" className={navLinkClass("/gallery")}>Pottery Gallery</Link>
          <Link href="/postmarks" className={navLinkClass("/postmarks")}>Pottery Postmarks</Link>
        </nav>
      </div>

    </header>
  );
}
