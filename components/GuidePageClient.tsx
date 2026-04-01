"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

/* ─── Section definitions ─── */
const SECTIONS = [
  { id: "transit",  emoji: "🚇", label: "Transit"  },
  { id: "airport",  emoji: "✈️", label: "Airport"  },
  { id: "stay",     emoji: "🏨", label: "Stay"     },
  { id: "weather",  emoji: "⛅", label: "Weather"  },
  { id: "money",    emoji: "💳", label: "Money"    },
  { id: "safety",   emoji: "🛡️", label: "Safety"   },
  { id: "sim",      emoji: "📱", label: "SIM"      },
  { id: "access",   emoji: "♿", label: "Access"   },
];

/* ─── Quick-fact chips at the top ─── */
const QUICK_FACTS = [
  { label: "Presto card",   value: "$6 to buy",        color: "var(--navy)" },
  { label: "TTC fare",      value: "$3.30 / ride",     color: "var(--navy)" },
  { label: "UP Express",    value: "25 min to Union",  color: "var(--navy)" },
  { label: "Tip",           value: "15–20% expected",  color: "var(--navy)" },
  { label: "Emergency",     value: "Call 911",         color: "var(--red)"  },
  { label: "Weather",       value: "20–30 °C / humid", color: "var(--navy)" },
];

/* ─── Image URLs (swap these for real CDN photos before launch) ─── */
const IMAGES = {
  // Toronto skyline with CN Tower — credit: Unsplash / Douglas Schneiders
  hero: "https://images.unsplash.com/photo-1519181245277-cffeb2d5a63e?auto=format&fit=crop&w=1400&q=80",
  // Wide Toronto panoramic with Rogers Centre — credit: Unsplash / Anil Baki Durmus
  neighbourhoods: "https://images.unsplash.com/photo-1517090186835-e348b621c9ca?auto=format&fit=crop&w=900&q=80",
  // Busy train station — credit: Unsplash
  transit: "https://images.unsplash.com/photo-1569430690076-4a2a69db6bab?auto=format&fit=crop&w=900&q=80",
};

/* ─── Section image strip ─── */
function SectionImage({ src, alt, height = 130 }: { src: string; alt: string; height?: number }) {
  return (
    <div style={{
      height: `${height}px`, borderRadius: "12px", overflow: "hidden",
      marginBottom: "1rem", position: "relative",
    }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {/* Subtle left-fade so text could overlay if ever needed */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, rgba(13,27,42,0.25) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
    </div>
  );
}

/* ─── Reusable primitives ─── */
function TldrChip({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "0.3rem",
      background: "rgba(13,27,42,0.06)", border: "1px solid var(--border)",
      borderRadius: "99px", padding: "0.25rem 0.75rem",
      fontSize: "0.74rem", color: "var(--navy)",
      fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
      letterSpacing: "0.02em", marginBottom: "0.9rem",
    }}>
      <span style={{ color: "var(--gold)", fontSize: "0.65rem", letterSpacing: "0.1em" }}>TL;DR</span>
      <span style={{ width: "1px", height: "10px", background: "var(--border)" }} />
      {children}
    </div>
  );
}

function SectionHeading({ emoji, title, id }: { emoji: string; title: string; id: string }) {
  return (
    <div id={id} style={{ display: "flex", alignItems: "center", gap: "0.55rem", marginBottom: "1rem", scrollMarginTop: "60px" }}>
      <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>{emoji}</span>
      <h2 style={{
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
        fontSize: "1.15rem", color: "var(--navy)", lineHeight: 1,
      }}>{title}</h2>
    </div>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
      fontSize: "0.82rem", color: "var(--navy)", marginBottom: "0.25rem",
      letterSpacing: "0.02em",
    }}>{children}</p>
  );
}

function Body({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{
      fontSize: "0.82rem", color: "var(--muted)",
      fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, ...style,
    }}>{children}</p>
  );
}

function Divider() {
  return <div style={{ borderTop: "1px solid var(--border)", margin: "0.85rem 0" }} />;
}

