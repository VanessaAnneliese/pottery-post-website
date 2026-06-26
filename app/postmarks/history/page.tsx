import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Historical Pottery & Heritage | Pottery Postmarks",
  description: "The stories behind the clay. Ancient traditions, family lineages, the towns where pottery never left, and the makers who kept something alive that the world could have easily lost.",
  alternates: { canonical: "https://www.potterypost.ca/postmarks/history" },
};

const articles = [
  {
    slug: "meissen",
    label: "Saxony, Germany · 1710",
    title: "The King Who Traded Soldiers for Porcelain",
    description: "Augustus the Strong wanted Chinese porcelain more than almost anything else in the world. He imprisoned an alchemist to get it. What happened next changed the history of ceramics in Europe forever.",
  },
];

export default function HistoryPage() {
  return (
    <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <p className="text-xs tracking-widest uppercase mb-12" style={{ color: "var(--c-teal)", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif" }}>
        <Link href="/postmarks" className="hover:text-[var(--c-teal-deep)] transition-colors">Pottery Postmarks</Link>
        <span className="mx-2">/</span>
        History
      </p>

      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--c-muted)", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        History
      </p>
      <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "var(--c-primary)" }}>
        Historical Pottery &amp; Heritage
      </h1>
      <p className="text-lg max-w-2xl mb-12" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
        The stories behind the clay. Ancient traditions, family lineages, the towns where pottery never left, and the makers who kept something alive that the world could have easily lost.
      </p>

      <div className="flex flex-col gap-0">
        {articles.map((a) => (
          <Link key={a.slug} href={`/postmarks/history/${a.slug}`} className="group block py-8 border-t" style={{ borderColor: "var(--c-surface)" }}>
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
