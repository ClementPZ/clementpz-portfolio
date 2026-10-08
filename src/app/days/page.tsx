import type { Metadata } from "next";
import { pageMeta } from "../../lib/pageMeta";
import { DaysContent } from "../../components/DaysContent";

export const metadata: Metadata = pageMeta(
  "/days",
  "Days: Countdown & Count up",
  "A day counter for iOS. Count down to a date or count up the days since one, with home screen and lock screen widgets. No account, no ads.",
);

export default function DaysPage() {
  return <DaysContent />;
}
