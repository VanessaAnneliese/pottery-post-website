"use client";

import { useEffect, useState } from "react";
import QuoteBlock from "@/components/QuoteBlock";

// Flips the form between the free flow (email the owner via Resend) and the paid
// flow (Stripe Checkout). Keep NEXT_PUBLIC_DIRECTORY_PAID unset until Feb 1, 2027.
const paidMode = process.env.NEXT_PUBLIC_DIRECTORY_PAID === "true";

const CATEGORY_OPTIONS = [
  { value: "potter", label: "Potter / Ceramicist" },
  { value: "guild", label: "Guild or Association" },
  { value: "class", label: "Teaching Studio / Classes" },
  { value: "kiln", label: "Community Kiln" },
  { value: "supplier", label: "Supply Shop" },
] as const;

const COUNTRY_OPTIONS = [
  { label: "Canada", value: "CA" },
  { label: "United States", value: "US" },
  { label: "Europe", value: "EU" },
  { label: "Australia", value: "AU" },
] as const;

const fieldClass = "border-b py-2 bg-transparent outline-none text-base";
const fieldStyle = { borderColor: "var(--c-muted)", color: "var(--c-primary-deep)", fontFamily: "system-ui, sans-serif" } as const;
const labelClass = "text-xs tracking-widest uppercase";
const labelStyle = { color: "var(--c-primary)", fontFamily: "system-ui, sans-serif" } as const;
const hintClass = "text-xs";
const hintStyle = { color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" } as const;

export default function SubmitPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [canceled, setCanceled] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("canceled") === "1") setCanceled(true);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);

    // Paid mode: hand off to Stripe Checkout, which collects payment and returns
    // the visitor to the success page. Free mode: email the submission as before.
    if (paidMode) {
      const res = await fetch("/api/checkout", { method: "POST", body: formData });
      if (res.ok) {
        const { url } = (await res.json()) as { url?: string };
        if (url) {
          window.location.href = url;
          return;
        }
      }
      setStatus("error");
      return;
    }

    const res = await fetch("/api/submit-listing", { method: "POST", body: formData });
    setStatus(res.ok ? "success" : "error");
  }

  return (
    <>
    <QuoteBlock quote="Some things are shaped slowly, on purpose." />
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--c-muted)", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Pottery Directory
      </p>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>Add Your Listing</h1>
      <p className="mb-4" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
        Submit your information to be listed in the directory. All submissions are reviewed before going live.
      </p>
      <p className="mb-3 text-sm" style={{ color: "var(--c-primary)", fontFamily: "system-ui, sans-serif" }}>
        <strong>Free to join before February 1, 2027</strong>, and any listing added before then stays free for good. New listings added on or after that date are $5 a year, which keeps the directory ad-free and independent.
      </p>
      <p className="mb-10 text-sm" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
        Being listed puts your business in the structured, machine-readable format that search engines and AI assistants (ChatGPT, Claude, Perplexity, Google AI) read and cite. Clean pages, no ads, and built from the ground up to be found and recommended, not buried. <a href="/faq" className="underline" style={{ color: "var(--c-teal)" }}>More on how that works</a>.
      </p>

      {canceled && status !== "success" && (
        <p className="mb-8 text-sm p-4 rounded-sm" style={{ color: "var(--c-primary-deep)", background: "var(--c-surface)", fontFamily: "system-ui, sans-serif" }}>
          Your checkout was canceled and you have not been charged. You can fill out the form and try again whenever you&rsquo;re ready.
        </p>
      )}

      {status === "success" ? (
        <div className="py-12 text-center">
          <p className="text-lg font-bold mb-2" style={{ fontFamily: "Georgia, serif", color: "var(--c-primary)" }}>Thank you, your submission has been received.</p>
          <p style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>We&rsquo;ll review it and be in touch if your listing is approved.</p>
        </div>
      ) : (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Honeypot: hidden from people, tempting to bots. If filled, we drop it. */}
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className={labelClass} style={labelStyle}>Your Name or Business Name</label>
            <input id="name" type="text" name="name" required className={fieldClass} style={fieldStyle} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category" className={labelClass} style={labelStyle}>What You Are</label>
            <select id="category" name="category" required defaultValue="" className={fieldClass} style={fieldStyle}>
              <option value="" disabled>Select a category</option>
              {CATEGORY_OPTIONS.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="studio" className={labelClass} style={labelStyle}>Studio Name (optional)</label>
            <input id="studio" type="text" name="studio" className={fieldClass} style={fieldStyle} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="guild" className={labelClass} style={labelStyle}>Guild (optional)</label>
            <input id="guild" type="text" name="guild" className={fieldClass} style={fieldStyle} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="country" className={labelClass} style={labelStyle}>Country</label>
            <p className={hintClass} style={hintStyle}>In Europe, choose Europe here and put your country (e.g. France, or Turkey) in Region / Province / State below.</p>
            <select id="country" name="country" required defaultValue="" className={fieldClass} style={fieldStyle}>
              <option value="" disabled>Select one</option>
              {COUNTRY_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          {([
            { label: "City", name: "city", type: "text", required: true },
            { label: "Region / Province / State", name: "region", type: "text", required: true },
            { label: "Website (optional)", name: "website", type: "text", required: false },
            { label: "Email Address", name: "email", type: "email", required: true, hint: "For your receipt and renewal reminders. We never publish or store it in the directory." },
            { label: "Phone Number (optional)", name: "phone", type: "tel", required: false },
          ] as { label: string; name: string; type: string; required: boolean; hint?: string }[]).map(({ label, name, type, required, hint }) => (
            <div key={name} className="flex flex-col gap-2">
              <label className={labelClass} style={labelStyle}>{label}</label>
              {hint && <p className={hintClass} style={hintStyle}>{hint}</p>}
              <input type={type} name={name} required={required} className={fieldClass} style={fieldStyle} />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <label htmlFor="teamSize" className={labelClass} style={labelStyle}>People In Your Business</label>
            <p className={hintClass} style={hintStyle}>This helps us keep the directory to independent potters, studios, and small shops.</p>
            <select id="teamSize" name="teamSize" required defaultValue="" className={fieldClass} style={fieldStyle}>
              <option value="" disabled>Select one</option>
              <option value="Just me">Just me</option>
              <option value="2-10">2 to 10</option>
              <option value="11-50">11 to 50</option>
              <option value="50+">More than 50</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClass} style={labelStyle}>Short Bio (optional)</label>
            <p className={hintClass} style={hintStyle}>200 characters max, about 2 sentences describing your work or style.</p>
            <textarea name="bio" rows={4} maxLength={200} className={`${fieldClass} resize-none`} style={fieldStyle} />
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" name="offersClasses" id="offersClasses" value="yes" className="w-4 h-4 accent-[var(--c-primary)]" />
            <label htmlFor="offersClasses" className="text-xs tracking-widest uppercase cursor-pointer" style={labelStyle}>
              I also offer pottery classes or workshops
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" name="offersKilnSharing" id="offersKilnSharing" value="yes" className="w-4 h-4 accent-[var(--c-primary)]" />
            <label htmlFor="offersKilnSharing" className="text-xs tracking-widest uppercase cursor-pointer" style={labelStyle}>
              I offer community kiln access or kiln sharing
            </label>
          </div>

          <div className="flex items-start gap-3 border-t pt-6" style={{ borderColor: "var(--c-surface)" }}>
            <input type="checkbox" name="independent" id="independent" value="yes" required className="w-4 h-4 mt-1 accent-[var(--c-accent)]" />
            <label htmlFor="independent" className="text-sm cursor-pointer" style={{ color: "var(--c-primary)", fontFamily: "system-ui, sans-serif" }}>
              This is an independent potter, studio, guild, or small shop. It is not a national chain, franchise, or large corporation.
            </label>
          </div>

          {status === "error" && (
            <p className="text-sm" style={{ color: "var(--c-accent-deep)", fontFamily: "system-ui, sans-serif" }}>
              Something went wrong, please try again or email us at submissions@potterypost.directory
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm self-start bg-[var(--c-accent)] hover:bg-[var(--c-accent-mid)] transition-colors"
            style={{ color: "var(--c-light)", fontFamily: "system-ui, sans-serif", opacity: status === "sending" ? 0.6 : 1 }}
          >
            {status === "sending"
              ? (paidMode ? "Redirecting to payment..." : "Sending...")
              : (paidMode ? "Continue to payment" : "Submit listing")}
          </button>
        </form>
      )}
    </section>
    </>
  );
}
