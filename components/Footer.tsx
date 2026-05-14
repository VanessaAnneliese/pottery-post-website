import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer style={{ background: "#C9B99A", color: "#5C3D2E" }} className="py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
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
          <nav className="flex gap-6 text-sm tracking-widest uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
            <Link href="/directory" className="hover:text-white transition-colors">Pottery Directory</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Pottery Gallery</Link>
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
    </footer>
  );
}
