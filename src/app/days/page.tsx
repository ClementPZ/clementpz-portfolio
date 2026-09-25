import type { Metadata } from "next";
import { DaysContent } from "../../components/DaysContent";

export const metadata: Metadata = {
  title: "Days: Countdown & Count up",
  description:
    "A very clean day counter for iOS. Count down to a date or count up the days since one, with home screen and lock screen widgets. No account, no ads.",
};

export default function DaysPage() {
  return <DaysContent />;
}
