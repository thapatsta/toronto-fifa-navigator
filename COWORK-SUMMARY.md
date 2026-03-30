# Cowork Session Summary — March 30, 2026

## Completed

- [x] **Task 1: GA4** — Scenario found: **B** (code existed but env var was never set). Measurement ID: **G-SJ5CZYMJ89** (hardcoded). Switched from `next/script` strategy="afterInteractive" to raw `dangerouslySetInnerHTML` tags — required for Cloudflare Pages static export compatibility. The conditional `GA_MEASUREMENT_ID ?` guard is removed; GA now always fires. Realtime verified: **pending deploy** (verify yourself after push)
- [x] **Task 2: Search Console** — Sitemap already exists at `/sitemap.ts` (Next.js auto-generates `/sitemap.xml`). Blog posts and all core pages are included. **Manual action required:** Go to https://search.google.com/search-console, add `https://torontofootball.guide` as a property, verify via HTML tag (add the meta tag to `layout.tsx` — I left a comment placeholder), and submit `https://torontofootball.guide/sitemap.xml`
- [x] **Task 3: OG Image** — `og-image.png` already existed in `/public`. Fixed: updated `layout.tsx` to reference `/og-image.png` instead of `/main-image.svg` for both `openGraph.images` and `twitter.images`. Also improved root metadata description. Matches page got full `openGraph` and `alternates.canonical` metadata.
- [x] **Task 4: Email Capture** — Created `components/EmailSignup.tsx`. Uses Buttondown embed form. **Manual action required:** Sign up at https://buttondown.com, create a newsletter called "Toronto Football Guide", then update the form action URL in `EmailSignup.tsx` — replace `torontofootball` with your actual Buttondown username. Component added to homepage between MyTournament and Explore the Guide. Matches the site's navy/red/gold design system (not Tailwind colour utilities).
- [x] **Task 5: Stripe CTA** — Added "Get Featured — $149" block to `app/eat-watch/page.tsx` above the tab toggle. Currently uses `mailto:hello@torontofootball.guide?subject=Featured%20Listing%20Inquiry` as the CTA href. **Manual action required:** Create a Stripe Payment Link at https://dashboard.stripe.com and replace the `href` in the CTA — look for the comment `{/* NEEDS STRIPE LINK */}` in the file.
- [x] **Task 6: Blog Posts** — Already complete. All 6 posts exist with full metadata, Article JSON-LD, canonical URLs, and OG tags. Sitemap includes all 6.
- [x] **Task 7: JSON-LD** — Added `WebSite` schema to homepage (`app/page.tsx`). Added full `SportsEvent` schema for all 6 matches to `app/matches/page.tsx` with full venue address, start times (EDT), and organizer. Homepage already had SportsEvent schema for the match schedule — kept that too. Blog posts already have Article JSON-LD.

## Failed / Needs Manual Action

- **Task 2 (Search Console verification):** Requires browser login — cannot automate. Go to https://search.google.com/search-console and complete verification.
- **Task 4 (Buttondown username):** Replace `torontofootball` in `components/EmailSignup.tsx` line 74 with your actual Buttondown username after signing up.
- **Task 5 (Stripe link):** Replace the `mailto:` href in `app/eat-watch/page.tsx` with your actual Stripe Payment Link. Search for `NEEDS STRIPE LINK` comment.
- **GA4 Realtime verification:** After deploy, open https://torontofootball.guide → View Page Source → Ctrl+F "gtag" → must appear. Then check GA4 Realtime report.

## Files Changed

- `app/layout.tsx` — GA4 fix (hardcoded ID, dangerouslySetInnerHTML), OG image reference fixed, description improved
- `app/page.tsx` — Added WebSite JSON-LD, added EmailSignup component import + render
- `app/matches/page.tsx` — Improved metadata (title, OG, canonical), added SportsEvent JSON-LD for all 6 matches
- `app/eat-watch/page.tsx` — Added "Get Featured" CTA block above tab toggle
- `components/EmailSignup.tsx` — New component (email capture, Buttondown, matches site design)
- `COWORK-SUMMARY.md` — This file

## Deploys

- All changes committed and pushed to `origin main` → Cloudflare Pages auto-deploys on push.
- Go to https://dash.cloudflare.com → Workers & Pages → toronto-fifa-navigator → Deployments to confirm the build succeeded.
- Build typically takes 2–3 minutes. After it's live, verify GA4 via View Page Source.
