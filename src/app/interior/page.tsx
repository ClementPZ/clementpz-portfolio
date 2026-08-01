import type { Metadata } from "next";
import { InteriorContent } from "../../components/InteriorContent";

export const metadata: Metadata = {
  title: "Apartment Interior Design · Clément PZ",
  description:
    "The ongoing interior design of my apartment, inspired by Verner Panton, Tadao Ando and Jean-Pierre Garrauld. Upvote your favorites.",
};

export default function InteriorPage() {
  return <InteriorContent />;
}
