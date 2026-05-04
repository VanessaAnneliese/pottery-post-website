import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#3B2314", color: "#9E8572" }} className="py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <div>
          <p className="font-bold tracking-widest uppercase" style={{ color: "#E8D5B7", fontFamily: "Georgia, serif" }}>
            The Pottery Post
          </p>
          <p className="tracking-widest uppercase text-xs mt-1" style={{ letterSpacing: "0.3em" }}>
            Purely Made Goods
          </p>
          <p className="mt-2 text-xs">Whitby, Ontario, Canada</p>
        </div>
        <nav className="flex gap-6 text-xs tracking-widest uppercase">
          <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
          <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
          <Link href="/directory" className="hover:text-white transition-colors">Directory</Link>
        </nav>
        <p className="text-xs">&copy; {new Date().getFullYear()} The Pottery Post</p>
      </div>
    </footer>
  );
}
