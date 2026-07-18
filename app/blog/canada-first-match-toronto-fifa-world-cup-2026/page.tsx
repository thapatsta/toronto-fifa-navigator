import type { Metadata } from "next";
import ArticleLayout, {
  Prose, H2, H3, P, Ul, Li, Hr, AlertBox, CtaBox, Sources,
} from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Canada's First Home World Cup Match: Recap of the June 12 Draw with Bosnia and Herzegovina",
  description:
    "Canada's first-ever FIFA World Cup match on home soil ended 1-1 against Bosnia and Herzegovina on June 12 at Toronto Stadium. Here's the recap, how fans got there, and why the moment mattered.",
  openGraph: {
    title: "Canada's First Home World Cup Match: Recap of the June 12 Draw with Bosnia and Herzegovina",
    description:
      "Canada's historic first home World Cup match ended 1-1 against Bosnia and Herzegovina on June 12 in Toronto. Here's the recap and match-day details.",
    url: "https://torontofootball.guide/blog/canada-first-match-toronto-fifa-world-cup-2026",
    type: "article",
    publishedTime: "2026-03-30T12:00:00Z",
    authors: ["Toronto Football Guide"],
    tags: ["Canada Match Day", "June 12", "Toronto Stadium", "FIFA World Cup 2026"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canada's First Home World Cup Match — Recap",
    description: "Canada 1-1 Bosnia and Herzegovina: the recap of Canada's historic match at Toronto Stadium.",
  },
  alternates: {
    canonical: "https://torontofootball.guide/blog/canada-first-match-toronto-fifa-world-cup-2026",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Canada's First Home World Cup Match: Recap of the June 12 Draw with Bosnia and Herzegovina",
  image: "https://torontofootball.guide/og-image.png",
  description:
    "Canada's first-ever FIFA World Cup match on home soil ended 1-1 against Bosnia and Herzegovina on June 12 at Toronto Stadium.",
  datePublished: "2026-03-30T12:00:00Z",
  dateModified: "2026-06-13T12:00:00Z",
  author: { "@type": "Organization", name: "Toronto Football Guide", url: "https://torontofootball.guide" },
  publisher: { "@type": "Organization", name: "Toronto Football Guide", url: "https://torontofootball.guide" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://torontofootball.guide/blog/canada-first-match-toronto-fifa-world-cup-2026" },
  keywords: "Canada FIFA World Cup 2026, June 12, Toronto Stadium, Exhibition Place, Group F, Bosnia and Herzegovina",
};

export default function CanadaFirstMatchPost() {
  return (
    <ArticleLayout
      title="Canada's First Home World Cup Match: Recap of the June 12 Draw with Bosnia and Herzegovina"
      description="June 12 was Canada's moment. For the first time ever, Canada hosted a FIFA World Cup match on home soil — and came away with a 1-1 draw against Bosnia and Herzegovina. Here's how it went."
      publishedDate="March 30, 2026"
      readTime="5 min read"
      tag="Canada Match Day"
      tagColor="var(--red)"
      jsonLd={jsonLd}
    >
      <Prose>
        <P>
          For generations, Canadian soccer fans dreamed of this moment. On <strong>Friday, June 12 at 3:00 PM ET</strong>,
          Canada played its first-ever FIFA World Cup match on home soil. The opponent: Bosnia and Herzegovina, who won the
          European Playoff A final on penalties against Italy on March 31. The stage: Toronto Stadium at Exhibition Place,
          with 45,000 Canadians roaring — and the final score was <strong>Canada 1–1 Bosnia and Herzegovina</strong>,
          with Cyle Larin equalizing in the 78th minute.
        </P>
        <P>
          It wasn&apos;t a win, but it was history. Here&apos;s how the day went.
        </P>

        <Hr />

        <H2>Why This Match Mattered</H2>
        <P>
          Canada qualified for the World Cup in 2022 but hosted no matches that year. Four years later, they finally
          played in front of a home crowd — in the biggest tournament on the planet. It was the moment the country had
          been waiting for.
        </P>
        <P>
          The atmosphere was electric. Maple leafs, faces painted red and white, and the loudest crowd of the
          entire tournament at Toronto Stadium. All 45,000 seats were filled, and Cyle Larin&apos;s late equalizer sent the
          crowd into a roar few World Cup opening matches ever get.
        </P>

        <Hr />

        <H2>Match Details: Final Result</H2>
        <Ul>
          <Li><strong>Date:</strong> Friday, June 12, 2026</Li>
          <Li><strong>Time:</strong> 3:00 PM ET</Li>
          <Li><strong>Teams:</strong> Canada vs. Bosnia and Herzegovina</Li>
          <Li><strong>Final score:</strong> 1–1 (Cyle Larin, 78&apos;)</Li>
          <Li><strong>Group Stage:</strong> Group F</Li>
          <Li><strong>Venue:</strong> Toronto Stadium at Exhibition Place, downtown Toronto</Li>
          <Li><strong>Attendance:</strong> 45,000 (capacity)</Li>
          <Li><strong>Group F:</strong> Canada, Germany, Senegal, and Panama</Li>
        </Ul>

        <AlertBox emoji="⚽" title="Final Score: Canada 1–1 Bosnia and Herzegovina" color="green">
          Bosnia and Herzegovina qualified by beating Italy on penalties in the European Playoff A final on March 31.
          In Toronto, they held Canada to a draw until substitute Cyle Larin equalized in the 78th minute in front of a
          sold-out crowd — a fitting result for Canada&apos;s first-ever home World Cup match.
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
          It wasn&apos;t just Canadians. Bosnian and Herzegovinian supporters travelled in numbers, alongside visiting fans
          from other countries already in town for the tournament. The atmosphere was a mix of national pride and global
          soccer — and it turned out to be the loudest crowd of any Toronto match that summer.
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

        <H2>Relive the Rest of the Tournament</H2>
        <P>
          Canada&apos;s opener was just the first of six Toronto matches. Ghana, Germany, Croatia, Senegal, and a
          Round of 32 knockout all followed at Toronto Stadium through July 2 — see how they all finished.
        </P>

        <CtaBox
          href="/matches"
          label="View All Match Results"
          sub="Final scores, transit options, and details for all 6 Toronto matches"
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
