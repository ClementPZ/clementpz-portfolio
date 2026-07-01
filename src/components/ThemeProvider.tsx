"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { defaultTheme, type ThemeId } from "../data/content";

type Ctx = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
};

const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(defaultTheme);

  // Switcher parqué (V1 identité unique "signature") : on force le thème par
  // défaut et on ignore tout thème parqué éventuellement stocké en localStorage.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", defaultTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    document.documentElement.setAttribute("data-theme", id);
    try {
      window.localStorage.setItem("theme", id);
    } catch {}
  }, []);

  return <ThemeCtx.Provider value={{ theme, setTheme }}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
