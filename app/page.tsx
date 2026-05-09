import Link from "next/link";

function PlaceholderPiece({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-sm text-sm tracking-widest uppercase"
      style={{ background: "#E8D5B7", color: "#9E8572", aspectRatio: "1 / 1", minHeight: "160px", fontFamily: "system-ui, sans-serif" }}
    >
      {label}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6 text-center" style={{ background: "#D4622A" }}>
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#F5F0E8", letterSpacing: "0.4em", fontFamily: "system-ui, sans-serif" }}>
          Whitby, Ontario &middot; Canada
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: "#F5F0E8", fontFamily: "Georgia, serif", lineHeight: 1.1 }}>
          Because things made<br />with love deserve<br />to be celebrated.
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#F5F0E8", opacity: 0.85, fontFamily: "system-ui, sans-serif" }}>
          This is a pottery lover&rsquo;s curated gallery, a North American potter&rsquo;s directory, and a select collection of pottery for resale.
        </p>
      </section>

      {/* Featured Gallery Preview */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
              Featured Collection
            </p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "Georgia, serif" }}>The Gallery</h2>
          </div>
          <Link href="/gallery" className="text-sm tracking-widest uppercase underline" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PlaceholderPiece label="Piece I" />
          <PlaceholderPiece label="Piece II" />
          <PlaceholderPiece label="Piece III" />
          <PlaceholderPiece label="Piece IV" />
        </div>
        <p className="mt-6 text-sm text-center" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
          The gallery rotates annually. These pieces are not for sale — they are here to be celebrated.
        </p>
      </section>

      {/* Shop Preview */}
      <section className="py-20 px-6" style={{ background: "#EDE4D5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
                Select Pieces For Sale
              </p>
              <h2 className="text-3xl font-bold" style={{ fontFamily: "Georgia, serif" }}>The Shop</h2>
            </div>
            <Link href="/shop" className="text-sm tracking-widest uppercase underline" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
              Shop all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Stoneware Mug", "Celadon Bowl", "Raku Vase"].map((name) => (
              <div key={name} className="rounded-sm overflow-hidden" style={{ background: "#F5F0E8" }}>
                <PlaceholderPiece label={name} />
                <div className="p-4">
                  <p className="font-bold" style={{ fontFamily: "Georgia, serif" }}>{name}</p>
                  <p className="text-sm mt-1" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>Price TBD</p>
                  <Link href="/shop" className="inline-block mt-3 text-xs tracking-widest uppercase underline" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
                    View piece
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory CTA */}
      <section className="py-24 px-6 text-center" style={{ background: "#5C3D2E" }}>
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#9E8572", letterSpacing: "0.4em", fontFamily: "system-ui, sans-serif" }}>
          North America &mdash; Canada &amp; United States
        </p>
        <h2 className="text-4xl font-bold mb-6" style={{ color: "#F5F0E8", fontFamily: "Georgia, serif" }}>
          The Potter&rsquo;s Directory
        </h2>
        <p className="text-lg max-w-lg mx-auto mb-10" style={{ color: "#E8D5B7", fontFamily: "system-ui, sans-serif" }}>
          The only directory of its kind — connecting potters, guilds, and the people who love their work. Are you a potter? Add your name.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/directory" className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm transition-opacity hover:opacity-90" style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}>
            Browse the directory
          </Link>
          <Link href="/directory/submit" className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm transition-opacity hover:opacity-90" style={{ background: "#F5F0E8", color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            Add your listing
          </Link>
        </div>
      </section>
    </>
  );
}
