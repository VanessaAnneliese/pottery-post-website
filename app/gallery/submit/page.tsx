"use client";

import { useState, useRef } from "react";
import QuoteBlock from "@/components/QuoteBlock";

const DESC_MAX = 400;
const PHOTO_MAX_MB = 3;
const ASPECT_MIN = 0.85;
const ASPECT_MAX = 1.15;

const FORM_TYPES = ["Bowls", "Mugs & Cups", "Vases", "Plates & Platters", "Teapots", "Sculptural"];
const TECHNIQUES = ["Wheel Thrown", "Hand Built", "Slip Cast", "Raku", "Wood Fired", "Soda Fired"];
const INTENTS = ["Functional", "Decorative", "Sculptural"];

function SelectPill({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-1.5 text-xs tracking-widest uppercase rounded-sm transition-colors"
      style={{
        fontFamily: "system-ui, sans-serif",
        background: selected ? "#5C3D2E" : "#E8D5B7",
        color: selected ? "#F5F0E8" : "#5C3D2E",
      }}
    >
      {label}
    </button>
  );
}

export default function GallerySubmitPage() {
  const [descCount, setDescCount] = useState(0);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [formType, setFormType] = useState<string | null>(null);
  const [formTypeOther, setFormTypeOther] = useState(false);
  const [formTypeOtherText, setFormTypeOtherText] = useState("");
  const [techniques, setTechniques] = useState<string[]>([]);
  const [otherChecked, setOtherChecked] = useState(false);
  const [otherText, setOtherText] = useState("");
  const [intent, setIntent] = useState<string | null>(null);
  const [intentOther, setIntentOther] = useState(false);
  const [intentOtherText, setIntentOtherText] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function toggleTechnique(t: string) {
    setTechniques((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);
  }

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setPhotoFile(null);
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
        setPhotoFile(file);
      }
    };
    img.src = url;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    formData.delete("photo");
    if (photoFile) formData.append("photo", photoFile);
    const res = await fetch("/api/submit-gallery", { method: "POST", body: formData });
    setStatus(res.ok ? "success" : "error");
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
        Send us a photograph and a short description of your piece. If it&rsquo;s selected for the collection, we&rsquo;ll reach out with a shipping deadline, each chosen piece comes to Pottery Post for verification before it goes live.
      </p>
      <p className="mb-10 text-sm" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        All submissions are reviewed. Not every piece will be selected, but every one is considered with care.
      </p>

      {status === "success" ? (
        <div className="py-12 text-center">
          <p className="text-lg font-bold mb-2" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>Thank you, your piece has been submitted.</p>
          <p style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>We&rsquo;ll be in touch if it&rsquo;s selected for the collection.</p>
        </div>
      ) : (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          {[
            { label: "Your Name", name: "name", type: "text", required: true },
            { label: "Studio Name (optional)", name: "studio", type: "text", required: false },
            { label: "Email Address", name: "email", type: "email", required: true },
            { label: "Website or Instagram (optional)", name: "website", type: "text", required: false },
            { label: "City", name: "city", type: "text", required: false },
            { label: "Province / State / Region", name: "region", type: "text", required: false },
            { label: "Piece Title (optional)", name: "title", type: "text", required: false },
          ].map(({ label, name, type, required }) => (
            <div key={name} className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
                {label}
              </label>
              <input
                type={type}
                name={name}
                required={required}
                className="border-b py-2 bg-transparent outline-none text-base"
                style={{ borderColor: "#9E8572", color: "#3B2314", fontFamily: "system-ui, sans-serif" }}
              />
            </div>
          ))}

          {/* Form / Type */}
          <div className="flex flex-col gap-3">
            <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>Form</label>
            <input type="hidden" name="formType" value={formTypeOther ? formTypeOtherText : (formType ?? "")} />
            <div className="flex flex-wrap gap-2">
              {FORM_TYPES.map((t) => (
                <SelectPill key={t} label={t} selected={formType === t && !formTypeOther} onClick={() => { setFormType(t); setFormTypeOther(false); setFormTypeOtherText(""); }} />
              ))}
              <SelectPill label="Other" selected={formTypeOther} onClick={() => { setFormTypeOther((v) => !v); setFormType(null); setFormTypeOtherText(""); }} />
            </div>
            {formTypeOther && (
              <input type="text" placeholder="Please specify" value={formTypeOtherText} onChange={(e) => setFormTypeOtherText(e.target.value)} className="border-b py-2 bg-transparent outline-none text-base mt-1" style={{ borderColor: "#9E8572", color: "#3B2314", fontFamily: "system-ui, sans-serif" }} />
            )}
          </div>

          {/* Intent */}
          <div className="flex flex-col gap-3">
            <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>Intent</label>
            <input type="hidden" name="intent" value={intentOther ? intentOtherText : (intent ?? "")} />
            <div className="flex flex-wrap gap-2">
              {INTENTS.map((t) => (
                <SelectPill key={t} label={t} selected={intent === t && !intentOther} onClick={() => { setIntent(t); setIntentOther(false); setIntentOtherText(""); }} />
              ))}
              <SelectPill label="Other" selected={intentOther} onClick={() => { setIntentOther((v) => !v); setIntent(null); setIntentOtherText(""); }} />
            </div>
            {intentOther && (
              <input type="text" placeholder="Please specify" value={intentOtherText} onChange={(e) => setIntentOtherText(e.target.value)} className="border-b py-2 bg-transparent outline-none text-base mt-1" style={{ borderColor: "#9E8572", color: "#3B2314", fontFamily: "system-ui, sans-serif" }} />
            )}
          </div>

          {/* Technique */}
          <div className="flex flex-col gap-3">
            <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>Technique, select all that apply</label>
            <input type="hidden" name="techniques" value={[...techniques, ...(otherChecked && otherText ? [otherText] : [])].join(", ")} />
            <div className="flex flex-wrap gap-2">
              {TECHNIQUES.map((t) => (
                <SelectPill key={t} label={t} selected={techniques.includes(t)} onClick={() => toggleTechnique(t)} />
              ))}
              <SelectPill label="Other" selected={otherChecked} onClick={() => { setOtherChecked((v) => !v); if (otherChecked) setOtherText(""); }} />
            </div>
            {otherChecked && (
              <input type="text" placeholder="Please specify" value={otherText} onChange={(e) => setOtherText(e.target.value)} className="border-b py-2 bg-transparent outline-none text-base mt-1" style={{ borderColor: "#9E8572", color: "#3B2314", fontFamily: "system-ui, sans-serif" }} />
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>About This Piece</label>
            <p className="text-xs" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
              Tell us about the piece, the technique, materials, what inspired it. A few sentences is plenty. {DESC_MAX} characters max.
            </p>
            <textarea name="description" rows={5} maxLength={DESC_MAX} onChange={(e) => setDescCount(e.target.value.length)} className="border-b py-2 bg-transparent outline-none text-base resize-none" style={{ borderColor: "#9E8572", color: "#3B2314", fontFamily: "system-ui, sans-serif" }} />
            <p className="text-xs text-right" style={{ color: descCount >= DESC_MAX ? "#C1440E" : "#9E8572", fontFamily: "system-ui, sans-serif" }}>{descCount} / {DESC_MAX}</p>
          </div>

          {/* Photo */}
          <div className="flex flex-col gap-3">
            <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>Photograph of Your Piece</label>
            <p className="text-xs" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
              One photograph, JPG or PNG, square format (1:1), under {PHOTO_MAX_MB}MB. Good natural light, plain background if possible.
            </p>
            <label className="inline-block self-start px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm cursor-pointer" style={{ background: "#E8D5B7", color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
              {photoFile ? "Change Photo" : "Choose Photo"}
              <input ref={fileInputRef} type="file" name="photo" accept="image/jpeg,image/png" className="hidden" onChange={handlePhoto} />
            </label>
            {photoFile && <p className="text-xs" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>✓ {photoFile.name}</p>}
            {photoError && <p className="text-xs" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>{photoError}</p>}
          </div>

          {status === "error" && (
            <p className="text-sm" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
              Something went wrong, please try again or email us at gallery@potterypost.ca
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm self-start transition-opacity hover:opacity-80"
            style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif", opacity: status === "sending" ? 0.6 : 1 }}
          >
            {status === "sending" ? "Sending..." : "Submit for consideration"}
          </button>
        </form>
      )}
    </section>
    </>
  );
}
