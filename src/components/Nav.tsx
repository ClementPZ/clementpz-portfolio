import Link from "next/link";
import { profile } from "../data/content";
import { ModeToggle } from "./ModeToggle";
import { LanguageDropdown } from "./LanguageDropdown";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 nav-bar">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          {profile.shortName}
        </Link>

        <div className="flex items-center gap-3">
          <LanguageDropdown />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
