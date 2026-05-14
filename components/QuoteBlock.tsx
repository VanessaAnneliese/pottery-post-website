import { parisienne } from "@/lib/fonts";

export default function QuoteBlock({ quote, className }: { quote: string; className?: string }) {
  return (
    <section className={`relative px-6 text-center flex flex-col items-center justify-center min-h-[400px] ${className ?? ""}`} style={{ background: "#EDE4D5" }}>
      <div className="absolute inset-x-0 top-0 h-48 md:h-72 pointer-events-none" style={{ background: "linear-gradient(to bottom, #F5F0E8, transparent)", zIndex: 0 }} />
      <div className="absolute inset-x-0 bottom-0 h-48 md:h-72 pointer-events-none" style={{ background: "linear-gradient(to top, #F5F0E8, transparent)", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          className={`${parisienne.className} text-4xl md:text-5xl max-w-3xl mx-auto leading-relaxed`}
          style={{ color: "#856E62" }}
        >
          {quote}
        </p>
        <p className="mt-8 text-xs tracking-widest uppercase" style={{ color: "#9E8572", letterSpacing: "0.4em", fontFamily: "system-ui, sans-serif" }}>
          Pottery Post
        </p>
      </div>
    </section>
  );
}
