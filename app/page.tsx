import type { Metadata } from "next";
import Link from "next/link";
import { matches } from "@/data/matches";
import { MapPin, Calendar, BookOpen, Music, ArrowRight } from "lucide-react";
import TodayHero from "@/components/TodayHero";
import MyTournament from "@/components/MyTournament";
import MatchCardWithPrefs from "@/components/MatchCardWithPrefs";

export const metadata: Metadata = {
  title: "Toronto FIFA Navigator — Your World Cup 2026 Guide",
};

function formatDay(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return {
    weekday: d.toLocaleDateString("en-CA", { weekday: "short" }).toUpperCase(),
    month:   d.toLocaleDateString("en-CA", { month: "short" }).toUpperCase(),
    day:     d.getDate(),
  };
}

export default function HomePage() {
  return (
    <div style={{ background: "var(--cream)" }}>

      {/* ── SMART HERO (tournament-aware) ── */}
      <TodayHero />

      {/* ── MY TOURNAMENT ── */}
      <div style={{ paddingTop: "1.75rem" }}>
        <MyTournament />
      </div>

      {/* ── MATCH SCHEDULE ── */}
      <section className="px-4 pt-6 pb-7 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="display" style={{ fontSize: "1.9rem", color: "var(--navy)", lineHeight: 1 }}>
            Match Schedule
          </h2>
          <span className="label" style={{ color: "var(--muted)", fontSize: "0.65rem" }}>
            All at Exhibition Place
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <MatchCardWithPrefs matches={matches} />
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="px-4 pt-6 pb-7 max-w-2xl mx-auto">
        <h2 className="display mb-4" style={{ fontSize: "1.9rem", color: "var(--navy)", lineHeight: 1 }}>
          More Info
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
          {[
            { href: "/closures",     icon: <MapPin size={18} />,     label: "Road Closures",   sub: "What's closed & when",    bg: "#fff1f1", ic: "var(--red)" },
            { href: "/matches",      icon: <Calendar size={18} />,   label: "Match Day Guide",  sub: "Transit & getting there", bg: "#f0f4ff", ic: "var(--navy)" },
            { href: "/fan-festival", icon: <Music size={18} />,      label: "Fan Festival",    sub: "June 11 – July 19",       bg: "#f0fdf4", ic: "#166534" },
            { href: "/guide",        icon: <BookOpen size={18} />,   label: "Visitor Guide",   sub: "Transit, tips & more",    bg: "#faf5ff", ic: "#7e22ce" },
          ].map(({ href, icon, label, sub, bg, ic }) => (
            <Link
              key={href}
              href={href}
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: "0.5rem", transition: "box-shadow 0.15s", textDecoration: "none" }}
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", color: ic }}>
                {icon}
              </div>
              <div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--navy)", lineHeight: 1.1 }}>
                  {label}
                </p>
                <p style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "2px" }}>{sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── QUICK FACTS ── */}
      <section className="px-4 pt-6 pb-10 max-w-2xl mx-auto">
        <div style={{ background: "var(--navy)", borderRadius: "20px", padding: "1.25rem 1.25rem 1.5rem" }}>
          <h2 className="display mb-4" style={{ fontSize: "1.6rem", color: "white", lineHeight: 1 }}>
            The Quick Facts
          </h2>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              ["📍", "All matches at Toronto Stadium, Exhibition Place"],
              ["🎪", "Fan Festival: June 11–July 19 at Fort York & The Bentway"],
              ["🚗", "No parking near venues — take TTC, GO, or the free shuttle from St. Andrew Station"],
              ["🌉", "Garrison Crossing Bridge closed all tournament — cross via Strachan or Bathurst"],
              ["🚲", "Bike Share docks removed near venues — valet parking outside Exhibition Place"],
            ].map(([emoji, text]) => (
              <li key={text as string} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "0.95rem", flexShrink: 0, marginTop: "1px" }}>{emoji}</span>
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5, fontFamily: "'DM Sans', sans-serif" }}>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}
