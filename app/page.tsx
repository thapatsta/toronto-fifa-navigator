import type { Metadata } from "next";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import { matches } from "@/data/matches";
import { MapPin, Calendar, BookOpen, Music, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Toronto FIFA Navigator — Your World Cup 2026 Guide",
};

function formatMatchDay(dateStr: string) {
  const date = new Date(dateStr + "T12:00:00");
  return {
    weekday: date.toLocaleDateString("en-CA", { weekday: "long" }).toUpperCase(),
    month: date.toLocaleDateString("en-CA", { month: "long" }),
    day: date.toLocaleDateString("en-CA", { day: "numeric" }),
    year: date.getFullYear(),
  };
}

function getMatchStatus(dateStr: string): "past" | "next" | "upcoming" {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const matchDate = new Date(dateStr + "T00:00:00");

  // find the true "next" match
  if (matchDate < today) return "past";
  return "upcoming"; // will be overridden for the first upcoming
}

export default function HomePage() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const nextMatchIndex = matches.findIndex(
    (m) => new Date(m.date + "T00:00:00") >= today
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">

      {/* Hero */}
      <div className="text-center space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">FIFA World Cup 2026</p>
        <h1 className="text-2xl font-extrabold text-gray-900 leading-tight">
          Toronto Match Guide
        </h1>
        <p className="text-gray-500 text-sm">
          6 matches · Exhibition Place · June 12 – July 2
        </p>
      </div>

      {/* Countdown */}
      <div className="card">
        <CountdownTimer />
      </div>

      {/* ── THE 6 GAME SECTIONS ── */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
          Match Schedule
        </h2>
        <div className="space-y-3">
          {matches.map((match, i) => {
            const d = formatMatchDay(match.date);
            const isNext = i === nextMatchIndex;
            const isPast = new Date(match.date + "T23:59:00") < today;

            return (
              <div
                key={match.id}
                className={`rounded-2xl overflow-hidden border transition-shadow ${
                  isNext
                    ? "border-primary shadow-md shadow-primary/10"
                    : isPast
                    ? "border-gray-100 opacity-60"
                    : "border-gray-100 hover:shadow-sm"
                }`}
              >
                {/* Top bar — date + badge */}
                <div
                  className={`flex items-center justify-between px-4 py-2.5 ${
                    isNext ? "bg-primary" : isPast ? "bg-gray-100" : "bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isNext ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {d.weekday}, {d.month} {d.day}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {isNext && (
                      <span className="text-[10px] font-bold bg-white text-primary px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Next Match
                      </span>
                    )}
                    {isPast && (
                      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
                        Final
                      </span>
                    )}
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${
                        match.stage === "Group Stage"
                          ? isNext
                            ? "bg-white/20 text-white"
                            : "bg-blue-100 text-blue-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {match.stage}
                    </span>
                  </div>
                </div>

                {/* Match content */}
                <div className="bg-white px-4 py-4">
                  {/* Teams */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    {/* Home */}
                    <div className="flex flex-col items-center gap-1 flex-1 text-center">
                      <span className="text-3xl">{match.homeFlag}</span>
                      <span className="text-sm font-bold text-gray-900 leading-tight">
                        {match.homeTeam}
                      </span>
                    </div>

                    {/* vs */}
                    <div className="flex flex-col items-center gap-0.5 shrink-0">
                      <span className="text-lg font-black text-gray-200">VS</span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={11} />
                        <span>{match.time}</span>
                      </div>
                    </div>

                    {/* Away */}
                    <div className="flex flex-col items-center gap-1 flex-1 text-center">
                      <span className="text-3xl">{match.awayFlag}</span>
                      <span className="text-sm font-bold text-gray-900 leading-tight">
                        {match.awayTeam}
                      </span>
                    </div>
                  </div>

                  {/* Group + CTA row */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <div className="text-xs text-gray-400 flex items-center gap-1">
                      <MapPin size={11} />
                      {match.group ? `${match.group} · ` : ""}Toronto Stadium
                    </div>
                    <Link
                      href="/matches"
                      className={`flex items-center gap-1 text-xs font-bold transition-colors ${
                        isNext ? "text-primary" : "text-gray-500 hover:text-primary"
                      }`}
                    >
                      Get There <ArrowRight size={12} />
                    </Link>
                  </div>

                  {/* TBD note */}
                  {match.notes && (
                    <p className="text-[11px] text-amber-600 mt-2 leading-relaxed">
                      📌 {match.notes}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── QUICK LINKS ── */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
          More Info
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/closures"
            className="card flex flex-col gap-2 hover:shadow-md transition-shadow group"
          >
            <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center">
              <MapPin className="text-accent" size={18} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors leading-tight">
                Road Closures
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">What's closed & when</p>
            </div>
          </Link>

          <Link
            href="/matches"
            className="card flex flex-col gap-2 hover:shadow-md transition-shadow group"
          >
            <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center">
              <Calendar className="text-primary" size={18} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors leading-tight">
                Match Day Guide
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Transit & getting there</p>
            </div>
          </Link>

          <Link
            href="/fan-festival"
            className="card flex flex-col gap-2 hover:shadow-md transition-shadow group"
          >
            <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center">
              <Music className="text-transit" size={18} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors leading-tight">
                Fan Festival
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">June 11 – July 19</p>
            </div>
          </Link>

          <Link
            href="/guide"
            className="card flex flex-col gap-2 hover:shadow-md transition-shadow group"
          >
            <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center">
              <BookOpen className="text-purple-700" size={18} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors leading-tight">
                Visitor Guide
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Transit, tips & more</p>
            </div>
          </Link>
        </div>
      </div>

      {/* ── QUICK FACTS ── */}
      <div className="bg-primary/5 rounded-2xl p-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
          The Quick Facts
        </h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><span>📍</span><span>All matches at Toronto Stadium, Exhibition Place</span></li>
          <li className="flex gap-2"><span>🎪</span><span>Fan Festival: June 11–July 19 at Fort York & The Bentway</span></li>
          <li className="flex gap-2"><span>🚗</span><span>No parking near venues — take TTC, GO, or the free shuttle from St. Andrew Station</span></li>
          <li className="flex gap-2"><span>🌉</span><span>Garrison Crossing Bridge closed all tournament — cross via Strachan or Bathurst</span></li>
          <li className="flex gap-2"><span>🚲</span><span>Bike Share docks removed near venues — valet parking outside Exhibition Place</span></li>
        </ul>
      </div>

    </div>
  );
}
