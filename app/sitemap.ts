import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://torontofootball.guide";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Core pages
  const pages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/matches`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/match-day`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/closures`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/eat-watch`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/fan-festival`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/guide`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  // Individual match pages
  const matchIds = ["match-1", "match-2", "match-3", "match-4", "match-5", "match-6"];
  for (const id of matchIds) {
    pages.push({
      url: `${BASE_URL}/matches/${id}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }

  // Blog posts
  const blogSlugs = [
    "canada-first-match-toronto-fifa-world-cup-2026",
    "best-bars-watch-fifa-world-cup-2026-toronto",
    "toronto-fifa-fan-festival-2026-what-to-expect",
    "toronto-fifa-world-cup-road-closures-2026",
    "getting-to-toronto-stadium-fifa-world-cup-2026",
    "toronto-neighbourhoods-world-cup-2026-impact",
  ];
  for (const slug of blogSlugs) {
    pages.push({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return pages;
}
