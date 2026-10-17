"use client";

import type { AnchorHTMLAttributes } from "react";

// An anchor that puts the invite link on the clipboard when it is tapped. A
// visitor without Spot a goes to get the beta, installs it, and the app reads
// the link back on its first launch, so the friend who invited them is not
// lost on the way. The write needs the tap, which is why it lives on the
// anchors and not on page load.
export default function CopyAnchor({
  copy,
  ...props
}: { copy: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      onClick={() => {
        navigator.clipboard?.writeText(copy).catch(() => {});
      }}
    />
  );
}
