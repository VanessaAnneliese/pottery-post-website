import { parisienne } from "@/lib/fonts";
import { Fragment, ReactNode } from "react";

// Greedily wrap words into lines no wider than `width` characters, keeping whole
// words together (so no orphaned single words).
function wrap(words: string[], width: number): string[] {
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    if (!cur) cur = w;
    else if ((cur + " " + w).length <= width) cur += " " + w;
    else {
      lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

// Break a quote into at least `minLines` lines, same copy, only splitting between
// whole words. Starts from a comfortable line width and tightens it until the
// quote spans at least the minimum number of lines.
function splitQuote(text: string, minLines = 3): string[] {
  const words = text.trim().split(/\s+/);
  if (words.length <= minLines) return [text.trim()];

  let width = 34;
  let lines = wrap(words, width);
  while (lines.length < minLines && width > 6) {
    width -= 3;
    lines = wrap(words, width);
  }
  return lines;
}

export default function QuoteBlock({ quote, className }: { quote: ReactNode; className?: string }) {
  const content =
    typeof quote === "string"
      ? splitQuote(quote, 3).map((line, i) => (
          <Fragment key={i}>
            {i > 0 && <><span className="hidden md:inline"><br /></span>{" "}</>}
            {line}
          </Fragment>
        ))
      : quote;

  return (
    <section className={`relative px-6 text-center flex flex-col items-center justify-center min-h-[400px] ${className ?? "pt-16 md:pt-20 pb-12 md:pb-16"}`} style={{ background: "var(--c-surface-soft)" }}>
      <div className="absolute inset-x-0 top-0 h-48 md:h-72 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--c-light), transparent)", zIndex: 0 }} />
      <div className="absolute inset-x-0 bottom-0 h-48 md:h-72 pointer-events-none" style={{ background: "linear-gradient(to top, var(--c-light), transparent)", zIndex: 0 }} />
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 pointer-events-none" style={{ background: "linear-gradient(to right, var(--c-light), transparent)", zIndex: 0 }} />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 pointer-events-none" style={{ background: "linear-gradient(to left, var(--c-light), transparent)", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          className={`${parisienne.className} text-4xl md:text-5xl max-w-3xl mx-auto leading-relaxed`}
          style={{ color: "var(--c-primary-soft)" }}
        >
          {content}
        </p>
        <p className="mt-8 text-xs tracking-widest uppercase" style={{ color: "var(--c-muted)", letterSpacing: "0.4em", fontFamily: "system-ui, sans-serif" }}>
          Pottery Post
        </p>
      </div>
    </section>
  );
}
