import { MetadataRoute } from "next";

const PUBLISHED = new Date("2026-03-27T12:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://torontofifa.guide";
  return [
    { url: baseUrl,                         lastModified: new Date(),  changeFrequency: "daily",   priority: 1   },
    { url: `${baseUrl}/closures`,           lastModified: new Date(),  changeFrequency: "weekly",  priority: 0.9 },
    { url: `${baseUrl}/matches`,            lastModified: new Date(),  changeFrequency: "weekly",  priority: 0.9 },
    { url: `${baseUrl}/fan-festival`,       lastModified: new Date(),  changeFrequency: "weekly",  priority: 0.8 },
    { url: `${baseUrl}/guide`,              lastModified: new Date(),  changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/eat-watch`,          lastModified: new Date(),  changeFrequency: "monthly", priority: 0.7 },
    // Blog
    { url: `${baseUrl}/blog`,              lastModified: PUBLISHED,   changeFrequency: "weekly",  priority: 0.8 },
    { url: `${baseUrl}/blog/toronto-fifa-world-cup-road-closures-2026`,          lastModified: PUBLISHED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog/getting-to-toronto-stadium-fifa-world-cup-2026`,     lastModified: PUBLISHED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog/toronto-neighbourhoods-world-cup-2026-impact`,       lastModified: PUBLISHED, changeFrequency: "monthly", priority: 0.8  },
  ];
}
