import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * Typography system
 *
 * Two typefaces, strict role separation:
 *   Cormorant Garamond → display/editorial (headlines, pull quotes, large numbers)
 *   Plus Jakarta Sans  → functional (body, UI, labels, captions)
 *
 * Rules (from PRE_IMPLEMENTATION_AUDIT):
 *   - Never Cormorant and Jakarta at the same hierarchy level
 *   - Cormorant Italic for English terms within PT-BR copy
 *   - Scale is non-linear: big jump from display to body is intentional
 *   - Line-height varies by level: display 1.08, body 1.65
 */

/* ── Display XL — Hero headline ── */

export interface DisplayXLProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "span" | "p";
}

const DisplayXL = React.forwardRef<HTMLHeadingElement, DisplayXLProps>(
  ({ as: Comp = "h1", className, ...props }, ref) => (
    <Comp
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={cn(
        "font-display",
        "text-[clamp(2.75rem,6vw,5.5rem)]", /* fluid: 44px → 88px */
        "leading-[1.05]",
        "tracking-[-0.02em]",
        "text-balance",
        className
      )}
      {...props}
    />
  )
);

DisplayXL.displayName = "DisplayXL";

/* ── Display L — Section heroes ── */

export interface DisplayLProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

const DisplayL = React.forwardRef<HTMLHeadingElement, DisplayLProps>(
  ({ as: Comp = "h2", className, ...props }, ref) => (
    <Comp
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={cn(
        "font-display",
        "text-[clamp(2.375rem,5vw,4rem)]", /* fluid: 38px → 64px */
        "leading-[1.08]",
        "tracking-[-0.02em]",
        "text-balance",
        className
      )}
      {...props}
    />
  )
);

DisplayL.displayName = "DisplayL";

/* ── H1 — Page titles ── */

const H1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "font-display",
        "text-[clamp(2.125rem,4vw,3rem)]", /* fluid: 34px → 48px */
        "leading-[1.12]",
        "tracking-[-0.02em]",
        "text-balance",
        className
      )}
      {...props}
    />
  )
);

H1.displayName = "H1";

/* ── H2 — Section titles ── */

const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "font-display",
        "text-[clamp(1.75rem,3.5vw,2.25rem)]", /* fluid: 28px → 36px */
        "leading-[1.16]",
        "tracking-[-0.02em]",
        "text-balance",
        className
      )}
      {...props}
    />
  )
);

H2.displayName = "H2";

/* ── H3 — Sub-sections, card titles ── */

const H3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "font-body font-semibold",
        "text-[clamp(1.25rem,2.5vw,1.5rem)]", /* fluid: 20px → 24px */
        "leading-[1.25]",
        "tracking-[-0.01em]",
        className
      )}
      {...props}
    />
  )
);

H3.displayName = "H3";

/* ── H4 — Card titles, step titles ── */

const H4 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn(
        "font-body font-semibold",
        "text-[1.25rem]", /* 20px, fixed */
        "leading-[1.3]",
        className
      )}
      {...props}
    />
  )
);

H4.displayName = "H4";

/* ── Body ── */

export interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "lg" | "md" | "sm";
  muted?: boolean;
  as?: React.ElementType;
}

const Body = React.forwardRef<HTMLParagraphElement, BodyProps>(
  ({ size = "md", muted, as: Comp = "p", className, ...props }, ref) => {
    const sizeClass = {
      lg: "text-[var(--text-body-l)] leading-[var(--leading-relaxed)]",
      md: "text-[var(--text-body-m)] leading-[var(--leading-relaxed)]",
      sm: "text-[var(--text-body-s)] leading-[var(--leading-normal)]",
    }[size];

    return (
      <Comp
        ref={ref}
        className={cn(
          "font-body",
          sizeClass,
          muted && "text-[var(--color-text-secondary)]",
          className
        )}
        {...props}
      />
    );
  }
);

Body.displayName = "Body";

/* ── Label / Overline ── */

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
  /** Use gold color (default). Pass false for slate. */
  gold?: boolean;
}

const Label = React.forwardRef<HTMLSpanElement, LabelProps>(
  ({ as: Comp = "span", gold = true, className, ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(
        "font-body font-semibold",
        "text-[var(--text-label)]",
        "uppercase tracking-[var(--tracking-wider)]",
        gold ? "text-[var(--color-gold-500)]" : "text-[var(--color-text-secondary)]",
        className
      )}
      {...props}
    />
  )
);

Label.displayName = "Label";

/* ── Pull Quote ── */
/* Large testimonial or editorial quote in Cormorant */

export interface PullQuoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  attribution?: string;
}

const PullQuote = React.forwardRef<HTMLQuoteElement, PullQuoteProps>(
  ({ attribution, children, className, ...props }, ref) => (
    <figure className={cn("relative", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "block font-display text-[4rem] leading-none",
          "text-[var(--color-gold-500)] mb-[-1.5rem] select-none"
        )}
      >
        &ldquo;
      </span>
      <blockquote
        ref={ref}
        className={cn(
          "font-display",
          "text-[clamp(1.5rem,3vw,2.5rem)]",
          "leading-[1.25]",
          "italic",
          "tracking-[-0.01em]",
          "pl-8"
        )}
        {...props}
      >
        {children}
      </blockquote>
      <span
        aria-hidden="true"
        className={cn(
          "block font-display text-[4rem] leading-none mt-[-1rem] select-none text-right translate-x-4",
          "text-[var(--color-gold-500)]"
        )}
      >
        &rdquo;
      </span>
      {attribution && (
        <figcaption className="mt-4 font-body text-[var(--text-body-s)] text-[var(--color-text-secondary)] not-italic">
          {attribution}
        </figcaption>
      )}
    </figure>
  )
);

PullQuote.displayName = "PullQuote";

/* ── Step Number ── */
/* Large typographic numeral used in "How it works" */

export interface StepNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
  n: number;
  subtle?: boolean;
}

const StepNumber = React.forwardRef<HTMLSpanElement, StepNumberProps>(
  ({ n, subtle = false, className, ...props }, ref) => (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn(
        "font-display font-light select-none",
        "text-[4rem] leading-none",
        subtle
          ? "text-[var(--color-navy-900)] opacity-15"
          : "text-[var(--color-gold-500)] opacity-40",
        className
      )}
      {...props}
    >
      {String(n).padStart(2, "0")}
    </span>
  )
);

StepNumber.displayName = "StepNumber";

/* ── Italic emphasis — for English terms within PT-BR copy ── */

const Em = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <em
      ref={ref}
      className={cn("font-display italic not-italic", className)}
      {...props}
    />
  )
);

Em.displayName = "Em";

export { DisplayXL, DisplayL, H1, H2, H3, H4, Body, Label, PullQuote, StepNumber, Em };
