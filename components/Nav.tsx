import Link from "next/link";

export default function Nav() {
  return (
    <header style={{ background: "#5C3D2E" }} className="py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight" style={{ color: "#F5F0E8", textDecoration: "none" }}>
          <span className="text-2xl font-bold tracking-widest uppercase" style={{ fontFamily: "Georgia, serif", letterSpacing: "0.2em" }}>
            The Pottery Post
          </span>
          <span className="text-xs tracking-widest uppercase" style={{ color: "#E8D5B7", letterSpacing: "0.35em" }}>
            Purely Made Goods
          </span>
        </Link>
        <nav className="flex gap-8 text-sm tracking-widest uppercase" style={{ color: "#E8D5B7", fontFamily: "system-ui, sans-serif" }}>
          <Link href="/directory" className="hover:text-white transition-colors">Directory</Link>
          <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
          <Link href="/shop" className="hover:text-white transition-colors">Pottery Shop</Link>
        </nav>
      </div>
    </header>
  );
}
