import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { MakingOfContent } from "../../components/MakingOfContent";

export const metadata: Metadata = pageMeta(
  "/making-of",
  "The making of this portfolio · Clément PZ",
  "Why this portfolio exists after ten years without one, and how far design, code and AI can be pushed in a single flow.",
);

export default function MakingOfPage() {
  return <MakingOfContent />;
}
