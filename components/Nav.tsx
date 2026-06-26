"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchForm from "./SearchForm";
import LogoMark from "./LogoMark";
import { siteConfig } from "@/lib/site-config";

export default function Nav() {
  const pathname = usePathname();

  function navLinkClass(href: string): string {
    const active = pathname === href || pathname.startsWith(href + "/");
    return active
      ? "text-white whitespace-nowrap transition-colors"
      : "text-[var(--c-primary)] hover:text-white whitespace-nowrap transition-colors";
  }

  return (
    <header style={{ background: "var(--c-tan)" }} className="px-6">

      {/* ── Mobile layout ── */}
      <div className="flex flex-col items-center py-5 gap-4 md:hidden">
        <Link href="/" style={{ textDecoration: "none" }}>
          <LogoMark
            logoColor="var(--c-primary)"
            tagColor="var(--c-primary)"
            logoClassName="text-2xl"
            logoLetterSpacing="0.2em"
            className="items-center"
          />
        </Link>
        <SearchForm defaultOpen={true} />
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm tracking-wider uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>{item.label}</Link>
          ))}
        </nav>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden md:flex flex-col items-center py-6 gap-4">
        <Link href="/" style={{ textDecoration: "none" }}>
          <LogoMark
            logoColor="var(--c-primary)"
            tagColor="var(--c-primary)"
            logoClassName="text-3xl"
            logoLetterSpacing="0.2em"
            className="items-center"
          />
        </Link>
        <SearchForm defaultOpen={true} label="Search directory" />
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm tracking-widest uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>{item.label}</Link>
          ))}
        </nav>
      </div>

    </header>
  );
}
