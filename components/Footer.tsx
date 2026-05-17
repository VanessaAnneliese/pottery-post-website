"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "./LogoMark";
import SearchForm from "./SearchForm";

export default function Footer() {
  const pathname = usePathname();

  function navLinkStyle(href: string): React.CSSProperties {
    const active = pathname === href || pathname.startsWith(href + "/");
    return { color: active ? "#FFFFFF" : "#5C3D2E" };
  }

  return (
    <footer style={{ background: "#C9B99A", color: "#5C3D2E" }} className="py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        {/* Desktop search — full bar with selectors, same as nav */}
        <div className="hidden md:flex justify-center">
          <SearchForm defaultOpen={true} label="Search for" />
        </div>

        {/* Mobile search — simple */}
        <div className="flex md:hidden justify-center">
          <SearchForm defaultOpen={true} />
        </div>

        {/* Logo + links + copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <Link href="/">
            <LogoMark
              logoColor="#5C3D2E"
              tagColor="#5C3D2E"
              logoClassName="text-2xl md:text-3xl"
              logoLetterSpacing="0.2em"
              className="items-center md:items-start"
            />
          </Link>
          <div className="flex flex-col items-center gap-3">
            <nav className="flex gap-6 text-sm tracking-wider uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
              <Link href="/directory" className="hover:text-white transition-colors whitespace-nowrap" style={navLinkStyle("/directory")}>Pottery Directory</Link>
              <Link href="/gallery" className="hover:text-white transition-colors whitespace-nowrap" style={navLinkStyle("/gallery")}>Pottery Gallery</Link>
            </nav>
            <nav className="flex gap-5 text-xs" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
              <Link href="/faq" className="hover:text-white transition-colors font-bold">FAQ</Link>
            </nav>
            <nav className="flex gap-5 text-xs" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            </nav>
          </div>
          <p className="text-xs text-center md:text-right">
            &copy; {new Date().getFullYear()} Pottery Post
            <span className="hidden md:inline">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <br className="md:hidden" />
            Website Design by Anneliese Designs
          </p>
        </div>

      </div>
    </footer>
  );
}
