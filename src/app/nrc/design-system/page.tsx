import type { Metadata } from "next";
import { NrcDesignSystemContent } from "../../../components/NrcDesignSystemContent";

export const metadata: Metadata = {
  title: "Flowbite design system · Clément PZ",
  description:
    "The open-source Flowbite design system extracted and documented: tokens copied from the source and 16 live components with usage guides. Not NRC's internal system.",
};

export default function NrcDesignSystemPage() {
  return <NrcDesignSystemContent />;
}
