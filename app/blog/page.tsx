import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Updates & Guides — Toronto Football Guide",
  description:
    "In-depth guides for getting around Toronto during the FIFA World Cup 2026 — road closures, transit, neighbourhood impacts, and more.",
  openGraph: {
    title: "Updates & Guides — Toronto Football Guide",
    description: "In-depth guides for getting around Toronto during the FIFA World Cup 2026.",
    url: "https://torontofootball.guide/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://torontofootball.guide/blog",
  },
};

const posts = [
  {
    slug: "toronto-fifa-world-cup-road-closures-2026",
    title: "Toronto FIFA World Cup 2026: Complete Road Closure Guide by Date",
    description:
      "Which streets close, when, and what you can do instead. Covers all 6 match days and the full June 11–July 19 tournament window.",
    date: "March 27, 2026",
    readTime: "4 min read",
    tag: "Road Closures",
    tagColor: "var(--red)",
    emoji: "🚧",
  },
  {
    slug: "getting-to-toronto-stadium-fifa-world-cup-2026",
    title: "Getting to Toronto Stadium for the FIFA World Cup: Every Transit Option Explained",
    description:
      "No parking, restricted streets, 45,000 fans. TTC shuttle, streetcar, GO Transit, walking, biking — every way in, ranked by ease.",
    date: "March 27, 2026",
    readTime: "5 min read",
    tag: "Match Day Guide",
    tagColor: "var(--navy)",
    emoji: "🚌",
  },
  {
    slug: "toronto-neighbourhoods-world-cup-2026-impact",
    title: "Toronto Neighbourhoods Affected by the World Cup 2026: What You Need to Know",
    description:
      "Liberty Village, Parkdale, Fort York, CityPlace — what's changing in your neighbourhood and how to plan around it.",
    date: "March 27, 2026",
    readTime: "5 min read",
    tag: "Neighbourhood Guide",
    tagColor: "#7e22ce",
    emoji: "📍",
  },
];

export default function BlogIndexPage() {
  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "var(--navy)", padding: "2.5rem 1rem 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: 0, right: 0, width: "40%", height: "100%",
          background: "rgba(255,255,255,0.025)",
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--red)" }} />

        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p className="label" style={{ color: "var(--gold)", fontSize: "0.62rem", marginBottom: "0.5rem" }}>
            TORONTO FOOTBALL GUIDE
          </p>
          <h1 className="display" style={{ fontSize: "clamp(2rem, 8vw, 3.5rem)", color: "white", lineHeight: 0.95, marginBottom: "0.75rem" }}>
            UPDATES<br />& GUIDES
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif" }}>
            Everything you need to navigate FIFA World Cup 2026 in Toronto.
          </p>
        </div>
      </header>

      {/* Post list */}
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  background: "var(--card)",
                  borderRadius: "18px",
                  border: "1.5px solid var(--border)",
                  padding: "1.25rem 1.25rem 1.1rem",
                  display: "flex", gap: "1.1rem", alignItems: "flex-start",
                  transition: "box-shadow 0.15s, border-color 0.15s",
                  boxShadow: "0 1px 4px rgba(13,27,42,0.05)",
                }}
                className="blog-card"
              >
                {/* Emoji icon */}
                <div
                  style={{
                    width: "48px", height: "48px", borderRadius: "14px",
                    background: "var(--cream-2)", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: "1.4rem", flexShrink: 0,
                  }}
                >
                  {post.emoji}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Tag */}
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.58rem", fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "white", background: post.tagColor,
                      padding: "2px 8px", borderRadius: "99px", marginBottom: "0.5rem",
                    }}
                  >
                    {post.tag}
                  </span>

                  <h2
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                      fontSize: "1.05rem", color: "var(--navy)", lineHeight: 1.25,
                      marginBottom: "0.45rem",
                    }}
                  >
                    {post.title}
                  </h2>

                  <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.5, marginBottom: "0.75rem" }}>
                    {post.description}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "0.85rem" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.7rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
                        <Calendar size={11} /> {post.date}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.7rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.2rem", fontSize: "0.75rem", color: "var(--red)", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}>
                      Read <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
