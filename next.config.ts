import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Ancienne page statique (supprimée), remplacée par la route Next.
      {
        source: "/music-downloader.html",
        destination: "/music-downloader",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
