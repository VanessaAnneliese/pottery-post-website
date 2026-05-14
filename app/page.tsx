import Link from "next/link";
import QuoteBlock from "@/components/QuoteBlock";
import { parisienne } from "@/lib/fonts";

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
      <QuoteBlock quote="For ten thousand years, humans have been putting their hands in clay. Something in us has never stopped needing to." className="py-24 md:py-32" />

      {/* Directory CTA */}
      <section className="relative py-16 md:py-24 px-6 text-center" style={{ background: "#C9B99A" }}>
        <div className="absolute inset-x-0 top-0 h-48 pointer-events-none" style={{ background: "linear-gradient(to bottom, #F5F0E8, transparent)", zIndex: 0 }} />
        <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none" style={{ background: "linear-gradient(to top, #F5F0E8, transparent)", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#5C3D2E", letterSpacing: "0.4em", fontFamily: "system-ui, sans-serif" }}>
            Canada &middot; United States &middot; Europe &middot; Australia
          </p>
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#5C3D2E", fontFamily: "Georgia, serif" }}>
            Pottery Directory
          </h2>
          <p className="text-lg max-w-lg mx-auto mb-10" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            A Pottery Directory spanning three continents, connecting potters, pottery guilds, places to take pottery classes, pottery supply shops, and the people who love pottery. Are you a pottery guild, potter, offering a pottery class, or a pottery supplier? Add your name.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/directory" className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm transition-opacity hover:opacity-90" style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}>
              Browse the directory
            </Link>
            <Link href="/directory/submit" className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm transition-opacity hover:opacity-90" style={{ background: "#F5F0E8", color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
              Add your listing
            </Link>
          </div>
        </div>
      </section>

      <QuoteBlock quote="Things made with love deserve to be seen, shared, and celebrated." />

      {/* Featured Gallery Preview */}
      <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
              Featured Collection
            </p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "Georgia, serif", color: "#D4622A" }}>The Gallery</h2>
          </div>
          <Link href="/gallery" className="text-sm tracking-widest uppercase underline" style={{ color: "#009999", fontFamily: "system-ui, sans-serif" }}>
            View all
          </Link>
        </div>
        <p className="text-sm tracking-widest uppercase mb-6 font-bold" style={{ color: "#5C3D2E", fontFamily: "Georgia, serif" }}>
          Gathered with Love
        </p>
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
          The Gallery rotates early Spring and Fall. These pieces are not for sale by Pottery Post. They are here to be celebrated!
        </p>
      </section>

      <QuoteBlock quote="Pottery asks nothing of the world except the chance to make something true." />
    </>
  );
}
