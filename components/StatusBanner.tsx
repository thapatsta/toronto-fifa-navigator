"use client";

import { useEffect, useState } from "react";
import { getCurrentStatus } from "@/lib/utils";
import { AlertCircle, CheckCircle, Star } from "lucide-react";

export default function StatusBanner() {
  const [status, setStatus] = useState<ReturnType<typeof getCurrentStatus> | null>(null);

  useEffect(() => {
    setStatus(getCurrentStatus());
  }, []);

  if (!status) return null;

  if (status.type === "match_day") {
    return (
      <div className="bg-accent text-white px-4 py-2 text-center text-sm font-semibold flex items-center justify-center gap-2">
        <Star size={14} fill="white" />
        <span>MATCH DAY — {status.message}</span>
        <Star size={14} fill="white" />
      </div>
    );
  }

  if (status.type === "fan_festival") {
    return (
      <div className="bg-transit text-white px-4 py-2 text-center text-sm font-semibold flex items-center justify-center gap-2">
        <CheckCircle size={14} />
        <span>Fan Festival Open Today — Fort York & The Bentway</span>
      </div>
    );
  }

  return null;
}
