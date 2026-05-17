import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pottery Directory — Find Potters, Guilds, Classes & Supply Shops",
  description:
    "Browse The Pottery Post's pottery directory. Find potters, pottery guilds, pottery classes, and pottery supply shops across Canada, the United States, Europe, and Australia.",
  openGraph: {
    title: "Pottery Directory — Find Potters, Guilds, Classes & Supply Shops | Pottery Post",
    description:
      "Find potters, pottery guilds, pottery classes, and pottery supply shops across Canada, the United States, Europe, and Australia.",
    url: "https://www.potterypost.ca/directory",
  },
  alternates: {
    canonical: "https://www.potterypost.ca/directory",
  },
};

export default function DirectoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
