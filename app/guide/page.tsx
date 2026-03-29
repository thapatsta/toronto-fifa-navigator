import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visitor Guide — World Cup Toronto 2026",
  description:
    "Everything first-time visitors need to know for World Cup Toronto — airports, transit, neighbourhoods, weather, payments, and match-day movement.",
};

/* ─── Shared sub-components (server-renderable, no hooks needed) ─── */

function SectionHeader({ emoji, title }: { emoji: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.85rem" }}>
      <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{emoji}</span>
      <h2
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "1.15rem",
          color: "var(--navy)",
          lineHeight: 1,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 700,
        fontSize: "0.88rem",
        color: "var(--navy)",
        marginBottom: "0.3rem",
        letterSpacing: "0.02em",
      }}
    >
      {children}
    </p>
  );
}

function BodyText({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p
      style={{
        fontSize: "0.82rem",
        color: "var(--muted)",
        fontFamily: "'DM Sans', sans-serif",
        lineHeight: 1.55,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

function MatchDayCallout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "rgba(204,41,54,0.05)",
        border: "1px solid rgba(204,41,54,0.2)",
        borderRadius: "12px",
        padding: "0.75rem 0.9rem",
        marginTop: "0.85rem",
      }}
    >
      <p
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "0.7rem",
          color: "var(--red)",
          letterSpacing: "0.08em",
          marginBottom: "0.3rem",
        }}
      >
        ⚽ ON MATCH DAY
      </p>
      <div style={{ fontSize: "0.8rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
        {children}
      </div>
    </div>
  );
}

type AirportRoute = {
  route: string;
  bestOption: string;
  approxTime: string;
  bestFor: string;
};

