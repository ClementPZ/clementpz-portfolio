"use client";

import { themes } from "../data/content";
import { useTheme } from "./ThemeProvider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="inline-flex p-1 rounded-full"
      style={{ background: "var(--bg-elev)", border: "1px solid var(--border)" }}
      role="radiogroup"
      aria-label="Choisir le thème"
    >
      {themes.map((t) => {
        const active = t.id === theme;
        return (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setTheme(t.id)}
            title={t.vibe}
            className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
            style={{
              background: active ? "var(--accent)" : "transparent",
              color: active ? "var(--accent-text)" : "var(--text-muted)",
            }}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
