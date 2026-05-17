import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Work — Pottery Gallery",
  description:
    "Submit your handmade pottery for consideration in The Pottery Post gallery. Each collection is open to submissions. Pieces are verified in person before going live.",
  openGraph: {
    title: "Submit Your Work — Pottery Gallery | Pottery Post",
    description:
      "Submit your handmade pottery for consideration in The Pottery Post gallery. Each collection is open to submissions.",
    url: "https://www.potterypost.ca/gallery/submit",
  },
  alternates: {
    canonical: "https://www.potterypost.ca/gallery/submit",
  },
};

export default function GallerySubmitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
