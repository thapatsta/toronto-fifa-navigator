import type { Metadata } from "next";
import ArticleLayout, {
  Prose, H2, P, Ul, Li, Hr, AlertBox, DataTable, CtaBox, Sources,
} from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Getting to Toronto Stadium for the FIFA World Cup: Every Transit Option Explained",
  description:
    "No parking, restricted streets, 45,000 fans. Here's every way to get to Toronto Stadium (Exhibition Place) for the FIFA World Cup 2026 — ranked by how easy they are.",
  openGraph: {
    title: "Getting to Toronto Stadium for the FIFA World Cup: Every Transit Option Explained",
    description:
      "No parking, restricted streets, 45,000 fans. Every way to get to Exhibition Place for FIFA 2026 — ranked by ease.",
    url: "https://torontofootball.guide/blog/getting-to-toronto-stadium-fifa-world-cup-2026",
    type: "article",
    publishedTime: "2026-03-27T12:00:00Z",
    authors: ["Toronto Football Guide"],
    tags: ["FIFA World Cup 2026", "Toronto Stadium", "TTC", "GO Transit", "Exhibition Place transit"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting to Toronto Stadium for FIFA 2026: Every Option Ranked",
    description: "TTC shuttle, streetcar, GO Transit, walking, biking — every way in, ranked by ease.",
  },
  alternates: {
    canonical: "https://torontofootball.guide/blog/getting-to-toronto-stadium-fifa-world-cup-2026",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Getting to Toronto Stadium for the FIFA World Cup: Every Transit Option Explained",
  image: "https://torontofootball.guide/og-image.png",
  description:
    "No parking, restricted streets, 45,000 fans. Here's every way to get to Toronto Stadium for FIFA 2026 — ranked by ease.",
  datePublished: "2026-03-27T12:00:00Z",
  dateModified: "2026-03-27T12:00:00Z",
  author: { "@type": "Organization", name: "Toronto Football Guide", url: "https://torontofootball.guide" },
  publisher: { "@type": "Organization", name: "Toronto Football Guide", url: "https://torontofootball.guide" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://torontofootball.guide/blog/getting-to-toronto-stadium-fifa-world-cup-2026" },
  keywords: "getting to Toronto Stadium FIFA 2026, TTC shuttle, GO Transit Exhibition, Harbourfront streetcar, FIFA transit guide",
};

export default function GettingToStadiumPost() {
  return (
    <ArticleLayout
      title="Getting to Toronto Stadium for the FIFA World Cup: Every Transit Option Explained"
      description="So you've got a ticket. Now you need to actually get there — and it's not as simple as driving and parking. Here's every option, ranked by how easy they are."
      publishedDate="March 27, 2026"
      readTime="5 min read"
      tag="Match Day Guide"
      tagColor="var(--navy)"
      jsonLd={jsonLd}
    >
      <Prose>
        <P>
          Toronto Stadium (normally BMO Field) is at Exhibition Place, just west of downtown. The city has
          made it clear: <strong>there is no public parking at or near the stadium</strong>. Liberty Village and
          Fort York have local-access restrictions. Lake Shore Blvd West is closed on game days. You&apos;re
          taking transit, walking, or getting dropped off at a designated spot.
        </P>

        <AlertBox emoji="🚫" title="The Golden Rule" color="red">
          Don&apos;t drive. There is no public parking at Toronto Stadium, Exhibition Place, or the surrounding
          neighbourhoods on match days. The only parking at Exhibition Place is reserved for FIFA ticket
          holders with accessibility needs.
        </AlertBox>

        <Hr />

        <H2>Option 1: TTC Shuttle from St. Andrew Station — Easiest</H2>
        <P>
          Take the TTC subway to St. Andrew Station (Line 1 University). A dedicated shuttle bus runs from the
          station to a new transit hub on Fleet Street, steps from both the stadium and the Fan Festival.
        </P>
        <Ul>
          <Li><strong>Cost:</strong> Regular TTC fare ($3.35 with Presto)</Li>
          <Li><strong>Why it works:</strong> No transfers to figure out. Just get to St. Andrew and follow the crowds to the shuttle.</Li>
          <Li><strong>Tip:</strong> Arrive at St. Andrew at least 90 minutes before kickoff. It will be packed.</Li>
        </Ul>

        <Hr />

        <H2>Option 2: Streetcar — Harbourfront (509) or Bathurst (511)</H2>
        <P>
          Both streetcar routes have increased frequency during the World Cup. Their final stop has been moved
          to Fleet Street — the main access point to the tournament.
        </P>
        <Ul>
          <Li><strong>From Union Station:</strong> Take the 509 Harbourfront streetcar westbound along Queens Quay, terminates at Fleet Street.</Li>
          <Li><strong>From Bathurst Station:</strong> Take the 511 Bathurst streetcar southbound to Fleet Street.</Li>
          <Li><strong>Cost:</strong> Regular TTC fare. Free transfer within 2 hours.</Li>
          <Li><strong>Note:</strong> Exhibition Loop is only open on match days for accessible ramp use. Dufferin Loop is NOT in service.</Li>
        </Ul>

        <Hr />

        <H2>Option 3: GO Transit to Exhibition Station</H2>
        <P>
          Take GO Transit to Exhibition GO Station. Service is being increased for the World Cup.
        </P>
        <Ul>
          <Li><strong>Important:</strong> Exhibition GO is a <strong>customer-only zone</strong> on match days. You must have a valid GO fare to access the station.</Li>
          <Li><strong>From Union Station:</strong> One quick stop on the Lakeshore West GO line.</Li>
          <Li><strong>Cost:</strong> ~$4–6 from Union Station.</Li>
          <Li><strong>Best for:</strong> Visitors coming from Mississauga, Hamilton, Oakville, or anywhere along the Lakeshore West corridor.</Li>
        </Ul>

        <Hr />

        <H2>Option 4: Walk</H2>
        <P>
          The stadium is 25–35 minutes on foot from downtown, depending on where you start.
        </P>
        <Ul>
          <Li><strong>From King &amp; Strachan:</strong> Walk south on Strachan Ave, cross the rail corridor, continue to Exhibition Place.</Li>
          <Li><strong>From King &amp; Bathurst:</strong> Walk south on Bathurst St to the Fleet Street area.</Li>
          <Li><strong>Do NOT</strong> plan to use Garrison Crossing Bridge — it&apos;s closed for the entire Fan Festival period.</Li>
        </Ul>
        <P>
          Great option on nice days. June/July in Toronto is warm — bring water and sunscreen.
        </P>

        <Hr />

        <H2>Option 5: Bike</H2>
        <P>
          Cycling routes exist, but all bike racks and Bike Share docks near the venues have been removed. Temporary
          Bike Share valet service and valet bike parking are available outside Exhibition Place. Ride in,
          use the valet, walk the rest.
        </P>

        <Hr />

        <H2>Option 6: Rideshare or Taxi</H2>
        <P>
          You can get dropped off, but not near the stadium. Pick-up and drop-off is limited to designated
          areas outside the restricted zones.
        </P>
        <Ul>
          <Li>Expect surge pricing before and after matches.</Li>
          <Li>Set your drop-off to somewhere on King Street West near Strachan — walk the rest.</Li>
          <Li><strong>After the game:</strong> Walk north to the designated pick-up zones before requesting a ride. TTC service is extended on match nights.</Li>
        </Ul>

        <Hr />

        <H2>Coming from the Airport?</H2>
        <Ul>
          <Li><strong>Pearson Airport (YYZ):</strong> Take the UP Express to Union Station (25 min, ~$12.35). From Union, take the 509 streetcar or shuttle from St. Andrew.</Li>
          <Li><strong>Billy Bishop Airport (YTZ):</strong> Free shuttle or pedestrian tunnel to the mainland near Bathurst and Queens Quay. Walk or streetcar from there.</Li>
        </Ul>

        <Hr />

        <H2>Accessible Options</H2>
        <Ul>
          <Li>Accessible pick-up and drop-off at the Toronto Stadium accessible parking lot</Li>
          <Li>A designated accessible location near the Fan Festival at Fort York</Li>
          <Li>Exhibition Loop opens on match days for accessible TTC ramp deployment</Li>
          <Li>One accessible parking lot at Exhibition Place (match-day FIFA ticket holders only)</Li>
        </Ul>

        <Hr />

        <H2>Quick Reference</H2>
        <DataTable
          headers={["Method", "Start At", "Cost", "Best For"]}
          rows={[
            ["TTC Shuttle",    "St. Andrew Station",              "$3.35",    "Easiest option"],
            ["509 Streetcar",  "Union Station",                   "$3.35",    "Coming from east"],
            ["511 Streetcar",  "Bathurst Station",                "$3.35",    "Coming from north"],
            ["GO Transit",     "Exhibition GO",                   "~$4–6",    "Suburbs"],
            ["Walk",           "King & Strachan or King & Bathurst", "Free", "Nice weather"],
            ["Bike + Valet",   "Bike lanes nearby",               "Free",     "Cyclists"],
            ["Rideshare",      "Designated drop-off zones",       "$15–40+",  "Convenience"],
            ["Drive",          "Don't",                           "N/A",      "Nobody"],
          ]}
        />

        <CtaBox
          href="/matches"
          label="Full Match Day Guide"
          sub="Transit options, closure maps, and tips for each of Toronto's 6 matches"
        />

        <Sources
          items={[
            "City of Toronto Mobility Plan (March 26, 2026)",
            "TTC (Toronto Transit Commission)",
            "Metrolinx / GO Transit",
          ]}
        />
      </Prose>
    </ArticleLayout>
  );
}
