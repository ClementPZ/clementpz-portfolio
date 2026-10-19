import { OG_SIZE, renderJoinCard } from "../joinShared";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "A friend invited you to Spot a";

// The card a messaging app shows under an invite link without a name in it.
// Drawn in ../joinShared.tsx.
export default async function SpotaJoinImage() {
  return renderJoinCard();
}
