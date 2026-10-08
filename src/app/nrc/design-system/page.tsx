import type { Metadata } from "next";
import { pageMeta } from "../../../lib/pageMeta";
import { NrcDesignSystemContent } from "../../../components/NrcDesignSystemContent";

export const metadata: Metadata = pageMeta(
  "/nrc/design-system",
  "Flowbite design system · Clément PZ",
  "The open-source Flowbite design system extracted and documented: tokens copied from the source and 19 live components with usage guides. Not NRC's internal system.",
);

export default function NrcDesignSystemPage() {
  return <NrcDesignSystemContent />;
}
