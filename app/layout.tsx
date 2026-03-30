import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBanner from "@/components/StatusBanner";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: {
    default: "Toronto Football Guide — FIFA World Cup 2026 in Toronto",
    template: "%s | Toronto Football Guide",
  },
  description:
    "Match schedules, match-day transit, road closures, bars, and visitor essentials for FIFA World Cup 2026 in Toronto.",
  metadataBase: new URL("https://torontofootball.guide"),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: [{ url: "/icon.svg" }],
  },
  openGraph: {
    title: "Toronto Football Guide",
    description: "Everything you need for FIFA World Cup 2026 in Toronto — matches, match day, bars, transit, and city essentials.",
    url: "https://torontofootball.guide",
    siteName: "Toronto Football Guide",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://torontofootball.guide/main-image.svg",
        width: 1200,
        height: 630,
        alt: "Toronto Football Guide — FIFA World Cup 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toronto Football Guide",
    description: "FIFA World Cup 2026 in Toronto — match schedules, match-day transit, bars, closures, and visitor essentials.",
    images: ["https://torontofootball.guide/main-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ── Google Analytics 4 ── */}
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className="min-h-screen flex flex-col">
        <StatusBanner />
        <Navbar />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
