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
      <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "#9E8572", letterSpacing: "0.3em", fontFamily: "system-ui, sans-serif" }}>
        <Link href="/postmarks" className="hover:text-[#5C3D2E] transition-colors">Pottery Postmarks</Link>
        <span className="mx-2">/</span>
        History
      </p>

      <p className="text-xs tracking-widest uppercase font-bold mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        History
      </p>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
        Historical Pottery &amp; Heritage
      </h1>
      <p className="text-lg max-w-2xl mb-12" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        The stories behind the clay. Ancient traditions, family lineages, the towns where pottery never left, and the makers who kept something alive that the world could have easily lost.
      </p>

      <div className="flex flex-col gap-0">
        {articles.map((a) => (
          <Link key={a.slug} href={`/postmarks/history/${a.slug}`} className="group block py-8 border-t" style={{ borderColor: "#E8D5B7" }}>
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
