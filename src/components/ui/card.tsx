import * as React from "react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Card
   Base card primitive. Used as foundation for:
   - ProgramCard (landing page programs section)
   - TestimonialCard (social proof)
   - StepCard (how it works)
   - BlogCard (blog preview)
───────────────────────────────────────────────── */

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Cream background variant — for testimonial warmth */
  warm?: boolean;
  /** Hoverable — adds lift on hover */
  hoverable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ warm, hoverable, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[var(--radius-md)]",
        "border border-[rgb(10_22_40_/_8%)]",
        warm
          ? "bg-[var(--color-cream-100)]"
          : "bg-[var(--color-white-pure)]",
        hoverable && [
          "transition-all duration-200 ease-out cursor-pointer",
          "hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]",
          "shadow-[var(--shadow-sm)]",
        ].join(" "),
        !hoverable && "shadow-[var(--shadow-sm)]",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";

/* ─────────────────────────────────────────────
   CardHeader — Contains program name + tagline
───────────────────────────────────────────────── */

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-8 pb-0 lg:p-8 lg:pb-0", className)}
      {...props}
    />
  )
);

CardHeader.displayName = "CardHeader";

/* ─────────────────────────────────────────────
   CardContent — Main body of the card
───────────────────────────────────────────────── */

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-8 pt-6 lg:p-8 lg:pt-6", className)}
      {...props}
    />
  )
);

CardContent.displayName = "CardContent";

/* ─────────────────────────────────────────────
   CardFooter — CTA area at the bottom of a card
───────────────────────────────────────────────── */

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "p-8 pt-0 lg:p-8 lg:pt-0",
        "border-t border-[rgb(10_22_40_/_6%)] mt-6 pt-6",
        className
      )}
      {...props}
    />
  )
);

CardFooter.displayName = "CardFooter";

/* ─────────────────────────────────────────────
   Feature List — Bullet list inside program cards
   Uses a gold dash instead of checkmarks
───────────────────────────────────────────────── */

export interface FeatureListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: string[];
}

const FeatureList = React.forwardRef<HTMLUListElement, FeatureListProps>(
  ({ items, className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("space-y-2", className)}
      {...props}
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="shrink-0 mt-[0.4rem] w-4 h-px bg-[var(--color-gold-500)]"
          />
          <span className="font-body text-[var(--text-body-m)] text-[var(--color-text-primary)] leading-[var(--leading-relaxed)]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
);

FeatureList.displayName = "FeatureList";

export { Card, CardHeader, CardContent, CardFooter, FeatureList };
