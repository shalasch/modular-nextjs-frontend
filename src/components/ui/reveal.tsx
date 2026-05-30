"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, fadeIn, staggerContainer, reducedFadeUp } from "@/lib/motion";

/* ─────────────────────────────────────────────
   Reveal
   Scroll-triggered animation wrapper.
   Respects prefers-reduced-motion (zero animation).
   Only animates once — on first entry into view.
───────────────────────────────────────────────── */

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Animation style */
  variant?: "fadeUp" | "fadeIn";
  /** Delay before animating (ms) */
  delay?: number;
  /** How much of element must be visible before triggering */
  threshold?: number;
}

export function Reveal({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  threshold = 0.1,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const prefersReduced = useReducedMotion();

  const baseVariants: Variants = variant === "fadeUp" ? fadeUp : fadeIn;
  const reducedVariants: Variants = reducedFadeUp;

  const variants = prefersReduced ? reducedVariants : baseVariants;

  const transition = prefersReduced
    ? {}
    : {
        duration: 0.5,
        delay: delay / 1000,
        ease: [0, 0, 0.2, 1] as const,
      };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   RevealGroup
   Stagger container for groups of elements.
   Children receive staggered entrance delays.
───────────────────────────────────────────────── */

export interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
}

export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  threshold = 0.1,
}: RevealGroupProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={prefersReduced ? {} : staggerContainer(stagger)}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   RevealItem
   Must be a direct child of RevealGroup.
───────────────────────────────────────────────── */

export interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealItem({ children, className }: RevealItemProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={prefersReduced ? reducedFadeUp : fadeUp}
    >
      {children}
    </motion.div>
  );
}
