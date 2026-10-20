import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { MakingOfContent } from "../../components/MakingOfContent";

export const metadata: Metadata = pageMeta(
  "/making-of",
  "How this portfolio is built · Clément PZ",
  "The hooks and skills built along the way, where they act in a session, and why each one works that way.",
);

export default function MakingOfPage() {
  return <MakingOfContent />;
}
