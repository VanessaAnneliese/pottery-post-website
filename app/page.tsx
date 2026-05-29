import type { Metadata } from "next";
import Link from "next/link";
import QuoteBlock from "@/components/QuoteBlock";

export const metadata: Metadata = {
  title: "Pottery Post | Directory, Gallery & Travel Journal for Pottery Lovers",
  description:
    "Discover potters, pottery guilds, classes, and supply shops across Canada, the US, Europe, and Australia. Plus a curated pottery gallery and the Pottery Postmarks travel journal.",
  alternates: { canonical: "https://www.potterypost.ca" },
  openGraph: {
    title: "Pottery Post | Directory, Gallery & Travel Journal for Pottery Lovers",
    description:
      "Discover potters, pottery guilds, classes, and supply shops across Canada, the US, Europe, and Australia.",
    url: "https://www.potterypost.ca",
  },
};

function PlaceholderPiece({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-sm text-sm tracking-widest uppercase"
      style={{ background: "#FFFFFF", color: "#9E8572", aspectRatio: "1 / 1", minHeight: "160px", fontFamily: "system-ui, sans-serif" }}
    >
      {label}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Pottery Post: Pottery Directory, Gallery and Travel Journal for Makers and Admirers</h1>
      <QuoteBlock quote="For ten thousand years, humans have been putting their hands in clay. Something in us has never stopped needing to." className="pt-24 md:pt-32 pb-12 md:pb-16" />

      {/* Directory CTA */}
      <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 px-6 text-center" style={{ background: "#C9B99A" }}>
        <div className="absolute inset-x-0 top-0 h-64 md:h-96 pointer-events-none" style={{ background: "linear-gradient(to bottom, #F5F0E8, transparent)", zIndex: 0 }} />
        <div className="absolute inset-x-0 bottom-0 h-64 md:h-96 pointer-events-none" style={{ background: "linear-gradient(to top, #F5F0E8, transparent)", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#5C3D2E", letterSpacing: "0.4em", fontFamily: "system-ui, sans-serif" }}>
            Canada &middot; United States &middot; Europe &middot; Australia
          </p>
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#5C3D2E", fontFamily: "Georgia, serif" }}>
            Pottery Directory
          </h2>
          <p className="text-lg max-w-lg mx-auto mb-10" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            The Pottery Post&rsquo;s Pottery Directory spans three continents, connecting potters, pottery guilds, places to take pottery classes, pottery supply shops, and the people who love pottery. Are you a pottery guild, potter, offering a pottery class, or a pottery supplier? Add your name.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/directory" className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm bg-[#D4622A] hover:bg-[#B8501F] transition-colors" style={{ color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}>
              Browse the directory
            </Link>
            <Link href="/directory/submit" className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm bg-[#E8D5B7] hover:bg-[#C5B59C] transition-colors" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
              Add your listing
            </Link>
          </div>
        </div>
      </section>

      <QuoteBlock quote="Things made with love, by hand, deserve to be seen, shared, and celebrated." className="pt-16 md:pt-20 pb-12 md:pb-16" />

      {/* Featured Gallery Preview */}
      <section className="pt-16 md:pt-20 pb-12 md:pb-16 px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
            Featured
          </p>
          <h2 className="text-4xl font-bold" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>Pottery Gallery</h2>
          <p className="mt-2 text-sm" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>The first collection is being curated and will be live soon.</p>
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
        <div className="mt-6 text-center">
          <Link href="/gallery" className="text-sm tracking-widest uppercase underline" style={{ color: "#009999", fontFamily: "system-ui, sans-serif" }}>
            View all
          </Link>
        </div>
        <p className="mt-6 text-sm text-center" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
          The Pottery Gallery is a pottery collection that rotates early Spring and Fall.<span className="hidden md:inline"><br /></span>{" "}The pieces in the Pottery Gallery are not for sale by the Pottery Post. They are here to be celebrated!
        </p>
      </section>

      <QuoteBlock quote="Pottery asks nothing of the world except the chance to make something true." className="pt-16 md:pt-20 pb-24 md:pb-32" />
    </>
  );
}
