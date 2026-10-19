import { OG_SIZE, cleanName, renderJoinCard } from "../../../joinShared";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "A friend invited you to Spot a";

// The card under an invite link that carries the inviter's name.
export default async function SpotaJoinFromImage({
  params,
}: {
  params: Promise<{ name: string; code: string }>;
}) {
  const { name } = await params;
  return renderJoinCard(cleanName(name));
}
