<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Project: Toronto FIFA Navigator

A mobile-first (web-first) guide and companion app for FIFA World Cup 2026 in Toronto.
Live at: **https://torontofootball.guide**

## What this app is

A tournament companion for fans attending or following FIFA World Cup 2026 in Toronto.
Toronto is hosting 6 matches (June 12 – July 2, 2026) at Toronto Stadium (Exhibition Place).
The FIFA Fan Festival runs June 11 – July 19 at Fort York & The Bentway.

The app is time-aware — it behaves differently depending on whether you're pre-tournament,
on a match day, during the tournament window (no match today), or post-tournament.

---

## Key dates

- **June 11**: Fan Festival opens (Fort York & The Bentway)
- **June 12**: First Toronto match — Canada vs. European Playoff A Winner, 3 PM ET
- **June 17**: Ghana vs. Panama, 7 PM ET
- **June 20**: Germany vs. Côte d'Ivoire, 4 PM ET
- **June 23**: Croatia vs. Panama, 7 PM ET
- **June 26**: Senegal vs. FIFA Playoff 2 Winner, 3 PM ET
- **July 2**:  Round of 32 (Group K vs. Group L runners-up), 7 PM ET
- **July 19**: Fan Festival closes — all tournament closures lifted

---

## App structure

### Pages (`/app`)

| Route | Purpose |
|---|---|
| `/` | Homepage — smart hero, My Tournament, match schedule |
| `/matches` | Match day guide — transit, directions, all 6 matches |
| `/closures` | Road closures map and list |
| `/fan-festival` | Fan Festival info (Fort York & The Bentway) |
| `/eat-watch` | Restaurant picks + watch party bars, filterable by team/neighbourhood |
| `/guide` | Visitor guide — transit, weather, money, accessibility |
| `/blog` | Blog index — 3 articles for SEO |
| `/blog/toronto-fifa-world-cup-road-closures-2026` | Road closure guide |
| `/blog/getting-to-toronto-stadium-fifa-world-cup-2026` | Transit options guide |
| `/blog/toronto-neighbourhoods-world-cup-2026-impact` | Neighbourhood impact guide |

### Data (`/data`)

| File | Contents |
|---|---|
| `matches.ts` | All 6 Toronto matches with date, time, teams, flags, stage, notes |
| `closures.ts` | Road closure data — tournament-long and match-day |
| `restaurants.ts` | Restaurant picks grouped by country (Canada, Ghana, Panama, Germany, Côte d'Ivoire, Croatia, Senegal) |
| `watchParties.ts` | Bars and watch party venues with neighbourhood and features |

### Key components (`/components`)

| Component | Purpose |
|---|---|
| `TodayHero` | Time-aware homepage hero — 4 states: pre-tournament, match day, tournament active, post-tournament |
| `MyTournament` | "My Tournament" section — follow a team, save matches (localStorage) |
| `MatchCardWithPrefs` | Match cards on homepage with save toggle + team highlighting |
| `MatchesWithPrefs` | Match cards on /matches page with save toggle |
| `MatchCard` | Full expandable match card with transit info and directions |
| `TeamSelector` | Bottom sheet for selecting a followed team |
| `StatusBanner` | Top banner — match day (red) or fan festival (gold) with directions link |
| `ArticleLayout` | Shared layout for all blog posts — includes JSON-LD, header, prose components |
| `CountdownTimer` | Client-side countdown to next match |
| `Navbar` | Desktop top nav + mobile bottom tab nav |

### Hooks (`/hooks`)

| Hook | Purpose |
|---|---|
| `useTournamentPrefs` | localStorage hook — stores followed team + saved match IDs |

### Lib (`/lib`)

| File | Purpose |
|---|---|
| `tournament.ts` | `getTournamentStatus()`, `getDirectionsUrl()`, `TORONTO_TEAMS`, `getMatchesForTeam()` |
| `utils.ts` | `formatDate()`, `getCountdownToNextMatch()`, `getCurrentStatus()` |

---

## Design system

CSS variables defined in `app/globals.css`:

```
--navy:   #0d1b2a  (primary dark, headers, cards)
--red:    #cc2936  (accents, CTAs, match day)
--gold:   #e8a020  (labels, fan festival, highlights)
--cream:  #eee8dc  (page background)
--card:   #f5efe4  (card background)
--muted:  #7a7167  (secondary text)
--border: #d8d0c4  (borders, dividers)
```

Fonts: **Bebas Neue** (`.display` class), **Barlow Condensed** (headings, labels), **DM Sans** (body)

---

## User preferences (localStorage)

Key: `fifa-toronto-prefs`

Shape:
```ts
{
  followedTeam: string | null,      // e.g. "Canada"
  followedFlag: string | null,      // e.g. "🇨🇦"
  savedMatchIds: string[],           // e.g. ["match-1", "match-3"]
  onboardingDismissed: boolean
}
```

---

## SEO / indexing

- Sitemap at `/sitemap.ts` — covers all pages and blog posts
- Blog posts have canonical URLs, Open Graph `type: "article"`, and Article JSON-LD
- `robots.ts` at `/app/robots.ts`
- Domain: `torontofootball.guide`

---

## Important constraints

- **No live scores** — all data is static/curated. Update `data/matches.ts` when playoff teams are confirmed (March 31, 2026 and beyond).
- **Road closure details** are approximate until the city releases street-by-street data in May 2026. Update `data/closures.ts` at that time.
- **Web-first** (not PWA). No service worker, no push notifications.
- All client components that use localStorage must be `"use client"` and handle SSR hydration carefully (read from localStorage in `useEffect`, not during render).
- `getDirectionsUrl()` in `lib/tournament.ts` returns a Google Maps transit link to Exhibition Place — use this everywhere rather than hardcoding.
