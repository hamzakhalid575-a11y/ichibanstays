/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // WordPress permalinks end in a slash; keep URLs identical so SEO is preserved.
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      // Short link used on the WordPress site (blocked for crawlers in robots.txt)
      { source: "/go/whatsapp", destination: "https://wa.me/447572190291", permanent: false },
    ];
  },
};

export default nextConfig;
