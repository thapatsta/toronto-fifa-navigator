import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Toronto Football Guide",
  description:
    "Get in touch with Toronto Football Guide — questions, venue listing enquiries, corrections, or feedback about torontofootball.guide.",
  alternates: {
    canonical: "https://torontofootball.guide/contact",
  },
};

const CONTACT_EMAIL = "hello@torontofootball.guide";

export default function ContactPage() {
  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          background: "var(--navy)",
          padding: "2.5rem 1rem 3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40%",
            height: "100%",
            background: "rgba(255,255,255,0.025)",
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "var(--red)",
          }}
        />
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p
            className="label"
            style={{
              color: "var(--gold)",
              fontSize: "0.62rem",
              marginBottom: "0.5rem",
            }}
          >
            TORONTO FOOTBALL GUIDE
          </p>
          <h1
            className="display"
            style={{
              fontSize: "clamp(2rem, 8vw, 3.5rem)",
              color: "white",
              lineHeight: 0.95,
              marginBottom: "0.75rem",
            }}
          >
            CONTACT
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.9rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Questions, corrections, or venue enquiries — we&apos;re happy to hear from you.
          </p>
        </div>
      </header>

      {/* Content */}
      <main
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "2.5rem 1rem 5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {/* About blurb */}
        <p
          style={{
            fontSize: "0.92rem",
            color: "var(--navy)",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.7,
          }}
        >
          Toronto Football Guide is an independent fan resource built by a Toronto local.
          We&apos;re not affiliated with FIFA, the City of Toronto, or any official tournament
          organiser — just trying to make World Cup 2026 easier to navigate.
        </p>

        {/* Primary contact card */}
        <div
          style={{
            background: "var(--navy)",
            borderRadius: "18px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <p
            className="label"
            style={{
              fontSize: "0.6rem",
              color: "var(--gold)",
              letterSpacing: "0.14em",
            }}
          >
            EMAIL US
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Mail size={18} color="white" />
            </div>
            <div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "white",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                {CONTACT_EMAIL}
              </a>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "'DM Sans', sans-serif",
                  marginTop: "2px",
                }}
              >
                We typically reply within 1–2 business days.
              </p>
            </div>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              alignSelf: "flex-start",
              padding: "0.55rem 1.2rem",
              background: "white",
              color: "var(--navy)",
              borderRadius: "10px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              marginTop: "0.25rem",
            }}
          >
            Send an Email
          </a>
        </div>

        {/* Reason cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {[
            {
              emoji: "🏟️",
              title: "Venue Listing",
              desc: "Own a bar or restaurant near Exhibition Place? Get listed on Eat & Watch.",
              subject: "Featured%20Listing%20Enquiry",
            },
            {
              emoji: "✏️",
              title: "Corrections",
              desc: "Spotted something wrong — a closure date, transit detail, or match time?",
              subject: "Correction%20or%20Update",
            },
            {
              emoji: "💡",
              title: "Feedback",
              desc: "General feedback, feature suggestions, or anything else on your mind.",
              subject: "General%20Feedback",
            },
            {
              emoji: "📰",
              title: "Press / Media",
              desc: "Journalist or blogger covering World Cup 2026 in Toronto? Say hello.",
              subject: "Press%20Enquiry",
            },
          ].map(({ emoji, title, desc, subject }) => (
            <a
              key={title}
              href={`mailto:${CONTACT_EMAIL}?subject=${subject}`}
              style={{
                background: "var(--card)",
                border: "1.5px solid var(--border)",
                borderRadius: "16px",
                padding: "1rem 1rem 0.85rem",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                transition: "border-color 0.15s",
              }}
            >
              <span style={{ fontSize: "1.3rem" }}>{emoji}</span>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--navy)",
                }}
              >
                {title}
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.5,
                }}
              >
                {desc}
              </p>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "var(--red)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  marginTop: "0.15rem",
                }}
              >
                Email us →
              </p>
            </a>
          ))}
        </div>

        {/* Location context */}
        <div
          style={{
            background: "var(--card)",
            border: "1.5px solid var(--border)",
            borderRadius: "16px",
            padding: "1rem 1.1rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "rgba(13,27,42,0.07)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <MapPin size={16} color="var(--navy)" />
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "var(--navy)",
                marginBottom: "0.2rem",
              }}
            >
              Based in Toronto, Ontario
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.5,
              }}
            >
              This is an independent site, not an official FIFA or City of Toronto
              resource. For official tournament information, visit{" "}
              <a
                href="https://torontofwc26.ca"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--red)", textDecoration: "underline" }}
              >
                torontofwc26.ca
              </a>{" "}
              or{" "}
              <a
                href="https://toronto.ca/fifa"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--red)", textDecoration: "underline" }}
              >
                toronto.ca/fifa
              </a>
              .
            </p>
          </div>
        </div>

        {/* Privacy policy link */}
        <p
          style={{
            fontSize: "0.78rem",
            color: "var(--muted)",
            fontFamily: "'DM Sans', sans-serif",
            textAlign: "center",
          }}
        >
          For information about how we handle data, see our{" "}
          <Link
            href="/privacy-policy"
            style={{ color: "var(--navy)", textDecoration: "underline" }}
          >
            Privacy Policy
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
