import type { Metadata } from "next";
import Link from "next/link";
import QuoteBlock from "@/components/QuoteBlock";

export const metadata: Metadata = {
  title: "Pottery Postmarks | The Pottery Travel Journal",
  description:
    "The Pottery Post's pottery travel journal. Top 25 pottery destinations, mapped road trip itineraries by region, The Pottery Traveler's Guide, and historical pottery heritage.",
  alternates: { canonical: "https://www.potterypost.ca/postmarks" },
  openGraph: {
    title: "Pottery Postmarks | The Pottery Travel Journal | Pottery Post",
    description:
      "The Pottery Post's pottery travel journal, top destinations, road trip itineraries, the Pottery Traveler's Guide, and pottery history.",
    url: "https://www.potterypost.ca/postmarks",
  },
};

const categories = [
  {
    label: "Travel Guide",
    title: "The Pottery Traveler's Guide",
    description:
      "A curated guide to finding pottery wherever you go, the studios worth seeking out, the towns built around clay, the shops and galleries that make a detour worthwhile.",
    href: "/postmarks/travel-guide",
    live: true,
  },
  {
    label: "Destinations",
    title: "Top 25 Pottery Destinations",
    description:
      "From the pottery towns of North Carolina to the studio districts of Japan and the kiln trails of England, the places every pottery lover should visit at least once.",
    href: "/postmarks/destinations",
    live: true,
  },
  {
    label: "Road Trips",
    title: "Mapped Pottery Travel Itineraries",
    description:
      "Full road trip routes planned around pottery, by region, by season, by what you're looking for. Studio visits, galleries, local potters, and the best places to stop along the way.",
    href: "/postmarks/road-trips",
    live: true,
  },
  {
    label: "History",
    title: "Historical Pottery & Heritage",
    description:
      "The stories behind the clay, ancient traditions, family lineages, the towns where pottery never left, and the makers who kept something alive that the world could have easily lost.",
    href: "/postmarks/history",
    live: true,
  },
];

export default function PostmarksPage() {
  return (
    <>
      <QuoteBlock
        quote="The best pottery finds you when you're already somewhere beautiful. Going looking is even better."
      />

      {/* Header */}
      <section className="pt-16 md:pt-20 pb-4 px-6 max-w-4xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
          The Pottery Post
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
          Pottery Postmarks
        </h1>
        <p className="text-lg max-w-2xl" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
          A pottery travel journal. The places, the roads, the history, and the makers worth travelling for.
        </p>
      </section>

      {/* Category nav */}
      <section className="px-6 max-w-4xl mx-auto pt-8 pb-4">
        <div className="flex flex-wrap gap-2 pb-6 border-b" style={{ borderColor: "#E8D5B7" }}>
          {categories.map((c) =>
            c.live ? (
              <Link
                key={c.label}
                href={c.href}
                className="px-5 py-2 text-xs tracking-widest uppercase font-bold rounded-sm transition-colors"
                style={{ background: "#5C3D2E", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
              >
                {c.label}
              </Link>
            ) : (
              <span
                key={c.label}
                className="px-5 py-2 text-xs tracking-widest uppercase font-bold rounded-sm"
                style={{ background: "#E8D5B7", color: "#9E8572", fontFamily: "system-ui, sans-serif", cursor: "default" }}
              >
                {c.label}
              </span>
            )
          )}
        </div>
      </section>

      {/* Category cards */}
      <section className="pb-16 md:pb-20 px-6 max-w-4xl mx-auto pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((c) => {
            const inner = (
              <div className="p-8 rounded-sm h-full" style={{ background: "#EDE4D5" }}>
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
                  {c.label}
                </p>
                <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
                  {c.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#6B4F3F", fontFamily: "system-ui, sans-serif" }}>
                  {c.description}
                </p>
                {c.live && (
                  <p className="text-xs tracking-widest uppercase mt-4" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
                    Read now
                  </p>
                )}
              </div>
            );
            return c.live ? (
              <Link key={c.title} href={c.href} className="block hover:opacity-90 transition-opacity">
                {inner}
              </Link>
            ) : (
              <div key={c.title}>{inner}</div>
            );
          })}
        </div>
      </section>

      <QuoteBlock quote="Some roads are worth travelling slowly. Especially the ones with a kiln at the end." />
    </>
  );
}
