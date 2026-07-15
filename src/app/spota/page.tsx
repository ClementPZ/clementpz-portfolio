import type { Metadata } from "next";
import { SpotaContent } from "../../components/SpotaContent";

export const metadata: Metadata = {
  title: "SpotA · Clément PZ",
  description:
    "A daily spotting game for a group of friends. One prompt, both cameras, and nothing to see until you have posted.",
};

export default function SpotaPage() {
  return <SpotaContent />;
}
