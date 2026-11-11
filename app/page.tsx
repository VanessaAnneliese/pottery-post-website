import type { Metadata } from "next";
import Link from "next/link";
import QuoteBlock from "@/components/QuoteBlock";
import { featuredDesktop, featuredMobile } from "@/lib/gallery-data";
import FavoritesLink from "@/components/FavoritesLink";

export const metadata: Metadata = {
  title: { absolute: "Pottery Post | The Pottery Directory for Makers & Admirers" },
  description:
    "A simple, ad-free pottery directory spanning Canada, the US, Europe, and Australia. Find potters, guilds, classes, community kilns, and supply shops by area.",
  alternates: { canonical: "https://www.potterypost.ca" },
  openGraph: {
    title: "Pottery Post | The Pottery Directory for Makers & Admirers",
    description:
      "A simple, ad-free pottery directory spanning Canada, the US, Europe, and Australia. Find potters, guilds, classes, community kilns, and supply shops by area.",
    url: "https://www.potterypost.ca",
  },
};

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Pottery Post: Pottery Directory, Gallery and Travel Journal for Makers and Admirers</h1>
      <QuoteBlock fitContent quote={<>For ten thousand years,<span className="hidden md:inline"><br /></span>{" "}humans have been putting their<span className="hidden md:inline"><br /></span>{" "}hands in clay. Something in us has<span className="hidden md:inline"><br /></span>{" "}never stopped needing to.</>} className="pt-14 md:pt-32 pb-8 md:pb-16" />

      {/* Directory CTA */}
      <section className="relative pt-[38px] md:pt-[70px] pb-12 md:pb-16 px-6 text-center" style={{ background: "var(--c-tan)" }}>
        <div className="absolute inset-x-0 top-0 h-64 md:h-96 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--c-light), transparent)", zIndex: 0 }} />
        <div className="absolute inset-x-0 bottom-0 h-64 md:h-96 pointer-events-none" style={{ background: "linear-gradient(to top, var(--c-light), transparent)", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--c-primary)", letterSpacing: "0.4em", fontFamily: "system-ui, sans-serif" }}>
            Canada &middot; United States &middot; Europe &middot; Australia
          </p>
          <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--c-primary)", fontFamily: "Georgia, serif" }}>
            Pottery Directory
          </h2>
          <p className="text-lg max-w-lg mx-auto mb-10" style={{ color: "var(--c-primary)", fontFamily: "system-ui, sans-serif" }}>
            The Pottery Post&rsquo;s Pottery Directory spans three continents, connecting potters, pottery guilds, places to take pottery classes, share kilns, pottery supply shops, and the people who love pottery. It&rsquo;s built to be clear and easy to use. Are you a pottery guild, potter, offering a pottery class, a community kiln, or a pottery supplier? Add your name.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/directory" className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm bg-[var(--c-accent)] hover:bg-[var(--c-accent-mid)] transition-colors" style={{ color: "var(--c-light)", fontFamily: "system-ui, sans-serif" }}>
              Browse the directory
            </Link>
            <Link href="/directory/submit" className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm bg-[var(--c-surface)] hover:bg-[var(--c-tan-2)] transition-colors" style={{ color: "var(--c-primary)", fontFamily: "system-ui, sans-serif" }}>
              Add your listing
            </Link>
          </div>
          <div className="mt-5 flex justify-center">
            <FavoritesLink />
          </div>
        </div>
      </section>

      <QuoteBlock quote={<>Things made with love,<span className="hidden md:inline"><br /></span>{" "}by hand, deserve to be seen,<span className="hidden md:inline"><br /></span>{" "}shared, and celebrated.</>} className="pt-16 md:pt-20 pb-12 md:pb-16" />

      {/* Featured Gallery Preview */}
      <section className="pt-16 md:pt-20 pb-12 md:pb-16 px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--c-muted)", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
            Featured
          </p>
          <h2 className="text-4xl font-bold" style={{ fontFamily: "Georgia, serif", color: "var(--c-primary)" }}>Pottery Gallery</h2>
        </div>
        <p className="text-sm tracking-widest uppercase mb-6 font-bold" style={{ color: "var(--c-primary)", fontFamily: "Georgia, serif" }}>
          Gathered with Love
        </p>
        {/* Desktop: 8 featured pieces */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {featuredDesktop.map((piece) => (
            <img
              key={piece.src}
              src={piece.src}
              alt={piece.alt}
              loading="lazy"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-sm"
              style={{ aspectRatio: "1 / 1", objectFit: "cover", background: "var(--c-white)" }}
            />
          ))}
        </div>
        {/* Mobile: 4 featured pieces */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {featuredMobile.map((piece) => (
            <img
              key={piece.src}
              src={piece.src}
              alt={piece.alt}
              loading="lazy"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-sm"
              style={{ aspectRatio: "1 / 1", objectFit: "cover", background: "var(--c-white)" }}
            />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/gallery" className="text-sm tracking-widest uppercase underline" style={{ color: "var(--c-teal)", fontFamily: "system-ui, sans-serif" }}>
            View all
          </Link>
        </div>
        <p className="mt-6 text-sm text-center" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
          The Pottery Gallery is a pottery collection that rotates early Spring and Fall.<span className="hidden md:inline"><br /></span>{" "}The pieces in the Pottery Gallery are not for sale by the Pottery Post. They are here to be celebrated!
        </p>
      </section>

      <QuoteBlock quote={<>Pottery asks nothing<span className="hidden md:inline"><br /></span>{" "}of the world except the chance<span className="hidden md:inline"><br /></span>{" "}to make something true.</>} className="pt-16 md:pt-20 pb-24 md:pb-32" />
    </>
  );
}
