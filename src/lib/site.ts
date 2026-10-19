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
  logo: "https://ichibanstays.com/wp-content/uploads/2026/07/cropped-Ichiban-Stays-Logo5.png",
};

export function pathFor(slug: string) {
  return `/${slug}/`;
}
