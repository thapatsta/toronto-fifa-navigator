import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Toronto Football Guide",
  description:
    "Privacy policy for Toronto Football Guide, covering cookies, Google AdSense advertising, Google Analytics, and your data rights.",
  alternates: {
    canonical: "https://torontofootball.guide/privacy-policy",
  },
};

const LAST_UPDATED = "April 10, 2026";
const CONTACT_EMAIL = "hello@torontofootball.guide";
const SITE_NAME = "Toronto Football Guide";
const SITE_URL = "https://torontofootball.guide";

export default function PrivacyPolicyPage() {
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
            PRIVACY
            <br />
            POLICY
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.85rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Last updated: {LAST_UPDATED}
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
          gap: "2rem",
        }}
      >
        {/* Intro */}
        <section>
          <p
            style={{
              fontSize: "0.92rem",
              color: "var(--navy)",
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.7,
            }}
          >
            {SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates{" "}
            <a
              href={SITE_URL}
              style={{ color: "var(--red)", textDecoration: "underline" }}
            >
              {SITE_URL}
            </a>{" "}
            (the &ldquo;Site&rdquo;). This Privacy Policy explains how we collect, use, and
            disclose information when you use our Site, and describes your choices
            regarding that information. By using the Site, you agree to the
            practices described in this policy.
          </p>
        </section>

        {/* Section 1 — Information We Collect */}
        <section>
          <h2
            className="display"
            style={{
              fontSize: "1.6rem",
              color: "var(--navy)",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}
          >
            1. Information We Collect
          </h2>
          <div
            style={{
              background: "var(--card)",
              border: "1.5px solid var(--border)",
              borderRadius: "16px",
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--navy)",
                  marginBottom: "0.3rem",
                }}
              >
                Automatically Collected Data
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.6,
                }}
              >
                When you visit the Site, our servers and third-party analytics
                services may automatically log standard technical information,
                including your IP address, browser type and version, operating
                system, referring URLs, pages viewed, and the date and time of
                your visit. This data is used in aggregate to understand how
                visitors use the Site.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--navy)",
                  marginBottom: "0.3rem",
                }}
              >
                Cookies and Local Storage
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.6,
                }}
              >
                We use cookies and browser local storage to provide site
                functionality, remember your preferences (such as your followed
                team and saved matches), and serve personalised advertising.
                Cookies are small data files stored on your device. You can
                control cookies through your browser settings, though disabling
                them may affect site functionality.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--navy)",
                  marginBottom: "0.3rem",
                }}
              >
                Information You Provide
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.6,
                }}
              >
                If you contact us by email (for example, to inquire about a
                featured listing), we collect the information you include in
                that communication, such as your name and email address.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Google Analytics */}
        <section>
          <h2
            className="display"
            style={{
              fontSize: "1.6rem",
              color: "var(--navy)",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}
          >
            2. Google Analytics
          </h2>
          <div
            style={{
              background: "var(--card)",
              border: "1.5px solid var(--border)",
              borderRadius: "16px",
              padding: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6,
              }}
            >
              This Site uses Google Analytics 4, a web analytics service
              provided by Google LLC (&ldquo;Google&rdquo;). Google Analytics uses cookies to
              collect anonymous information about how visitors interact with the
              Site, including pages visited, time spent, and traffic sources.
              This information is transmitted to and stored by Google on servers
              which may be located outside your country of residence.
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6,
                marginTop: "0.75rem",
              }}
            >
              Google uses this information to evaluate use of the Site and
              compile reports on website activity. You may opt out of Google
              Analytics tracking by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--red)", textDecoration: "underline" }}
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              . For more information on how Google uses data, visit{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--red)", textDecoration: "underline" }}
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>

        {/* Section 3 — Google AdSense */}
        <section>
          <h2
            className="display"
            style={{
              fontSize: "1.6rem",
              color: "var(--navy)",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}
          >
            3. Google AdSense &amp; Advertising
          </h2>
          <div
            style={{
              background: "var(--card)",
              border: "1.5px solid var(--border)",
              borderRadius: "16px",
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6,
              }}
            >
              This Site uses Google AdSense, an advertising service provided by
              Google LLC. Google AdSense uses cookies — including the DoubleClick
              cookie — to serve ads based on your prior visits to this Site and
              other sites on the internet. The use of advertising cookies enables
              Google and its partners to serve ads based on your visits to this
              Site and/or other sites on the internet.
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6,
              }}
            >
              You may opt out of personalised advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--red)", textDecoration: "underline" }}
              >
                Google Ads Settings
              </a>
              . Alternatively, you can opt out of a third-party vendor&apos;s use of
              cookies for personalised advertising by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--red)", textDecoration: "underline" }}
              >
                www.aboutads.info
              </a>
              .
            </p>
            <div
              style={{
                background: "rgba(232,160,32,0.1)",
                border: "1px solid rgba(232,160,32,0.3)",
                borderRadius: "10px",
                padding: "0.75rem 1rem",
                fontSize: "0.8rem",
                color: "var(--navy)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.5,
              }}
            >
              <strong>Note:</strong> Third-party vendors, including Google, use
              cookies to serve ads based on a user&apos;s prior visits to this website
              or other websites. We do not control the content of these
              advertisements or the cookies set by advertisers.
            </div>
          </div>
        </section>

        {/* Section 4 — Third-Party Links */}
        <section>
          <h2
            className="display"
            style={{
              fontSize: "1.6rem",
              color: "var(--navy)",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}
          >
            4. Third-Party Links
          </h2>
          <div
            style={{
              background: "var(--card)",
              border: "1.5px solid var(--border)",
              borderRadius: "16px",
              padding: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6,
              }}
            >
              This Site contains links to external websites, including official
              FIFA, City of Toronto, and venue pages. We are not responsible for
              the privacy practices of those sites and encourage you to review
              their privacy policies. This Site is not affiliated with FIFA, the
              City of Toronto, Toronto FC, or any official tournament organiser.
            </p>
          </div>
        </section>

        {/* Section 5 — Data Retention */}
        <section>
          <h2
            className="display"
            style={{
              fontSize: "1.6rem",
              color: "var(--navy)",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}
          >
            5. Data Retention
          </h2>
          <div
            style={{
              background: "var(--card)",
              border: "1.5px solid var(--border)",
              borderRadius: "16px",
              padding: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6,
              }}
            >
              We do not operate a database of user accounts. Preferences you set
              on this Site (followed team, saved matches) are stored only in your
              browser&apos;s local storage and are never transmitted to our servers.
              Analytics data collected by Google is subject to Google&apos;s own
              retention policies.
            </p>
          </div>
        </section>

        {/* Section 6 — Your Rights */}
        <section>
          <h2
            className="display"
            style={{
              fontSize: "1.6rem",
              color: "var(--navy)",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}
          >
            6. Your Rights
          </h2>
          <div
            style={{
              background: "var(--card)",
              border: "1.5px solid var(--border)",
              borderRadius: "16px",
              padding: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6,
              }}
            >
              Depending on your jurisdiction, you may have rights regarding your
              personal data, including the right to access, correct, or delete
              data we hold about you. As this Site does not collect or store
              personal data beyond what is described in this policy, most
              requests can be directed to the relevant third parties (Google,
              etc.). For any data-related enquiries, contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "var(--red)", textDecoration: "underline" }}
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </section>

        {/* Section 7 — Changes */}
        <section>
          <h2
            className="display"
            style={{
              fontSize: "1.6rem",
              color: "var(--navy)",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}
          >
            7. Changes to This Policy
          </h2>
          <div
            style={{
              background: "var(--card)",
              border: "1.5px solid var(--border)",
              borderRadius: "16px",
              padding: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6,
              }}
            >
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated &ldquo;Last updated&rdquo; date.
              Continued use of the Site after any changes constitutes your
              acceptance of the revised policy.
            </p>
          </div>
        </section>

        {/* Section 8 — Contact */}
        <section>
          <h2
            className="display"
            style={{
              fontSize: "1.6rem",
              color: "var(--navy)",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}
          >
            8. Contact Us
          </h2>
          <div
            style={{
              background: "var(--navy)",
              borderRadius: "16px",
              padding: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6,
                marginBottom: "0.75rem",
              }}
            >
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.6rem 1.2rem",
                background: "white",
                color: "var(--navy)",
                borderRadius: "10px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {CONTACT_EMAIL}
            </a>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "'DM Sans', sans-serif",
                marginTop: "0.75rem",
              }}
            >
              Or visit our{" "}
              <Link
                href="/contact"
                style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}
              >
                Contact page
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
