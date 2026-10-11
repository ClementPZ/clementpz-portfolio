import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      // Apple fetches this file with no extension and wants it as JSON, to let
      // the Spot a app open https://clementpz.com/spota/join/<code> itself.
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
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
