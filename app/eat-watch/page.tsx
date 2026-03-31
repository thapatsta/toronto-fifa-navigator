"use client";

import { useState } from "react";
import { restaurants } from "@/data/restaurants";
import { watchParties, curatedBuckets } from "@/data/watchParties";
import RestaurantCard from "@/components/RestaurantCard";
import NeighbourhoodFilter from "@/components/NeighbourhoodFilter";
import { Monitor, UtensilsCrossed, Star, MapPin, ExternalLink } from "lucide-react";
import { useTournamentPrefs } from "@/hooks/useTournamentPrefs";
import { matches } from "@/data/matches";

const countryGroups = [
  { country: "Canada",        flag: "🇨🇦" },
  { country: "Ghana",         flag: "🇬🇭" },
  { country: "Panama",        flag: "🇵🇦" },
  { country: "Germany",       flag: "🇩🇪" },
  { country: "Côte d'Ivoire", flag: "🇨🇮" },
  { country: "Croatia",       flag: "🇭🇷" },
  { country: "Senegal",       flag: "🇸🇳" },
];

function getRelevantCountriesForToday(): string[] {
  const todayStr = new Date().toISOString().split("T")[0];
  const todayMatch = matches.find((m) => m.date === todayStr);
  if (todayMatch) return [todayMatch.homeTeam, todayMatch.awayTeam];
  const next = matches.find((m) => m.date > todayStr);
  if (next) return [next.homeTeam, next.awayTeam];
  return [];
}

