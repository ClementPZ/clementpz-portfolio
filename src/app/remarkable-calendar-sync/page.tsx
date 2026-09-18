import type { Metadata } from "next";
import { RemarkableCalendarSyncContent } from "../../components/RemarkableCalendarSyncContent";

export const metadata: Metadata = {
  title: "reMarkable Calendar Sync · Clément PZ",
  description:
    "A weekly PDF planner generated from Google Calendar and pushed automatically to a reMarkable tablet.",
};

export default function RemarkableCalendarSyncPage() {
  return <RemarkableCalendarSyncContent />;
}
