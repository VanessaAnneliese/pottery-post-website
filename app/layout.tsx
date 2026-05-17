import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollJump from "@/components/ScrollJump";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.potterypost.ca"),
  title: {
    default: "Pottery Post — For Makers and Admirers",
    template: "%s | Pottery Post",
  },
  description:
    "A directory of potters, pottery guilds, pottery classes, and pottery supply shops across Canada, the United States, Europe, and Australia — and a gallery that celebrates the pieces they make.",
  openGraph: {
    type: "website",
    siteName: "Pottery Post",
    title: "Pottery Post — For Makers and Admirers",
    description:
      "A directory of potters, pottery guilds, pottery classes, and pottery supply shops across Canada, the United States, Europe, and Australia — and a gallery that celebrates the pieces they make.",
    url: "https://www.potterypost.ca",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pottery Post — For Makers and Admirers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pottery Post — For Makers and Admirers",
    description:
      "A directory of potters, pottery guilds, pottery classes, and pottery supply shops across Canada, the United States, Europe, and Australia.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.potterypost.ca",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pottery Post",
  url: "https://www.potterypost.ca",
  description:
    "A directory of potters, pottery guilds, pottery classes, and pottery supply shops across Canada, the United States, Europe, and Australia — and a gallery that celebrates the pieces they make.",
  email: "hello@potterypost.ca",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Whitby",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pottery Post",
  url: "https://www.potterypost.ca",
  description: "A directory of potters, pottery guilds, pottery classes, and pottery supply shops across Canada, the United States, Europe, and Australia.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.potterypost.ca/directory?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ background: "#F5F0E8", color: "#3B2314" }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollJump />
      </body>
    </html>
  );
}
