import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
