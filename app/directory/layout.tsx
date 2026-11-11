import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pottery Directory | Find Potters, Guilds, Classes & Supply Shops",
  description:
    "Browse The Pottery Post's pottery directory. Find potters, pottery guilds, pottery classes, and pottery supply shops across Canada, the United States, Europe, and Australia.",
  openGraph: {
    title: "Pottery Directory | Find Potters, Guilds, Classes & Supply Shops | Pottery Post",
    description:
      "Find potters, pottery guilds, pottery classes, and pottery supply shops across Canada, the United States, Europe, and Australia.",
    url: "https://www.potterypost.ca/directory",
  },
  alternates: {
    canonical: "https://www.potterypost.ca/directory",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Pottery Directory",
  url: "https://www.potterypost.ca/directory",
  description:
    "A free, hand-reviewed directory of potters, pottery guilds, pottery classes, community kilns, and pottery supply shops across Canada, the United States, Europe, and Australia.",
  isPartOf: {
    "@type": "WebSite",
    name: "Pottery Post",
    url: "https://www.potterypost.ca",
  },
  about: [
    { "@type": "Thing", name: "Potters" },
    { "@type": "Thing", name: "Pottery guilds" },
    { "@type": "Thing", name: "Pottery classes" },
    { "@type": "Thing", name: "Community kilns" },
    { "@type": "Thing", name: "Pottery supply shops" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.potterypost.ca" },
    { "@type": "ListItem", position: 2, name: "Pottery Directory", item: "https://www.potterypost.ca/directory" },
  ],
};

export default function DirectoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
