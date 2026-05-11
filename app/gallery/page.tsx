import QuoteBlock from "@/components/QuoteBlock";

export default function GalleryPage() {
  return (
    <>
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Featured Collection
      </p>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>The Gallery</h1>
      <p className="mb-12 max-w-lg" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        A curated selection of pottery pieces, celebrated for their craft. The collection rotates periodically. None of these pieces are for sale.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-sm text-sm tracking-widest uppercase"
            style={{ background: "#E8D5B7", color: "#9E8572", aspectRatio: "1 / 1", fontFamily: "system-ui, sans-serif" }}
          >
            Piece {["I","II","III","IV","V","VI"][i]}
          </div>
        ))}
      </div>
    </section>
    <QuoteBlock quote="Fire decides what the hands began." />
    </>
  );
}
