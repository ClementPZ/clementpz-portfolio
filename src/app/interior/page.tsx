import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { InteriorContent } from "../../components/InteriorContent";

export const metadata: Metadata = pageMeta(
  "/interior",
  "Apartment Interior Design · Clément PZ",
  "The ongoing interior design of my apartment, inspired by Verner Panton, Tadao Ando and Jean-Pierre Garrauld. Upvote your favorites.",
);

export default function InteriorPage() {
  return <InteriorContent />;
}
