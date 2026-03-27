import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBanner from "@/components/StatusBanner";

export const metadata: Metadata = {
  title: {
    default: "Toronto FIFA Navigator — Your World Cup 2026 Guide",
    template: "%s | Toronto FIFA Navigator",
  },
  description:
    "Road closures, transit changes, match schedule, and visitor guide for FIFA World Cup 2026 in Toronto. Find out what's affected and how to get around.",
  metadataBase: new URL("https://torontofifa.guide"),
  openGraph: {
    title: "Toronto FIFA Navigator",
    description: "Everything you need to navigate FIFA World Cup 2026 in Toronto.",
    url: "https://torontofifa.guide",
    siteName: "Toronto FIFA Navigator",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toronto FIFA Navigator",
    description: "Navigate FIFA World Cup 2026 in Toronto — closures, transit, matches, and more.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <StatusBanner />
        <Navbar />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
