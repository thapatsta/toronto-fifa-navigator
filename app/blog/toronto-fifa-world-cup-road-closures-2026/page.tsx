import type { Metadata } from "next";
import ArticleLayout, {
  Prose, H2, H3, P, Ul, Li, Hr, AlertBox, DataTable, CtaBox, Sources,
} from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Toronto FIFA World Cup 2026: Complete Road Closure Guide by Date",
  description:
    "The City of Toronto's full road closure plan for FIFA World Cup 2026 — which streets close, when, and what to do instead. Covers all 6 match days and the full tournament window.",
  openGraph: {
    title: "Toronto FIFA World Cup 2026: Complete Road Closure Guide by Date",
    description:
      "Which streets close, when, and what you can do instead. Covers all 6 match days plus the full June 11–July 19 tournament window.",
    url: "https://torontofootball.guide/blog/toronto-fifa-world-cup-road-closures-2026",
    type: "article",
    publishedTime: "2026-03-27T12:00:00Z",
    authors: ["Toronto Football Guide"],
    tags: ["FIFA World Cup 2026", "Toronto road closures", "Exhibition Place", "Liberty Village"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toronto FIFA 2026: Road Closure Guide by Date",
    description: "Which streets close for the World Cup, when, and what to do instead.",
  },
  alternates: {
    canonical: "https://torontofootball.guide/blog/toronto-fifa-world-cup-road-closures-2026",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Toronto FIFA World Cup 2026: Complete Road Closure Guide by Date",
  image: "https://torontofootball.guide/og-image.png",
  description:
    "The City of Toronto's full road closure plan for FIFA World Cup 2026 — which streets close, when, and what to do instead.",
  datePublished: "2026-03-27T12:00:00Z",
  dateModified: "2026-03-27T12:00:00Z",
  author: { "@type": "Organization", name: "Toronto Football Guide", url: "https://torontofootball.guide" },
  publisher: { "@type": "Organization", name: "Toronto Football Guide", url: "https://torontofootball.guide" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://torontofootball.guide/blog/toronto-fifa-world-cup-road-closures-2026" },
  keywords: "Toronto FIFA World Cup 2026, road closures, Exhibition Place, Liberty Village, match day, tournament",
};

export default function RoadClosuresPost() {
  return (
    <ArticleLayout
      title="Toronto FIFA World Cup 2026: Complete Road Closure Guide by Date"
      description="The City of Toronto just released its official Mobility Plan — and if you live near Exhibition Place, Liberty Village, or the waterfront, your summer commute is about to change."
      publishedDate="March 27, 2026"
      readTime="4 min read"
      tag="Road Closures"
      tagColor="var(--red)"
      jsonLd={jsonLd}
    >
      <Prose>
        <P>
          Toronto is hosting six World Cup matches between June 12 and July 2 at Toronto Stadium (BMO Field),
          plus the FIFA Fan Festival runs June 11–July 19 at Fort York and The Bentway. The city expects
          300,000 out-of-town visitors and up to 45,000 fans per match.
        </P>
        <P>
          Here&apos;s exactly what&apos;s closing, when, and what you can do instead.
        </P>

        <Hr />

        <H2>Closures in Effect the ENTIRE Tournament (June 11 – July 19)</H2>
        <P>
          These aren&apos;t just match day disruptions — they&apos;re in place for the full 22-day window.
        </P>

        <AlertBox emoji="🚫" title="Tournament-Long Closures" color="red">
          <Ul>
            <Li><strong>Fleet Street</strong> (Angelique Ave to Strachan Ave) — TTC vehicles only. No regular car traffic for the duration.</Li>
            <Li><strong>Fort York Boulevard</strong> (Angelique St to Lake Shore Blvd West) — Fully pedestrianized. Walk, don&apos;t drive.</Li>
            <Li><strong>Garrison Crossing Bridge</strong> — The pedestrian bridge over the rail corridor is CLOSED for the entire Fan Festival period. Cross via Strachan Avenue or Bathurst Street instead.</Li>
            <Li><strong>All Bike Share docks and bike racks</strong> near Exhibition Place, Toronto Stadium, and the Fan Festival — Removed entirely. Temporary Bike Share valet service and bike parking will be available outside Exhibition Place.</Li>
            <Li><strong>No public parking</strong> at Toronto Stadium, Exhibition Place, or surrounding neighbourhoods, including Liberty Village and Fort York.</Li>
          </Ul>
        </AlertBox>

        <Hr />

        <H2>Match Day Closures (June 12, 17, 20, 23, 26, July 2)</H2>
        <P>
          On top of the tournament-long closures, these additional restrictions kick in on the six game days:
        </P>
        <Ul>
          <Li><strong>Liberty Village</strong> — Local traffic only. If you don&apos;t live or work there, you&apos;re not driving through.</Li>
          <Li><strong>Lake Shore Boulevard West</strong> (British Columbia Road to Bathurst Street) — Completely closed to regular traffic. Used for bus staging and official vehicles.</Li>
          <Li><strong>Dufferin Street</strong> (south of Springhurst Avenue) — Closed.</Li>
          <Li><strong>Exhibition GO Station</strong> — Becomes a customer-only zone. You need a valid GO Transit fare to access the area.</Li>
          <Li><strong>Rideshare and taxi pick-up/drop-off</strong> — Limited to designated areas outside the restricted zones. Don&apos;t expect to get an Uber right at the stadium.</Li>
          <Li><strong>Strachan Avenue</strong> (up to King Street) — The city is considering pedestrianizing this after games end.</Li>
          <Li><strong>Street parking on Dundas Street West and King Street West</strong> — May be removed to keep streetcars moving.</Li>
        </Ul>

        <Hr />

        <H2>Match Schedule: When Are the Game Days?</H2>
        <DataTable
          headers={["Date", "Time", "Match"]}
          rows={[
            ["Friday, June 12",    "3:00 PM",  "Canada vs. European Playoff A Winner"],
            ["Wednesday, June 17", "7:00 PM",  "Ghana vs. Panama"],
            ["Saturday, June 20",  "4:00 PM",  "Germany vs. Côte d'Ivoire"],
            ["Tuesday, June 23",   "7:00 PM",  "Croatia vs. Panama"],
            ["Friday, June 26",    "3:00 PM",  "Senegal vs. FIFA Playoff 2 Winner"],
            ["Thursday, July 2",   "7:00 PM",  "Round of 32: Group K vs. Group L"],
          ]}
        />

        <Hr />

        <H2>Transit: What&apos;s Being Added</H2>
        <P>
          The city is calling this a &quot;transit-first&quot; approach. Here&apos;s what&apos;s actually happening:
        </P>
        <Ul>
          <Li><strong>Harbourfront and Bathurst streetcars</strong>: Increased frequency, final stop moved to Fleet Street</Li>
          <Li><strong>Dufferin and Ossington buses</strong>: Running more often</Li>
          <Li><strong>Shuttle bus</strong>: Free service from St. Andrew Station to Fleet Street (connects to stadium and Fan Fest)</Li>
          <Li><strong>TTC extending service hours</strong> on match days</Li>
          <Li><strong>GO Transit</strong>: Increased service to Exhibition GO Station</Li>
        </Ul>

        <CtaBox
          href="/closures"
          label="Interactive Closure Map"
          sub="See exactly which streets are affected, with match day and non-match day views"
        />

        <Hr />

        <H2>What to Do Instead of Driving</H2>
        <P>
          The city is blunt: don&apos;t drive downtown on match days. Here&apos;s what works instead:
        </P>

        <H3>1. TTC + Walk</H3>
        <P>Take the subway to St. Andrew Station, grab the free shuttle, or walk south on Strachan or Bathurst. Easiest and most reliable option.</P>

        <H3>2. GO Transit</H3>
        <P>Take GO to Exhibition Station — have your fare ready, it&apos;s a customer-only zone on match days. Best option if you&apos;re coming from the suburbs.</P>

        <H3>3. Streetcar</H3>
        <P>Harbourfront (509) or Bathurst (511) lines to Fleet Street. Both have increased frequency during the World Cup.</P>

        <H3>4. Bike</H3>
        <P>Lanes are open but there are no racks near venues. Use the temporary valet parking outside Exhibition Place.</P>

        <H3>5. Rideshare</H3>
        <P>Uber/Lyft drop-off at designated areas only. Expect surge pricing — walk north to King Street before requesting a ride after the match.</P>

        <AlertBox emoji="📅" title="Stay Updated" color="blue">
          The city will release street-by-street closure details in May. We&apos;ll update this guide and the interactive map as soon as that info drops.
        </AlertBox>

        <Sources
          items={[
            "City of Toronto Mobility Plan (March 26, 2026)",
            "CP24 Toronto",
            "CBC Toronto",
            "The Globe and Mail",
          ]}
        />
      </Prose>
    </ArticleLayout>
  );
}
