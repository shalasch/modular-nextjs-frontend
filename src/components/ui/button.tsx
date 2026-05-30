"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { MessageCircle, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppURL, type WhatsAppSegment } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { buttonVariants } from "@/components/ui/button-variants";

export { buttonVariants };

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

export { Button, WhatsAppButton, ScrollCTA };
