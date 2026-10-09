import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { SpotaContent } from "../../components/SpotaContent";

export const metadata: Metadata = pageMeta(
  "/spota",
  "SpotA",
  "A daily spotting game for your crew. Today, spot ___. Find it, capture it, post it to unlock the feed.",
);

export default function SpotaPage() {
  return <SpotaContent />;
}
