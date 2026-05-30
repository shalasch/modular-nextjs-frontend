"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { MessageCircle, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppURL, type WhatsAppSegment } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

/* ─────────────────────────────────────────────
   Button Variants — Class Variance Authority
───────────────────────────────────────────────── */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap select-none",
    "font-body font-semibold",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-500)] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer",
  ].join(" "),
  {
    variants: {
      variant: {
        /**
         * Primary — red fill, white text. Used for main WhatsApp CTA.
         */
        primary: [
          "bg-[var(--color-red-brand)] text-white",
          "hover:bg-[var(--color-red-700)]",
          "hover:shadow-[0_4px_20px_rgb(212_43_43_/_25%)]",
          "active:bg-[var(--color-red-900)]",
        ].join(" "),

        /**
         * Secondary — outlined, navy. Used for exploratory actions
         * (scroll anchors, learn more).
         */
        secondary: [
          "bg-transparent border border-[var(--color-navy-900)] text-[var(--color-navy-900)]",
          "hover:bg-[var(--color-navy-900)] hover:text-[var(--color-white)]",
        ].join(" "),

        /**
         * Ghost gold — transparent with gold border. Used on navy backgrounds.
         */
        ghost: [
          "bg-transparent border border-[var(--color-gold-500)] text-[var(--color-gold-500)]",
          "hover:bg-[var(--color-gold-500)] hover:text-white",
        ].join(" "),

        /**
         * Inverse — white on navy. Used inside navy sections for secondary actions.
         */
        inverse: [
          "bg-transparent border border-[var(--color-white)] text-[var(--color-white)]",
          "hover:bg-[var(--color-white)] hover:text-[var(--color-navy-900)]",
        ].join(" "),

        /**
         * Navy — filled navy. Used for strong actions on light backgrounds.
         */
        navy: [
          "bg-[var(--color-navy-900)] text-[var(--color-white)]",
          "hover:bg-[var(--color-navy-800)]",
        ].join(" "),
      },
      size: {
        sm: "h-10 px-5 text-sm rounded-[var(--radius-sm)]",
        md: "h-[52px] px-8 text-base rounded-[var(--radius-sm)]",
        lg: "h-14 px-10 text-base rounded-[var(--radius-sm)]",
        full: "h-[52px] w-full px-8 text-base rounded-[var(--radius-sm)]",
        icon: "h-[52px] w-[52px] rounded-[var(--radius-sm)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

/* ─────────────────────────────────────────────
   Button Props
───────────────────────────────────────────────── */

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

/* ─────────────────────────────────────────────
   Button Component
───────────────────────────────────────────────── */

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      iconLeft,
      iconRight,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          iconLeft
        )}
        {children}
        {!loading && iconRight}
      </Comp>
    );
  }
);

Button.displayName = "Button";

/* ─────────────────────────────────────────────
   WhatsApp Button — Primary conversion CTA
   Always renders as a plain <a> so it works
   without JavaScript (MCP10 compliance).
───────────────────────────────────────────────── */

export interface WhatsAppButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  segment?: WhatsAppSegment;
  source?: string;
  label?: string;
  size?: VariantProps<typeof buttonVariants>["size"];
  variant?: VariantProps<typeof buttonVariants>["variant"];
  showIcon?: boolean;
  iconRight?: React.ReactNode;
}

const WhatsAppButton = React.forwardRef<
  HTMLAnchorElement,
  WhatsAppButtonProps
>(
  (
    {
      segment = "generic",
      source = "unknown",
      label = "Agendar uma conversa",
      size = "md",
      variant = "primary",
      showIcon = true,
      iconRight,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const href = buildWhatsAppURL(segment);

    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
      trackWhatsAppClick(segment, source);
      onClick?.(e);
    }

    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant, size }), className)}
        onClick={handleClick}
        aria-label={`${label} via WhatsApp`}
        {...props}
      >
        {showIcon && (
          <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
        )}
        <span>{label}</span>
        {iconRight}
      </a>
    );
  }
);

WhatsAppButton.displayName = "WhatsAppButton";

/* ─────────────────────────────────────────────
   Scroll CTA — secondary action that anchors
   to a section within the page
───────────────────────────────────────────────── */

export interface ScrollCTAProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  targetId: string;
  label?: string;
  size?: VariantProps<typeof buttonVariants>["size"];
}

const ScrollCTA = React.forwardRef<HTMLAnchorElement, ScrollCTAProps>(
  (
    {
      targetId,
      label = "Conhecer os programas",
      size = "md",
      className,
      ...props
    },
    ref
  ) => (
    <a
      ref={ref}
      href={`#${targetId}`}
      className={cn(
        buttonVariants({ variant: "secondary", size }),
        className
      )}
      {...props}
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  )
);

ScrollCTA.displayName = "ScrollCTA";

/* ─────────────────────────────────────────────
   Exports
───────────────────────────────────────────────── */

export { Button, WhatsAppButton, ScrollCTA, buttonVariants };
