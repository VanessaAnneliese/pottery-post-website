import { parisienne } from "@/lib/fonts";
import { ReactNode } from "react";

export default function QuoteBlock({ quote, className }: { quote: ReactNode; className?: string }) {
  return (
    <section className={`relative px-6 text-center flex flex-col items-center justify-center min-h-[400px] ${className ?? ""}`} style={{ background: "var(--c-surface-soft)" }}>
      <div className="absolute inset-x-0 top-0 h-48 md:h-72 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--c-light), transparent)", zIndex: 0 }} />
      <div className="absolute inset-x-0 bottom-0 h-48 md:h-72 pointer-events-none" style={{ background: "linear-gradient(to top, var(--c-light), transparent)", zIndex: 0 }} />
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 pointer-events-none" style={{ background: "linear-gradient(to right, var(--c-light), transparent)", zIndex: 0 }} />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 pointer-events-none" style={{ background: "linear-gradient(to left, var(--c-light), transparent)", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          className={`${parisienne.className} text-4xl md:text-5xl max-w-3xl mx-auto leading-relaxed`}
          style={{ color: "var(--c-primary-soft)" }}
        >
          {quote}
        </p>
        <p className="mt-8 text-xs tracking-widest uppercase" style={{ color: "var(--c-muted)", letterSpacing: "0.4em", fontFamily: "system-ui, sans-serif" }}>
          Pottery Post
        </p>
      </div>
    </section>
  );
}
