import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Match Day — Closures, Transit & Routes",
  description:
    "Closures, transit, routes, and what to expect around Toronto Stadium on FIFA World Cup 2026 match days. Plan your journey with interactive maps and route presets.",
};

export default function MatchDayLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
