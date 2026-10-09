import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { ClickToCodeContent } from "../../components/ClickToCodeContent";
import { episourceVisual } from "../../data/episourceVisual";

export const metadata: Metadata = pageMeta(
  "/click-to-code",
  "Click to Code · Clément PZ",
  episourceVisual.en.page.metaDescription,
);

export default function ClickToCodePage() {
  return <ClickToCodeContent />;
}
