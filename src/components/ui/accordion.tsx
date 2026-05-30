"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Accordion — FAQ component
   Design spec from DESIGN_SYSTEM.md:
   - Border top: 1px solid navy 12% opacity
   - Padding: 20px 0
   - Chevron rotates 180° when open
   - Answer: slate color, 1.65 line-height
   - Full-width tap target on mobile (critical)
───────────────────────────────────────────────── */

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-t border-[rgb(10_22_40_/_12%)]",
      "last:border-b",
      className
    )}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between",
        "w-full text-left",  /* full-width tap target — MCP compliance */
        "py-5",              /* 20px vertical per spec */
        "font-body font-medium text-[var(--text-body-m)]",
        "text-[var(--color-navy-900)]",
        "cursor-pointer",
        "transition-colors duration-150",
        "hover:text-[var(--color-text-secondary)]",
        "[&[data-state=open]>svg]:rotate-180",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-500)] focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className="h-4 w-4 shrink-0 text-[var(--color-text-secondary)] transition-transform duration-220 ease-out"
        aria-hidden="true"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden",
      "data-[state=open]:animate-accordion-down",
      "data-[state=closed]:animate-accordion-up",
      className
    )}
    {...props}
  >
    <div
      className={cn(
        "pb-5 pt-0",
        "font-body text-[var(--text-body-m)]",
        "text-[var(--color-text-secondary)]",
        "leading-[var(--leading-relaxed)]",
        "max-w-[var(--container-md)]"
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
