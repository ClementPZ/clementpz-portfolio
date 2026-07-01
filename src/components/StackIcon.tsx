// Petites icônes monochromes (currentColor) pour les pills de la stack.
// Style ligne, cohérent quel que soit le thème.

const props = {
  width: 15,
  height: 15,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function StackIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "figma":
      return (
        <svg {...props} aria-hidden>
          <path d="M12 3H8.5a2.5 2.5 0 0 0 0 5H12z" />
          <path d="M12 3h3.5a2.5 2.5 0 0 1 0 5H12z" />
          <path d="M12 8H8.5a2.5 2.5 0 0 0 0 5H12z" />
          <circle cx="15.5" cy="10.5" r="2.5" />
          <path d="M12 13H8.5a2.5 2.5 0 1 0 3.5 2.3V13z" />
        </svg>
      );
    case "claude":
      return (
        <svg {...props} aria-hidden>
          <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
        </svg>
      );
    case "github":
      return (
        <svg {...props} aria-hidden>
          <path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5a3 3 0 0 0-.9-2.3c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.3a12 12 0 0 0-6 0C6.9 2 5.8 2.4 5.8 2.4a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 4.3 9.4c0 5 3 6.2 6 6.5a3 3 0 0 0-.9 2.3V22" />
        </svg>
      );
    case "mcp":
      return (
        <svg {...props} aria-hidden>
          <path d="M12 2v6m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-7 8H3m4.5-4.5L6 8m10.5 2.5L18 8m-6 6v8m-6-4H4m14 0h2" />
        </svg>
      );
    case "plugins":
      return (
        <svg {...props} aria-hidden>
          <path d="M10 3v3m4-3v3M6 8h12v4a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8zm6 9v4" />
        </svg>
      );
    case "docker":
      return (
        <svg {...props} aria-hidden>
          <rect x="3" y="10" width="4" height="4" />
          <rect x="8" y="10" width="4" height="4" />
          <rect x="13" y="10" width="4" height="4" />
          <rect x="8" y="5" width="4" height="4" />
          <path d="M3 15c3 2 12 2 15-3 2 .5 3 0 3 0" />
        </svg>
      );
    case "vscode":
      return (
        <svg {...props} aria-hidden>
          <path d="m9 8-4 4 4 4m6-8 4 4-4 4" />
        </svg>
      );
    case "notion":
      return (
        <svg {...props} aria-hidden>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8v8l8-8v8" />
        </svg>
      );
    default:
      return (
        <svg {...props} aria-hidden>
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}
