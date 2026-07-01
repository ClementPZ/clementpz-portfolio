import { profile } from "../data/content";
// ThemeSwitcher parqué pour la V1 (identité unique "signature").
// import { ThemeSwitcher } from "./ThemeSwitcher";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 nav-bar">
      <div className="max-w-6xl mx-auto px-6 py-4 relative flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {profile.shortName}
        </a>

        {/* Airbnb search pill — centré, visible uniquement via [data-theme="airbnb"] CSS */}
        <div className="nav-search-pill">
          <span className="nav-search-segment">Paris</span>
          <div className="nav-search-divider" />
          <span className="nav-search-segment">Cette semaine</span>
          <div className="nav-search-divider" />
          <span className="nav-search-segment" style={{ color: "var(--text-muted)" }}>
            Voyageurs
          </span>
          <span className="nav-search-btn">→</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
