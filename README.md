# Toronto FIFA Navigator

A mobile-first web guide for FIFA World Cup 2026 in Toronto.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Google Analytics (GA4)

This project reads the GA4 Measurement ID from:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-SJ5CZYMJ89
```

- Get this value from **Google Analytics → Admin → Data Streams → Web stream → Measurement ID**.
- Set it in your local `.env.local` and in your deployment environment (Cloudflare Pages/Workers).
- In Cloudflare, add `NEXT_PUBLIC_GA_MEASUREMENT_ID` for **Production** and **Preview** so analytics behavior matches what you see locally.
- If this variable is not set, analytics scripts/pageview tracking are skipped.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Leaflet.js + react-leaflet (maps)
- Lucide React (icons)

## Deploying to Cloudflare (GitHub repo)

Push to GitHub, then connect the repository to Cloudflare so Cloudflare builds and hosts this Next.js app on deploy.

Cloudflare's role in this codebase:
- It pulls from your GitHub repo and triggers builds on push.
- It hosts the built app and serves your production + preview deployments.
- It injects environment variables (like `NEXT_PUBLIC_GA_MEASUREMENT_ID`) into build/runtime.
- For GA specifically, `app/layout.tsx` and `components/AnalyticsPageView.tsx` read this value from environment variables, so no code change is needed when the ID changes.

For a custom domain like `torontofootball.guide`, add/manage it in Cloudflare for the deployed project.

## Data Updates

All data lives in `/data/`:
- `matches.ts` — match schedule
- `closures.ts` — road closures and transit changes
- `restaurants.ts` — restaurant recommendations
- `watchParties.ts` — bars and watch party venues

The City of Toronto will publish detailed road closure schedules in May 2026. Update `closures.ts` at that time.

## Disclaimer

Based on City of Toronto Mobility Plan released March 26, 2026. Check [toronto.ca/fifa](https://toronto.ca/fifa) for official updates.
