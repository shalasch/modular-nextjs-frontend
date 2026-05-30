import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Badge / Overline Label
   Used to set context above headlines.
   Example: "COMUNICAÇÃO PROFISSIONAL EM INGLÊS"

   Two roles:
   - overline: above section headlines (uppercase, spaced)
   - tag: small contextual tags on cards
───────────────────────────────────────────────── */

const badgeVariants = cva(
  "inline-flex items-center font-body font-semibold",
  {
    variants: {
      variant: {
        /* Gold overline — primary use case */
        overline: [
          "text-[var(--color-gold-500)]",
          "text-[var(--text-label)]",
          "uppercase tracking-[var(--tracking-wider)]",
        ].join(" "),

        /* Slate overline — for sections on dark backgrounds where gold reads too bright */
        overline_muted: [
          "text-[var(--color-text-muted)]",
          "text-[var(--text-label)]",
          "uppercase tracking-[var(--tracking-wider)]",
        ].join(" "),

        /* Pill tag — for program type labels, blog categories */
        tag: [
          "bg-[var(--color-gold-100)] text-[var(--color-navy-900)]",
          "text-[var(--text-label)] rounded-full",
          "px-3 py-1",
        ].join(" "),

        /* Navy tag — for use on light backgrounds */
        tag_navy: [
          "bg-[var(--color-navy-900)] text-[var(--color-white)]",
          "text-[var(--text-label)] rounded-full",
          "px-3 py-1",
        ].join(" "),

        /* Cream tag — subtle, on white backgrounds */
        tag_cream: [
          "bg-[var(--color-cream-100)] text-[var(--color-text-secondary)]",
          "text-[var(--text-label)] rounded-full border border-[var(--color-cream-100)]",
          "px-3 py-1",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "overline",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  as?: React.ElementType;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ as: Comp = "span", variant, className, ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
