import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { MusicQualityUpgraderContent } from "../../components/MusicQualityUpgraderContent";

export const metadata: Metadata = pageMeta(
  "/music-quality-upgrader",
  "Music Quality Upgrader · Clément PZ",
  "A personal pipeline that checks a playlist for tracks below lossless, finds better files, files them where the old ones were and moves the old ones to a review playlist.",
);

export default function MusicQualityUpgraderPage() {
  return <MusicQualityUpgraderContent />;
}
