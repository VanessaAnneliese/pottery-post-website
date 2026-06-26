import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top Pottery Destinations | Pottery Postmarks",
  description: "The studio towns, kiln trails, and pottery districts worth travelling for, across North America, the UK, Europe, and Australia.",
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
      <p className="text-xs tracking-widest uppercase mb-12" style={{ color: "var(--c-teal)", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif" }}>
        <Link href="/postmarks" className="hover:text-[var(--c-teal-deep)] transition-colors">Pottery Postmarks</Link>
        <span className="mx-2">/</span>
        Destinations
      </p>

      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--c-muted)", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Destinations
      </p>
      <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "var(--c-primary)" }}>
        Top Pottery Destinations
      </h1>
      <p className="text-lg max-w-2xl mb-12" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
        The studio towns, kiln trails, and pottery districts worth travelling for, across North America, the UK, Europe, and Australia.
      </p>

      <div className="flex flex-col gap-0">
        {articles.map((a) => (
          <Link key={a.slug} href={`/postmarks/destinations/${a.slug}`} className="group block py-8 border-t" style={{ borderColor: "var(--c-surface)" }}>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--c-accent)", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif" }}>
              {a.label}
            </p>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-[var(--c-accent-mid)] transition-colors" style={{ fontFamily: "Georgia, serif", color: "var(--c-accent)" }}>
              {a.title}
            </h2>
            <p className="text-sm max-w-lg" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
              {a.description}
            </p>
          </Link>
        ))}
        <div className="border-t" style={{ borderColor: "var(--c-surface)" }} />
      </div>
    </section>
  );
}
