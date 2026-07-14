import type { Metadata } from "next";
import { BuilderContent } from "../../components/BuilderContent";

export const metadata: Metadata = {
  title: "Builder · Clément PZ",
  description:
    "A Claude Code plugin that lets non-engineers ship front-end changes on the design system, review-ready for engineers.",
};

export default function BuilderPage() {
  return <BuilderContent />;
}
