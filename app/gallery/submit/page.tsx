"use client";

import QuoteBlock from "@/components/QuoteBlock";

export default function GallerySubmitPage() {
  return (
    <>
    <QuoteBlock quote="Every piece carries a little of the maker's heart." />
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        The Gallery
      </p>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>Submit Your Work</h1>
      <p className="mb-2" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        Send us a photograph and a short description of your piece. If it&rsquo;s selected for the collection, we&rsquo;ll reach out with a shipping deadline — each chosen piece comes to The Pottery Post for verification before it goes live.
      </p>
      <p className="mb-10 text-sm" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        All submissions are reviewed. Not every piece will be selected, but every one is considered with care.
      </p>

      <form className="flex flex-col gap-6">
        {[
          { label: "Your Name", name: "name", type: "text" },
          { label: "Studio Name (optional)", name: "studio", type: "text" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Website or Instagram (optional)", name: "website", type: "url" },
          { label: "City & Province / State / Region", name: "location", type: "text" },
          { label: "Piece Title (optional)", name: "title", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name} className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
              {label}
            </label>
            <input
              type={type}
              name={name}
              className="border-b py-2 bg-transparent outline-none text-base"
              style={{ borderColor: "#9E8572", color: "#3B2314", fontFamily: "system-ui, sans-serif" }}
            />
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            About This Piece
          </label>
          <p className="text-xs" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
            Tell us about the piece — the technique, materials, what inspired it. A few sentences is plenty.
          </p>
          <textarea
            name="description"
            rows={5}
            className="border-b py-2 bg-transparent outline-none text-base resize-none"
            style={{ borderColor: "#9E8572", color: "#3B2314", fontFamily: "system-ui, sans-serif" }}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            Photograph of Your Piece
          </label>
          <p className="text-xs" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
            One photograph, JPG or PNG. Good natural light, plain background if possible. This is what we&rsquo;ll review first.
          </p>
          <label className="inline-block self-start px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm cursor-pointer" style={{ background: "#E8D5B7", color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            Choose Photo
            <input
              type="file"
              name="photo"
              accept="image/jpeg,image/png"
              className="hidden"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm self-start"
          style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
        >
          Submit for consideration
        </button>
      </form>
    </section>
    </>
  );
}
