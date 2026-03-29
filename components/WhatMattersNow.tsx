"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getTournamentStatus, TournamentStatus } from "@/lib/tournament";
import { ArrowRight } from "lucide-react";

export default function WhatMattersNow() {
  const [status, setStatus] = useState<TournamentStatus | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus(getTournamentStatus());
  }, []);

  if (!status) return null;

  if (status.state === "match_day") {
    return <MatchDayModule />;
  }

  if (status.state === "tournament_active") {
    const { nextMatch, daysUntilNext } = status;
    return <UpcomingMatchModule nextMatch={nextMatch} daysUntilNext={daysUntilNext} />;
  }

  if (status.state === "pre_tournament") {
    const { nextMatch, daysUntilNext } = status;
    // Show upcoming-match module when within 7 days; otherwise quiet mode
    if (nextMatch && daysUntilNext !== null && daysUntilNext <= 7) {
      return <UpcomingMatchModule nextMatch={nextMatch} daysUntilNext={daysUntilNext} />;
    }
    return <QuietModule daysUntilNext={daysUntilNext} />;
  }

  return null;
}

/* ─────────────────────────────────────────
   QUIET MODE — pre-tournament, nothing imminent
───────────────────────────────────────── */
function QuietModule({ daysUntilNext }: { daysUntilNext: number | null }) {
  return (
    <section className="px-4 max-w-2xl mx-auto">
      <div
        style={{
          borderRadius: "18px",
          background: "var(--card)",
          border: "1.5px solid var(--border)",
          padding: "1.1rem 1.2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <div>
          <p className="label" style={{ fontSize: "0.58rem", color: "var(--muted)", marginBottom: "0.3rem" }}>
            WORLD CUP TORONTO{daysUntilNext !== null ? ` · BEGINS IN ${daysUntilNext} DAYS` : ""}
          </p>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "var(--navy)",
              lineHeight: 1.25,
            }}
          >
            See the six Toronto matches, where to stay, how to get around, and where to watch.
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Link
            href="/matches"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.3rem",
              padding: "0.5rem 1rem", borderRadius: "10px",
              background: "var(--navy)", color: "white",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            See Match Schedule <ArrowRight size={12} />
          </Link>
          <Link
            href="/guide"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.3rem",
              padding: "0.5rem 1rem", borderRadius: "10px",
              background: "transparent", color: "var(--navy)",
              border: "1.5px solid var(--border)",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Start Planning
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   UPCOMING-MATCH MODE — match approaching
───────────────────────────────────────── */
function UpcomingMatchModule({
  nextMatch,
  daysUntilNext,
}: {
  nextMatch: TournamentStatus["nextMatch"];
  daysUntilNext: number | null;
}) {
  if (!nextMatch) return null;

  const dateStr = new Date(nextMatch.date + "T12:00:00").toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
  });

  return (
    <section className="px-4 max-w-2xl mx-auto">
      <div
        style={{
          borderRadius: "18px",
          background: "var(--card)",
          border: "2px solid var(--navy)",
          overflow: "hidden",
        }}
      >
        {/* Header bar */}
        <div
          style={{
            background: "var(--navy)",
            padding: "0.45rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p className="label" style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.65)" }}>
            NEXT TORONTO MATCH
          </p>
          {daysUntilNext !== null && (
            <span
              className="label"
              style={{
                background: "var(--red)",
                color: "white",
                fontSize: "0.55rem",
                padding: "2px 8px",
                borderRadius: "99px",
              }}
            >
              IN {daysUntilNext} DAY{daysUntilNext === 1 ? "" : "S"}
            </span>
          )}
        </div>

        {/* Match info */}
        <div style={{ padding: "0.9rem 1rem 0.8rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.35rem" }}>
            <span style={{ fontSize: "1.8rem", lineHeight: 1 }}>{nextMatch.homeFlag}</span>
            <div>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--navy)",
                  lineHeight: 1.1,
                }}
              >
                {nextMatch.homeTeam} vs {nextMatch.awayShort ?? nextMatch.awayTeam} {nextMatch.awayFlag}
              </p>
              <p style={{ fontSize: "0.75rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "2px" }}>
                {dateStr} · {nextMatch.time} · Toronto Stadium
              </p>
            </div>
          </div>

          <p style={{ fontSize: "0.78rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.85rem" }}>
            Closures, transit, and best pre-match spots.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <Link
              href="/match-day"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                padding: "0.5rem 1rem", borderRadius: "10px",
                background: "var(--navy)", color: "white",
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Plan Match Day <ArrowRight size={12} />
            </Link>
            <Link
              href="/match-day"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                padding: "0.5rem 1rem", borderRadius: "10px",
                background: "transparent", color: "var(--navy)",
                border: "1.5px solid var(--border)",
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              See Closures
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   MATCH-DAY MODE — active today
───────────────────────────────────────── */
function MatchDayModule() {
  return (
    <section className="px-4 max-w-2xl mx-auto">
      <div
        style={{
          borderRadius: "18px",
          background: "var(--card)",
          border: "2px solid var(--red)",
          overflow: "hidden",
        }}
      >
        {/* Header bar */}
        <div style={{ background: "var(--red)", padding: "0.45rem 1rem" }}>
          <p className="label" style={{ fontSize: "0.58rem", color: "white" }}>
            ⚽ MATCH DAY IN TORONTO
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: "0.9rem 1rem 0.8rem" }}>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--navy)",
              lineHeight: 1.3,
              marginBottom: "0.35rem",
            }}
          >
            Road restrictions are in effect.
          </p>
          <p style={{ fontSize: "0.78rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.85rem" }}>
            Public transit, walking, and cycling are recommended.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <Link
              href="/match-day"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                padding: "0.5rem 1rem", borderRadius: "10px",
                background: "var(--red)", color: "white",
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Closures & Transit <ArrowRight size={12} />
            </Link>
            <Link
              href="/matches"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                padding: "0.5rem 1rem", borderRadius: "10px",
                background: "transparent", color: "var(--navy)",
                border: "1.5px solid var(--border)",
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Get to Stadium
            </Link>
            <Link
              href="/eat-watch"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                padding: "0.5rem 1rem", borderRadius: "10px",
                background: "transparent", color: "var(--navy)",
                border: "1.5px solid var(--border)",
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Watch Nearby
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
