"use client";

import { useEffect, useMemo, useState } from "react";

// Charge le manifeste des icones Flowbite vendorisees (public/flowbite/icons/
// manifest.json, SVG inline) au montage, cote client, hors du bundle JS.
// Copie figee du projet design-system-flowbite (vault), meme regle que le
// reste de l'extraction Flowbite sur cette page.

type IconEntry = { name: string; variant: "outline" | "solid"; category: string; svg: string };

type IconText = {
  searchPlaceholder: string;
  variantAll: string;
  variantOutline: string;
  variantSolid: string;
  categoryAll: string;
  copied: string;
  copyFallback: string;
};

export function FlowbiteIconBrowser({ text }: { text: IconText }) {
  const [icons, setIcons] = useState<IconEntry[] | null>(null);
  const [query, setQuery] = useState("");
  const [variant, setVariant] = useState<"all" | "outline" | "solid">("all");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch("/flowbite/icons/manifest.json")
      .then((r) => r.json())
      .then((data: { icons: IconEntry[] }) => {
        if (!cancelled) setIcons(data.icons);
      })
      .catch(() => {
        if (!cancelled) setIcons([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(() => {
    if (!icons) return [];
    return [...new Set(icons.map((i) => i.category))].sort();
  }, [icons]);

  const filtered = useMemo(() => {
    if (!icons) return [];
    const q = query.trim().toLowerCase();
    return icons.filter((i) => {
      if (variant !== "all" && i.variant !== variant) return false;
      if (category !== "all" && i.category !== category) return false;
      if (q && !i.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [icons, query, variant, category]);

  async function copyIcon(icon: IconEntry) {
    try {
      await navigator.clipboard.writeText(icon.svg);
      setStatus(`${text.copied}: ${icon.name}`);
    } catch {
      setStatus(text.copyFallback);
    }
    setTimeout(() => setStatus(""), 1600);
  }

  const segButton = (active: boolean): React.CSSProperties => ({
    border: "none",
    padding: "7px 14px",
    fontSize: 13,
    cursor: "pointer",
    background: active ? "var(--accent)" : "var(--bg-card)",
    color: active ? "var(--accent-text)" : "var(--text-muted)",
  });

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5 mb-5">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={text.searchPlaceholder}
          className="flex-1 min-w-[180px] text-sm"
          style={{
            padding: "9px 14px",
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            color: "var(--text)",
          }}
        />
        <div className="flex" style={{ border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden" }}>
          <button type="button" style={segButton(variant === "all")} onClick={() => setVariant("all")}>
            {text.variantAll}
          </button>
          <button type="button" style={segButton(variant === "outline")} onClick={() => setVariant("outline")}>
            {text.variantOutline}
          </button>
          <button type="button" style={segButton(variant === "solid")} onClick={() => setVariant("solid")}>
            {text.variantSolid}
          </button>
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-sm"
          style={{
            padding: "8px 12px",
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            color: "var(--text)",
          }}
        >
          <option value="all">{text.categoryAll}</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c.replace(/-/g, " ")}
            </option>
          ))}
        </select>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          {icons ? `${filtered.length} / ${icons.length}` : "..."}
        </span>
      </div>

      <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(84px, 1fr))" }}>
        {filtered.slice(0, 400).map((icon) => (
          <button
            key={`${icon.variant}-${icon.name}`}
            type="button"
            onClick={() => copyIcon(icon)}
            className="flex flex-col items-center gap-1.5 text-center"
            style={{
              padding: "10px 4px",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text)",
              cursor: "pointer",
            }}
            aria-label={`${icon.name} (${icon.variant})`}
          >
            <span
              aria-hidden
              style={{ width: 20, height: 20, display: "block" }}
              dangerouslySetInnerHTML={{ __html: icon.svg }}
            />
            <span
              className="text-[10px] leading-tight"
              style={{
                color: "var(--text-muted)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {icon.name}
            </span>
          </button>
        ))}
      </div>

      <p aria-live="polite" className="text-xs mt-3" style={{ color: "var(--text-muted)", minHeight: 16 }}>
        {status}
      </p>
    </div>
  );
}
