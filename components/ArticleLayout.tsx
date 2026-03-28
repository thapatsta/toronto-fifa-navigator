import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

interface ArticleLayoutProps {
  title: string;
  description: string;
  publishedDate: string;        // e.g. "March 27, 2026"
  readTime: string;             // e.g. "5 min read"
  tag: string;                  // e.g. "Road Closures"
  tagColor?: string;            // CSS color
  children: React.ReactNode;
  jsonLd: Record<string, unknown>;
}

export default function ArticleLayout({
  title,
  description,
  publishedDate,
  readTime,
  tag,
  tagColor = "var(--red)",
  children,
  jsonLd,
}: ArticleLayoutProps) {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
        {/* Hero header */}
        <header style={{ background: "var(--navy)", padding: "2.5rem 1rem 3rem" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.35rem",
                color: "rgba(255,255,255,0.45)", fontSize: "0.75rem",
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
                letterSpacing: "0.06em", textDecoration: "none",
                textTransform: "uppercase", marginBottom: "1.25rem",
              }}
            >
              <ArrowLeft size={13} /> All Articles
            </Link>

            <div
              style={{
                display: "inline-block", fontSize: "0.6rem", fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "white", background: tagColor, padding: "3px 10px",
                borderRadius: "99px", marginBottom: "0.85rem",
              }}
            >
              {tag}
            </div>

            <h1
              className="display"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)", color: "white",
                lineHeight: 1.05, marginBottom: "1rem",
              }}
            >
              {title}
            </h1>

            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, marginBottom: "1.25rem", maxWidth: "600px" }}>
              {description}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>
                <Calendar size={12} /> {publishedDate}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>
                <Clock size={12} /> {readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article
          style={{ maxWidth: "720px", margin: "0 auto", padding: "2.5rem 1rem 4rem" }}
          className="article-body"
        >
          {children}
        </article>

        {/* Back nav */}
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 1rem 3rem" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.6rem 1.25rem", borderRadius: "99px",
              border: "1.5px solid var(--border)", color: "var(--muted)",
              fontSize: "0.8rem", fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, letterSpacing: "0.05em", textDecoration: "none",
            }}
          >
            <ArrowLeft size={13} /> Back to all articles
          </Link>
        </div>
      </div>
    </>
  );
}

/* ── Reusable prose components ── */

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ color: "var(--text)", fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.75 }}>
      {children}
    </div>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="display"
      style={{ fontSize: "1.6rem", color: "var(--navy)", lineHeight: 1.1, marginTop: "2.5rem", marginBottom: "0.75rem" }}
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--navy)", marginTop: "1.5rem", marginBottom: "0.5rem" }}
    >
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ marginBottom: "1rem", color: "#2a2a2a", lineHeight: 1.75 }}>
      {children}
    </p>
  );
}

export function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul style={{ marginBottom: "1rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      {children}
    </ul>
  );
}

export function Li({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ color: "#2a2a2a", lineHeight: 1.6, listStyleType: "disc" }}>
      {children}
    </li>
  );
}

export function Hr() {
  return <hr style={{ border: "none", borderTop: "1.5px solid var(--border)", margin: "2rem 0" }} />;
}

export function AlertBox({ emoji, title, children, color = "amber" }: {
  emoji: string;
  title: string;
  children: React.ReactNode;
  color?: "amber" | "red" | "green" | "blue" | "navy";
}) {
  const styles: Record<string, { bg: string; border: string; title: string; text: string }> = {
    amber: { bg: "#fef3c7", border: "#fcd34d", title: "#92400e", text: "#78350f" },
    red:   { bg: "#fff1f1", border: "#fca5a5", title: "#991b1b", text: "#7f1d1d" },
    green: { bg: "#f0fdf4", border: "#86efac", title: "#166534", text: "#14532d" },
    blue:  { bg: "#eff6ff", border: "#93c5fd", title: "#1e40af", text: "#1e3a8a" },
    navy:  { bg: "var(--navy)", border: "var(--navy)", title: "white", text: "rgba(255,255,255,0.75)" },
  };
  const s = styles[color];
  return (
    <div style={{ background: s.bg, border: `1.5px solid ${s.border}`, borderRadius: "14px", padding: "1rem 1.1rem", margin: "1.25rem 0" }}>
      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: s.title, marginBottom: "0.4rem" }}>
        {emoji} {title}
      </p>
      <div style={{ fontSize: "0.9rem", color: s.text, lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}

export function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: "auto", margin: "1.25rem 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
        <thead>
          <tr style={{ background: "var(--navy)" }}>
            {headers.map((h) => (
              <th
                key={h}
                style={{
                  padding: "0.6rem 0.85rem", textAlign: "left",
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                  fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase",
                  color: "white", whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "var(--card)" : "white", borderBottom: "1px solid var(--border)" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "0.6rem 0.85rem", color: "var(--text)", lineHeight: 1.4 }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CtaBox({ href, label, sub }: { href: string; label: string; sub: string }) {
  return (
    <div style={{ background: "var(--navy)", borderRadius: "16px", padding: "1.25rem 1.5rem", margin: "2rem 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
      <div>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "0.2rem" }}>
          {label}
        </p>
        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>{sub}</p>
      </div>
      <Link
        href={href}
        style={{
          display: "inline-block", padding: "0.55rem 1.25rem", borderRadius: "99px",
          background: "var(--red)", color: "white",
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
          fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase",
          textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0,
        }}
      >
        {label.includes("Map") ? "Open Map →" : "View Guide →"}
      </Link>
    </div>
  );
}

export function Sources({ items }: { items: string[] }) {
  return (
    <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
      <p style={{ fontSize: "0.72rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.4rem" }}>
        Sources
      </p>
      <ul style={{ paddingLeft: 0, listStyle: "none" }}>
        {items.map((item) => (
          <li key={item} style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.6 }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
