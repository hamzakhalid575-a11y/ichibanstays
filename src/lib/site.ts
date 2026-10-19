import data from "@/content/site.json";

export interface PageContent {
  kind: "page" | "post";
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  categories: string[];
  html: string;
  image: string;
  order: string;
}

export interface NavItem {
  label: string;
  href: string;
  children: NavItem[];
}

export const SITE_URL = "https://ichibanstays.com";
export const PAGES = data.pages as Record<string, PageContent>;
export const NAV = data.nav as NavItem[];

export const BRAND = {
  name: "Ichiban Stays",
  tagline: "UK short-let and serviced accommodation management",
  email: "contact@ichibanstays.com",
  phone: "+44 7572 190291",
  phoneHref: "tel:+447572190291",
  whatsapp: "https://wa.me/447572190291",
  address: ["25 Hill Street", "Mayfair", "London W1J 5LW", "United Kingdom"],
  hours: "Monday to Friday, 9:00 to 18:00 UK time",
  logo: "/wp-content/uploads/2026/07/cropped-Ichiban-Stays-Logo5.png",
  logoHeader: "/wp-content/uploads/2026/07/cropped-Ichiban-Stays-Logo5-310x52.png",
};

export function pathFor(slug: string) {
  return `/${slug}/`;
}

/* SEO data crawled from the live WordPress site (see src/content/live-meta.json). */
import live from "@/content/live-meta.json";
import type { Metadata } from "next";

interface LiveMeta {
  title: string;
  desc: string;
  canonical: string;
  og: Record<string, string>;
  twitter: Record<string, string>;
  jsonld: Record<string, unknown>[];
}
const LIVE = live as unknown as Record<string, LiveMeta>;

function liveFor(path: string): LiveMeta | undefined {
  return LIVE[SITE_URL + path];
}

export function jsonLdFor(path: string): Record<string, unknown>[] {
  return liveFor(path)?.jsonld ?? [];
}

export function metadataFor(path: string): Metadata {
  const m = liveFor(path);
  if (!m) return {};
  const og = m.og;
  // The live home page's og:image is a WPForms spinner icon, a WordPress quirk we do not carry over.
  const image = og["og:image"] && !og["og:image"].includes("/plugins/") ? og["og:image"] : undefined;
  const meta: Metadata = {
    title: { absolute: m.title },
    description: m.desc || undefined,
    alternates: { canonical: m.canonical || SITE_URL + path },
    openGraph: {
      locale: og["og:locale"],
      type: (og["og:type"] as "website" | "article") || "website",
      title: og["og:title"],
      description: og["og:description"],
      url: og["og:url"],
      siteName: og["og:site_name"],
      images: image
        ? [{ url: image, width: Number(og["og:image:width"]) || undefined, height: Number(og["og:image:height"]) || undefined, type: og["og:image:type"] }]
        : undefined,
      ...(og["og:type"] === "article" && {
        publishedTime: og["article:published_time"],
        modifiedTime: og["article:modified_time"],
      }),
    },
    twitter: { card: (m.twitter.card as "summary_large_image") || "summary_large_image" },
  };
  const other: Record<string, string> = {};
  for (const k of ["label1", "data1", "label2", "data2"]) if (m.twitter[k]) other[`twitter:${k}`] = m.twitter[k];
  if (og["article:modified_time"] && !og["article:published_time"]) {
    other["article:modified_time"] = og["article:modified_time"];
  }
  if (Object.keys(other).length) meta.other = other;
  return meta;
}
