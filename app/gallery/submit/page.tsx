"use client";

import { useState } from "react";
import QuoteBlock from "@/components/QuoteBlock";

const DESC_MAX = 400;
const PHOTO_MAX_MB = 10;
const ASPECT_MIN = 0.85;
const ASPECT_MAX = 1.15;

export default function GallerySubmitPage() {
  const [descCount, setDescCount] = useState(0);
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setPhotoName(null);
    setPhotoError(null);

    if (!file) return;

    if (file.size > PHOTO_MAX_MB * 1024 * 1024) {
      setPhotoError(`File is too large. Please choose an image under ${PHOTO_MAX_MB}MB.`);
      e.target.value = "";
      return;
    }

    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      const ratio = img.width / img.height;
      if (ratio < ASPECT_MIN || ratio > ASPECT_MAX) {
        setPhotoError("Please submit a square (1:1) photograph. Portrait or landscape orientations won't display well in the gallery.");
        e.target.value = "";
      } else {
        setPhotoName(file.name);
      }
    };
    img.src = url;
  }

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
            Tell us about the piece — the technique, materials, what inspired it. A few sentences is plenty. {DESC_MAX} characters max.
          </p>
          <textarea
            name="description"
            rows={5}
            maxLength={DESC_MAX}
            onChange={(e) => setDescCount(e.target.value.length)}
            className="border-b py-2 bg-transparent outline-none text-base resize-none"
            style={{ borderColor: "#9E8572", color: "#3B2314", fontFamily: "system-ui, sans-serif" }}
          />
          <p className="text-xs text-right" style={{ color: descCount >= DESC_MAX ? "#C1440E" : "#9E8572", fontFamily: "system-ui, sans-serif" }}>
            {descCount} / {DESC_MAX}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            Photograph of Your Piece
          </label>
          <p className="text-xs" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
            One photograph, JPG or PNG, square format (1:1), under {PHOTO_MAX_MB}MB. Good natural light, plain background if possible. This is what we&rsquo;ll review first.
          </p>
          <label className="inline-block self-start px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm cursor-pointer" style={{ background: "#E8D5B7", color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            Choose Photo
            <input
              type="file"
              name="photo"
              accept="image/jpeg,image/png"
              className="hidden"
              onChange={handlePhoto}
            />
          </label>
          {photoName && (
            <p className="text-xs" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
              ✓ {photoName}
            </p>
          )}
          {photoError && (
            <p className="text-xs" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
              {photoError}
            </p>
          )}
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
