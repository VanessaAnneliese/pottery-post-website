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

// Bind the last two words of a line with a non-breaking space so a quote never
// ends with a single word alone on its last line.
function noWidow(line: string): string {
  const t = line.replace(/\s+$/, "");
  const i = t.lastIndexOf(" ");
  return i === -1 ? t : `${t.slice(0, i)} ${t.slice(i + 1)}`;
}

export default function QuoteBlock({
  quote,
  className,
  fitContent,
  wide,
}: {
  quote: ReactNode;
  className?: string;
  fitContent?: boolean;
  wide?: boolean;
}) {
  let content: ReactNode;
  if (typeof quote === "string") {
    const lines = splitQuote(quote, 3);
    content = lines.map((line, i) => (
      <Fragment key={i}>
        {i > 0 && <><span className="hidden md:inline"><br /></span>{" "}</>}
        {i === lines.length - 1 ? noWidow(line) : line}
      </Fragment>
    ));
  } else {
    content = quote;
  }

  const minH = fitContent ? "" : "min-h-[300px] md:min-h-[400px]";
  const maxW = wide ? "max-w-4xl" : "max-w-3xl";

  return (
    <section className={`relative px-6 text-center flex flex-col items-center justify-center ${minH} ${className ?? "pt-16 md:pt-20 pb-12 md:pb-16"}`} style={{ background: "var(--c-surface-soft)" }}>
      <div className="absolute inset-x-0 top-0 h-48 md:h-72 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--c-light), transparent)", zIndex: 0 }} />
      <div className="absolute inset-x-0 bottom-0 h-48 md:h-72 pointer-events-none" style={{ background: "linear-gradient(to top, var(--c-light), transparent)", zIndex: 0 }} />
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 pointer-events-none" style={{ background: "linear-gradient(to right, var(--c-light), transparent)", zIndex: 0 }} />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 pointer-events-none" style={{ background: "linear-gradient(to left, var(--c-light), transparent)", zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          className={`${parisienne.className} text-3xl md:text-[2.75rem] ${maxW} mx-auto leading-relaxed`}
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
