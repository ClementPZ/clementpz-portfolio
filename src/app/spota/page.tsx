import type { Metadata } from "next";
import { SpotaContent } from "../../components/SpotaContent";

export const metadata: Metadata = {
  title: "SpotA",
  description:
    "A daily spotting game for your crew. Today: spot a ___. Find it, capture it, post it to unlock the feed.",
};

export default function SpotaPage() {
  return <SpotaContent />;
}
