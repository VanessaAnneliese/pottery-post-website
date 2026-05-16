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
  title: "Pottery Post — For Makers and Admirers",
  description: "A directory of potters, pottery guilds, pottery classes, and pottery supply shops across Canada, the United States, Europe, and Australia — and a gallery that celebrates the pieces they make.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col" style={{ background: "#F5F0E8", color: "#3B2314" }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollJump />
      </body>
    </html>
  );
}
