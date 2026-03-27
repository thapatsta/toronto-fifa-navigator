import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Road Closures & Transit Map — FIFA World Cup 2026 Toronto",
  description:
    "Interactive map of road closures, transit changes, and restrictions for FIFA World Cup 2026 in Toronto. Toggle between match day and non-match day views.",
};

export default function ClosuresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
