import { cva } from "class-variance-authority";

export const buttonVariants = cva(
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
        primary: [
          "bg-[var(--color-red-brand)] text-white",
          "hover:bg-[var(--color-red-700)]",
          "hover:shadow-[0_4px_20px_rgb(212_43_43_/_25%)]",
          "active:bg-[var(--color-red-900)]",
        ].join(" "),
        secondary: [
          "bg-transparent border border-[var(--color-navy-900)] text-[var(--color-navy-900)]",
          "hover:bg-[var(--color-navy-900)] hover:text-[var(--color-white)]",
        ].join(" "),
        ghost: [
          "bg-transparent border border-[var(--color-gold-500)] text-[var(--color-gold-500)]",
          "hover:bg-[var(--color-gold-500)] hover:text-white",
        ].join(" "),
        inverse: [
          "bg-transparent border border-[var(--color-white)] text-[var(--color-white)]",
          "hover:bg-[var(--color-white)] hover:text-[var(--color-navy-900)]",
        ].join(" "),
        navy: [
          "bg-[var(--color-navy-900)] text-[var(--color-white)]",
          "hover:bg-[var(--color-navy-800)]",
        ].join(" "),
      },
      size: {
        sm:   "h-10 px-5 text-sm rounded-[var(--radius-sm)]",
        md:   "h-[52px] px-8 text-base rounded-[var(--radius-sm)]",
        lg:   "h-14 px-10 text-base rounded-[var(--radius-sm)]",
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
