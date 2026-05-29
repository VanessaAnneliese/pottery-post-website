import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Your Listing | Pottery Directory",
  description:
    "Add your pottery studio, guild, classes, or supply shop to The Pottery Post's directory. Free to list. Every submission is reviewed by hand.",
  openGraph: {
    title: "Add Your Listing | Pottery Directory | Pottery Post",
    description:
      "Add your pottery studio, guild, classes, or supply shop to The Pottery Post's directory. Free to list. Every submission is reviewed by hand.",
    url: "https://www.potterypost.ca/directory/submit",
  },
  alternates: {
    canonical: "https://www.potterypost.ca/directory/submit",
  },
};

export default function SubmitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
