import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mapped Pottery Travel Itineraries | Pottery Postmarks",
  description: "Full road trip routes planned around pottery, by region, by season, by what you're looking for. Studio visits, galleries, local potters, and the best places to stop along the way.",
  alternates: { canonical: "https://www.potterypost.ca/postmarks/road-trips" },
};

const articles = [
  {
    slug: "hamilton-to-niagara",
    label: "Ontario, Canada",
    title: "Hamilton to Niagara-on-the-Lake: A Pottery Drive Along the Escarpment",
    description: "One day, one direction, one of the most quietly beautiful drives in Ontario. Studio potters tucked into the Niagara Escarpment, the wine country villages of the Bench, and a heritage town at the end of the road.",
  },
];

export default function RoadTripsPage() {
  return (
    <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "#9E8572", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif" }}>
        <Link href="/postmarks" className="hover:text-[#5C3D2E] transition-colors">Pottery Postmarks</Link>
        <span className="mx-2">/</span>
        Road Trips
      </p>

      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#D4622A", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Road Trips
      </p>
      <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "#D4622A" }}>
        Mapped Pottery Travel Itineraries
      </h1>
      <p className="text-lg max-w-2xl mb-12" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        Full road trip routes planned around pottery, by region, by season, by what you&rsquo;re looking for. Studio visits, galleries, local potters, and the best places to stop along the way.
      </p>

      <div className="flex flex-col gap-0">
        {articles.map((a) => (
          <Link key={a.slug} href={`/postmarks/road-trips/${a.slug}`} className="group block py-8 border-t" style={{ borderColor: "#E8D5B7" }}>
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
