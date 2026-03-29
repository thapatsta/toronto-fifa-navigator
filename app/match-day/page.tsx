"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import ClosureList from "@/components/ClosureList";
import { AlertTriangle, Info, Navigation } from "lucide-react";
import { getDirectionsUrl } from "@/lib/tournament";

const ClosureMap = dynamic(() => import("@/components/ClosureMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] rounded-2xl flex items-center justify-center" style={{ background: "var(--border)" }}>
      <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>Loading map...</p>
    </div>
  ),
});

export default function MatchDayPage() {
  const [matchDay, setMatchDay] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">

      {/* ── PAGE HEADER ── */}
      <div>
        <h1
          className="display"
          style={{ fontSize: "clamp(2rem, 8vw, 2.8rem)", color: "var(--navy)", lineHeight: 0.95, marginBottom: "0.4rem" }}
        >
          Match Day
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif" }}>
          Closures, transit, routes, and what to expect around Toronto Stadium.
        </p>
        <p style={{ color: "var(--muted)", fontSize: "0.75rem", fontFamily: "'DM Sans', sans-serif", marginTop: "0.2rem" }}>
          Based on the City of Toronto Mobility Plan, March 26, 2026. Additional details expected in May 2026.
        </p>
      </div>

      {/* ── MATCH DAY QUICK TAKE ── */}
      <div
        style={{
          background: "var(--navy)",
          borderRadius: "18px",
          padding: "1.1rem 1.2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        <p
          className="label"
          style={{ fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.14em" }}
        >
          MATCH DAY QUICK TAKE
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
          {[
            ["🚫", "Do not rely on driving to the stadium."],
            ["🅿️", "Public parking near the venue may be limited or unavailable."],
            ["🚌", "The fastest and most reliable ways to arrive are transit, walking, and cycling."],
            ["⏱", "Leave extra time before kickoff and after the final whistle."],
          ].map(([emoji, text]) => (
            <div key={text as string} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
              <span style={{ fontSize: "0.9rem", flexShrink: 0, marginTop: "1px" }}>{emoji}</span>
              <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.5, fontFamily: "'DM Sans', sans-serif" }}>
                {text}
              </span>
            </div>
          ))}
        </div>
        <a
          href={getDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            marginTop: "0.25rem", padding: "0.55rem 1rem", borderRadius: "10px",
            background: "white", color: "var(--navy)",
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase",
            textDecoration: "none", alignSelf: "flex-start",
          }}
        >
          <Navigation size={13} /> Get Directions — Exhibition Place
        </a>
      </div>

      {/* ── MATCH DAY / NON-MATCH DAY TOGGLE ── */}
      <div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => setMatchDay(false)}
            style={{
              flex: 1, padding: "0.65rem 1rem", borderRadius: "12px",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase",
              cursor: "pointer", transition: "all 0.15s",
              border: matchDay ? "1.5px solid var(--border)" : "1.5px solid var(--navy)",
              background: matchDay ? "transparent" : "var(--navy)",
              color: matchDay ? "var(--muted)" : "white",
            }}
          >
            Non-Match Day
          </button>
          <button
            onClick={() => setMatchDay(true)}
            style={{
              flex: 1, padding: "0.65rem 1rem", borderRadius: "12px",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase",
              cursor: "pointer", transition: "all 0.15s",
              border: matchDay ? "1.5px solid var(--red)" : "1.5px solid var(--border)",
              background: matchDay ? "var(--red)" : "transparent",
              color: matchDay ? "white" : "var(--muted)",
            }}
          >
            Match Day 🔴
          </button>
        </div>
        <p style={{ fontSize: "0.7rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "0.4rem", textAlign: "center" }}>
          See how routes and restrictions change on active event days.
        </p>
      </div>

      {matchDay && (
        <div
          style={{
            background: "#fef3c7", border: "1px solid #fcd34d",
            borderRadius: "14px", padding: "0.75rem 1rem",
            display: "flex", gap: "0.5rem", fontSize: "0.82rem", color: "#92400e",
          }}
        >
          <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: "1px" }} />
          <div>
            <strong>Match Day Mode</strong> — showing additional closures active on June 12, 17, 20, 23, 26, and July 2.
            All tournament-wide closures also remain in effect.
          </div>
        </div>
      )}

      {/* ── ROUTE PRESETS ── */}
      <div>
        <p className="label" style={{ fontSize: "0.6rem", color: "var(--muted)", marginBottom: "0.5rem" }}>
          QUICK ROUTES
        </p>
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {[
            "From Union Station",
            "From Pearson",
            "From Downtown Hotels",
            "From Fan Festival",
            "After the Match",
          ].map((label) => (
            <span
              key={label}
              style={{
                padding: "0.3rem 0.75rem", borderRadius: "99px",
                background: "var(--card)", border: "1.5px solid var(--border)",
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: "0.75rem", color: "var(--navy)", letterSpacing: "0.03em",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── MAP LEGEND ── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", fontSize: "0.72rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ width: "16px", height: "4px", background: "#c62828", borderRadius: "2px", display: "inline-block" }} />
          Closed road
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ width: "16px", height: "4px", background: "#ef6c00", borderRadius: "2px", display: "inline-block" }} />
          Restricted area
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ width: "16px", height: "4px", background: "#1a237e", borderRadius: "2px", display: "inline-block" }} />
          TTC-only / Pedestrian
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ width: "16px", height: "4px", borderTop: "2px dashed #2e7d32", background: "transparent", display: "inline-block" }} />
          Walking/shuttle route
        </span>
      </div>
      <p style={{ fontSize: "0.7rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "-0.75rem" }}>
        Use Match Day mode for tournament travel planning.
      </p>

      {/* ── MAP ── */}
      <ClosureMap matchDay={matchDay} />

      {/* ── SOURCE NOTE ── */}
      <div
        style={{
          display: "flex", gap: "0.5rem", fontSize: "0.72rem", color: "var(--muted)",
          background: "var(--card)", borderRadius: "12px", padding: "0.75rem 1rem",
          fontFamily: "'DM Sans', sans-serif", border: "1px solid var(--border)",
        }}
      >
        <Info size={13} style={{ flexShrink: 0, marginTop: "1px" }} />
        <span>
          Map coordinates are approximate. Official detailed maps will be available at{" "}
          <a href="https://toronto.ca/fifa" style={{ textDecoration: "underline", color: "var(--navy)" }} target="_blank" rel="noopener noreferrer">
            toronto.ca/fifa
          </a>{" "}
          closer to the tournament.
        </span>
      </div>

      {/* ── CLOSURE LIST ── */}
      <div>
        <h2
          className="display"
          style={{ fontSize: "1.5rem", color: "var(--navy)", lineHeight: 1, marginBottom: "0.75rem" }}
        >
          All Closures & Transit Changes
        </h2>
        <ClosureList matchDay={matchDay} />
      </div>

      {/* Last updated */}
      <p
        style={{
          fontSize: "0.72rem",
          color: "var(--muted)",
          fontFamily: "'DM Sans', sans-serif",
          textAlign: "center",
          marginTop: "1rem",
          opacity: 0.7,
        }}
      >
        Last updated March 2026 · Closure details will be confirmed by the City of Toronto in May 2026
      </p>

    </div>
  );
}
