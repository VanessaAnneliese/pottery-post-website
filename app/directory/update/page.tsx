"use client";

import { useState } from "react";
import QuoteBlock from "@/components/QuoteBlock";

export default function UpdateListingPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/update-listing", { method: "POST", body: new FormData(e.currentTarget) });
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
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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

          <p className="text-sm" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
            To add or update photos, email up to 3 JPG or PNG images to{" "}
            <a href="mailto:directory@potterypost.ca" style={{ color: "#C1440E" }}>directory@potterypost.ca</a>.
          </p>

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
