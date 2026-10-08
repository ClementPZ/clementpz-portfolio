import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { NrcContent } from "../../components/NrcContent";

export const metadata: Metadata = pageMeta(
  "/nrc",
  "NRC Health · Clément PZ",
  "Building the design function at NRC Health: the team, a multi-product design system, three product cases and the analytics behind them.",
);

export default function NrcPage() {
  return <NrcContent />;
}
