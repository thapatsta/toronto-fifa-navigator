"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// This page has been renamed to "Match Day" — redirect immediately.
export default function ClosuresRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/match-day");
  }, [router]);
  return null;
}
