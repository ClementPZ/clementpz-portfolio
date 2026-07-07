import Link from "next/link";

// Flèche retour vers la home — en haut à gauche de chaque page projet.
export function BackHome() {
  return (
    <Link
      href="/"
      aria-label="Back to portfolio"
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