export default function EatWatchPage() {
  const [activeTab, setActiveTab] = useState<"watch" | "eat">("watch");
  const [activeBucket, setActiveBucket] = useState<string | null>(null);
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const { prefs, loaded } = useTournamentPrefs();

  const relevantCountries = getRelevantCountriesForToday();
  const followedTeam = loaded ? prefs.followedTeam : null;
  const followedFlag = loaded ? prefs.followedFlag : null;

  // Watch tab filtering
  const allNeighbourhoods = [...new Set(
    watchParties
      .filter((w) => w.neighbourhood !== "Multiple Locations")
      .map((w) => w.neighbourhood)
  )];

  const activeBucketBarIds = activeBucket
    ? curatedBuckets.find((b) => b.id === activeBucket)?.barIds ?? []
    : null;

  const filteredBars = watchParties.filter((w) => {
    if (activeBucketBarIds) return activeBucketBarIds.includes(w.id);
    if (selectedNeighbourhood) return w.neighbourhood === selectedNeighbourhood;
    return true;
  });

  // Eat tab filtering
  const filteredRestaurants = restaurants.filter((r) =>
    !selectedCountry || r.country === selectedCountry
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-6" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

      {/* ── PAGE HEADER ── */}
      <div>
        <h1
          className="display"
          style={{ fontSize: "clamp(2rem, 8vw, 2.8rem)", color: "var(--navy)", lineHeight: 0.95, marginBottom: "0.4rem" }}
        >
          Eat & Watch
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif" }}>
          Find the best places in Toronto to watch, eat, and keep the tournament energy going.
        </p>
      </div>

      {/* ── GET FEATURED CTA ── */}
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
          Own a bar or restaurant near the action? Get your venue listed.
        </p>
        <a
          href="mailto:hello@torontofootball.guide?subject=Featured%20Listing%20Inquiry"
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
          Get in touch
        </a>
      </div>

      {/* ── TAB TOGGLE ── */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          onClick={() => setActiveTab("watch")}
          style={{
            flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
            padding: "0.65rem 1rem", borderRadius: "12px",
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem",
            letterSpacing: "0.05em", textTransform: "uppercase", cursor: "pointer",
            transition: "all 0.15s",
            border: activeTab === "watch" ? "1.5px solid var(--navy)" : "1.5px solid var(--border)",
            background: activeTab === "watch" ? "var(--navy)" : "transparent",
            color: activeTab === "watch" ? "white" : "var(--muted)",
          }}
        >
          <Monitor size={15} /> Watch Bars & Viewing
        </button>
        <button
          onClick={() => setActiveTab("eat")}
          style={{
            flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
            padding: "0.65rem 1rem", borderRadius: "12px",
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem",
            letterSpacing: "0.05em", textTransform: "uppercase", cursor: "pointer",
            transition: "all 0.15s",
            border: activeTab === "eat" ? "1.5px solid var(--navy)" : "1.5px solid var(--border)",
            background: activeTab === "eat" ? "var(--navy)" : "transparent",
            color: activeTab === "eat" ? "white" : "var(--muted)",
          }}
        >
          <UtensilsCrossed size={15} /> Eat Like the Teams
        </button>
      </div>

      {/* ══════════════════════════════════════════
          WATCH TAB
      ══════════════════════════════════════════ */}
      {activeTab === "watch" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* Curated buckets */}
          <div>
            <p className="label" style={{ fontSize: "0.6rem", color: "var(--muted)", marginBottom: "0.5rem" }}>
              CURATED PICKS
            </p>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {curatedBuckets.map((bucket) => (
                <button
                  key={bucket.id}
                  onClick={() => {
                    setActiveBucket(activeBucket === bucket.id ? null : bucket.id);
                    setSelectedNeighbourhood("");
                  }}
                  style={{
                    padding: "0.35rem 0.85rem", borderRadius: "99px", cursor: "pointer",
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                    fontSize: "0.75rem", letterSpacing: "0.03em",
                    transition: "all 0.15s",
                    border: activeBucket === bucket.id ? "1.5px solid var(--navy)" : "1.5px solid var(--border)",
                    background: activeBucket === bucket.id ? "var(--navy)" : "transparent",
                    color: activeBucket === bucket.id ? "white" : "var(--navy)",
                  }}
                >
                  {bucket.label}
                </button>
              ))}
              {activeBucket && (
                <button
                  onClick={() => setActiveBucket(null)}
                  style={{
                    padding: "0.35rem 0.85rem", borderRadius: "99px", cursor: "pointer",
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                    fontSize: "0.75rem", letterSpacing: "0.03em",
                    background: "transparent", border: "1.5px solid var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  × Clear
                </button>
              )}
            </div>
          </div>

          {/* Neighbourhood filter (only shown when no bucket active) */}
          {!activeBucket && (
            <div>
              <p className="label" style={{ fontSize: "0.6rem", color: "var(--muted)", marginBottom: "0.5rem" }}>
                BY NEIGHBOURHOOD
              </p>
              <NeighbourhoodFilter
                neighbourhoods={allNeighbourhoods}
                selected={selectedNeighbourhood}
                onChange={setSelectedNeighbourhood}
              />
            </div>
          )}

          {/* Bar cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {filteredBars.map((bar) => (
              <div
                key={bar.id}
                style={{
                  borderRadius: "16px", border: "1.5px solid var(--border)",
                  background: "var(--card)", overflow: "hidden",
                }}
              >
                {/* Card header */}
                <div style={{ padding: "0.85rem 1rem 0.6rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    <div>
                      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "var(--navy)", lineHeight: 1.1 }}>
                        {bar.name}
                      </p>
                      <p style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "2px", display: "flex", alignItems: "center", gap: "3px" }}>
                        <MapPin size={10} /> {bar.neighbourhood}
                      </p>
                    </div>
                    {/* Screen badges */}
                    <div style={{ display: "flex", gap: "0.3rem", flexShrink: 0 }}>
                      {bar.hasOutdoorScreen && (
                        <span style={{ fontSize: "0.6rem", background: "#dcfce7", color: "#166534", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, padding: "2px 7px", borderRadius: "99px" }}>
                          📺 Outdoor
                        </span>
                      )}
                      {bar.hasPatio && (
                        <span style={{ fontSize: "0.6rem", background: "#dbeafe", color: "#1e40af", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, padding: "2px 7px", borderRadius: "99px" }}>
                          🌿 Patio
                        </span>
                      )}
                    </div>
                  </div>

                  <p style={{ fontSize: "0.8rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5, marginBottom: "0.65rem" }}>
                    {bar.description}
                  </p>

                  {/* Tag chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.65rem" }}>
                    {bar.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "2px 8px", borderRadius: "99px",
                          background: "rgba(13,27,42,0.06)",
                          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                          fontSize: "0.62rem", color: "var(--navy)", letterSpacing: "0.03em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer: Map action */}
                <div style={{ padding: "0.5rem 1rem 0.7rem", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                  <a
                    href={bar.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.3rem",
                      fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                      fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase",
                      color: "var(--navy)", textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={11} /> Open in Maps
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Match day tip */}
          <div
            style={{
              background: "rgba(232,160,32,0.1)", border: "1px solid rgba(232,160,32,0.3)",
              borderRadius: "14px", padding: "0.75rem 1rem",
              fontSize: "0.8rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5,
            }}
          >
            <strong>On match days:</strong> Toronto sports bars fill up fast — especially for evening kickoffs.
            Arrive 30–60 minutes early. The Fan Festival at Fort York is the official free outdoor option
            if bars are full.
          </div>

          {/* Last updated */}
          <p style={{ fontSize: "0.68rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", textAlign: "center" }}>
            Last updated: March 2026 · Always confirm hours before heading out
          </p>
        </div>
      )}

      {/* ══════════════════════════════════════════
          EAT TAB
      ══════════════════════════════════════════ */}
      {activeTab === "eat" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* Personalised prompt — followed team */}
          {followedTeam && !selectedCountry && (
            <button
              onClick={() => setSelectedCountry(followedTeam)}
              style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                padding: "0.75rem 1rem", borderRadius: "14px",
                background: "var(--navy)", color: "white",
                border: "none", cursor: "pointer", textAlign: "left",
              }}
            >
              <Star size={15} style={{ color: "var(--gold)", flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                  {followedFlag} Eat like {followedTeam}
                </p>
                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}>
                  Restaurants matched to your team · tap to filter
                </p>
              </div>
            </button>
          )}

          {/* Today's match nudge */}
          {!followedTeam && relevantCountries.length > 0 && !selectedCountry && (
            <div style={{ background: "var(--card)", border: "1.5px solid var(--border)", borderRadius: "14px", padding: "0.75rem 1rem" }}>
              <p style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginBottom: "0.5rem" }}>
                🍽️ Restaurants matching today&apos;s Toronto match
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {relevantCountries.map((c) => {
                  const group = countryGroups.find((g) => c.startsWith(g.country) || g.country.startsWith(c.split(" ")[0]));
                  if (!group) return null;
                  return (
                    <button
                      key={c}
                      onClick={() => setSelectedCountry(group.country)}
                      style={{
                        padding: "4px 12px", borderRadius: "99px",
                        background: "var(--navy)", color: "white",
                        border: "none", cursor: "pointer",
                        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem",
                      }}
                    >
                      {group.flag} {group.country}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Country filter pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {[{ country: "All", flag: "" }, ...countryGroups].map(({ country, flag }) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country === "All" ? "" : country)}
                style={{
                  padding: "0.3rem 0.85rem", borderRadius: "99px", cursor: "pointer",
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.78rem",
                  letterSpacing: "0.03em", transition: "all 0.15s",
                  border: (country === "All" ? selectedCountry === "" : selectedCountry === country)
                    ? "1.5px solid var(--navy)" : "1.5px solid var(--border)",
                  background: (country === "All" ? selectedCountry === "" : selectedCountry === country)
                    ? "var(--navy)" : "transparent",
                  color: (country === "All" ? selectedCountry === "" : selectedCountry === country)
                    ? "white" : "var(--navy)",
                }}
              >
                {flag ? `${flag} ` : ""}{country}
              </button>
            ))}
          </div>

          {/* Grouped by country */}
          {selectedCountry ? (
            <div>
              <h2 className="display" style={{ fontSize: "1.4rem", color: "var(--navy)", lineHeight: 1, marginBottom: "0.75rem" }}>
                {countryGroups.find((c) => c.country === selectedCountry)?.flag} {selectedCountry}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {filteredRestaurants.map((r) => (
                  <RestaurantCard key={r.id} restaurant={r} />
                ))}
              </div>
            </div>
          ) : (
            countryGroups.map(({ country, flag }) => {
              const countryRests = restaurants.filter((r) => r.country === country);
              if (countryRests.length === 0) return null;
              return (
                <div key={country}>
                  <h2 className="display" style={{ fontSize: "1.3rem", color: "var(--navy)", lineHeight: 1, marginBottom: "0.6rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <span>{flag}</span> <span>{country}</span>
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {countryRests.map((r) => (
                      <RestaurantCard key={r.id} restaurant={r} />
                    ))}
                  </div>
                </div>
              );
            })
          )}

          <p style={{ fontSize: "0.7rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", textAlign: "center" }}>
            Curated for inspiration, not official team partnerships. Verify hours before visiting.
          </p>
        </div>
      )}
    </div>
  );
}
