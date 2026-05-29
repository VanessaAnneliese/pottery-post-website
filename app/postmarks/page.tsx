import type { Metadata } from "next";
import QuoteBlock from "@/components/QuoteBlock";

export const metadata: Metadata = {
  title: "Pottery Postmarks | The Pottery Travel Journal",
  description:
    "The Pottery Post's pottery travel journal. Top 25 pottery destinations, mapped road trip itineraries by region, The Pottery Traveler's Guide, and historical pottery heritage. Coming soon.",
  alternates: { canonical: "https://www.potterypost.ca/postmarks" },
  openGraph: {
    title: "Pottery Postmarks | The Pottery Travel Journal | Pottery Post",
    description:
      "The Pottery Post's pottery travel journal, top destinations, road trip itineraries, the Pottery Traveler's Guide, and pottery history.",
    url: "https://www.potterypost.ca/postmarks",
  },
};

const features = [
  {
    label: "Travel Guide",
    title: "The Pottery Traveler's Guide",
    description:
      "A curated guide to finding pottery wherever you go, the studios worth seeking out, the towns built around clay, the shops and galleries that make a detour worthwhile.",
  },
  {
    label: "Destinations",
    title: "Top 25 Pottery Destinations",
    description:
      "From the pottery towns of North Carolina to the studio districts of Japan and the kiln trails of England, the places every pottery lover should visit at least once.",
  },
  {
    label: "Road Trips",
    title: "Mapped Pottery Travel Itineraries",
    description:
      "Full road trip routes planned around pottery, by region, by season, by what you're looking for. Studio visits, galleries, local potters, and the best places to stop along the way.",
  },
  {
    label: "History",
    title: "Historical Pottery & Heritage",
    description:
      "The stories behind the clay, ancient traditions, family lineages, the towns where pottery never left, and the makers who kept something alive that the world could have easily lost.",
  },
];

export default function PostmarksPage() {
  return (
    <>
      <QuoteBlock
        quote={<>The best pottery finds you when you&rsquo;re already somewhere beautiful.<br className="hidden md:block" /> Going looking is even better.</>}
        className="pt-24 md:pt-32 pb-12 md:pb-16"
      />

      {/* Intro */}
      <section className="py-16 md:py-20 px-6 max-w-4xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
          The Pottery Post
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
          Pottery Postmarks
        </h1>
        <p className="text-sm tracking-widest uppercase mb-6" style={{ color: "#C1440E", letterSpacing: "0.15em", fontFamily: "system-ui, sans-serif" }}>
          Coming Soon
        </p>
        <p className="text-lg max-w-2xl mb-4" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
          Pottery Postmarks is The Pottery Post&rsquo;s pottery travel journal, a guide to discovering pottery out in the world. The places, the roads, the history, and the makers worth travelling for.
        </p>
        <p className="max-w-2xl" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
          We&rsquo;re working on the first issues now. Here&rsquo;s what&rsquo;s coming.
        </p>
      </section>

      {/* Feature cards */}
      <section className="pb-16 md:pb-20 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-sm"
              style={{ background: "#EDE4D5" }}
            >
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
                {f.label}
              </p>
              <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
                {f.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#6B4F3F", fontFamily: "system-ui, sans-serif" }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Coming soon note */}
      <section className="py-16 md:py-20 px-6 max-w-4xl mx-auto border-t" style={{ borderColor: "#E8D5B7" }}>
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
          In the meantime
        </p>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
          Find Pottery Near You
        </h2>
        <p className="max-w-lg mb-6" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
          While Pottery Postmarks is being put together, the Pottery Directory is live, potters, guilds, classes, and supply shops across Canada, the United States, Europe, and Australia.
        </p>
        <a
          href="/directory"
          className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm inline-block bg-[#D4622A] hover:bg-[#B8501F] transition-colors"
          style={{ color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
        >
          Browse the directory
        </a>
      </section>

      <QuoteBlock quote="Some roads are worth travelling slowly. Especially the ones with a kiln at the end." />
    </>
  );
}
