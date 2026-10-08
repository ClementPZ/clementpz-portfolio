import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { BuilderContent } from "../../components/BuilderContent";

export const metadata: Metadata = pageMeta(
  "/builder",
  "Builder · Clément PZ",
  "A Claude Code plugin that lets non-engineers ship front-end changes on the design system, review-ready for engineers.",
);

export default function BuilderPage() {
  return <BuilderContent />;
}
