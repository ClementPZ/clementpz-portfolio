import { notFound } from "next/navigation";

import { JoinView, joinMetadata } from "../joinShared";

// /spota/join/<code>, the page a friend's invite link lands on, in the form
// links took before the app put the inviter's name in them. The copy lives in
// ../joinShared.tsx, and /spota/join/from/<name>/<code> beside it says the same
// with a name.
export const metadata = joinMetadata();

export default async function SpotaJoinPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code: raw } = await params;
  const code = raw.toUpperCase();
  // The same shape the app accepts, eight letters and digits in practice.
  if (!/^[A-Z0-9]{6,12}$/.test(code)) notFound();
  return <JoinView code={code} />;
}
