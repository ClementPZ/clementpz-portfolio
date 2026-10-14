import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { MakingOfContent } from "../../components/MakingOfContent";

export const metadata: Metadata = pageMeta(
  "/making-of",
  "The making of this portfolio · Clément PZ",
  "The skills, hooks and scripts around each step of building this portfolio, from opening a session to closing it.",
);

export default function MakingOfPage() {
  return <MakingOfContent />;
}
