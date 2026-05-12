import Link from "next/link";
import QuoteBlock from "@/components/QuoteBlock";
import { greatVibes } from "@/lib/fonts";

function PlaceholderPiece({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-sm text-sm tracking-widest uppercase"
      style={{ background: "#E8D5B7", color: "#9E8572", aspectRatio: "1 / 1", minHeight: "160px", fontFamily: "system-ui, sans-serif" }}
    >
      {label}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-6 text-center" style={{ background: "#D4622A" }}>
        <p className={`${greatVibes.className} text-4xl md:text-[2.75rem] mb-2`} style={{ color: "#F5F0E8", opacity: 0.9 }}>
          Pottery<br className="md:hidden" /> Across Continents
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6" style={{ color: "#F5F0E8", fontFamily: "Georgia, serif", lineHeight: 1.1 }}>
          <span className="md:hidden">Because things<br />made with love<br />deserve to be easily<br />found, and celebrated.</span>
          <span className="hidden md:inline">Because things made<br />with love deserve<br />to be easily found, and celebrated.</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#F5F0E8", opacity: 0.85, fontFamily: "system-ui, sans-serif" }}>
          A directory of potters, pottery guilds, pottery classes, and pottery supply shops spanning three continents, and a gallery that celebrates the pieces potters make.
        </p>
      </section>

      <QuoteBlock quote="What's made by hand is made twice — once in the mind, once in the world." />

      {/* Featured Gallery Preview */}
      <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
              Featured Collection
            </p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "Georgia, serif" }}>The Gallery</h2>
          </div>
          <Link href="/gallery" className="text-sm tracking-widest uppercase underline" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PlaceholderPiece label="Piece I" />
          <PlaceholderPiece label="Piece II" />
          <PlaceholderPiece label="Piece III" />
          <PlaceholderPiece label="Piece IV" />
          <PlaceholderPiece label="Piece V" />
          <PlaceholderPiece label="Piece VI" />
          <PlaceholderPiece label="Piece VII" />
          <PlaceholderPiece label="Piece VIII" />
        </div>
        <p className="mt-6 text-sm text-center" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
          The gallery rotates early Spring and Fall. These pieces are not for sale by Pottery Post. They are here to be celebrated!
        </p>
      </section>

      {/* Directory CTA */}
      <section className="py-16 md:py-24 px-6 text-center" style={{ background: "#5C3D2E" }}>
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#9E8572", letterSpacing: "0.4em", fontFamily: "system-ui, sans-serif" }}>
          Canada &middot; United States &middot; Europe &middot; Australia
        </p>
        <h2 className="text-4xl font-bold mb-6" style={{ color: "#F5F0E8", fontFamily: "Georgia, serif" }}>
          Pottery Directory
        </h2>
        <p className="text-lg max-w-lg mx-auto mb-10" style={{ color: "#E8D5B7", fontFamily: "system-ui, sans-serif" }}>
          A potter&rsquo;s directory spanning three continents, connecting potters, pottery guilds, places to take pottery classes, pottery supply shops, and the people who love pottery. Are you a pottery guild, potter, offering a pottery class, or a pottery supplier? Add your name.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/directory" className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm transition-opacity hover:opacity-90" style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}>
            Browse the directory
          </Link>
          <Link href="/directory/submit" className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm transition-opacity hover:opacity-90" style={{ background: "#F5F0E8", color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            Add your listing
          </Link>
        </div>
      </section>

      <QuoteBlock quote="Clay remembers every touch." />
    </>
  );
}
