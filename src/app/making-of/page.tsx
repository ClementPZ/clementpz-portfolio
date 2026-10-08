import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "The making of this portfolio · Clément PZ",
  description:
    "Why a first portfolio after 10 years without one, and how far design, code and AI can go in hackathon mode.",
};

// Page masquée pour l'instant (décision du 2026-10-08). Le composant
// MakingOfContent et les textes (makingOfText) restent intacts : pour la
// rouvrir, réimporter MakingOfContent et le rendre ici à la place de notFound().
export default function MakingOfPage() {
  notFound();
}
