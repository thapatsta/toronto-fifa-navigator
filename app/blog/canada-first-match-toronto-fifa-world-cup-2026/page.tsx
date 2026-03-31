import type { Metadata } from "next";
import ArticleLayout, {
  Prose, H2, H3, P, Ul, Li, Hr, AlertBox, CtaBox, Sources,
} from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Canada's First Home World Cup Match: Everything You Need to Know for June 12",
  description:
    "Canada's first-ever FIFA World Cup match on home soil is June 12 at Toronto Stadium. Here's what to expect, how to get there, and why this moment matters.",
  openGraph: {
    title: "Canada's First Home World Cup Match: Everything You Need to Know for June 12",
    description:
      "Canada's historic first home World Cup match is June 12 in Toronto. Here's the match details, how to get there, and what to expect.",
    url: "https://torontofootball.guide/blog/canada-first-match-toronto-fifa-world-cup-2026",
    type: "article",
    publishedTime: "2026-03-30T12:00:00Z",
    authors: ["Toronto Football Guide"],
    tags: ["Canada Match Day", "June 12", "Toronto Stadium", "FIFA World Cup 2026"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canada's First Home World Cup Match — June 12",
    description: "Everything you need to know for Canada's historic match at Toronto Stadium.",
  },
  alternates: {
    canonical: "https://torontofootball.guide/blog/canada-first-match-toronto-fifa-world-cup-2026",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Canada's First Home World Cup Match: Everything You Need to Know for June 12",
  image: "https://torontofootball.guide/og-image.png",
  description:
    "Canada's first-ever FIFA World Cup match on home soil is June 12 at Toronto Stadium. Here's what to expect, how to get there, and why this moment matters.",
  datePublished: "2026-03-30T12:00:00Z",
  dateModified: "2026-03-30T12:00:00Z",
  author: { "@type": "Organization", name: "Toronto Football Guide", url: "https://torontofootball.guide" },
  publisher: { "@type": "Organization", name: "Toronto Football Guide", url: "https://torontofootball.guide" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://torontofootball.guide/blog/canada-first-match-toronto-fifa-world-cup-2026" },
  keywords: "Canada FIFA World Cup 2026, June 12, Toronto Stadium, Exhibition Place, Group F, playoff winner",
};

export default function CanadaFirstMatchPost() {
  return (
    <ArticleLayout
      title="Canada's First Home World Cup Match: Everything You Need to Know for June 12"
      description="June 12 is not just another match day — it's Canada's moment. For the first time ever, Canada is hosting a FIFA World Cup match on home soil. Here's what you need to know."
      publishedDate="March 30, 2026"
      readTime="5 min read"
      tag="Canada Match Day"
      tagColor="var(--red)"
      jsonLd={jsonLd}
    >
      <Prose>
        <P>
          For generations, Canadian soccer fans have dreamed of this moment. On <strong>Friday, June 12 at 3:00 PM ET</strong>,
          Canada plays its first-ever FIFA World Cup match on home soil. The opponent: a European Playoff A Winner
          (either Italy or Bosnia & Herzegovina, to be determined March 31). The stage: Toronto Stadium at Exhibition Place,
          with 45,000 Canadians ready to roar.
        </P>
        <P>
          This isn&apos;t just a match. This is history. Here&apos;s exactly what you need to know.
        </P>

        <Hr />

        <H2>Why This Match Matters</H2>
        <P>
          Canada qualified for the World Cup in 2022 but hosted no matches that year. Now, four years later, they&apos;re finally
          playing in front of a home crowd — in the biggest tournament on the planet. It&apos;s the moment the country has
          been waiting for.
        </P>
        <P>
          The atmosphere will be electric. Expect maple leafs, faces painted red and white, and the loudest crowd of the
          entire tournament. Arrival capacity is 45,000 fans, and every seat will matter.
        </P>

        <Hr />

        <H2>Match Details: What You&apos;re Watching</H2>
        <Ul>
          <Li><strong>Date:</strong> Friday, June 12, 2026</Li>
          <Li><strong>Time:</strong> 3:00 PM ET</Li>
          <Li><strong>Teams:</strong> Canada vs. European Playoff A Winner (Italy or Bosnia & Herzegovina)</Li>
          <Li><strong>Group Stage:</strong> Group F</Li>
          <Li><strong>Venue:</strong> Toronto Stadium at Exhibition Place, downtown Toronto</Li>
          <Li><strong>Capacity:</strong> 45,000</Li>
          <Li><strong>Why this is Group F:</strong> Canada is seeded in Group F alongside Germany, Senegal, and Panama</Li>
        </Ul>

        <AlertBox emoji="⚽" title="The Playoff TBD" color="blue">
          The European Playoff A is decided March 31, 2026. The winner (Italy or Bosnia & Herzegovina) will be confirmed just
          11 days before the match. We&apos;ll update this guide as soon as the playoff result is announced.
        </AlertBox>

        <Hr />

        <H2>Getting to Toronto Stadium</H2>
        <P>
          Toronto Stadium is at Exhibition Place, steps from the waterfront. The city has made this clear: <strong>do not drive</strong>.
          There is zero public parking at the stadium or the surrounding neighbourhoods on match days. But getting there is easy
          if you use transit.
        </P>

        <H3>Best Option: Free TTC Shuttle from St. Andrew Station</H3>
        <Ul>
          <Li>Take the TTC subway (Line 1) to <strong>St. Andrew Station</strong></Li>
          <Li>Follow the crowds to the <strong>dedicated shuttle bus</strong> for the stadium</Li>
          <Li>Shuttle runs straight to Fleet Street, steps from the stadium</Li>
          <Li><strong>Cost:</strong> Just the regular TTC fare ($3.35 with Presto)</Li>
          <Li><strong>Pro tip:</strong> Arrive at St. Andrew by 1:30 PM. It will be packed with 45,000 other fans.</Li>
        </Ul>

        <H3>Alternative: Streetcar</H3>
        <Ul>
          <Li><strong>509 Harbourfront:</strong> From Union Station, westbound to Fleet Street (increased frequency on match days)</Li>
          <Li><strong>511 Bathurst:</strong> From Bathurst Station, southbound to Fleet Street</Li>
          <Li><strong>Cost:</strong> Regular TTC fare, free transfer within 2 hours</Li>
        </Ul>

        <H3>Other Options</H3>
        <Ul>
          <Li><strong>GO Transit:</strong> Take GO to Exhibition Station. Must have a valid GO fare — it&apos;s a customer-only zone on match days.</Li>
          <Li><strong>Walking:</strong> 25–35 minutes from King & Strachan or King & Bathurst. Great option if the weather is nice.</Li>
          <Li><strong>Bike:</strong> Ride in and use the temporary Bike Share valet outside Exhibition Place — no regular racks are available.</Li>
          <Li><strong>Rideshare:</strong> Drop-off only at designated areas on King Street West. Expect surge pricing before and after the match.</Li>
        </Ul>

        <AlertBox emoji="🚫" title="DO NOT DRIVE" color="red">
          There is no public parking at Toronto Stadium, Exhibition Place, or the surrounding neighbourhoods on match days. The only parking
          available is for FIFA ticket holders with accessibility needs. Take transit. Your wallet will thank you.
        </AlertBox>

        <Hr />

        <H2>Road Closures to Know</H2>
        <P>
          The city is shutting down major streets for the entire tournament window (June 11–July 19). Here&apos;s what affects you on June 12:
        </P>

        <H3>Tournament-Long (All 22 Days)</H3>
        <Ul>
          <Li><strong>Fleet Street</strong> (Angelique Ave to Strachan Ave) — TTC vehicles only</Li>
          <Li><strong>Fort York Boulevard</strong> — Fully pedestrianized</Li>
          <Li><strong>Garrison Crossing Bridge</strong> — Closed completely. Cross via Strachan or Bathurst instead.</Li>
          <Li><strong>All bike racks and Bike Share docks</strong> near venues — Removed. Use the valet service outside Exhibition Place.</Li>
          <Li><strong>Parking everywhere nearby</strong> — Liberty Village, Fort York, Exhibition Place. All local-access only.</Li>
        </Ul>

        <H3>Match Day Only (June 12)</H3>
        <Ul>
          <Li><strong>Liberty Village:</strong> Local traffic only. If you don&apos;t live or work there, don&apos;t drive through.</Li>
          <Li><strong>Lake Shore Boulevard West</strong> (British Columbia Rd to Bathurst St) — Completely closed to regular traffic</Li>
          <Li><strong>Dufferin Street</strong> (south of Springhurst Ave) — Closed</Li>
          <Li><strong>Strachan Avenue</strong> (up to King St) — May be pedestrianized after the game</Li>
          <Li><strong>Street parking</strong> on Dundas & King West — May be removed</Li>
        </Ul>

        <Hr />

        <H2>Before the Match: Fan Festival & Atmosphere</H2>
        <P>
          The FIFA Fan Festival opens on June 11 at Fort York and The Bentway — <strong>one day before Canada&apos;s match</strong>.
          This is the place to be the day before and leading up to kickoff. Free live entertainment, food vendors, viewing screens,
          and thousands of fans celebrating.
        </P>
        <Ul>
          <Li><strong>Location:</strong> Fort York and The Bentway (adjacent to Exhibition Place)</Li>
          <Li><strong>Hours:</strong> Runs June 11–July 19, with extended hours on match days</Li>
          <Li><strong>Entry:</strong> Free</Li>
          <Li><strong>What&apos;s there:</strong> Live music, food, merchandise, fan zones, screens showing matches</Li>
          <Li><strong>Pro tip:</strong> Arrive early on June 12 to soak in the pre-match energy</Li>
        </Ul>

        <Hr />

        <H2>Match Day Logistics: What to Expect</H2>

        <H3>Arrival Strategy</H3>
        <P>
          45,000 fans in one afternoon. Here&apos;s how to stay ahead of the chaos:
        </P>
        <Ul>
          <Li><strong>Early arrival:</strong> Plan to arrive by 1:30–2:00 PM. Queues at security can be long.</Li>
          <Li><strong>Bring ID:</strong> Some tickets may require ID verification.</Li>
          <Li><strong>Water & sunscreen:</strong> June in Toronto is warm. Bring water and sunscreen — you&apos;ll be outside walking and waiting.</Li>
          <Li><strong>Cash and payment:</strong> Bring both. Some vendors take cards, some don&apos;t. ATMs will be busy.</Li>
          <Li><strong>Phone charged:</strong> You&apos;ll need it for tickets, transit, and staying in touch with friends.</Li>
        </Ul>

        <H3>The Crowd</H3>
        <P>
          This won&apos;t be just Canadians. You&apos;ll see Italian or Bosnian supporters (whoever wins the playoff). You&apos;ll see
          visiting fans from other countries already in town. The atmosphere will be a mix of national pride and global soccer.
          Expect the loudest crowd of any Toronto match that summer.
        </P>

        <H3>After the Match</H3>
        <Ul>
          <Li><strong>TTC service extended:</strong> Subways and streetcars will run late on match nights to move fans home.</Li>
          <Li><strong>Use the shuttle:</strong> TTC shuttle back to St. Andrew Station runs until crowds clear.</Li>
          <Li><strong>Avoid rideshare surge:</strong> After the game, walk north to King Street before requesting Uber or Lyft. Surge pricing near the stadium will be brutal.</Li>
          <Li><strong>Street food:</strong> The neighbourhood around Fleet Street and King West will have vendors, bars, and restaurants open late.</Li>
        </Ul>

        <Hr />

        <H2>Why Toronto, Why June 12</H2>
        <P>
          Canada is in Group F with Germany, Senegal, and Panama. Playing first (June 12) is actually an advantage — you see
          how the group shapes up and can plan your strategy. For Canada fans, it&apos;s the perfect opening: home support,
          maximum volume, a chance to make an impact from day one.
        </P>
        <P>
          Toronto Stadium has a capacity of 45,000 — the smallest of all World Cup venues this summer. This isn&apos;t a weakness.
          It&apos;s an intimacy. Every voice matters. Every cheer echoes.
        </P>

        <Hr />

        <H2>Get Your Ticket</H2>
        <P>
          Tickets for Canada vs. European Playoff A Winner are likely to sell out. If you&apos;re planning to go, register on the
          official FIFA World Cup ticketing site as soon as sales open. Expect high demand and prices to climb as match day approaches.
        </P>

        <CtaBox
          href="/matches"
          label="View All Match Details"
          sub="See transit options, closures, and details for all 6 Toronto matches"
        />

        <Hr />

        <Sources
          items={[
            "FIFA World Cup 2026 Official Schedule",
            "City of Toronto Mobility Plan (March 26, 2026)",
            "Toronto Stadium & Exhibition Place Information",
            "TTC (Toronto Transit Commission)",
            "CP24 Toronto",
          ]}
        />
      </Prose>
    </ArticleLayout>
  );
}
