import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const lastModified = "2026-07-19";

  const routes = [
    { path: "/", priority: 1 },
    ...services.map((s) => ({ path: `/${s.slug}`, priority: 0.8 })),
    { path: "/patienteninformation", priority: 0.6 },
    { path: "/jobs", priority: 0.6 },
    { path: "/kontakt", priority: 0.7 },
    { path: "/impressum", priority: 0.3 },
    { path: "/datenschutzbestimmungen-nach-dsgvo1", priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
