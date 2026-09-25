import Link from "next/link";

// Flèche retour vers la home — en haut à gauche de chaque page projet.
// `href` et `label` permettent de remonter d'un niveau (ex. /nrc/design-system).
export function BackHome({
  href = "/",
  label = "Back to portfolio",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="btn-ghost"
      style={{
        width: 42,
        height: 42,
        justifyContent: "center",
        padding: 0,
        borderRadius: "50%",
      }}
    >
      ←
    </Link>
  );
}
