import type { Metadata } from "next";
import Link from "next/link";
import { matches } from "@/data/matches";
import { MapPin, Utensils, Construction, BookOpen } from "lucide-react";
import TodayHero from "@/components/TodayHero";
import MyTournament from "@/components/MyTournament";
import MatchCardWithPrefs from "@/components/MatchCardWithPrefs";

export const metadata: Metadata = {
  title: "Toronto Football Guide — FIFA World Cup 2026 in Toronto",
};


export default function HomePage() {
  // Event JSON-LD for aggregate schedule (helps Google show rich results)
  const eventsJsonLd = matches.map((m) => ({
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${m.homeTeam} vs ${m.awayTeam} — FIFA World Cup 2026`,
    startDate: m.date,
    location: {
      "@type": "Place",
      name: "Toronto Stadium",
      address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
    },
    competitor: [
      { "@type": "SportsTeam", name: m.homeTeam },
      { "@type": "SportsTeam", name: m.awayTeam },
    ],
  }));

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Toronto Football Guide",
    "url": "https://torontofootball.guide",
    "description": "Road closures, transit changes, match schedule, and visitor guide for FIFA World Cup 2026 in Toronto.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://torontofootball.guide/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div style={{ background: "var(--cream)" }}>

      {/* WebSite JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Event JSON-LD for all matches */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />

      {/* ── SMART HERO (tournament-aware) ── */}
      <TodayHero />

      {/* ── MATCH SCHEDULE (primary content, immediately after hero) ── */}
      <section className="px-4 pt-5 pb-6 max-w-2xl mx-auto">
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

      {/* ── MY MATCH PLAN (compact unless team followed) ── */}
      <div>
        <MyTournament />
      </div>

      {/* ── CONTACT ── */}
      <div className="px-4 max-w-2xl mx-auto" style={{ marginBottom: "0.5rem" }}>
        <div
          style={{
            background: "var(--card)",
            border: "1.5px solid var(--border)",
            borderRadius: "14px",
            padding: "1rem 1.1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.82rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>
            Questions, corrections, or want to get your venue listed?
          </p>
          <a
            href="mailto:hello@torontofootball.guide"
            style={{
              flexShrink: 0,
              padding: "0.5rem 0.9rem",
              background: "var(--navy)",
              color: "white",
              borderRadius: "10px",
              fontSize: "0.75rem",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Drop us an email
          </a>
        </div>
      </div>

      {/* ── QUICK LINKS (reordered: transit/closures/bars/guide) ── */}
      <section className="px-4 pt-5 pb-7 max-w-2xl mx-auto">
        <h2 className="display mb-4" style={{ fontSize: "1.9rem", color: "var(--navy)", lineHeight: 1 }}>
          Explore the Guide
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
          {[
            { href: "/match-day",    icon: <MapPin size={18} />,        label: "Match Day Transit", sub: "Routes, shuttles & closures", bg: "#fff1f1", ic: "var(--red)" },
            { href: "/closures",     icon: <Construction size={18} />,  label: "Road Closures",     sub: "What's closed & when",       bg: "#fef3c7", ic: "#92400e" },
            { href: "/eat-watch",    icon: <Utensils size={18} />,      label: "Bars & Restaurants", sub: "Watch parties & team eats",  bg: "#f0fdf4", ic: "#166534" },
            { href: "/guide",        icon: <BookOpen size={18} />,      label: "Visitor Essentials", sub: "Transit, tips & more",       bg: "#faf5ff", ic: "#7e22ce" },
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
