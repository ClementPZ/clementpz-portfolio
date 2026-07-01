"use client";

import { useEffect, useRef, useState } from "react";
import { locales } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

export function LanguageDropdown({ align = "right" }: { align?: "left" | "right" }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = locales.find((l) => l.id === locale) ?? locales[0];

  return (
    <div ref={ref} className="lang-dd">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="lang-dd-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        {current.short}
        <span className="lang-dd-caret" aria-hidden>
          ▾
        </span>
      </button>
      {open && (
        <div className="lang-dd-menu" role="listbox" style={{ [align]: 0 } as React.CSSProperties}>
          {locales.map((l) => (
            <button
              key={l.id}
              type="button"
              role="option"
              aria-selected={l.id === locale}
              onClick={() => {
                setLocale(l.id);
                setOpen(false);
              }}
              className="lang-dd-item"
              data-active={l.id === locale}
            >
              <span style={{ fontWeight: 600 }}>{l.short}</span>
              <span style={{ opacity: 0.6 }}>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
