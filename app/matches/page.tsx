import type { Metadata } from "next";
import { matches, Match } from "@/data/matches";
import { MapPin, Calendar } from "lucide-react";
import MatchesWithPrefs from "@/components/MatchesWithPrefs";
import MatchPageBar from "@/components/MatchPageBar";

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 Toronto Match Schedule & Dates",
  description: "All 6 FIFA World Cup 2026 matches in Toronto at Toronto Stadium (Exhibition Place) — dates, times, teams, and match-day transit planning.",
  openGraph: {
    title: "FIFA World Cup 2026 Toronto — All 6 Matches",
    description: "Dates, times, and teams for all 6 World Cup matches in Toronto. Plus match-day transit and directions.",
    url: "https://torontofootball.guide/matches",
    type: "website",
  },
  alternates: {
    canonical: "https://torontofootball.guide/matches",
  },
};

const VENUE = {
  "@type": "Place",
  name: "Toronto Stadium at Exhibition Place",
  address: {
    "@type": "PostalAddress",
    streetAddress: "170 Princes' Blvd",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M6K 3C3",
    addressCountry: { "@type": "Country", name: "CA" },
  },
};

const ORGANIZER = {
  "@type": "Organization",
  name: "FIFA",
  url: "https://www.fifa.com",
};

const OFFERS = {
  "@type": "Offer",
  url: "https://www.fifa.com/tickets",
  availability: "https://schema.org/InStock",
  priceCurrency: "CAD",
};

const IMAGE = "https://torontofootball.guide/og-image.png";

function convertTimeTo24h(time: string): string {
  const parsed = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!parsed) return "19:00";
  let hours = parseInt(parsed[1]);
  const minutes = parsed[2];
  const period = parsed[3].toUpperCase();
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

// SportsEvent JSON-LD generated from data/matches.ts — single source of truth,
// so it can't drift from the real matchups the way a hand-duplicated array did.
function buildSportsEventsJsonLd(matchList: Match[]) {
  return matchList.map((match) => {
    const startTime = convertTimeTo24h(match.time);
    const [h, m] = startTime.split(":").map(Number);
    const endHours = ((h + 2) % 24).toString().padStart(2, "0");
    const description = match.homeScore !== undefined && match.awayScore !== undefined
      ? `FIFA World Cup 2026 ${match.stage} match at Toronto Stadium. Final score: ${match.homeTeam} ${match.homeScore}–${match.awayScore} ${match.awayTeam} on ${match.date}.`
      : `FIFA World Cup 2026 ${match.stage} match at Toronto Stadium. ${match.homeTeam} faces ${match.awayTeam} on ${match.date}.`;

    return {
      "@context": "https://schema.org",
      "@type": "SportsEvent",
      name: `FIFA World Cup 2026 — ${match.homeTeam} vs ${match.awayTeam}`,
      description,
      startDate: `${match.date}T${startTime}:00-04:00`,
      endDate: `${match.date}T${endHours}:${m.toString().padStart(2, "0")}:00-04:00`,
      eventStatus: "https://schema.org/EventScheduled",
      image: IMAGE,
      location: VENUE,
      organizer: ORGANIZER,
      offers: OFFERS,
      performer: [
        { "@type": "SportsTeam", name: match.homeTeam },
        { "@type": "SportsTeam", name: match.awayTeam },
      ],
    };
  });
}

const sportsEventsJsonLd = buildSportsEventsJsonLd(matches);

export default function MatchesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6" style={{ paddingBottom: "7rem" }}>
      {/* SportsEvent JSON-LD for all 6 matches */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventsJsonLd) }}
      />
      {/* Mobile sticky action bar: Save · Directions · Match Day · Bars */}
      <MatchPageBar />
      <div>
        <h1
          className="display"
          style={{ fontSize: "clamp(2rem, 8vw, 2.8rem)", color: "var(--navy)", lineHeight: 0.95, marginBottom: "0.4rem" }}
        >
          Matches
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif" }}>
          All six Toronto World Cup matches at Toronto Stadium, with match-day planning, transit notes, and saved-plan support.
        </p>
      </div>

      {/* Venue card */}
      <div
        className="card"
        style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", background: "rgba(13,27,42,0.04)", borderColor: "rgba(13,27,42,0.12)" }}
      >
        <div
          style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
        >
          <MapPin size={18} color="white" />
        </div>
        <div>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--navy)" }}>
            All matches at Toronto Stadium
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "2px" }}>
            Exhibition Place, 170 Princes&apos; Blvd, Toronto
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "2px" }}>
            Capacity: 45,000 · Field: Natural grass
          </p>
        </div>
      </div>

      {/* The golden rule */}
      <div
        style={{
          background: "rgba(204,41,54,0.06)", border: "1px solid rgba(204,41,54,0.18)",
          borderRadius: "16px", padding: "1rem",
        }}
      >
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "var(--red)", marginBottom: "0.35rem" }}>
          The Golden Rule
        </p>
        <p style={{ fontSize: "0.82rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
          🚫 Don&apos;t drive. There is no public parking anywhere near Toronto Stadium,
          Exhibition Place, or the surrounding neighbourhoods on match days.
          Take TTC, GO Transit, or the free shuttle from St. Andrew Station.
        </p>
      </div>

      {/* Match cards with save capability */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={16} className="text-gray-500" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            {matches.length} Matches · June 12 – July 2, 2026
          </h2>
        </div>
        <MatchesWithPrefs matches={matches} />
      </div>

      {/* Last updated */}
      <p
        style={{
          fontSize: "0.72rem",
          color: "var(--muted)",
          fontFamily: "'DM Sans', sans-serif",
          textAlign: "center",
          opacity: 0.7,
        }}
      >
        All 6 matches complete · Final scores updated July 2026
      </p>

      {/* After game tips */}
      <div className="card">
        <h2 className="display" style={{ fontSize: "1.4rem", color: "var(--navy)", lineHeight: 1, marginBottom: "0.75rem" }}>
          After the Final Whistle
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {[
            "TTC extends service hours on all match nights — you won't be stranded.",
            "The shuttle back to St. Andrew Station is your fastest post-game exit.",
            "Rideshare surge pricing will be extreme — consider walking north to King St first.",
            "Strachan Ave may be pedestrianized after evening games — plan accordingly.",
            "GO Transit also runs late service back to Union Station.",
          ].map((tip) => (
            <p key={tip} style={{ fontSize: "0.82rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5, display: "flex", gap: "0.4rem" }}>
              <span style={{ color: "var(--navy)", flexShrink: 0 }}>→</span> {tip}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
