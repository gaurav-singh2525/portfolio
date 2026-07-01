"use client";

/**
 * ParticleBackground — replaced with empty component.
 * The canvas particle animation was part of the cyberpunk aesthetic
 * and doesn't align with the clean Apple-inspired direction.
 * Export preserved to avoid breaking Hero.jsx imports.
 */
export function ParticleBackground() {
  return null;
}

/**
 * GradientGlow — replaced with a very subtle warm gradient.
 * Instead of animated neon blobs, this provides a barely-perceptible
 * warmth to the hero section background.
 */
export function GradientGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/80 via-background to-background" />
    </div>
  );
}
