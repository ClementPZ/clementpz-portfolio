"use client";

import { useTheme } from "./ThemeProvider";

export function ModeToggle() {
  const { mode, toggleMode } = useTheme();
  const isDark = mode === "dark";
  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="rounded-full"
      style={{
        width: 36,
        height: 36,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-elev)",
        border: "1px solid var(--border)",
        color: "var(--text)",
        fontSize: "0.95rem",
        lineHeight: 1,
      }}
    >
      {isDark ? "☀︎" : "☾"}
    </button>
  );
}
