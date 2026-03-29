"use client";

import Link from "next/link";
import { getDirectionsUrl } from "@/lib/tournament";
import { Navigation, MapPin, Utensils } from "lucide-react";
import { useTournamentPrefs } from "@/hooks/useTournamentPrefs";
import { matches } from "@/data/matches";

/**
 * Mobile-only sticky action bar for the /matches page.
 * Sits just above the global bottom nav (bottom: 4rem = 64px nav height).
 * Shows: Save Next Match · Directions · Match Day · Bars
 */
export default function MatchPageBar() {
  const { prefs, loaded, toggleSavedMatch } = useTournamentPrefs();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextMatch = matches.find((m) => new Date(m.date + "T00:00:00") >= today);

  const isSaved = loaded && nextMatch ? prefs.savedMatchIds.includes(nextMatch.id) : false;

  return (
    /* md:hidden — only renders on mobile */
    <div
      className="md:hidden"
      style={{
        position: "fixed",
        bottom: "64px", /* sits just above the 64px global bottom nav */
        left: 0,
        right: 0,
        zIndex: 40,
        padding: "0.5rem 0.75rem",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.4rem",
          background: "var(--navy)",
          borderRadius: "14px",
          padding: "0.5rem 0.6rem",
          boxShadow: "0 4px 24px rgba(13,27,42,0.25)",
          pointerEvents: "all",
        }}
      >
        {/* Save next match */}
        {loaded && nextMatch && (
          <button
            onClick={() => toggleSavedMatch(nextMatch.id)}
            aria-label={isSaved ? "Unsave next match" : "Save next match"}
            style={{
              flex: 1,
              display: "flex", flexDirection: "column", alignItems: "center", gap: "2px",
              padding: "0.35rem 0.25rem", borderRadius: "10px",
              background: isSaved ? "rgba(232,160,32,0.2)" : "rgba(255,255,255,0.1)",
              border: "none", cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            <span style={{ fontSize: "1rem" }}>{isSaved ? "✓" : "+"}</span>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.55rem", color: isSaved ? "var(--gold)" : "rgba(255,255,255,0.7)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {isSaved ? "Saved" : "Save"}
            </span>
          </button>
        )}

        {/* Directions */}
        <a
          href={getDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            display: "flex", flexDirection: "column", alignItems: "center", gap: "2px",
            padding: "0.35rem 0.25rem", borderRadius: "10px",
            background: "rgba(255,255,255,0.1)",
            textDecoration: "none",
          }}
        >
          <Navigation size={16} color="white" />
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.55rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Directions
          </span>
        </a>

        {/* Match Day */}
        <Link
          href="/match-day"
          style={{
            flex: 1,
            display: "flex", flexDirection: "column", alignItems: "center", gap: "2px",
            padding: "0.35rem 0.25rem", borderRadius: "10px",
            background: "rgba(255,255,255,0.1)",
            textDecoration: "none",
          }}
        >
          <MapPin size={16} color="white" />
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.55rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Match Day
          </span>
        </Link>

        {/* Bars */}
        <Link
          href="/eat-watch"
          style={{
            flex: 1,
            display: "flex", flexDirection: "column", alignItems: "center", gap: "2px",
            padding: "0.35rem 0.25rem", borderRadius: "10px",
            background: "rgba(255,255,255,0.1)",
            textDecoration: "none",
          }}
        >
          <Utensils size={16} color="white" />
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.55rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Bars
          </span>
        </Link>
      </div>
    </div>
  );
}
