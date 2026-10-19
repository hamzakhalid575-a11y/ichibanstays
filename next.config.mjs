/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // WordPress permalinks end in a slash; keep URLs identical so SEO is preserved.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
