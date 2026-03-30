"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export default function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const fullPath = query ? `${pathname}?${query}` : pathname;

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, { page_path: fullPath });
    }
  }, [pathname, searchParams]);

  return null;
}
