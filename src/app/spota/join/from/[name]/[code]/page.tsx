import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JoinView, cleanName, joinMetadata } from "../../../joinShared";

// /spota/join/from/<name>/<code>, the invite link the app sends since 19 Oct
// 2026: the inviter's name in front of the code, so the preview can say who
// invited. The app reads the code off the last segment, the name changes
// nothing for it. A name that is not a name falls back to "A friend".
export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string; code: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  return joinMetadata(cleanName(name));
}

export default async function SpotaJoinFromPage({
  params,
}: {
  params: Promise<{ name: string; code: string }>;
}) {
  const { name, code: raw } = await params;
  const code = raw.toUpperCase();
  if (!/^[A-Z0-9]{6,12}$/.test(code)) notFound();
  return <JoinView code={code} name={cleanName(name)} />;
}
