import { profile } from "../data/content";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur"
      style={{
        background: "color-mix(in oklab, var(--bg) 80%, transparent)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {profile.shortName}
        </a>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="hidden sm:inline text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Contact
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
