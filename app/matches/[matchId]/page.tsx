import type { Metadata } from "next";
import Link from "next/link";
import { matches, Match } from "@/data/matches";
import { getDirectionsUrl } from "@/lib/tournament";
import { Navigation, ArrowLeft, MapPin, Clock, Train, Bus, Footprints, Car, ArrowRight } from "lucide-react";

// ── Static params for static export ──
export function generateStaticParams() {
  return matches.map((m) => ({ matchId: m.id }));
}

// ── Dynamic metadata per match ──
export function generateMetadata({
  params,
}: {
  params: { matchId: string };
}): Metadata {
  const match = matches.find((m) => m.id === params.matchId);
  if (!match) {
    return { title: "Match Not Found" };
  }

  const title = `${match.homeShort ?? match.homeTeam} vs ${match.awayShort ?? match.awayTeam} — Toronto FIFA World Cup 2026`;
  const description = `Match day guide for ${match.homeTeam} vs ${match.awayTeam} on ${formatDateLong(match.date)} at ${match.time}. Transit options, road closures, directions, and tips for Toronto Stadium at Exhibition Place.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://torontofootball.guide/matches/${match.id}`,
      type: "website",
    },
    alternates: {
      canonical: `https://torontofootball.guide/matches/${match.id}`,
    },
  };
}

