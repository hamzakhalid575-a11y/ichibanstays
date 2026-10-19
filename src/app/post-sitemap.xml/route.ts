import { urlset, xml } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return xml(urlset("post"));
}
