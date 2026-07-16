import confetti from "canvas-confetti";

// Palette identité aubergine.
const COLORS = ["#b370c0", "#54255a", "#d3a6dd", "#f5eff6", "#7c3aed"];

// Explosion de confettis centrée sur l'élément cliqué (sinon centre-bas de
// l'écran). Branchée sur les CTA menant hors du portfolio (mailto, LinkedIn,
// GitHub) : le clic ouvre un nouvel onglet / le mailer, la page reste visible.
export function fireConfetti(el?: HTMLElement | null) {
  let origin = { x: 0.5, y: 0.6 };
  if (el) {
    const r = el.getBoundingClientRect();
    origin = {
      x: (r.left + r.width / 2) / window.innerWidth,
      y: (r.top + r.height / 2) / window.innerHeight,
    };
  }
  confetti({ particleCount: 90, spread: 70, startVelocity: 42, origin, colors: COLORS });
  confetti({
    particleCount: 40,
    spread: 100,
    startVelocity: 28,
    scalar: 0.9,
    origin,
    colors: COLORS,
  });
}
