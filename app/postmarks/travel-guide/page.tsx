import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Pottery Traveler's Guide | Pottery Postmarks",
  description: "A curated guide to finding pottery wherever you go. The studios worth seeking out, the towns built around clay, the shops and galleries that make a detour worthwhile.",
  alternates: { canonical: "https://www.potterypost.ca/postmarks/travel-guide" },
};

const articles = [
  {
    slug: "seagrove",
    label: "North Carolina",
    title: "Seagrove, North Carolina: A Town Built on Clay",
    description: "More than a hundred pottery studios within eight miles. Some families have been at it for seven generations. A guide to the most concentrated pottery community in America.",
  },
];

export default function TravelGuidePage() {
  return (
    <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "#9E8572", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif" }}>
        <Link href="/postmarks" className="hover:text-[#5C3D2E] transition-colors">Pottery Postmarks</Link>
        <span className="mx-2">/</span>
        Travel Guide
      </p>

      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Travel Guide
      </p>
      <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
        The Pottery Traveler&rsquo;s Guide
      </h1>
      <p className="text-lg max-w-2xl mb-12" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        A curated guide to finding pottery wherever you go. The studios worth seeking out, the towns built around clay, the shops and galleries that make a detour worthwhile.
      </p>

      <div className="flex flex-col gap-0">
        {articles.map((a) => (
          <Link key={a.slug} href={`/postmarks/travel-guide/${a.slug}`} className="group block py-8 border-t" style={{ borderColor: "#E8D5B7" }}>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif" }}>
              {a.label}
            </p>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-[#C1440E] transition-colors" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
              {a.title}
            </h2>
            <p className="text-sm max-w-lg" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
              {a.description}
            </p>
          </Link>
        ))}
        <div className="border-t" style={{ borderColor: "#E8D5B7" }} />
      </div>
    </section>
  );
}
