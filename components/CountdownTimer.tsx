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

  if (!mounted) {
    return (
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Next Toronto Match
        </p>
        <div className="flex justify-center gap-3 mb-3">
          {["Days", "Hrs", "Min", "Sec"].map((label) => (
            <div key={label} className="flex flex-col items-center bg-primary text-white rounded-xl px-4 py-3 min-w-[64px]">
              <span className="text-2xl font-bold tabular-nums">--</span>
              <span className="text-xs text-white/70 font-medium">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-sm font-medium text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!countdown || !nextMatch) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-500">All Toronto matches have concluded. What a summer!</p>
      </div>
    );
  }

  if (countdown.isMatchDay) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-2xl text-xl font-bold animate-pulse">
          ⚽ MATCH DAY IS HERE
        </div>
        <p className="mt-2 text-gray-600 text-sm font-medium">
          {nextMatch.homeTeam} vs {nextMatch.awayTeam} — {nextMatch.time}
        </p>
      </div>
    );
  }

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="text-center">
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
        Next Toronto Match
      </p>
      <div className="flex justify-center gap-3 mb-3">
        {[
          { value: countdown.days, label: "Days" },
          { value: countdown.hours, label: "Hrs" },
          { value: countdown.minutes, label: "Min" },
          { value: countdown.seconds, label: "Sec" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center bg-primary text-white rounded-xl px-4 py-3 min-w-[64px]">
            <span className="text-2xl font-bold tabular-nums">{pad(value)}</span>
            <span className="text-xs text-white/70 font-medium">{label}</span>
          </div>
        ))}
      </div>
      <p className="text-sm font-medium text-gray-700">
        {nextMatch.homeFlag} {nextMatch.homeTeam} vs {nextMatch.awayTeam} {nextMatch.awayFlag}
      </p>
    </div>
  );
}
