"use client";

import { useEffect, useState } from "react";
import { getCurrentStatus } from "@/lib/utils";
import { getDirectionsUrl } from "@/lib/tournament";
import { trackEvent } from "@/lib/analytics";

export default function StatusBanner() {
  const [status, setStatus] = useState<ReturnType<typeof getCurrentStatus> | null>(null);

  useEffect(() => {
    setStatus(getCurrentStatus());
  }, []);

  if (!status) return null;

  if (status.type === "match_day") {
    return (
      <div
        style={{
          background: "var(--red)",
          color: "white",
          padding: "0.45rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <span
          className="label"
          style={{ fontSize: "0.62rem", letterSpacing: "0.14em" }}
        >
          ⚽ MATCH DAY — {status.message}
        </span>
        <a
          href={getDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("directions_click", { source: "status_banner" })}
          className="label"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            background: "rgba(255,255,255,0.2)",
            color: "white",
            padding: "2px 10px",
            borderRadius: "99px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          📍 Get Directions →
        </a>
      </div>
    );
  }

  if (status.type === "fan_festival") {
    return (
      <div
        className="label"
        style={{
          background: "var(--gold)",
          color: "var(--navy)",
          padding: "0.4rem 1rem",
          textAlign: "center",
          fontSize: "0.62rem",
          letterSpacing: "0.14em",
        }}
      >
        🎪 FAN FESTIVAL OPEN TODAY — FORT YORK & THE BENTWAY
      </div>
    );
  }

  return null;
}
