import type { Metadata } from "next";
import Link from "next/link";
import QuoteBlock from "@/components/QuoteBlock";
import { foundersCollection } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Pottery Gallery | Handmade Ceramics Curated with Love",
  description:
    "A curated gallery of handmade pottery, gathered with love by The Pottery Post. Collections rotate in early Spring and Fall. Every piece is verified in person.",
  alternates: { canonical: "https://www.potterypost.directory/gallery" },
  openGraph: {
    title: "Pottery Gallery | Handmade Ceramics Curated with Love | Pottery Post",
    description:
      "A curated gallery of handmade pottery, gathered with love. Collections rotate in early Spring and Fall. Every piece is verified in person.",
    url: "https://www.potterypost.directory/gallery",
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Pottery Gallery",
  url: "https://www.potterypost.directory/gallery",
  description:
    "A curated gallery of handmade pottery, gathered with love by The Pottery Post and verified in person. The current collection is the Founder's Collection.",
  isPartOf: { "@type": "WebSite", name: "Pottery Post", url: "https://www.potterypost.directory" },
  image: foundersCollection.map((p) => ({
    "@type": "ImageObject",
    contentUrl: `https://www.potterypost.directory${p.src}`,
    caption: p.alt,
    creditText: p.photoCredit ?? "Anneliese Designs",
  })),
};

const galleryBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.potterypost.directory" },
    { "@type": "ListItem", position: 2, name: "Pottery Gallery", item: "https://www.potterypost.directory/gallery" },
  ],
};

export default function GalleryPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryBreadcrumbSchema) }} />
    <QuoteBlock quote={<>There is a quiet in<span className="hidden md:inline"><br /></span>{" "}beautiful pottery that settles<span className="hidden md:inline"><br /></span>{" "}something inside you.</>} className="pt-14 md:pt-32 pb-8 md:pb-16" />
    <section className="pt-[38px] md:pt-[70px] pb-20 px-6 max-w-6xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--c-muted)", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Featured
      </p>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", color: "var(--c-primary)" }}>Pottery Gallery</h1>
      <p className="mb-4 max-w-lg" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
        Each piece here was made by hand, by someone who cares deeply about what they make. They were gathered with love. This first collection is the Founder&rsquo;s Collection. Future collections will be selected from submissions by potters and list each potter by name, with a link to their Pottery Directory listing.
      </p>
      <p className="mb-12 max-w-lg text-sm italic" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
        Please note: none of these pieces are for sale at Pottery Post.
      </p>
      <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--c-accent)", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Gathered with Love
      </p>
      <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: "Georgia, serif", color: "var(--c-accent)" }}>Founder&rsquo;s Collection</h2>
      <p className="mb-8 max-w-lg text-sm italic" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
        This is an early selection from a much larger collection. More pieces are being photographed and will be added.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {foundersCollection.map((piece) => (
          <figure key={piece.src}>
            <img
              src={piece.src}
              alt={piece.alt}
              loading="lazy"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-sm"
              style={{ aspectRatio: "1 / 1", objectFit: "cover", background: "var(--c-white)" }}
            />
            {piece.maker && (
              <figcaption className="mt-1.5 text-xs" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
                Made by {piece.maker}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>

    {/* Submit Your Work */}
    <section className="py-16 md:py-20 px-6 max-w-4xl mx-auto border-b" style={{ borderColor: "var(--c-surface)" }}>
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--c-muted)", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Open to Submissions
      </p>
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>Submit Your Work</h2>
      <p className="mb-8 max-w-lg" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
        Each new collection is open to submissions. If you&rsquo;re a potter and would like your work considered, here&rsquo;s how it works: begin by sending us a photograph and a short description of your piece. If it&rsquo;s selected for the collection, we&rsquo;ll be in touch, chosen pieces are shipped to Pottery Post by a set date, where each one is verified in person before it goes live. Because everything in this gallery is the real thing: made by hand, verified by eye.
      </p>
      <Link
        href="/gallery/submit"
        className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm inline-block bg-[var(--c-accent)] hover:bg-[var(--c-accent-mid)] transition-colors"
        style={{ color: "var(--c-light)", fontFamily: "system-ui, sans-serif" }}
      >
        Submit a piece
      </Link>
    </section>

    {/* The Archive */}
    <section className="py-16 md:py-20 px-6 max-w-4xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--c-muted)", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        Past Collections
      </p>
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>The Archive</h2>
      <p className="mb-8 max-w-lg" style={{ color: "var(--c-muted)", fontFamily: "system-ui, sans-serif" }}>
        Every past gallery is preserved here and is a growing record of the makers and pieces that have been part of the Pottery Post.
      </p>
      <Link
        href="/gallery/archive"
        className="px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm inline-block bg-[var(--c-accent)] hover:bg-[var(--c-accent-mid)] transition-colors"
        style={{ color: "var(--c-light)", fontFamily: "system-ui, sans-serif" }}
      >
        View past galleries
      </Link>
    </section>
    <QuoteBlock quote={<>Well-made pottery stops you.<span className="hidden md:inline"><br /></span>{" "}You don&rsquo;t know why.<span className="hidden md:inline"><br /></span>{" "}You just can&rsquo;t look away.</>} />
    </>
  );
}
