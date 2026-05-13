"use client";

import { useState, useRef } from "react";
import QuoteBlock from "@/components/QuoteBlock";

export default function UpdateListingPage() {
  const [photos, setPhotos] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handlePhotos(e: React.ChangeEvent<HTMLInputElement>) {
    const incoming = Array.from(e.target.files ?? []);
    const combined = [...photos, ...incoming].slice(0, 3);
    setPhotos(combined);
    syncInput(combined);
    e.target.value = "";
  }

  function removePhoto(index: number) {
    const updated = photos.filter((_, i) => i !== index);
    setPhotos(updated);
    syncInput(updated);
  }

  function syncInput(files: File[]) {
    if (!fileInputRef.current) return;
    const dt = new DataTransfer();
    files.forEach((f) => dt.items.add(f));
    fileInputRef.current.files = dt.files;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const raw = new FormData(e.currentTarget);
    const formData = new FormData();
    for (const [key, value] of raw.entries()) {
      if (key !== "photos") formData.append(key, value);
    }
    if (photos.length > 0) {
      formData.append("photoNames", photos.map((f) => f.name).join(", "));
    }
    const res = await fetch("/api/update-listing", { method: "POST", body: formData });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <>
    <QuoteBlock quote="Clay listens when it&#39;s worked with love." />
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Pottery Directory
      </p>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>Update Your Listing</h1>
      <p className="mb-10" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        Already listed in the directory? Use this form to update your information or add photos. All changes are reviewed before going live.
      </p>

      {status === "success" ? (
        <div className="py-12 text-center">
          <p className="text-lg font-bold mb-2" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>Thank you — your update has been received.</p>
          <p style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>We&rsquo;ll review the changes and update your listing shortly.</p>
        </div>
      ) : (
        <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {[
            { label: "Your Name or Studio Name", name: "name", type: "text", required: true },
            { label: "Email Address", name: "email", type: "email", required: true },
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

          <p className="text-xs -mb-2" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
            Fill in only the fields you&rsquo;d like to change. Leave the rest blank.
          </p>

          {[
            { label: "Guild Name (optional)", name: "guild", type: "text" },
            { label: "Country", name: "country", type: "text" },
            { label: "City", name: "city", type: "text" },
          { label: "Region / Province / State", name: "region", type: "text" },
            { label: "Street Address (optional)", name: "address", type: "text" },
            { label: "Website (optional)", name: "website", type: "url" },
            { label: "Phone Number (optional)", name: "phone", type: "tel" },
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
              Short Bio (optional)
            </label>
            <p className="text-xs" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
              200 characters max — about 2 sentences describing your work or style.
            </p>
            <textarea
              name="bio"
              rows={4}
              maxLength={200}
              className="border-b py-2 bg-transparent outline-none text-base resize-none"
              style={{ borderColor: "#9E8572", color: "#3B2314", fontFamily: "system-ui, sans-serif" }}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
              Photos of Your Work — optional, up to 3 images
            </label>
            <p className="text-xs" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
              JPG or PNG, up to 3 images. After submitting, please also email your photos to directory@potterypost.ca.
            </p>

            {photos.length > 0 && (
              <ul className="flex flex-col gap-2">
                {photos.map((file, i) => (
                  <li key={i} className="flex items-center justify-between gap-4 text-sm py-1 border-b" style={{ borderColor: "#E8D5B7", color: "#3B2314", fontFamily: "system-ui, sans-serif" }}>
                    <span className="truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removePhoto(i)}
                      className="text-xs tracking-widest uppercase shrink-0"
                      style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {photos.length < 3 && (
              <label className="inline-block self-start px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm cursor-pointer" style={{ background: "#E8D5B7", color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
                {photos.length === 0 ? "Choose Files" : "Add More"}
                <input
                  ref={fileInputRef}
                  type="file"
                  name="photos"
                  accept="image/jpeg,image/png"
                  multiple
                  className="hidden"
                  onChange={handlePhotos}
                />
              </label>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
              Anything else? (optional)
            </label>
            <textarea
              name="notes"
              rows={3}
              className="border-b py-2 bg-transparent outline-none text-base resize-none"
              style={{ borderColor: "#9E8572", color: "#3B2314", fontFamily: "system-ui, sans-serif" }}
            />
          </div>

          {status === "error" && (
            <p className="text-sm" style={{ color: "#C1440E", fontFamily: "system-ui, sans-serif" }}>
              Something went wrong — please try again or email us at directory@potterypost.ca
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm self-start"
            style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif", opacity: status === "sending" ? 0.6 : 1 }}
          >
            {status === "sending" ? "Sending..." : "Submit update"}
          </button>
        </form>
      )}
    </section>
    </>
  );
}
