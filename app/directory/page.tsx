import Link from "next/link";

export default function DirectoryPage() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        North America — Canada &amp; United States
      </p>
      <div className="flex items-end justify-between mb-4">
        <h1 className="text-4xl font-bold" style={{ fontFamily: "Georgia, serif" }}>The Potter&rsquo;s Directory</h1>
        <Link
          href="/directory/submit"
          className="px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm"
          style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
        >
          Add your listing
        </Link>
      </div>
      <p className="mb-12 max-w-lg" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        A directory of potters and potter&rsquo;s guilds across North America. The only one of its kind. Know a potter who should be here? Send them our way.
      </p>
      <p className="text-center py-20 text-lg" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        Directory entries coming soon.
      </p>
    </section>
  );
}
