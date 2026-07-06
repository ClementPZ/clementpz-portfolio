import type { Metadata } from "next";
import { MakingOfContent } from "../../components/MakingOfContent";

export const metadata: Metadata = {
  title: "The making of this portfolio · Clément PZ",
  description:
    "Why a first portfolio after 10 years without one, and how far design, code and AI can go in hackathon mode.",
};

export default function MakingOfPage() {
  return <MakingOfContent />;
}
