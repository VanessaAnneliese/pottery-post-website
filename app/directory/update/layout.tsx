import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Your Listing — Pottery Directory",
  description:
    "Update your existing listing in The Pottery Post pottery directory. Change your name, location, website, bio, or request removal.",
  openGraph: {
    title: "Update Your Listing — Pottery Directory | Pottery Post",
    description:
      "Update your existing listing in The Pottery Post pottery directory.",
    url: "https://www.potterypost.ca/directory/update",
  },
  alternates: {
    canonical: "https://www.potterypost.ca/directory/update",
  },
  robots: {
    index: false,
  },
};

export default function UpdateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
