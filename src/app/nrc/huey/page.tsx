import type { Metadata } from "next";
import { NrcHueyContent } from "../../../components/NrcHueyContent";

export const metadata: Metadata = {
  title: "Huey · NRC Health · Clément PZ",
  description:
    "One AI presence across a whole platform: touchpoint research, three design principles, an evaluation test, and the marker and drawer that came out of it.",
};

export default function NrcHueyPage() {
  return <NrcHueyContent />;
}
