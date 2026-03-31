import type { Metadata } from "next";
import ArticleLayout, {
  Prose, H2, H3, P, Ul, Li, Hr, AlertBox, CtaBox, Sources,
} from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Toronto Neighbourhoods Affected by the World Cup 2026: What You Need to Know",
  description:
    "Liberty Village, Parkdale, Fort York, CityPlace — here's how each Toronto neighbourhood is affected by the FIFA World Cup 2026, and how to plan around it.",
  openGraph: {
    title: "Toronto Neighbourhoods Affected by the FIFA World Cup 2026",
    description:
      "Liberty Village, Parkdale, Fort York, CityPlace — what's changing in your neighbourhood for the World Cup, and how to plan around it.",
    url: "https://torontofootball.guide/blog/toronto-neighbourhoods-world-cup-2026-impact",
    type: "article",
    publishedTime: "2026-03-27T12:00:00Z",
    authors: ["Toronto Football Guide"],
    tags: ["FIFA World Cup 2026", "Liberty Village", "Parkdale", "Fort York", "Toronto neighbourhoods"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How the FIFA World Cup Will Affect Your Toronto Neighbourhood",
    description: "Liberty Village, Parkdale, Fort York, CityPlace — what's changing and how to plan.",
  },
  alternates: {
    canonical: "https://torontofootball.guide/blog/toronto-neighbourhoods-world-cup-2026-impact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Toronto Neighbourhoods Affected by the World Cup 2026: What You Need to Know",
  image: "https://torontofootball.guide/og-image.png",
  description:
    "Liberty Village, Parkdale, Fort York, CityPlace — here's how each Toronto neighbourhood is affected by the FIFA World Cup 2026.",
  datePublished: "2026-03-27T12:00:00Z",
  dateModified: "2026-03-27T12:00:00Z",
  author: { "@type": "Organization", name: "Toronto Football Guide", url: "https://torontofootball.guide" },
  publisher: { "@type": "Organization", name: "Toronto Football Guide", url: "https://torontofootball.guide" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://torontofootball.guide/blog/toronto-neighbourhoods-world-cup-2026-impact" },
  keywords: "Toronto FIFA World Cup neighbourhood impact, Liberty Village World Cup, Fort York Fan Festival, Parkdale road closures, CityPlace FIFA 2026",
};

function ImpactBadge({ level }: { level: "Very High" | "High" | "Medium-High" | "Medium" | "Low-Medium" | "Low" }) {
  const colors: Record<string, { bg: string; text: string }> = {
    "Very High":   { bg: "#fff1f1", text: "#991b1b" },
    "High":        { bg: "#fef3c7", text: "#92400e" },
    "Medium-High": { bg: "#fef3c7", text: "#92400e" },
    "Medium":      { bg: "#eff6ff", text: "#1e40af" },
    "Low-Medium":  { bg: "#f0fdf4", text: "#166534" },
    "Low":         { bg: "#f0fdf4", text: "#166534" },
  };
  const c = colors[level];
  return (
    <span
      style={{
        display: "inline-block",
        background: c.bg, color: c.text,
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
        fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase",
        padding: "2px 10px", borderRadius: "99px", marginLeft: "0.6rem",
        verticalAlign: "middle",
      }}
    >
      {level} Impact
    </span>
  );
}

export default function NeighbourhoodImpactPost() {
  return (
    <ArticleLayout
      title="Toronto Neighbourhoods Affected by the World Cup 2026: What You Need to Know"
      description="If you live in Liberty Village, Parkdale, the waterfront, or anywhere near Exhibition Place, the FIFA World Cup is going to change your daily routine for several weeks this summer."
      publishedDate="March 27, 2026"
      readTime="5 min read"
      tag="Neighbourhood Guide"
      tagColor="#7e22ce"
      jsonLd={jsonLd}
    >
      <Prose>
        <P>
          Toronto is hosting six World Cup matches between June 12 and July 2, plus the FIFA Fan Festival
          runs June 11–July 19 at Fort York and The Bentway. Here&apos;s what&apos;s happening in each neighbourhood
          and how to plan around it.
        </P>

        <Hr />

        <H2>Liberty Village <ImpactBadge level="Very High" /></H2>
        <P>Liberty Village gets the hardest hit of any residential neighbourhood.</P>

        <H3>On match days (June 12, 17, 20, 23, 26, July 2)</H3>
        <P>
          The entire neighbourhood is restricted to <strong>local traffic only</strong>. If you don&apos;t live or
          work there, you can&apos;t drive through. Expect police checks and significant delays even for residents.
        </P>

        <H3>For the full tournament (June 11 – July 19)</H3>
        <Ul>
          <Li>Fort York Boulevard from Angelique to Lake Shore — pedestrian-only</Li>
          <Li>Fleet Street from Angelique to Strachan — TTC vehicles only</Li>
          <Li>No public parking in the neighbourhood</Li>
          <Li>Local access restrictions throughout</Li>
        </Ul>

        <AlertBox emoji="💡" title="What to do" color="blue">
          Work from home on match days if you can. If you commute by car, find parking north of King Street.
          Stock up on groceries before match days — driving in and out will be a headache. The city is
          encouraging employers to allow remote work during this period.
        </AlertBox>

        <Hr />

        <H2>South Parkdale <ImpactBadge level="Medium-High" /></H2>
        <P>
          Parkdale sits just west of Exhibition Place and catches overflow from road closures and increased foot traffic.
        </P>

        <H3>On match days</H3>
        <Ul>
          <Li>Dufferin Street south of Springhurst Avenue — closed</Li>
          <Li>Lake Shore Blvd West from British Columbia Road to Bathurst — closed</Li>
          <Li>Dufferin Loop (TTC) — not in service</Li>
        </Ul>

        <H3>For the full tournament</H3>
        <Ul>
          <Li>Increased pedestrian and transit traffic through the neighbourhood</Li>
          <Li>Street parking may be harder to find as visitors look for free spots further out</Li>
        </Ul>

        <AlertBox emoji="💡" title="What to do" color="blue">
          Avoid Dufferin south of King on match days. Use the Ossington bus (increased frequency) as an
          alternative north-south route. If you normally park near Exhibition Place, make other arrangements for the summer.
        </AlertBox>

        <Hr />

        <H2>Exhibition Place / Ontario Place Area <ImpactBadge level="Very High" /></H2>
        <P>This is ground zero — Toronto Stadium and the Fan Festival are here.</P>

        <H3>For the full tournament</H3>
        <Ul>
          <Li>Exhibition Place is essentially a FIFA zone</Li>
          <Li>No public parking on-site or nearby</Li>
          <Li>Garrison Crossing Bridge (the pedestrian bridge over the rail corridor) — closed</Li>
          <Li>All Bike Share docks and bike racks — removed</Li>
        </Ul>

        <H3>On match days</H3>
        <Ul>
          <Li>45,000 people flooding in and out</Li>
          <Li>Lake Shore Blvd closed for bus staging</Li>
          <Li>Exhibition GO becomes a customer-only zone</Li>
        </Ul>

        <AlertBox emoji="💡" title="What to do" color="blue">
          If you live in the condos near Exhibition Place, expect significant noise and crowd activity on match
          days. Plan your errands and commute around game times (3 PM, 4 PM, or 7 PM depending on the day).
        </AlertBox>

        <Hr />

        <H2>Fort York / The Bentway <ImpactBadge level="High" /></H2>
        <P>
          The FIFA Fan Festival is here — up to 20,000 people per day for 22 consecutive days.
        </P>
        <Ul>
          <Li>Fort York Boulevard — pedestrianized for the full tournament, no cars</Li>
          <Li>Expect daily crowds, food vendors, screens, and music</Li>
          <Li>This runs even on non-match days — it&apos;s active June 11 through July 19</Li>
        </Ul>

        <AlertBox emoji="💡" title="What to do" color="blue">
          If you live in the Fort York condos, your front door is essentially at a festival for three weeks.
          It could be exciting or exhausting, depending on your tolerance. Noise will be significant during
          daytime and evening hours.
        </AlertBox>

        <Hr />

        <H2>CityPlace / Bathurst &amp; Front <ImpactBadge level="Medium" /></H2>
        <P>
          You&apos;re close to the action but not directly in the restricted zone.
        </P>
        <Ul>
          <Li>Bathurst streetcar will be busier (increased frequency, but more riders too)</Li>
          <Li>Walking routes to the stadium and Fan Festival pass through your area</Li>
          <Li>Expect increased foot traffic, especially before and after matches</Li>
        </Ul>
        <P>
          This is actually a great location — you can walk to the Fan Festival without dealing with any closures.
          Your daily routine shouldn&apos;t change much, but expect busier sidewalks and livelier evenings.
        </P>

        <Hr />

        <H2>King West / Entertainment District <ImpactBadge level="Low-Medium" /></H2>
        <P>
          Far enough from the venue that closures don&apos;t directly affect you, but the atmosphere will be electric.
        </P>
        <Ul>
          <Li>St. Andrew Station becomes a major shuttle hub — expect crowds on match days</Li>
          <Li>Bars and patios along King West will be packed on game nights</Li>
          <Li>Street parking on King Street West may be removed to keep streetcars moving</Li>
        </Ul>
        <P>
          Enjoy it. If you want to watch games without a ticket, the patios on King West are the place to be.
        </P>

        <Hr />

        <H2>Rest of Downtown <ImpactBadge level="Low" /></H2>
        <P>
          The city estimates a 10–15% increase in vehicle traffic downtown on match days. Unless you drive
          through the affected corridors, you probably won&apos;t notice much beyond more people on the TTC
          and a generally festive atmosphere citywide.
        </P>

        <H2>Key Dates to Remember</H2>
        <Ul>
          <Li><strong>June 11:</strong> Fan Festival opens at Fort York / The Bentway — crowds begin</Li>
          <Li><strong>June 12:</strong> First match (Canada vs. TBD) at 3 PM — full match day closures active</Li>
          <Li><strong>June 17, 20, 23, 26:</strong> Additional match days</Li>
          <Li><strong>July 2:</strong> Final Toronto match (Round of 32) at 7 PM</Li>
          <Li><strong>July 19:</strong> Fan Festival closes, all tournament closures lifted</Li>
        </Ul>

        <CtaBox
          href="/closures"
          label="Interactive Closure Map"
          sub="See exactly which streets in your neighbourhood are affected and when"
        />

        <Sources
          items={[
            "City of Toronto Mobility Plan (March 26, 2026)",
            "CP24 Toronto",
            "Village Report",
          ]}
        />
      </Prose>
    </ArticleLayout>
  );
}
