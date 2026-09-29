"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { defaultTheme, type ThemeId } from "../data/content";

type Mode = "dark" | "light";

type Ctx = {
  theme: ThemeId;
  mode: Mode;
  toggleMode: () => void;
  setTheme: (id: ThemeId) => void;
};

const ThemeCtx = createContext<Ctx | null>(null);

const DARK: ThemeId = "signature";
const LIGHT: ThemeId = "signature-light";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(defaultTheme);

  // V1 : identité unique "signature" en dark/light. Le switcher multi-marques
  // est parqué. On lit le mode (dark|light) depuis localStorage au mount.
  useEffect(() => {
    let next: ThemeId = LIGHT;
    try {
      next = window.localStorage.getItem("mode-v2") === "dark" ? DARK : LIGHT;
    } catch {}
    // Lecture client-only de localStorage au mount (post-hydratation) : le
    // setState ici est intentionnel et sûr, pas une cascade de renders.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    document.documentElement.setAttribute("data-theme", id);
  }, []);

  const toggleMode = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === LIGHT ? DARK : LIGHT;
      document.documentElement.setAttribute("data-theme", next);
      try {
        window.localStorage.setItem("mode-v2", next === LIGHT ? "light" : "dark");
      } catch {}
      return next;
    });
  }, []);

  const mode: Mode = theme === LIGHT ? "light" : "dark";

  return (
    <ThemeCtx.Provider value={{ theme, mode, toggleMode, setTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
