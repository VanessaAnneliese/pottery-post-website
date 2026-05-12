import { parisienne } from "@/lib/fonts";

export default function QuoteBlock({ quote }: { quote: string }) {
  return (
    <section className="px-6 text-center flex flex-col items-center justify-center min-h-[400px]" style={{ background: "#EDE4D5" }}>
      <p
        className={`${parisienne.className} text-4xl md:text-5xl max-w-3xl mx-auto leading-relaxed`}
        style={{ color: "#856E62" }}
      >
        {quote}
      </p>
      <p className="mt-8 text-xs tracking-widest uppercase" style={{ color: "#9E8572", letterSpacing: "0.4em", fontFamily: "system-ui, sans-serif" }}>
        Pottery Post
      </p>
    </section>
  );
}
