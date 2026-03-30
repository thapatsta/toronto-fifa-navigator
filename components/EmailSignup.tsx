"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Let the form POST to Buttondown naturally — but also track the event
    if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "email_signup", {
        event_category: "engagement",
        event_label: "match_day_alerts",
      });
    }
    // Show confirmation after a brief delay (form will navigate away in popup)
    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
    }, 300);
    // Don't prevent default — let the POST happen to Buttondown
    void e;
  }

  return (
    <div
      style={{
        background: "var(--navy)",
        borderRadius: "18px",
        border: "1.5px solid rgba(255,255,255,0.08)",
        padding: "1.5rem",
        margin: "1.5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gold accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "var(--gold)",
        }}
      />

      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.9rem" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: "rgba(232,160,32,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Mail size={18} color="var(--gold)" />
        </div>
        <div>
          <h3
            className="label"
            style={{ color: "var(--gold)", fontSize: "0.62rem", marginBottom: "0.3rem" }}
          >
            Match Day Alerts
          </h3>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "white",
              lineHeight: 1.2,
            }}
          >
            Get notified before each match day
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: "0.82rem",
          color: "rgba(255,255,255,0.55)",
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.5,
          marginBottom: "1rem",
        }}
      >
        Road closures, transit tips, and what you need to know — delivered the morning
        before each match. Just 6 emails total. No spam.
      </p>

      {submitted ? (
        <div
          style={{
            background: "rgba(232,160,32,0.12)",
            border: "1px solid rgba(232,160,32,0.3)",
            borderRadius: "10px",
            padding: "0.75rem 1rem",
            color: "var(--gold)",
            fontSize: "0.85rem",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
          }}
        >
          ✓ You&apos;re in! Check your inbox to confirm.
        </div>
      ) : (
        <form
          action="https://buttondown.com/api/emails/embed-subscribe/torontofootball"
          method="post"
          target="popupwindow"
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: "0.5rem" }}
        >
          <input type="hidden" value="1" name="embed" />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            style={{
              flex: 1,
              padding: "0.6rem 0.85rem",
              borderRadius: "10px",
              border: "1.5px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.07)",
              color: "white",
              fontSize: "0.85rem",
              fontFamily: "'DM Sans', sans-serif",
              outline: "none",
              minWidth: 0,
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.6rem 1.1rem",
              background: "var(--red)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "0.8rem",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Subscribe
          </button>
        </form>
      )}

      <p
        style={{
          fontSize: "0.68rem",
          color: "rgba(255,255,255,0.25)",
          fontFamily: "'DM Sans', sans-serif",
          marginTop: "0.6rem",
        }}
      >
        Free. Unsubscribe anytime.
      </p>
    </div>
  );
}
