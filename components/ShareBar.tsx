"use client";

import { useState } from "react";

export default function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const links: { label: string; href: string; external: boolean; icon: React.ReactNode }[] = [
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      external: true,
      icon: (<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />),
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
      external: true,
      icon: (<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />),
    },
    {
      label: "Share by email",
      href: `mailto:?subject=${t}&body=${u}`,
      external: false,
      icon: (<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />),
    },
  ];

  function copy() {
    try {
      navigator.clipboard?.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      });
    } catch {}
  }

  return (
    <div className="flex items-center gap-4 flex-wrap" style={{ fontFamily: "system-ui, sans-serif" }}>
      <span className="text-xs tracking-widest uppercase" style={{ color: "var(--c-muted)", letterSpacing: "0.3em" }}>
        Share this story
      </span>
      <div className="flex items-center gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            aria-label={l.label}
            title={l.label}
            {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="text-[var(--c-muted)] hover:text-[var(--c-accent)] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">{l.icon}</svg>
          </a>
        ))}
        <button
          type="button"
          onClick={copy}
          aria-label="Copy link"
          title="Copy link"
          className={`inline-flex items-center gap-1.5 transition-colors ${copied ? "text-[var(--c-accent)]" : "text-[var(--c-muted)] hover:text-[var(--c-accent)]"}`}
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          {copied && (<span className="text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>Copied</span>)}
        </button>
      </div>
    </div>
  );
}
