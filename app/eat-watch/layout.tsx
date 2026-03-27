import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eat & Watch — Restaurants & Watch Parties for FIFA 2026 Toronto",
  description:
    "Eat like the teams playing in Toronto. Find authentic restaurants for every nation plus the best bars and watch parties for FIFA World Cup 2026.",
};

export default function EatWatchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