function AirportCard({ routes, title }: { routes: AirportRoute[]; title: string }) {
  return (
    <div style={{ marginBottom: "0.75rem" }}>
      <SubHeading>{title}</SubHeading>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {routes.map((r) => (
          <div
            key={r.route}
            style={{
              background: "rgba(13,27,42,0.04)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "0.7rem 0.85rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.4rem 0.75rem",
            }}
          >
            <div style={{ gridColumn: "1 / -1" }}>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "var(--navy)",
                  marginBottom: "0.35rem",
                }}
              >
                {r.route}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "0.65rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Best option</p>
              <p style={{ fontSize: "0.8rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{r.bestOption}</p>
            </div>
            <div>
              <p style={{ fontSize: "0.65rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Approx. time</p>
              <p style={{ fontSize: "0.8rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{r.approxTime}</p>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <p style={{ fontSize: "0.65rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Best for</p>
              <p style={{ fontSize: "0.79rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>{r.bestFor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Divider ─── */
function Divider() {
  return <div style={{ borderTop: "1px solid var(--border)", margin: "1rem 0" }} />;
}

export default function GuidePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6" style={{ paddingBottom: "5rem" }}>

      {/* Page header */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h1
          className="display"
          style={{ fontSize: "clamp(2rem, 8vw, 2.8rem)", color: "var(--navy)", lineHeight: 0.95, marginBottom: "0.4rem" }}
        >
          Visitor Guide
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
          Everything first-time visitors need to know for World Cup Toronto — airports, transit, neighbourhoods, weather, payments, and match-day movement.
        </p>
      </div>

      {/* Presto card — first action hero */}
      <div
        style={{
          background: "var(--navy)",
          borderRadius: "18px",
          padding: "1.1rem 1.2rem",
          marginBottom: "1.5rem",
        }}
      >
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: "white",
            lineHeight: 1.2,
            marginBottom: "0.4rem",
          }}
        >
          First thing to do when you arrive
        </p>
        <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.75)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
          Get a <strong style={{ color: "white" }}>Presto card</strong>. Available at any subway station or Union Station for $6. Load $20–40 and you&apos;re set for the week. It works on TTC, GO Transit, and regional buses — the fastest way to move around the city.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

        {/* ── Getting Around Toronto ── */}
        <div className="card">
          <SectionHeader emoji="🚇" title="Getting Around Toronto" />

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div>
              <SubHeading>Presto Card</SubHeading>
              <BodyText>
                Toronto runs on the Presto card — a reloadable tap card accepted on TTC, GO Transit, and most regional transit. Buy one at any subway station, Union Station, or Shoppers Drug Mart for $6. Load money at machines or the Presto app.
              </BodyText>
            </div>

            <Divider />

            <div>
              <SubHeading>TTC (Toronto Transit Commission)</SubHeading>
              <BodyText>
                Subway, streetcar, and bus. Flat fare — currently $3.30 CAD per ride with Presto ($3.35 cash). Transfers are free within 2 hours. Line 1 (Yonge–University) is your main artery for downtown and the Exhibition area.
              </BodyText>
            </div>

            <Divider />

            <div>
              <SubHeading>GO Transit</SubHeading>
              <BodyText>
                Regional rail and bus system connecting Toronto with suburbs and the airport. All routes go through Union Station. Distance-based pricing. GO is the fastest way from Pearson into downtown.
              </BodyText>
            </div>

            <Divider />

            <div>
              <SubHeading>Rideshare & Taxis</SubHeading>
              <BodyText>
                Uber and Lyft operate throughout Toronto. Taxis are available at major hotels. On match days, rideshare pickup near venues is restricted to designated zones — allow extra time and expect surge pricing.
              </BodyText>
            </div>

            <MatchDayCallout>
              Do not drive to the stadium. There is no public parking anywhere near Toronto Stadium on match days. Take TTC, GO Transit, or the free shuttle from St. Andrew Station.
            </MatchDayCallout>
          </div>
        </div>

        {/* ── Getting from the Airport ── */}
        <div className="card">
          <SectionHeader emoji="✈️" title="Getting from the Airport" />

          <AirportCard
            title="Pearson International (YYZ)"
            routes={[
              {
                route: "Pearson → Downtown / Union Station",
                bestOption: "UP Express train",
                approxTime: "25 min",
                bestFor: "Fast, reliable, easiest for luggage — runs every 15 min, ~$12 CAD with Presto",
              },
              {
                route: "Pearson → Toronto Stadium (Exhibition Place)",
                bestOption: "UP Express to Union, then TTC Line 1 to Dufferin or Bathurst",
                approxTime: "40–50 min",
                bestFor: "Direct on transit, no transfers needed once at Union",
              },
              {
                route: "Pearson → Downtown (taxi/rideshare)",
                bestOption: "Uber / Lyft / taxi from terminal",
                approxTime: "30–45 min (traffic-dependent)",
                bestFor: "Groups with luggage or late arrivals; ~$60–80 CAD",
              },
            ]}
          />

          <AirportCard
            title="Billy Bishop Airport (YTZ)"
            routes={[
              {
                route: "Billy Bishop → Downtown",
                bestOption: "Free shuttle bus or pedestrian tunnel to mainland",
                approxTime: "10 min to Bathurst & Queens Quay",
                bestFor: "Anyone landing at the downtown island airport — then walk or TTC from there",
              },
              {
                route: "Billy Bishop → Toronto Stadium",
                bestOption: "Shuttle to mainland, then TTC or 15-min walk along waterfront",
                approxTime: "20–30 min",
                bestFor: "Fans staying in the Harbourfront / Liberty Village area",
              },
            ]}
          />

          <MatchDayCallout>
            Arriving on match day? Add 30 minutes to any transit estimate. Dufferin Bus and Bathurst Streetcar get very crowded on match days. Boarding the UP Express at Pearson is unaffected — delays start once you&apos;re downtown.
          </MatchDayCallout>
        </div>

        {/* ── Where to Stay ── */}
        <div className="card">
          <SectionHeader emoji="🏨" title="Where to Stay" />

          <BodyText style={{ marginBottom: "0.85rem" }}>
            Toronto has hotels for every budget. Where you stay should depend on your priorities for the tournament.
          </BodyText>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              {
                label: "Stadium convenience",
                area: "Liberty Village / King West",
                why: "Walkable to Exhibition Place. Brazen Head and Wheat Sheaf Tavern are right here for pre-match.",
              },
              {
                label: "Best transit access",
                area: "Downtown Core / Financial District",
                why: "Steps from Union Station — UP Express, GO, TTC subway all in one spot. Easy reach everywhere.",
              },
              {
                label: "Nightlife & atmosphere",
                area: "Entertainment District / King West",
                why: "Real Sports Bar, King Taps, and the best post-match energy in the city. Close to every bar on our Watch list.",
              },
              {
                label: "Sightseeing + Toronto life",
                area: "Kensington / Queen West / Yorkville",
                why: "Best neighbourhoods for food, culture, and exploring the city between matches.",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(13,27,42,0.04)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "0.7rem 0.85rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    color: "var(--navy)",
                    marginBottom: "2px",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--red)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {item.area}
                </p>
                <p style={{ fontSize: "0.78rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.45 }}>
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Weather ── */}
        <div className="card">
          <SectionHeader emoji="🌤️" title="Weather in June & July" />

          <BodyText style={{ marginBottom: "0.85rem" }}>
            Toronto in June/July is warm and humid. Expect <strong>20–30°C (68–86°F)</strong> with high humidity, especially in July. Thunderstorms are possible — they come fast in summer and usually pass within an hour.
          </BodyText>

          <div
            style={{
              background: "rgba(232,160,32,0.08)",
              border: "1px solid rgba(232,160,32,0.25)",
              borderRadius: "12px",
              padding: "0.75rem 0.9rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                color: "var(--gold)",
                letterSpacing: "0.07em",
                marginBottom: "0.5rem",
              }}
            >
              PACK LIST
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              {[
                "☀️ Sunscreen (SPF 50+) — the summer sun is strong",
                "💧 Reusable water bottle — stadiums have filling stations",
                "🧥 Light layers — evenings cool down noticeably",
                "🌧️ Compact rain jacket — thunderstorms arrive with no warning",
                "👟 Comfortable walking shoes — you will walk a lot",
              ].map((item) => (
                <p key={item} style={{ fontSize: "0.8rem", color: "var(--navy)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <MatchDayCallout>
            Afternoon matches (3 PM ET) will be the hottest part of the day — arrive hydrated. Evening matches (7 PM ET) are more comfortable but bring a layer; it cools off after sunset at Exhibition Place near the water.
          </MatchDayCallout>
        </div>

        {/* ── Money & Tipping ── */}
        <div className="card">
          <SectionHeader emoji="💳" title="Money & Tipping" />

          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            <div>
              <SubHeading>Currency</SubHeading>
              <BodyText>
                Canadian Dollar (CAD). USD is <strong>not</strong> generally accepted, though some touristy spots may take it at unfavourable rates. Exchange at the airport or use a fee-free travel card (Wise, Revolut).
              </BodyText>
            </div>

            <Divider />

            <div>
              <SubHeading>Payments</SubHeading>
              <BodyText>
                Tap/contactless is accepted almost everywhere. Visa and Mastercard are universal. American Express is widely accepted. Cash is less common but still works.
              </BodyText>
            </div>

            <Divider />

            <div>
              <SubHeading>Tipping</SubHeading>
              <BodyText>
                Expected and important in Canada. 15–20% at restaurants and bars. $1–2 per drink at busy bars. $2–5 for taxi/rideshare. Hotels: $2–5/day for housekeeping.
              </BodyText>
            </div>

            <p
              style={{
                fontSize: "0.74rem",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                marginTop: "0.25rem",
                lineHeight: 1.45,
              }}
            >
              Note: Prices in Canada don&apos;t include HST (13% tax) — the final price is always higher than what&apos;s on the menu.
            </p>
          </div>
        </div>

        {/* ── Language ── */}
        <div className="card">
          <SectionHeader emoji="🗣️" title="Language & General Ease" />
          <BodyText style={{ marginBottom: "0.5rem" }}>
            English is the primary language. You&apos;ll see French on federal government signage. Toronto is one of the most multilingual cities on Earth — over 200 languages are spoken here. You&apos;ll hear Tagalog, Tamil, Mandarin, Punjabi, Portuguese, and dozens more just walking around.
          </BodyText>
          <BodyText>
            Google Translate handles anything you need. Torontonians are generally friendly and used to visitors getting lost.
          </BodyText>
        </div>

        {/* ── Safety & Emergency ── */}
        <div className="card">
          <SectionHeader emoji="🛡️" title="Safety & Emergency" />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "0.85rem" }}>
            <div
              style={{
                background: "rgba(204,41,54,0.07)",
                border: "1px solid rgba(204,41,54,0.2)",
                borderRadius: "12px",
                padding: "0.75rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  color: "var(--red)",
                  marginBottom: "4px",
                }}
              >
                Emergency
              </p>
              <p style={{ fontFamily: "monospace", fontSize: "1.5rem", fontWeight: 700, color: "var(--red)", lineHeight: 1 }}>
                911
              </p>
              <p style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "4px" }}>
                Police, Fire, Ambulance
              </p>
            </div>
            <div
              style={{
                background: "rgba(13,27,42,0.04)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "0.75rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  color: "var(--navy)",
                  marginBottom: "4px",
                }}
              >
                Non-Emergency Police
              </p>
              <p style={{ fontFamily: "monospace", fontSize: "0.9rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1.3 }}>
                416-808-2222
              </p>
            </div>
          </div>

          <BodyText style={{ marginBottom: "0.5rem" }}>
            Toronto has a very low violent crime rate. Standard city precautions apply — keep an eye on your belongings in crowded areas, especially near transit hubs during matches.
          </BodyText>
          <BodyText>
            Stay hydrated. The combination of summer heat, humidity, and outdoor activity can cause heat exhaustion — especially for visitors not used to the climate. Watch for heat warnings from Environment Canada.
          </BodyText>
        </div>

        {/* ── SIM Cards & WiFi ── */}
        <div className="card">
          <SectionHeader emoji="📱" title="SIM Cards & WiFi" />

          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            <div>
              <SubHeading>Prepaid SIMs</SubHeading>
              <BodyText>
                Available at the airport, convenience stores (7-Eleven, Petro-Canada, Shoppers Drug Mart), and carrier stores. Budget carriers like Freedom Mobile and Chatr offer good rates. Main carriers are Bell, Rogers, and Telus — premium but excellent coverage.
              </BodyText>
            </div>
            <Divider />
            <div>
              <SubHeading>eSIM</SubHeading>
              <BodyText>
                Most Canadian carriers now support eSIM — easiest option if your phone is unlocked. Set it up before you fly.
              </BodyText>
            </div>
            <Divider />
            <div>
              <SubHeading>WiFi</SubHeading>
              <BodyText>
                Free WiFi in coffee shops (Tim Hortons, Second Cup, independent cafés), Toronto Public Library branches, and some TTC subway stations. Most restaurants have WiFi.
              </BodyText>
            </div>
          </div>
        </div>

        {/* ── Accessibility ── */}
        <div className="card">
          <SectionHeader emoji="♿" title="Accessibility" />

          <BodyText style={{ marginBottom: "0.65rem" }}>
            Toronto is generally well-equipped for accessibility. TTC subway stations have elevators, though not all — check the TTC&apos;s accessibility map before you go.
          </BodyText>

          <div>
            <SubHeading>At the venues</SubHeading>
            <BodyText style={{ marginBottom: "0.5rem" }}>
              Accessible pick-up/drop-off available at Toronto Stadium and a designated location near the Fan Festival. One accessible parking lot at Exhibition Place on match days. Exhibition Loop is open on match days for accessible ramp deployment.
            </BodyText>
          </div>

          <div>
            <SubHeading>Wheel-Trans</SubHeading>
            <BodyText style={{ marginBottom: "0.65rem" }}>
              TTC&apos;s door-to-door accessible transit service. Plan ahead — book in advance.
            </BodyText>
          </div>

          <a
            href="https://www.ttc.ca/accessibility"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              fontSize: "0.78rem",
              color: "var(--navy)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            TTC Accessibility Info →
          </a>
        </div>

      </div>

      {/* Last updated */}
      <p
        style={{
          fontSize: "0.72rem",
          color: "var(--muted)",
          fontFamily: "'DM Sans', sans-serif",
          textAlign: "center",
          marginTop: "1.5rem",
          opacity: 0.7,
        }}
      >
        Last updated March 2026 · Airport & transit info may change closer to tournament dates
      </p>
    </div>
  );
}
