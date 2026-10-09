import type { Metadata } from "next";
import { pageMeta } from "../../../lib/pageMeta";
import { NrcHueyContent } from "../../../components/NrcHueyContent";

export const metadata: Metadata = pageMeta(
  "/nrc/huey",
  "Huey · NRC Health · Clément PZ",
  "A Huey workshop session, how AI is integrated into the products: touchpoint research, three design principles, an evaluation test, and the marker and drawer that came out of it.",
);

export default function NrcHueyPage() {
  return <NrcHueyContent />;
}
