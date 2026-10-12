"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { defaultLocale, locales, ui, type Locale } from "../data/i18n";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (typeof ui)[Locale];
};

const LocaleCtx = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Au mount : langue choisie par le visiteur (stockée), sinon EN. La langue du
  // navigateur n'est pas lue : l'anglais est la langue par défaut du site.
  useEffect(() => {
    let next: Locale = defaultLocale;
    try {
      const stored = window.localStorage.getItem("locale");
      if (locales.some((l) => l.id === stored)) next = stored as Locale;
    } catch {}
    // Lecture client-only (langue stockée ou navigateur) au mount : setState
    // intentionnel post-hydratation.
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
