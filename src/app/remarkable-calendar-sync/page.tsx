import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { RemarkableCalendarSyncContent } from "../../components/RemarkableCalendarSyncContent";

export const metadata: Metadata = pageMeta(
  "/remarkable-calendar-sync",
  "reMarkable Calendar Sync · Clément PZ",
  "A weekly PDF planner generated from Google Calendar and pushed automatically to a reMarkable tablet.",
);

export default function RemarkableCalendarSyncPage() {
  return <RemarkableCalendarSyncContent />;
}
