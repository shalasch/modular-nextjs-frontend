import * as React from "react";
import { cn } from "@/lib/utils";
import type { SectionBackground } from "@/types";

/* ─────────────────────────────────────────────
   Section
   The structural wrapper for every landing page
   section. Enforces the background color rhythm,
   section padding, and semantic HTML structure.

   Background sequence per PRE_IMPLEMENTATION_AUDIT:
   navy → white → cream → white → navy → cream → white → navy

   Color semantics:
   - navy    = authority, confidence, opening/closing statements
   - white   = clarity, information processing, program details
   - cream   = warmth, human stories, methodology
───────────────────────────────────────────────── */

const BG_CLASSES: Record<SectionBackground, string> = {
  navy: "bg-[var(--color-navy-900)]",
  "navy-deep": "bg-[var(--color-navy-800)]",
  white: "bg-[var(--color-white)]",
  cream: "bg-[var(--color-cream-100)]",
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  background?: SectionBackground;
  /** Remove top padding (useful when sections are tightly coupled) */
  noTopPadding?: boolean;
  /** Remove bottom padding */
  noBottomPadding?: boolean;
  /** Constrain inner content to max-width */
  contained?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Comp = "section",
      background = "white",
      noTopPadding = false,
      noBottomPadding = false,
      contained = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isNavy = background === "navy" || background === "navy-deep";

    return (
      <Comp
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          BG_CLASSES[background],
          !noTopPadding && "pt-[var(--spacing-12)] lg:pt-[var(--spacing-16)]",
          !noBottomPadding && "pb-[var(--spacing-12)] lg:pb-[var(--spacing-16)]",
          /* On mobile, reduce section padding */
          !noTopPadding && "pt-[var(--spacing-8)]",
          !noBottomPadding && "pb-[var(--spacing-8)]",
          className
        )}
        {...props}
      >
        {contained ? (
          <div
            className={cn(
              "w-full mx-auto container-padding",
              "max-w-[var(--container-2xl)]",
              isNavy ? "text-[var(--color-text-inverse)]" : "text-[var(--color-text-primary)]"
            )}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Section.displayName = "Section";

/* ─────────────────────────────────────────────
   SectionHeader
   Standard block used at the top of each section:
   overline → headline → optional lead text
───────────────────────────────────────────────── */

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  overline?: string;
  headline: string;
  lead?: string;
  /** Constrain headline width for visual rhythm */
  narrow?: boolean;
  /** Center-align content (use only for single-insight sections) */
  centered?: boolean;
  /** Extra classes applied to the h2 headline element */
  headlineClassName?: string;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    { overline, headline, lead, narrow, centered, headlineClassName, className, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "mb-[var(--spacing-8)] lg:mb-[var(--spacing-12)]",
        centered && "text-center mx-auto",
        narrow && "max-w-[var(--container-md)]",
        className
      )}
      {...props}
    >
      {overline && (
        <p
          className="text-[var(--text-label)] font-body font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-gold-500)] mb-4"
          aria-label={`Section: ${overline}`}
        >
          {overline}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-[var(--text-h2)] leading-[var(--leading-display)]",
          "tracking-[var(--tracking-tight)]",
          narrow && "prose-width",
          headlineClassName
        )}
      >
        {headline}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-[var(--text-body-l)] leading-[var(--leading-relaxed)]",
            "text-[var(--color-text-secondary)]",
            narrow && "prose-width"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  )
);

SectionHeader.displayName = "SectionHeader";

/* ─────────────────────────────────────────────
   Divider
   Gold 1px horizontal rule — used between sections
   or as a decorative accent above headlines.
───────────────────────────────────────────────── */

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  width?: "full" | "short";
}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ width = "short", className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn(
        "border-none h-px bg-[var(--color-gold-500)]",
        width === "short" ? "w-12" : "w-full",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  )
);

Divider.displayName = "Divider";

export { Section, SectionHeader, Divider };