function MatchDayAlert({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "rgba(204,41,54,0.06)", border: "1px solid rgba(204,41,54,0.22)",
      borderRadius: "12px", padding: "0.8rem 0.95rem", marginBottom: "1rem",
      display: "flex", gap: "0.6rem",
    }}>
      <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>⚽</span>
      <div>
        <p style={{
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
          fontSize: "0.68rem", color: "var(--red)", letterSpacing: "0.09em",
          marginBottom: "0.2rem",
        }}>ON MATCH DAY</p>
        <div style={{ fontSize: "0.8rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function StatRow({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.5rem", padding: "0.5rem 0" }}>
      <span style={{ fontSize: "0.8rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
      <div style={{ textAlign: "right" }}>
        <span style={{ fontSize: "0.82rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{value}</span>
        {note && <span style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", display: "block" }}>{note}</span>}
      </div>
    </div>
  );
}

/* ─── Airport card ─── */
type AirportRoute = { route: string; bestOption: string; approxTime: string; bestFor: string };

function RouteCard({ r }: { r: AirportRoute }) {
  return (
    <div style={{
      background: "rgba(13,27,42,0.03)", border: "1px solid var(--border)",
      borderRadius: "12px", padding: "0.8rem 0.9rem",
    }}>
      <p style={{
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
        fontSize: "0.88rem", color: "var(--navy)", marginBottom: "0.55rem",
      }}>{r.route}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem 0.75rem" }}>
        <div>
          <p style={{ fontSize: "0.62rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>Best option</p>
          <p style={{ fontSize: "0.79rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{r.bestOption}</p>
        </div>
        <div>
          <p style={{ fontSize: "0.62rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>Time</p>
          <p style={{ fontSize: "0.79rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{r.approxTime}</p>
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <p style={{ fontSize: "0.62rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>Best for</p>
          <p style={{ fontSize: "0.78rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>{r.bestFor}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export default function GuidePageClient() {
  const [activeSection, setActiveSection] = useState<string>("transit");
  const [airport, setAirport] = useState<"YYZ" | "YTZ">("YYZ");
  const navRef = useRef<HTMLDivElement>(null);

  /* Scroll active nav tab into view */
  const scrollNavTab = useCallback((id: string) => {
    if (!navRef.current) return;
    const tab = navRef.current.querySelector(`[data-tab="${id}"]`) as HTMLElement | null;
    if (tab) tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, []);

  /* IntersectionObserver — track which section is in view */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setActiveSection(id); scrollNavTab(id); } },
        { rootMargin: "-50% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [scrollNavTab]);

  /* Jump to section */
  function jumpTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div style={{ paddingBottom: "5rem" }}>

      {/* ── Page header — image hero ── */}
      <div style={{ position: "relative", height: "230px", overflow: "hidden" }}>
        <img
          src={IMAGES.hero}
          alt="Toronto skyline and CN Tower"
          loading="eager"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", display: "block" }}
        />
        {/* Gradient: dark at bottom (where text sits), lighter at top */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(13,27,42,0.97) 0%, rgba(13,27,42,0.55) 55%, rgba(13,27,42,0.15) 100%)",
          pointerEvents: "none",
        }} />
        {/* Title text sits over the image */}
        <div style={{ position: "absolute", bottom: "1.4rem", left: 0, right: 0 }}>
          <div className="max-w-2xl mx-auto px-4">
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "0.62rem", color: "var(--gold)",
              letterSpacing: "0.12em", marginBottom: "0.3rem",
            }}>
              FIFA WORLD CUP 2026 · TORONTO
            </p>
            <h1 className="display" style={{
              fontSize: "clamp(2.4rem, 10vw, 3.2rem)", color: "white",
              lineHeight: 0.9, marginBottom: "0.4rem",
            }}>
              Visitor Guide
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.62)", fontSize: "0.82rem",
              fontFamily: "'DM Sans', sans-serif", lineHeight: 1.45, maxWidth: "480px",
            }}>
              Airports, transit, money, weather, and match-day tips.
            </p>
          </div>
        </div>
      </div>

      {/* ── Sticky section nav ── */}
      <div style={{
        position: "sticky", top: 0, zIndex: 40,
        background: "rgba(238,232,220,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div
          ref={navRef}
          style={{
            display: "flex", gap: "0.25rem",
            overflowX: "auto", padding: "0.5rem 1rem",
            scrollbarWidth: "none",
            maxWidth: "42rem", margin: "0 auto",
          }}
        >
          {SECTIONS.map(({ id, emoji, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                data-tab={id}
                onClick={() => jumpTo(id)}
                style={{
                  flexShrink: 0,
                  display: "inline-flex", alignItems: "center", gap: "0.3rem",
                  padding: "0.35rem 0.7rem",
                  borderRadius: "99px", border: "none", cursor: "pointer",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.02em",
                  transition: "all 0.18s ease",
                  background: isActive ? "var(--navy)" : "transparent",
                  color: isActive ? "white" : "var(--muted)",
                  outline: "none",
                }}
              >
                <span style={{ fontSize: "0.85rem" }}>{emoji}</span>
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4">

        {/* ── First-action hero ── */}
        <div style={{
          background: "var(--navy)", borderRadius: "18px",
          padding: "1.2rem 1.3rem", margin: "1.25rem 0",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: "40%", height: "100%",
            background: "rgba(255,255,255,0.03)",
            clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
            pointerEvents: "none",
          }} />
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: "0.65rem", color: "var(--gold)",
            letterSpacing: "0.1em", marginBottom: "0.3rem",
          }}>FIRST THING WHEN YOU ARRIVE</p>
          <p style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.65rem", color: "white", lineHeight: 0.95, marginBottom: "0.5rem",
          }}>Get a Presto Card</p>
          <p style={{
            fontSize: "0.82rem", color: "rgba(255,255,255,0.72)",
            fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5,
          }}>
            $6 at any subway station or Union Station. Load $20–40.
            Works on TTC, GO Transit, and regional buses — your single key to the whole city.
          </p>
        </div>

        {/* ── Quick-facts strip ── */}
        <div style={{
          display: "flex", gap: "0.5rem", overflowX: "auto",
          paddingBottom: "0.25rem", marginBottom: "1.5rem",
          scrollbarWidth: "none",
        }}>
          {QUICK_FACTS.map((f) => (
            <div key={f.label} style={{
              flexShrink: 0,
              background: "var(--card)", border: "1px solid var(--border)",
              borderRadius: "12px", padding: "0.5rem 0.75rem",
              minWidth: "105px",
            }}>
              <p style={{
                fontSize: "0.62rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif",
                textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px",
              }}>{f.label}</p>
              <p style={{
                fontSize: "0.82rem", color: f.color,
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              }}>{f.value}</p>
            </div>
          ))}
        </div>

        {/* ─────────────────────────── SECTIONS ─────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* ── 1. Getting Around ── */}
          <div className="card" id="transit" style={{ scrollMarginTop: "60px" }}>
            <SectionHeading emoji="🚇" title="Getting Around Toronto" id="_transit_heading" />
            <TldrChip>TTC covers the city. Presto card = $3.30/ride, free transfers for 2 hrs.</TldrChip>

            <MatchDayAlert>
              Don&apos;t drive to the stadium — no public parking on match days. Take TTC, GO Transit, or the free shuttle from St. Andrew Station.
            </MatchDayAlert>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div>
                <SubLabel>Presto Card</SubLabel>
                <Body>Toronto&apos;s reloadable transit card — accepted on TTC, GO Transit, and most regional transit. Buy for $6 at any subway station, Union Station, or Shoppers Drug Mart. Reload at machines or the Presto app.</Body>
              </div>
              <Divider />
              <div>
                <SubLabel>TTC (Subway, Streetcar, Bus)</SubLabel>
                <Body>Flat fare — $3.30 with Presto ($3.35 cash). Free transfers within 2 hours. <strong style={{ color: "var(--navy)" }}>Line 1</strong> (Yonge–University) is your main artery to downtown and Exhibition Place.</Body>
              </div>
              <Divider />
              <div>
                <SubLabel>GO Transit</SubLabel>
                <Body>Regional rail connecting Toronto to suburbs and Pearson Airport. All routes through Union Station. Distance-based pricing. Fastest way in from the airport.</Body>
              </div>
              <Divider />
              <div>
                <SubLabel>Rideshare & Taxis</SubLabel>
                <Body>Uber and Lyft run city-wide. On match days, rideshare pickup near venues is limited to designated zones — expect surge pricing and plan extra time.</Body>
              </div>
            </div>
          </div>

          {/* ── 2. Airport ── */}
          <div className="card" id="airport" style={{ scrollMarginTop: "60px" }}>
            <SectionHeading emoji="✈️" title="Getting from the Airport" id="_airport_heading" />
            <SectionImage src={IMAGES.transit} alt="Train station platform" height={110} />

            {/* Airport toggle */}
            <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1rem" }}>
              {(["YYZ", "YTZ"] as const).map((ap) => (
                <button
                  key={ap}
                  onClick={() => setAirport(ap)}
                  style={{
                    padding: "0.35rem 0.9rem", borderRadius: "99px",
                    border: "1px solid",
                    borderColor: airport === ap ? "var(--navy)" : "var(--border)",
                    background: airport === ap ? "var(--navy)" : "transparent",
                    color: airport === ap ? "white" : "var(--muted)",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700, fontSize: "0.82rem", cursor: "pointer",
                    transition: "all 0.15s ease",
                    outline: "none",
                  }}
                >
                  {ap === "YYZ" ? "✈️ Pearson (YYZ)" : "🛩️ Billy Bishop (YTZ)"}
                </button>
              ))}
            </div>

            {airport === "YYZ" ? (
              <>
                <TldrChip>UP Express to Union Station — 25 min, ~$12 with Presto. Runs every 15 min.</TldrChip>
                <MatchDayAlert>
                  Arriving on match day? Add 30 min to estimates. UP Express is unaffected — delays start downtown (Dufferin Bus / Bathurst Streetcar get packed).
                </MatchDayAlert>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    { route: "Pearson → Downtown / Union", bestOption: "UP Express train", approxTime: "25 min", bestFor: "Fast, reliable, easy with luggage — runs every 15 min, ~$12 CAD with Presto" },
                    { route: "Pearson → Toronto Stadium", bestOption: "UP Express to Union, then TTC Line 1 to Dufferin or Bathurst", approxTime: "40–50 min", bestFor: "Direct on transit, no extra transfers once at Union" },
                    { route: "Pearson → Downtown (taxi/rideshare)", bestOption: "Uber / Lyft / taxi from terminal", approxTime: "30–45 min", bestFor: "Groups with luggage or late arrivals; ~$60–80 CAD" },
                  ].map((r) => <RouteCard key={r.route} r={r} />)}
                </div>
              </>
            ) : (
              <>
                <TldrChip>Free shuttle to mainland — 10 min to Bathurst &amp; Queens Quay.</TldrChip>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    { route: "Billy Bishop → Downtown", bestOption: "Free shuttle bus or pedestrian tunnel", approxTime: "10 min to Bathurst & Queens Quay", bestFor: "Anyone landing at the island airport — walk or TTC from there" },
                    { route: "Billy Bishop → Toronto Stadium", bestOption: "Shuttle to mainland, then TTC or 15-min waterfront walk", approxTime: "20–30 min", bestFor: "Fans staying in Harbourfront / Liberty Village area" },
                  ].map((r) => <RouteCard key={r.route} r={r} />)}
                </div>
              </>
            )}
          </div>

          {/* ── 3. Where to Stay ── */}
          <div className="card" id="stay" style={{ scrollMarginTop: "60px" }}>
            <SectionHeading emoji="🏨" title="Where to Stay" id="_stay_heading" />
            <SectionImage src={IMAGES.neighbourhoods} alt="Toronto city skyline from the water" height={130} />
            <TldrChip>Liberty Village for match access. Downtown Core for transit. King West for nightlife.</TldrChip>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {[
                { label: "Stadium access", area: "Liberty Village / King West", why: "Walkable to Exhibition Place. Brazen Head and Wheat Sheaf Tavern for pre-match drinks." },
                { label: "Best transit hub", area: "Downtown Core / Financial District", why: "Steps from Union Station — UP Express, GO, TTC subway all in one spot. Easy reach everywhere." },
                { label: "Nightlife & atmosphere", area: "Entertainment District / King West", why: "Real Sports Bar, King Taps, best post-match energy. Close to every bar on our Watch list." },
                { label: "Sightseeing + Toronto life", area: "Kensington / Queen West / Yorkville", why: "Best neighbourhoods for food, culture, and exploring between matches." },
              ].map((item) => (
                <div key={item.label} style={{
                  background: "rgba(13,27,42,0.03)", border: "1px solid var(--border)",
                  borderRadius: "12px", padding: "0.75rem 0.9rem",
                  display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 0.75rem",
                  alignItems: "start",
                }}>
                  <div style={{
                    width: "3px", height: "100%", minHeight: "40px",
                    background: "var(--gold)", borderRadius: "99px", gridRow: "1 / 3",
                  }} />
                  <p style={{
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                    fontSize: "0.8rem", color: "var(--navy)", marginBottom: "2px",
                  }}>{item.label}</p>
                  <p style={{ fontSize: "0.77rem", color: "var(--red)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, marginBottom: "3px" }}>
                    {item.area}
                  </p>
                  <p style={{ fontSize: "0.77rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.45, gridColumn: "2" }}>
                    {item.why}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 4. Weather ── */}
          <div className="card" id="weather" style={{ scrollMarginTop: "60px" }}>
            <SectionHeading emoji="⛅" title="Weather in June & July" id="_weather_heading" />
            <TldrChip>20–30 °C, humid. Thunderstorms possible — they pass fast. Bring layers for evenings.</TldrChip>

            <MatchDayAlert>
              Afternoon matches (3 PM) = hottest part of the day. Arrive hydrated. Evening matches (7 PM) = comfortable but cooler near the water — bring a layer.
            </MatchDayAlert>

            {/* Temp visual */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "0.85rem" }}>
              {[
                { period: "Daytime", range: "24–30 °C", desc: "Hot & humid" },
                { period: "Evenings", range: "18–22 °C", desc: "Cooler near lake" },
              ].map((t) => (
                <div key={t.period} style={{
                  background: "rgba(232,160,32,0.07)", border: "1px solid rgba(232,160,32,0.2)",
                  borderRadius: "12px", padding: "0.7rem 0.85rem",
                }}>
                  <p style={{ fontSize: "0.65rem", color: "var(--gold)", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.07em", marginBottom: "3px" }}>
                    {t.period.toUpperCase()}
                  </p>
                  <p style={{ fontSize: "1rem", color: "var(--navy)", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, lineHeight: 1 }}>
                    {t.range}
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "2px" }}>
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.72rem", color: "var(--gold)", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
              PACK LIST
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              {[
                ["☀️", "Sunscreen SPF 50+ — summer sun is strong"],
                ["💧", "Reusable water bottle — stadiums have filling stations"],
                ["🧥", "Light layers — evenings cool down noticeably"],
                ["🌧️", "Compact rain jacket — thunderstorms arrive fast"],
                ["👟", "Comfortable shoes — you will walk a lot"],
              ].map(([icon, text]) => (
                <div key={text} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "0.9rem", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
                  <p style={{ fontSize: "0.8rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.45 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 5. Money & Tipping ── */}
          <div className="card" id="money" style={{ scrollMarginTop: "60px" }}>
            <SectionHeading emoji="💳" title="Money & Tipping" id="_money_heading" />
            <TldrChip>Tip 15–20%. Prices don&apos;t include 13% HST — expect more at checkout.</TldrChip>

            <div style={{
              background: "rgba(13,27,42,0.04)", border: "1px solid var(--border)",
              borderRadius: "12px", padding: "0.75rem 0.9rem", marginBottom: "0.85rem",
            }}>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                TIPPING RATES
              </p>
              <StatRow label="Restaurants & bars" value="15–20%" />
              <div style={{ borderTop: "1px solid var(--border)" }} />
              <StatRow label="Busy bars (per drink)" value="$1–2" />
              <div style={{ borderTop: "1px solid var(--border)" }} />
              <StatRow label="Taxi / rideshare" value="$2–5" />
              <div style={{ borderTop: "1px solid var(--border)" }} />
              <StatRow label="Hotel housekeeping" value="$2–5 / day" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <div>
                <SubLabel>Currency</SubLabel>
                <Body>Canadian Dollar (CAD). USD is <strong>not</strong> accepted at most places. Exchange at the airport or use a fee-free travel card (Wise, Revolut).</Body>
              </div>
              <Divider />
              <div>
                <SubLabel>Payments</SubLabel>
                <Body>Tap/contactless accepted almost everywhere. Visa and Mastercard are universal. Amex widely accepted. Cash works but less common.</Body>
              </div>
              <Divider />
              <div>
                <SubLabel>Tax (HST)</SubLabel>
                <Body style={{ color: "var(--navy)" }}>
                  Prices on menus and tags don&apos;t include tax. Expect to pay <strong>13% more</strong> than the listed price at the register.
                </Body>
              </div>
            </div>
          </div>

          {/* ── 6. Safety ── */}
          <div className="card" id="safety" style={{ scrollMarginTop: "60px" }}>
            <SectionHeading emoji="🛡️" title="Safety & Emergency" id="_safety_heading" />
            <TldrChip>Toronto has low violent crime. Keep an eye on belongings near transit during matches.</TldrChip>

            {/* Emergency numbers — surfaced first */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "0.85rem" }}>
              <div style={{
                background: "rgba(204,41,54,0.07)", border: "1px solid rgba(204,41,54,0.2)",
                borderRadius: "12px", padding: "0.75rem",
              }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.72rem", color: "var(--red)", marginBottom: "3px" }}>
                  EMERGENCY
                </p>
                <p style={{ fontFamily: "monospace", fontSize: "2rem", fontWeight: 700, color: "var(--red)", lineHeight: 1 }}>911</p>
                <p style={{ fontSize: "0.68rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "4px" }}>Police, Fire, Ambulance</p>
              </div>
              <div style={{
                background: "rgba(13,27,42,0.04)", border: "1px solid var(--border)",
                borderRadius: "12px", padding: "0.75rem",
              }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.72rem", color: "var(--navy)", marginBottom: "3px" }}>
                  NON-EMERGENCY
                </p>
                <p style={{ fontFamily: "monospace", fontSize: "0.95rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1.3 }}>416-808-2222</p>
                <p style={{ fontSize: "0.68rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "4px" }}>Police (non-urgent)</p>
              </div>
            </div>

            <Body style={{ marginBottom: "0.5rem" }}>
              Toronto has a very low violent crime rate. Standard city precautions apply — keep an eye on your belongings in crowded areas, especially near transit during matches.
            </Body>
            <Body>
              Stay hydrated. The combination of summer heat, humidity, and outdoor activity can cause heat exhaustion — especially for visitors not used to the climate.
            </Body>
          </div>

          {/* ── 7. SIM & WiFi ── */}
          <div className="card" id="sim" style={{ scrollMarginTop: "60px" }}>
            <SectionHeading emoji="📱" title="SIM Cards & WiFi" id="_sim_heading" />
            <TldrChip>Get an eSIM before you fly, or grab a prepaid SIM on arrival at the airport.</TldrChip>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <div>
                <SubLabel>eSIM (easiest)</SubLabel>
                <Body>Most Canadian carriers support eSIM. Set it up before you fly for seamless connectivity on arrival. Works if your phone is unlocked.</Body>
              </div>
              <Divider />
              <div>
                <SubLabel>Prepaid SIM</SubLabel>
                <Body>Available at the airport, 7-Eleven, Petro-Canada, Shoppers Drug Mart, and carrier stores. Budget carriers: Freedom Mobile, Chatr. Main carriers (better coverage): Bell, Rogers, Telus.</Body>
              </div>
              <Divider />
              <div>
                <SubLabel>Free WiFi</SubLabel>
                <Body>Tim Hortons, Second Cup, independent cafés, Toronto Public Library, and most restaurants. Patchy in TTC subway stations — don&apos;t rely on it for maps on the go.</Body>
              </div>
            </div>
          </div>

          {/* ── 8. Accessibility ── */}
          <div className="card" id="access" style={{ scrollMarginTop: "60px" }}>
            <SectionHeading emoji="♿" title="Accessibility" id="_access_heading" />
            <TldrChip>Accessible drop-off at Toronto Stadium. TTC has elevators — check the map before going.</TldrChip>

            <Body style={{ marginBottom: "0.7rem" }}>
              Toronto is generally well-equipped. TTC subway stations have elevators, though not all — check the TTC accessibility map before heading out.
            </Body>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "0.85rem" }}>
              <div>
                <SubLabel>At the venues</SubLabel>
                <Body>Accessible pick-up/drop-off at Toronto Stadium and near the Fan Festival. One accessible parking lot at Exhibition Place on match days. Exhibition Loop open on match days for accessible ramp deployment.</Body>
              </div>
              <Divider />
              <div>
                <SubLabel>Wheel-Trans</SubLabel>
                <Body>TTC&apos;s door-to-door accessible transit service. Plan ahead — book in advance as capacity fills quickly on match days.</Body>
              </div>
            </div>

            <a
              href="https://www.ttc.ca/accessibility"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                fontSize: "0.78rem", color: "var(--navy)",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              TTC Accessibility Info →
            </a>
          </div>

        </div>{/* end sections */}

        {/* ── Language & Culture (lightweight — no nav tab, just appended) ── */}
        <div className="card" style={{ marginTop: "1.25rem" }}>
          <SectionHeading emoji="🌍" title="Language & Getting Around Socially" id="language" />
          <Body style={{ marginBottom: "0.5rem" }}>
            English is the primary language. Toronto is one of the most multilingual cities on Earth — over 200 languages spoken. You&apos;ll hear Tagalog, Tamil, Mandarin, Punjabi, Portuguese, and dozens more just walking around.
          </Body>
          <Body>
            Google Translate handles anything. Torontonians are generally friendly and used to visitors getting lost.
          </Body>
        </div>

        {/* ── Last updated ── */}
        <p style={{
          fontSize: "0.7rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif",
          textAlign: "center", marginTop: "1.5rem", opacity: 0.65,
        }}>
          Last updated March 2026 · Airport & transit info may change closer to tournament dates
        </p>

      </div>{/* end max-w-2xl */}
    </div>
  );
}
