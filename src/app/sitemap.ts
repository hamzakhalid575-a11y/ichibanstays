import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(PAGES).map(([path, p]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: p.date,
  }));
}
