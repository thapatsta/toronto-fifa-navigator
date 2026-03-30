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
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

- Get this value from **Google Analytics → Admin → Data Streams → Web stream → Measurement ID**.
- Set it in your local `.env.local` and in your deployment environment (e.g. Vercel Project Settings → Environment Variables).
- If this variable is not set, analytics scripts/pageview tracking are skipped.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Leaflet.js + react-leaflet (maps)
- Lucide React (icons)

## Deploying to Vercel

Push to GitHub, connect to Vercel. No extra configuration needed.

For a custom domain like `torontofootball.guide`, add it in the Vercel dashboard under Project → Settings → Domains.

## Data Updates

All data lives in `/data/`:
- `matches.ts` — match schedule
- `closures.ts` — road closures and transit changes
- `restaurants.ts` — restaurant recommendations
- `watchParties.ts` — bars and watch party venues

The City of Toronto will publish detailed road closure schedules in May 2026. Update `closures.ts` at that time.

## Disclaimer

Based on City of Toronto Mobility Plan released March 26, 2026. Check [toronto.ca/fifa](https://toronto.ca/fifa) for official updates.
