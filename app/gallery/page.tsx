import type { Metadata } from "next";
import Link from "next/link";
import QuoteBlock from "@/components/QuoteBlock";

export const metadata: Metadata = {
  title: "Pottery Gallery — Handmade Ceramics Curated with Love",
  description:
    "A curated gallery of handmade pottery, gathered with love by The Pottery Post. Collections rotate in early Spring and Fall. Every piece is verified in person.",
  alternates: { canonical: "https://www.potterypost.ca/gallery" },
  openGraph: {
    title: "Pottery Gallery — Handmade Ceramics Curated with Love | Pottery Post",
    description:
      "A curated gallery of handmade pottery, gathered with love. Collections rotate in early Spring and Fall. Every piece is verified in person.",
    url: "https://www.potterypost.ca/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
    <QuoteBlock quote="There is a quiet in beautiful pottery that settles something inside you." className="pt-24 md:pt-32 pb-12 md:pb-16" />
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Featured
      </p>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>Pottery Gallery</h1>
      <p className="mb-6 text-sm tracking-widest uppercase" style={{ color: "#C1440E", letterSpacing: "0.15em", fontFamily: "system-ui, sans-serif" }}>The first collection is being curated and will be live soon.</p>
      <p className="mb-4 max-w-lg" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        Each piece here was made by hand, by someone who cares deeply about what they make. They were gathered with love. This first collection is the Founder&rsquo;s Collection. Future collections will rotate early Spring and Fall and via potter submissions.
      </p>
      <p className="mb-12 max-w-lg text-sm italic" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        Please note: none of these pieces are for sale at Pottery Post, where possible, please contact potters for inquiries.
      </p>
      <p className="text-sm tracking-widest uppercase mb-6 font-bold" style={{ color: "#D4622A", fontFamily: "Georgia, serif" }}>
        Gathered with Love
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-sm text-sm tracking-widest uppercase"
            style={{ background: "#FFFFFF", color: "#9E8572", aspectRatio: "1 / 1", fontFamily: "system-ui, sans-serif" }}
          >
            Piece {["I","II","III","IV","V","VI"][i]}
          </div>
        ))}
      </div>
    </section>

    {/* Submit Your Work */}
    <section className="py-16 md:py-20 px-6 max-w-4xl mx-auto border-b" style={{ borderColor: "#E8D5B7" }}>
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Open to Submissions
      </p>
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>Submit Your Work</h2>
      <p className="mb-8 max-w-lg" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        Each new collection is open to submissions. If you&rsquo;re a potter and would like your work considered, here&rsquo;s how it works: begin by sending us a photograph and a short description of your piece. If it&rsquo;s selected for the collection, we&rsquo;ll be in touch — chosen pieces are shipped to Pottery Post by a set date, where each one is verified in person before it goes live. Because everything in this gallery is the real thing: made by hand, verified by eye.
      </p>
      <Link
        href="/gallery/submit"
        className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm inline-block transition-opacity hover:opacity-80"
        style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
      >
        Submit a piece
      </Link>
    </section>

    {/* The Archive */}
    <section className="py-16 md:py-20 px-6 max-w-4xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Past Collections
      </p>
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>The Archive</h2>
      <p className="mb-8 max-w-lg" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        Every past gallery is preserved here and is a growing record of the makers and pieces that have been part of the Pottery Post.
      </p>
      <Link
        href="/gallery/archive"
        className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm inline-block transition-opacity hover:opacity-80"
        style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
      >
        View past galleries
      </Link>
    </section>
    <QuoteBlock quote="Well-made pottery stops you. You don't know why. You just can't look away." />
    </>
  );
}
