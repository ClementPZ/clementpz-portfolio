import type { Metadata } from "next";
import { NrcContent } from "../../components/NrcContent";

export const metadata: Metadata = {
  title: "NRC Health · Clément PZ",
  description:
    "Building the design function at NRC Health: the team, a multi-product design system, three product cases and the analytics behind them.",
};

export default function NrcPage() {
  return <NrcContent />;
}
