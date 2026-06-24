import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top Pottery Destinations | Pottery Postmarks",
  description: "From the pottery towns of North Carolina to the studio districts of Japan and the kiln trails of England, the places every pottery lover should visit at least once.",
  alternates: { canonical: "https://www.potterypost.ca/postmarks/destinations" },
};

const articles = [
  {
    slug: "kiln-trails-england",
    label: "England",
    title: "The Kiln Trails of England",
    description: "From the industrial heartland of Stoke-on-Trent to the studio potters scattered across Cornwall and the Cotswolds, England offers two distinct pottery pilgrimages in one country.",
  },
];

export default function DestinationsPage() {
  return (
    <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "#9E8572", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif" }}>
        <Link href="/postmarks" className="hover:text-[#5C3D2E] transition-colors">Pottery Postmarks</Link>
        <span className="mx-2">/</span>
        Destinations
      </p>

      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Destinations
      </p>
      <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
        Top Pottery Destinations
      </h1>
      <p className="text-lg max-w-2xl mb-12" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        From the pottery towns of North Carolina to the studio districts of Japan and the kiln trails of England, the places every pottery lover should visit at least once.
      </p>

      <div className="flex flex-col gap-0">
        {articles.map((a) => (
          <Link key={a.slug} href={`/postmarks/destinations/${a.slug}`} className="group block py-8 border-t" style={{ borderColor: "#E8D5B7" }}>
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
