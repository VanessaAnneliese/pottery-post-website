import QuoteBlock from "@/components/QuoteBlock";

export default function ArchivePage() {
  return (
    <>
    <QuoteBlock quote="A potter's work outlives them. And so, quietly, does their love." />
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Past Collections
      </p>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>The Archive</h1>
      <p className="mb-16 max-w-lg" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        Every past gallery is preserved here — a growing record of the makers and pieces that have been part of Pottery Post.
      </p>
      <div className="py-16 text-center border-t border-b" style={{ borderColor: "#E8D5B7" }}>
        <p className="text-lg font-bold mb-3" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>
          The first collection is coming.
        </p>
        <p style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
          Past galleries will be archived here after each rotation. Check back after Spring.
        </p>
      </div>
    </section>
    </>
  );
}
