import * as React from "react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Container
   The primary layout constraint for all content.
   Max-width capped at 1440px, with responsive
   horizontal padding (desktop → tablet → mobile).
───────────────────────────────────────────────── */

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tighten the container for prose-heavy content */
  narrow?: boolean;
  /** Remove all horizontal padding (use for full-bleed inner content) */
  flush?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, narrow, flush, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-full mx-auto",
        !flush && "container-padding",
        narrow
          ? "max-w-[var(--container-lg)]"   /* 1024px */
          : "max-w-[var(--container-2xl)]", /* 1440px */
        className
      )}
      {...props}
    />
  )
);

Container.displayName = "Container";

/* ─────────────────────────────────────────────
   Grid
   Responsive grid system built on CSS Grid.
   Defaults to a 12-col desktop / 4-col mobile grid.
───────────────────────────────────────────────── */

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Column gap — defaults to standard section gap */
  gap?: "sm" | "md" | "lg";
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, gap = "md", ...props }, ref) => {
    const gapClass = {
      sm: "gap-4",
      md: "gap-6 lg:gap-8",
      lg: "gap-8 lg:gap-12",
    }[gap];

    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-4 lg:grid-cols-12",
          gapClass,
          className
        )}
        {...props}
      />
    );
  }
);

Grid.displayName = "Grid";

/* ─────────────────────────────────────────────
   GridCol
   Column span helper. Defaults to full-width.
───────────────────────────────────────────────── */

export interface GridColProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Span on mobile (4-col grid) */
  sm?: number;
  /** Span on desktop (12-col grid) */
  lg?: number;
  /** Start column on desktop */
  lgStart?: number;
}

const GridCol = React.forwardRef<HTMLDivElement, GridColProps>(
  ({ className, sm = 4, lg, lgStart, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        `col-span-${sm}`,
        lg && `lg:col-span-${lg}`,
        lgStart && `lg:col-start-${lgStart}`,
        className
      )}
      {...props}
    />
  )
);

GridCol.displayName = "GridCol";

/* ─────────────────────────────────────────────
   Stack
   Vertical flex layout with consistent spacing.
───────────────────────────────────────────────── */

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, gap = "md", align = "start", ...props }, ref) => {
    const gapClass = {
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    }[gap];

    const alignClass = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    }[align];

    return (
      <div
        ref={ref}
        className={cn("flex flex-col", gapClass, alignClass, className)}
        {...props}
      />
    );
  }
);

Stack.displayName = "Stack";

export { Container, Grid, GridCol, Stack };
