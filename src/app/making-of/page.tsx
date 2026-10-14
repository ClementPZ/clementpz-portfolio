import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { MakingOfContent } from "../../components/MakingOfContent";

export const metadata: Metadata = pageMeta(
  "/making-of",
  "The making of this portfolio · Clément PZ",
  "The hooks and skills built along the way, each with the mistake that started it and the reason it works that way.",
);

export default function MakingOfPage() {
  return <MakingOfContent />;
}
