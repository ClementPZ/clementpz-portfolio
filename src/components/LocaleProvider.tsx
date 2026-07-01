"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { defaultLocale, detectLocale, ui, type Locale } from "../data/i18n";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (typeof ui)[Locale];
};

const LocaleCtx = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Au mount : préférence stockée, sinon langue du navigateur, sinon EN.
  useEffect(() => {
    let next: Locale = defaultLocale;
    try {
      const stored = window.localStorage.getItem("locale") as Locale | null;
      next = stored ?? detectLocale();
    } catch {
      next = detectLocale();
    }
    setLocaleState(next);
    document.documentElement.setAttribute("lang", next);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.setAttribute("lang", l);
    try {
      window.localStorage.setItem("locale", l);
    } catch {}
  }, []);

  return (
    <LocaleCtx.Provider value={{ locale, setLocale, t: ui[locale] }}>
      {children}
    </LocaleCtx.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
