"use client";

import { useState } from "react";
import QuoteBlock from "@/components/QuoteBlock";

export default function SubmitPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/submit-listing", { method: "POST", body: formData });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <>
    <QuoteBlock quote="Some things are shaped slowly, on purpose." />
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Pottery Directory
      </p>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>Add Your Listing</h1>
      <p className="mb-10" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        Submit your information to be listed in the directory. All submissions are reviewed before going live.
      </p>

      {status === "success" ? (
        <div className="py-12 text-center">
          <p className="text-lg font-bold mb-2" style={{ fontFamily: "Georgia, serif", color: "#5C3D2E" }}>Thank you — your submission has been received.</p>
          <p style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>We&rsquo;ll review it and be in touch if your listing is approved.</p>
        </div>
      ) : (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {[
            { label: "Your Name or Studio Name", name: "name", type: "text", required: true },
            { label: "Guild Name (optional)", name: "guild", type: "text", required: false },
            { label: "Country", name: "country", type: "text", required: true },
            { label: "City & Region / Province / State", name: "location", type: "text", required: true },
            { label: "Street Address (optional)", name: "address", type: "text", required: false },
            { label: "Website (optional)", name: "website", type: "url", required: false },
            { label: "Email Address", name: "email", type: "email", required: true },
            { label: "Phone Number (optional)", name: "phone", type: "tel", required: false },
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
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="offersClasses"
              id="offersClasses"
              value="yes"
              className="w-4 h-4 accent-[#5C3D2E]"
            />
            <label htmlFor="offersClasses" className="text-xs tracking-widest uppercase cursor-pointer" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
              I also offer pottery classes or workshops
            </label>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
              Photos of Your Work — optional, up to 3 images
            </label>
            <p className="text-xs" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
              JPG or PNG. These will appear as thumbnails on your directory listing.
            </p>
            <label className="inline-block self-start px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm cursor-pointer" style={{ background: "#E8D5B7", color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
              Choose Files
              <input
                type="file"
                name="photos"
                accept="image/jpeg,image/png"
                multiple
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 3) {
                    alert("Please select up to 3 images only.");
                    e.target.value = "";
                  }
                }}
              />
            </label>
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
            {status === "sending" ? "Sending..." : "Submit listing"}
          </button>
        </form>
      )}
    </section>
    </>
  );
}
