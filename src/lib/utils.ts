import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely — handles conflicts and conditional classes */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number with thousands separator for PT-BR */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("pt-BR").format(n);
}

/** Encode a string for use in a URL (WhatsApp messages, etc.) */
export function encodeMessage(text: string): string {
  return encodeURIComponent(text);
}

/** Returns true if code is running in the browser */
export const isBrowser = typeof window !== "undefined";
