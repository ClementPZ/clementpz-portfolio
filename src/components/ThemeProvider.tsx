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

  // Au mount : lit le thème depuis localStorage (post-hydration)
  useEffect(() => {
    const stored = (typeof window !== "undefined" && window.localStorage.getItem("theme")) as ThemeId | null;
    if (stored && stored !== theme) {
      setThemeState(stored);
    }
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
