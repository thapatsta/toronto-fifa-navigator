import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBanner from "@/components/StatusBanner";
import AnalyticsPageView from "@/components/AnalyticsPageView";

const GA_MEASUREMENT_ID = "G-SJ5CZYMJ89";

export const metadata: Metadata = {
  title: {
    default: "Toronto Football Guide — FIFA World Cup 2026 in Toronto",
    template: "%s | Toronto Football Guide",
  },
  description:
    "Road closures, transit changes, match schedule, and visitor guide for FIFA World Cup 2026 in Toronto. Interactive map and match day guides.",
  metadataBase: new URL("https://torontofootball.guide"),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: [{ url: "/icon.svg" }],
  },
  openGraph: {
    title: "Toronto Football Guide — FIFA World Cup 2026 in Toronto",
    description: "Road closures, transit, match schedule & visitor guide for World Cup 2026 in Toronto.",
    url: "https://torontofootball.guide",
    siteName: "Toronto Football Guide",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://torontofootball.guide/og-image.png",
        width: 1200,
        height: 630,
        alt: "Toronto Football Guide — Road closures and transit for FIFA World Cup 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toronto Football Guide — FIFA World Cup 2026 in Toronto",
    description: "Road closures, transit, match schedule & visitor guide for World Cup 2026 in Toronto.",
    images: ["https://torontofootball.guide/og-image.png"],
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
        {/* ── Google AdSense ── */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5385617539737043"
          crossOrigin="anonymous"
        />

        {/* ── Google Analytics 4 — dangerouslySetInnerHTML for Cloudflare Pages compatibility ── */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <StatusBanner />
        <Navbar />
        <Suspense fallback={null}>
          <AnalyticsPageView />
        </Suspense>
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
