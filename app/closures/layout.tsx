import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Match Day — Closures, Transit & Routes",
  description:
    "This page has moved. Closures, transit, routes, and what to expect around Toronto Stadium on FIFA World Cup 2026 match days.",
};

export default function ClosuresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
