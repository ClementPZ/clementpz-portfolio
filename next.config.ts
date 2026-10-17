import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      // Baseline security headers, every route. SAMEORIGIN and not DENY: the
      // /nrc pages frame their own /flowbite components.
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Apple fetches this file with no extension and wants it as JSON, to let
      // the Spot a app open https://clementpz.com/spota/join/<code> itself.
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
      // Unlisted early access page: no sitemap entry, no link from the site.
      {
        source: "/avatar/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async rewrites() {
    return [
      // Static page in public/avatar, served at /avatar.
      { source: "/avatar", destination: "/avatar/index.html" },
    ];
  },
  async redirects() {
    return [
      // Ancienne page statique (supprimée), remplacée par la route Next.
      {
        source: "/music-downloader.html",
        destination: "/music-quality-upgrader",
        permanent: true,
      },
      // Page renommée : l'ancienne adresse reste valide.
      {
        source: "/music-downloader",
        destination: "/music-quality-upgrader",
        permanent: true,
      },
      // Le detail de Click to Code est devenu le cas d'usage de /episource.
      {
        source: "/click-to-code",
        destination: "/episource#click-to-code",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
