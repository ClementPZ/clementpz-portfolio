import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { EpisourceContent } from "../../components/EpisourceContent";

export const metadata: Metadata = pageMeta(
  "/episource",
  "Episource · Clément PZ",
  "Lead Product Designer at Episource (Optum), 2021-2024: user research, a design system, an EHR integration and Click to Code, an AI medical-coding interface.",
);

export default function EpisourcePage() {
  return <EpisourceContent />;
}
