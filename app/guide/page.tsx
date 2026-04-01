import type { Metadata } from "next";
import GuidePageClient from "@/components/GuidePageClient";

export const metadata: Metadata = {
  title: "Visitor Guide — World Cup Toronto 2026",
  description:
    "Everything first-time visitors need to know for World Cup Toronto — airports, transit, neighbourhoods, weather, payments, and match-day movement.",
};

export default function GuidePage() {
  return <GuidePageClient />;
}
