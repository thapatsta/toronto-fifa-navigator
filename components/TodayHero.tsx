"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getTournamentStatus, getDirectionsUrl, TournamentStatus } from "@/lib/tournament";
import { Navigation, ArrowRight, Music } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function TodayHero() {
  const [status, setStatus] = useState<TournamentStatus | null>(null);

  useEffect(() => {
    setStatus(getTournamentStatus());
  }, []);

  // Render nothing until client hydrates (avoids SSR mismatch)
  if (!status) return <HeroSkeleton />;

  if (status.state === "match_day" && status.todayMatch) {
    return <MatchDayHero match={status.todayMatch} />;
  }

  if (status.state === "tournament_active") {
    return <TournamentActiveHero status={status} />;
  }

  if (status.state === "post_tournament") {
    return <PostTournamentHero />;
  }

  // pre_tournament — original countdown hero
  return <PreTournamentHero />;
}

/* ─────────────────────────────────────────
   MATCH DAY HERO
───────────────────────────────────────── */
function MatchDayHero({ match }: { match: NonNullable<TournamentStatus["todayMatch"]> }) {
  return (
    <section
      style={{ background: "var(--red)", position: "relative", overflow: "hidden" }}
      className="px-4 pt-8 pb-10"
    >
      {/* Diagonal stripe */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: "45%", height: "100%",
        background: "rgba(255,255,255,0.04)",
        clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "rgba(255,255,255,0.25)" }} />

      <div className="max-w-2xl mx-auto">
        <p className="label animate-fade-in" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.62rem", marginBottom: "0.5rem" }}>
          TODAY · MATCH DAY · TORONTO STADIUM
        </p>

        {/* Teams */}
        <div className="animate-fade-up" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3.5rem", lineHeight: 1 }}>{match.homeFlag}</div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "white", marginTop: "0.25rem" }}>
              {match.homeShort ?? match.homeTeam}
            </p>
          </div>
          <h1 className="display" style={{ fontSize: "clamp(2.5rem, 12vw, 4.5rem)", color: "white", lineHeight: 0.9, flex: 1, textAlign: "center" }}>
            VS
          </h1>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3.5rem", lineHeight: 1 }}>{match.awayFlag}</div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "white", marginTop: "0.25rem" }}>
              {match.awayShort ?? match.awayTeam}
            </p>
          </div>
        </div>

        {/* Kickoff time */}
        <p className="animate-fade-up stagger-1" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif", marginBottom: "1.5rem" }}>
          ⏱ Kickoff {match.time} · {match.group ?? match.stage}
        </p>

        {/* Primary CTA */}
        <div className="animate-fade-up stagger-2" style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
              padding: "0.8rem 1rem", borderRadius: "14px",
              background: "white", color: "var(--red)",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            <Navigation size={16} /> Get Directions — Exhibition Place
          </a>
          <Link
            href="/matches"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
              padding: "0.65rem 1rem", borderRadius: "14px",
              background: "rgba(255,255,255,0.15)", color: "white",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Full Match Day Guide <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   TOURNAMENT ACTIVE (no match today)
───────────────────────────────────────── */
function TournamentActiveHero({ status }: { status: TournamentStatus }) {
  const { nextMatch, daysUntilNext } = status;

  return (
    <section
      style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}
      className="px-4 pt-8 pb-10"
    >
      <div style={{
        position: "absolute", top: 0, right: 0, width: "45%", height: "100%",
        background: "rgba(255,255,255,0.025)",
        clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--red)" }} />

      <div className="max-w-2xl mx-auto">
        <p className="label animate-fade-in" style={{ color: "var(--gold)", fontSize: "0.62rem", marginBottom: "0.5rem" }}>
          FIFA WORLD CUP 2026 · IN PROGRESS
        </p>

        <h1
          className="display animate-fade-up"
          style={{ fontSize: "clamp(2.5rem, 12vw, 4.5rem)", color: "white", lineHeight: 0.9, marginBottom: "0.5rem" }}
        >
          IT&apos;S ON.<br />
          <span style={{ color: "var(--red)" }}>TORONTO.</span>
        </h1>

        <p
          className="animate-fade-up stagger-1"
          style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", marginBottom: "1.5rem", fontFamily: "'DM Sans', sans-serif" }}
        >
          No Toronto match today — Fan Festival is open at Fort York
        </p>

        {/* Fan Festival CTA */}
        <div className="animate-fade-up stagger-2" style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
          <Link
            href="/fan-festival"
            style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              padding: "0.75rem 1rem", borderRadius: "14px",
              background: "var(--gold)", color: "var(--navy)",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "0.95rem", letterSpacing: "0.06em", textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            <Music size={15} /> Fan Festival Today — Fort York & Bentway <ArrowRight size={14} style={{ marginLeft: "auto" }} />
          </Link>
        </div>

        {/* Next Toronto match */}
        {nextMatch && (
          <div
            className="animate-fade-up stagger-3"
            style={{
              background: "rgba(255,255,255,0.06)",
              borderRadius: "14px",
              padding: "0.9rem 1rem",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p className="label" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.58rem", marginBottom: "0.5rem" }}>
              NEXT TORONTO MATCH
              {daysUntilNext !== null && ` · IN ${daysUntilNext} DAY${daysUntilNext === 1 ? "" : "S"}`}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.6rem" }}>{nextMatch.homeFlag}</span>
              <div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", lineHeight: 1.2 }}>
                  {nextMatch.homeTeam} vs {nextMatch.awayTeam} {nextMatch.awayFlag}
                </p>
                <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
                  {new Date(nextMatch.date + "T12:00:00").toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" })} · {nextMatch.time}
                </p>
              </div>
              <Link
                href="/matches"
                style={{ marginLeft: "auto", color: "var(--gold)", flexShrink: 0 }}
              >
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PRE-TOURNAMENT (original, slightly tightened)
───────────────────────────────────────── */
function PreTournamentHero() {
  return (
    <section
      style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}
      className="px-4 pt-8 pb-10"
    >
      <div style={{
        position: "absolute", top: 0, right: 0, width: "45%", height: "100%",
        background: "rgba(255,255,255,0.025)",
        clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--red)" }} />

      <div className="max-w-2xl mx-auto">
        <p className="label animate-fade-in" style={{ color: "var(--gold)", fontSize: "0.65rem", marginBottom: "0.5rem" }}>
          FIFA World Cup 2026 · Toronto, Canada
        </p>
        <h1
          className="display animate-fade-up"
          style={{ fontSize: "clamp(3rem, 15vw, 5.5rem)", color: "white", lineHeight: 0.9, marginBottom: "0.75rem" }}
        >
          6 MATCHES.<br />
          <span style={{ color: "var(--red)" }}>ONE CITY.</span>
        </h1>
        <p
          className="animate-fade-up stagger-1"
          style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", marginBottom: "1.5rem", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5, maxWidth: "480px" }}
        >
          Your guide to the FIFA World Cup in Toronto — match schedules, match-day transit, bars, closures, and visitor essentials.
        </p>
        {/* Primary CTAs */}
        <div className="animate-fade-up stagger-2" style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
          <Link
            href="/matches"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.65rem 1.2rem", borderRadius: "12px",
              background: "var(--red)", color: "white",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            View Toronto Matches
          </Link>
          <Link
            href="/guide"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.65rem 1.2rem", borderRadius: "12px",
              background: "rgba(255,255,255,0.12)", color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "0.9rem", letterSpacing: "0.06em", textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Explore the Guide
          </Link>
        </div>
        <div className="animate-fade-up stagger-3">
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   POST-TOURNAMENT
───────────────────────────────────────── */
function PostTournamentHero() {
  return (
    <section
      style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}
      className="px-4 pt-8 pb-10"
    >
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--gold)" }} />
      <div className="max-w-2xl mx-auto">
        <p className="label animate-fade-in" style={{ color: "var(--gold)", fontSize: "0.65rem", marginBottom: "0.5rem" }}>
          FIFA World Cup 2026 · Toronto
        </p>
        <h1
          className="display animate-fade-up"
          style={{ fontSize: "clamp(2.5rem, 12vw, 4.5rem)", color: "white", lineHeight: 0.9, marginBottom: "0.5rem" }}
        >
          WHAT A<br />
          <span style={{ color: "var(--gold)" }}>TOURNAMENT.</span>
        </h1>
        <p
          style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif" }}
        >
          6 matches. One city. Toronto showed up. Thanks for being part of it.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   LOADING SKELETON
───────────────────────────────────────── */
function HeroSkeleton() {
  // Mirrors PreTournamentHero structure to prevent layout shift on hydration.
  // Shimmer divs approximate: label, h1 (2 lines), subtext, countdown block.
  return (
    <section
      style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}
      className="px-4 pt-8 pb-10"
    >
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--red)" }} />
      <div className="max-w-2xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {/* Label shimmer */}
        <div style={{ height: "12px", width: "180px", borderRadius: "6px", background: "rgba(255,255,255,0.08)" }} />
        {/* H1 shimmer — 2 lines */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          <div style={{ height: "clamp(3rem, 15vw, 5.5rem)", width: "75%", borderRadius: "8px", background: "rgba(255,255,255,0.1)" }} />
          <div style={{ height: "clamp(3rem, 15vw, 5.5rem)", width: "55%", borderRadius: "8px", background: "rgba(255,255,255,0.07)" }} />
        </div>
        {/* Subtext shimmer */}
        <div style={{ height: "14px", width: "220px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", marginBottom: "0.5rem" }} />
        {/* Countdown shimmer — 4 blocks */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "clamp(2.8rem, 10vw, 4.5rem)", height: "clamp(2.8rem, 10vw, 4.5rem)", borderRadius: "8px", background: "rgba(255,255,255,0.1)" }} />
              <div style={{ height: "8px", width: "36px", borderRadius: "4px", background: "rgba(255,255,255,0.06)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
