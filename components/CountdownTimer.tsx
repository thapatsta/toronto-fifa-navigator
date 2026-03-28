"use client";

import { useEffect, useState } from "react";
import { getCountdownToNextMatch } from "@/lib/utils";
import { matches } from "@/data/matches";

export default function CountdownTimer() {
  const [countdown, setCountdown] = useState<ReturnType<typeof getCountdownToNextMatch>>(null);
  const [nextMatch, setNextMatch] = useState<(typeof matches)[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const nm = matches.find((m) => {
      const matchDate = new Date(m.date + "T12:00:00");
      return matchDate >= new Date(new Date().toDateString());
    });
    setNextMatch(nm || null);

    const tick = () => setCountdown(getCountdownToNextMatch());
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const units = [
    { label: "Days",    value: countdown?.days    ?? 0 },
    { label: "Hours",   value: countdown?.hours   ?? 0 },
    { label: "Minutes", value: countdown?.minutes ?? 0 },
    { label: "Seconds", value: countdown?.seconds ?? 0 },
  ];

  if (!mounted) {
    return (
      <div className="text-center py-2">
        <p className="label mb-4" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.65rem" }}>
          Next Toronto Match
        </p>
        <div className="flex justify-center gap-3">
          {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
            <div key={label} className="flex flex-col items-center">
              <span className="display text-5xl" style={{ color: "white", lineHeight: 1 }}>--</span>
              <span className="label mt-1" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!countdown || !nextMatch) {
    return (
      <div className="text-center py-4">
        <p className="display text-3xl" style={{ color: "white" }}>All Matches Concluded</p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: "0.25rem" }}>What a summer.</p>
      </div>
    );
  }

  if (countdown.isMatchDay) {
    return (
      <div className="text-center py-2 next-match-glow rounded-2xl">
        <p className="display text-5xl md:text-6xl" style={{ color: "var(--gold)", lineHeight: 1 }}>
          MATCH DAY
        </p>
        <p className="label mt-2" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem" }}>
          {nextMatch.homeTeam} vs {nextMatch.awayTeam} · {nextMatch.time}
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-2">
      <p className="label mb-4" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.65rem" }}>
        Next Toronto Match
      </p>
      <div className="flex justify-center gap-4 md:gap-6">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <span
              className="display"
              style={{ fontSize: "clamp(2.8rem, 10vw, 4.5rem)", color: "white", lineHeight: 1, letterSpacing: "0.02em" }}
            >
              {pad(value)}
            </span>
            <span className="label mt-1" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem" }}>
              {label}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
        {nextMatch.homeFlag} {nextMatch.homeTeam} <span style={{ color: "var(--red)" }}>vs</span> {nextMatch.awayTeam} {nextMatch.awayFlag}
      </p>
    </div>
  );
}
