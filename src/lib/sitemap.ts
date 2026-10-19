import live from "@/content/live-meta.json";
import { PAGES, SITE_URL } from "@/lib/site";

const LIVE = live as unknown as Record<string, { og: Record<string, string> }>;

export function lastmod(path: string): string {
  return LIVE[SITE_URL + path]?.og["article:modified_time"] ?? `${PAGES[path].date}T00:00:00+00:00`;
}

export function urlset(kind: "page" | "post"): string {
  const urls = Object.entries(PAGES)
    .filter(([path, p]) => p.kind === kind && path !== "/privacy-policy/")
    .sort((a, b) => (a[0] === "/" ? -1 : b[0] === "/" ? 1 : a[1].order.localeCompare(b[1].order)))
    .map(([path]) => `\t<url>\n\t\t<loc>${SITE_URL}${path}</loc>\n\t\t<lastmod>${lastmod(path)}</lastmod>\n\t</url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export function sitemapIndex(): string {
  const latest = (kind: "page" | "post") =>
    Object.keys(PAGES)
      .filter((p) => PAGES[p].kind === kind)
      .map(lastmod)
      .sort()
      .pop();
  const entry = (name: string, kind: "page" | "post") =>
    `\t<sitemap>\n\t\t<loc>${SITE_URL}/${name}</loc>\n\t\t<lastmod>${latest(kind)}</lastmod>\n\t</sitemap>`;
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entry("post-sitemap.xml", "post")}\n${entry("page-sitemap.xml", "page")}\n</sitemapindex>`;
}

export const xml = (body: string) =>
  new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
