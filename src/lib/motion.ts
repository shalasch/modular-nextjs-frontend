/**
 * Motion system — Framer Motion variants
 *
 * Four permitted animation types:
 *   1. scroll reveal (fadeUp, fadeIn)
 *   2. accordion open/close
 *   3. sticky nav background
 *   4. hover states (handled inline with Tailwind)
 *
 * prefers-reduced-motion is handled via useReducedMotion() at the component level.
 * When reduced motion is preferred, pass reduced={true} to get instant variants.
 */

import type { Variants } from "framer-motion";

/** Standard reveal: fade + rise from below */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1],
    },
  },
};

/** Simple fade — for elements that shouldn't move */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.2, 1],
    },
  },
};

/** Stagger container — wraps a group of children that reveal sequentially */
export function staggerContainer(staggerChildren = 0.1): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: 0.1,
      },
    },
  };
}

/** Accordion open/close */
export const accordionContent: Variants = {
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
  expanded: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.25, ease: [0, 0, 0.2, 1] },
  },
};

/** Sticky nav — shadow appears when scrolled (white background always) */
export const stickyNavBackground: Variants = {
  transparent: {
    backgroundColor: "rgba(250, 250, 250, 0)",
    backdropFilter: "blur(0px)",
    boxShadow: "none",
  },
  solid: {
    backgroundColor: "rgba(250, 250, 250, 0.97)",
    backdropFilter: "blur(8px)",
    boxShadow: "0 1px 0 rgba(10, 22, 40, 0.07), 0 2px 8px rgba(10, 22, 40, 0.04)",
    transition: { duration: 0.2, ease: [0, 0, 0.2, 1] },
  },
};

/** No-motion variants — zero duration, instant transitions */
export const reducedFadeUp: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

export const reducedFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

/** Hook-friendly helper: returns correct variants based on motion preference */
export function getVariants(
  base: Variants,
  reduced: Variants,
  prefersReduced: boolean | null
): Variants {
  return prefersReduced ? reduced : base;
}
