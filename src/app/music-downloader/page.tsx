import type { Metadata } from "next";
import { MusicDownloaderContent } from "../../components/MusicDownloaderContent";

export const metadata: Metadata = {
  title: "Music Downloader · Clément PZ",
  description:
    "Un pipeline personnel qui trouve un morceau sur un réseau P2P, le télécharge en qualité maximale, le convertit en lossless et le range dans ma bibliothèque DJ.",
};

export default function MusicDownloaderPage() {
  return <MusicDownloaderContent />;
}
