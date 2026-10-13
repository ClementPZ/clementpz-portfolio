import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { MakingOfContent } from "../../components/MakingOfContent";

export const metadata: Metadata = pageMeta(
  "/making-of",
  "How this portfolio was built · Clément PZ",
  "A use case: building a portfolio end to end with Claude, from the idea to the live site, and the flow that proved the most efficient.",
);

export default function MakingOfPage() {
  return <MakingOfContent />;
}
