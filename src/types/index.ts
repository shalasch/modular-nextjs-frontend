/**
 * Shared TypeScript types for the Language School ecosystem
 */

import type { WhatsAppSegment } from "@/lib/whatsapp";

/* ── Navigation ── */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

/* ── Programs ── */

export type ProgramSlug = "offshore" | "interviews" | "communication";

export interface Program {
  slug: ProgramSlug;
  name: string;
  tagline: string;
  audience: string;
  outcomes: string[];
  outcomeStatement: string;
  whatsappSegment: WhatsAppSegment;
  accentColor?: string;
}

/* ── Testimonials ── */

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany?: string;
  authorPhoto?: string;
  outcome?: string;
  program: ProgramSlug;
  featured?: boolean;
}

/* ── FAQ ── */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "program" | "logistics" | "investment" | "results" | "about";
}

/* ── Blog ── */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  publishedAt: string;
  category: BlogCategory;
  readingTime?: number;
}

export type BlogCategory =
  | "offshore"
  | "interviews"
  | "communication"
  | "language-mindset"
  | "career";

/* ── CTA ── */

export interface CTAConfig {
  label: string;
  segment: WhatsAppSegment;
  source: string;
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
  showIcon?: boolean;
}

/* ── Section backgrounds ── */
export type SectionBackground = "navy" | "white" | "cream" | "navy-deep";

/* ── Common ── */
export interface WithClassName {
  className?: string;
}

export interface WithChildren {
  children: React.ReactNode;
}
