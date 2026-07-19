/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Moderne, kleinere Bildformate automatisch ausliefern
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        // Bilder und statische Assets lange und unveraenderlich cachen
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Sinnvolle Sicherheits-Header (kosten keine Performance)
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Alte, groß geschriebene Duda-URLs -> neue Kleinschreibung (301, Ranking-Erhalt)
      { source: "/Krankengymnastik", destination: "/krankengymnastik", statusCode: 301 },
      { source: "/Jobs", destination: "/jobs", statusCode: 301 },
    ];
  },
};

export default nextConfig;