function formatDateLong(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateShort(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("en-CA", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

// ── Event JSON-LD for Google rich results ──
function getEventJsonLd(match: Match) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${match.homeTeam} vs ${match.awayTeam} — FIFA World Cup 2026`,
    description: `FIFA World Cup 2026 ${match.stage} match: ${match.homeTeam} vs ${match.awayTeam} at Toronto Stadium, Exhibition Place.`,
    startDate: `${match.date}T${convertTimeTo24h(match.time)}:00-04:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Toronto Stadium",
      address: {
        "@type": "PostalAddress",
        streetAddress: "170 Princes' Blvd",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M6K 3C3",
        addressCountry: "CA",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "FIFA",
      url: "https://www.fifa.com",
    },
    competitor: [
      { "@type": "SportsTeam", name: match.homeTeam },
      { "@type": "SportsTeam", name: match.awayTeam },
    ],
  };
}

function convertTimeTo24h(time: string): string {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return "19:00";
  let hours = parseInt(match[1]);
  const minutes = match[2];
  const period = match[3].toUpperCase();
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

export default function MatchPage({
  params,
}: {
  params: { matchId: string };
}) {
  const match = matches.find((m) => m.id === params.matchId);

  if (!match) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="display" style={{ fontSize: "2rem", color: "var(--navy)" }}>
          Match Not Found
        </h1>
        <Link href="/matches" style={{ color: "var(--red)", marginTop: "1rem", display: "inline-block" }}>
          View All Matches
        </Link>
      </div>
    );
  }

  const matchIndex = matches.indexOf(match);
  const prevMatch = matchIndex > 0 ? matches[matchIndex - 1] : null;
  const nextMatch = matchIndex < matches.length - 1 ? matches[matchIndex + 1] : null;

  return (
    <>
      {/* Event JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getEventJsonLd(match)) }}
      />

      <div style={{ background: "var(--cream)", paddingBottom: "7rem" }}>
        {/* ── Hero ── */}
        <section
          style={{
            background: match.stage === "Round of 32" ? "linear-gradient(135deg, #1a0533, #2d1050)" : "var(--navy)",
            position: "relative",
            overflow: "hidden",
          }}
          className="px-4 pt-6 pb-8"
        >
          <div style={{
            position: "absolute", top: 0, right: 0, width: "45%", height: "100%",
            background: "rgba(255,255,255,0.025)",
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--red)" }} />

          <div className="max-w-2xl mx-auto">
            {/* Back */}
            <Link
              href="/matches"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                color: "rgba(255,255,255,0.5)", fontSize: "0.75rem",
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
                letterSpacing: "0.06em", textTransform: "uppercase",
                textDecoration: "none", marginBottom: "1rem",
              }}
            >
              <ArrowLeft size={14} /> All Matches
            </Link>

            {/* Stage badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span className="label" style={{
                background: match.stage === "Group Stage" ? "rgba(255,255,255,0.15)" : "rgba(120,0,200,0.3)",
                color: "white", fontSize: "0.58rem", padding: "3px 10px", borderRadius: "99px",
              }}>
                {match.group ?? match.stage}
              </span>
              {match.significance && (
                <span className="label" style={{
                  background: "rgba(232,160,32,0.2)", color: "var(--gold)",
                  fontSize: "0.58rem", padding: "3px 10px", borderRadius: "99px",
                }}>
                  {match.significance}
                </span>
              )}
            </div>

            {/* Teams */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "0.75rem" }}>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ fontSize: "3.5rem", lineHeight: 1 }}>{match.homeFlag}</div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", marginTop: "0.35rem", lineHeight: 1.2 }}>
                  {match.homeShort ?? match.homeTeam}
                </p>
              </div>
              <h1 className="display" style={{ fontSize: "clamp(2rem, 10vw, 3.5rem)", color: "rgba(255,255,255,0.2)", lineHeight: 0.9 }}>
                VS
              </h1>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ fontSize: "3.5rem", lineHeight: 1 }}>{match.awayFlag}</div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", marginTop: "0.35rem", lineHeight: 1.2 }}>
                  {match.awayShort ?? match.awayTeam}
                </p>
              </div>
            </div>

            {/* Date + time */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <Clock size={14} /> {formatDateShort(match.date)} · {match.time}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <MapPin size={14} /> Toronto Stadium
              </span>
            </div>
          </div>
        </section>

        <div className="max-w-2xl mx-auto px-4 pt-5" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          {/* ── Directions CTA ── */}
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
              padding: "0.85rem 1rem", borderRadius: "14px",
              background: "var(--red)", color: "white",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            <Navigation size={16} /> Get Directions — Exhibition Place
          </a>

          {/* ── Notes ── */}
          {match.notes && (
            <div style={{
              background: "#fef3c7", border: "1px solid #fbbf24",
              borderRadius: "14px", padding: "0.85rem 1rem",
            }}>
              <p style={{ fontSize: "0.82rem", color: "#92400e", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
                {match.notes}
              </p>
            </div>
          )}

          {/* ── Utility note ── */}
          {match.utilityNote && (
            <div className="card" style={{ background: "rgba(13,27,42,0.04)", borderColor: "rgba(13,27,42,0.12)" }}>
              <p style={{ fontSize: "0.82rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
                {match.utilityNote}
              </p>
            </div>
          )}

          {/* ── Getting There ── */}
          <section>
            <h2 className="display" style={{ fontSize: "1.6rem", color: "var(--navy)", lineHeight: 1, marginBottom: "0.75rem" }}>
              Getting There
            </h2>

            {/* Golden rule */}
            <div style={{
              background: "rgba(204,41,54,0.06)", border: "1px solid rgba(204,41,54,0.18)",
              borderRadius: "14px", padding: "0.85rem 1rem", marginBottom: "0.75rem",
            }}>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "var(--red)", marginBottom: "0.25rem" }}>
                Do not drive.
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
                There is no public parking anywhere near Toronto Stadium, Exhibition Place, or surrounding neighbourhoods on match days.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { icon: <Bus size={16} />, method: "Free Shuttle", desc: "From St. Andrew Station (Line 1) to Fleet Street. Quick, free, and the fastest option.", bg: "#f0fdf4", accent: "#166534" },
                { icon: <Train size={16} />, method: "TTC Streetcar", desc: "Harbourfront (509) or Bathurst (511) to Fleet Street. Increased match day frequency.", bg: "#f0f4ff", accent: "var(--navy)" },
                { icon: <Train size={16} />, method: "GO Transit", desc: "GO train to Exhibition Station. Must have valid GO fare — customer-only on match days.", bg: "#f0f4ff", accent: "var(--navy)" },
                { icon: <Footprints size={16} />, method: "Walking", desc: "From King & Strachan or King & Bathurst. Garrison Bridge is closed — cross via Strachan or Bathurst.", bg: "#faf5ff", accent: "#7e22ce" },
                { icon: <Car size={16} />, method: "Rideshare / Taxi", desc: "Designated drop-off areas only. Expect surge pricing and long waits post-match.", bg: "#fff7ed", accent: "#c2410c" },
              ].map(({ icon, method, desc, bg, accent }) => (
                <div key={method} className="card" style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "10px", background: bg,
                    display: "flex", alignItems: "center", justifyContent: "center", color: accent, flexShrink: 0,
                  }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--navy)" }}>
                      {method}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "2px", lineHeight: 1.5 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── After the Game ── */}
          <section className="card">
            <h2 className="display" style={{ fontSize: "1.4rem", color: "var(--navy)", lineHeight: 1, marginBottom: "0.75rem" }}>
              After the Final Whistle
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[
                "TTC extends service hours on all match nights.",
                "The free shuttle back to St. Andrew Station is your fastest exit.",
                "Rideshare surge pricing will be extreme — walk north to King St first.",
                "GO Transit runs late service back to Union Station.",
              ].map((tip) => (
                <p key={tip} style={{ fontSize: "0.82rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5, display: "flex", gap: "0.4rem" }}>
                  <span style={{ color: "var(--navy)", flexShrink: 0 }}>&#8594;</span> {tip}
                </p>
              ))}
            </div>
          </section>

          {/* ── Explore more ── */}
          <section>
            <h2 className="display" style={{ fontSize: "1.4rem", color: "var(--navy)", lineHeight: 1, marginBottom: "0.75rem" }}>
              Explore More
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
              <Link href="/closures" className="card" style={{ textDecoration: "none" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--navy)" }}>Road Closures</p>
                <p style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "2px" }}>What&apos;s closed on match day</p>
              </Link>
              <Link href="/eat-watch" className="card" style={{ textDecoration: "none" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--navy)" }}>Bars & Restaurants</p>
                <p style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "2px" }}>Watch parties & team eats</p>
              </Link>
              <Link href="/fan-festival" className="card" style={{ textDecoration: "none" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--navy)" }}>Fan Festival</p>
                <p style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "2px" }}>Fort York & The Bentway</p>
              </Link>
              <Link href="/guide" className="card" style={{ textDecoration: "none" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--navy)" }}>Visitor Guide</p>
                <p style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "2px" }}>Transit, tips & essentials</p>
              </Link>
            </div>
          </section>

          {/* ── Match navigation ── */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0" }}>
            {prevMatch ? (
              <Link
                href={`/matches/${prevMatch.id}`}
                style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "var(--muted)", fontSize: "0.8rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, textDecoration: "none", letterSpacing: "0.04em" }}
              >
                <ArrowLeft size={14} /> {prevMatch.homeFlag} {prevMatch.homeShort ?? prevMatch.homeTeam}
              </Link>
            ) : <span />}
            {nextMatch ? (
              <Link
                href={`/matches/${nextMatch.id}`}
                style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "var(--muted)", fontSize: "0.8rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, textDecoration: "none", letterSpacing: "0.04em" }}
              >
                {nextMatch.homeShort ?? nextMatch.homeTeam} {nextMatch.homeFlag} <ArrowRight size={14} />
              </Link>
            ) : <span />}
          </div>

        </div>
      </div>
    </>
  );
}
