import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBanner from "@/components/StatusBanner";

export const metadata: Metadata = {
  title: {
    default: "Toronto Football Guide — FIFA World Cup 2026 in Toronto",
    template: "%s | Toronto Football Guide",
  },
  description:
    "Match schedules, match-day transit, road closures, bars, and visitor essentials for FIFA World Cup 2026 in Toronto.",
  metadataBase: new URL("https://torontofootball.guide"),
  openGraph: {
    title: "Toronto Football Guide",
    description: "Everything you need for FIFA World Cup 2026 in Toronto — matches, match day, bars, transit, and city essentials.",
    url: "https://torontofootball.guide",
    siteName: "Toronto Football Guide",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toronto Football Guide",
    description: "FIFA World Cup 2026 in Toronto — match schedules, match-day transit, bars, closures, and visitor essentials.",
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
