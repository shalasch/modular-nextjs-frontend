"use client";

import * as React from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/button";
import type { WhatsAppSegment } from "@/lib/whatsapp";

/* ─────────────────────────────────────────────
   StickyCtaBar
   Mobile-only sticky bottom CTA bar.
   Per MCP1 spec:
   - Always visible (appears immediately)
   - Full-width gold WhatsApp button
   - Respects iOS safe-area-inset-bottom
   - Hidden above lg breakpoint (desktop)
   - Hidden when mobile keyboard is open (input focused)
   - Never obscures interactive content
───────────────────────────────────────────────── */

export interface StickyCtaBarProps {
  segment?: WhatsAppSegment;
  source?: string;
  label?: string;
  /** Delay bar appearance until after hero section (in px scrolled) */
  showAfterScroll?: number;
}

export function StickyCtaBar({
  segment = "generic",
  source = "sticky_bar",
  label = "Agendar uma conversa",
  showAfterScroll = 0,
}: StickyCtaBarProps) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(showAfterScroll === 0);
  const prefersReduced = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (showAfterScroll > 0) {
      setVisible(y >= showAfterScroll);
    }
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="complementary"
          aria-label="CTA rápido"
          className={cn(
            "fixed bottom-0 left-0 right-0",
            "z-[var(--z-fixed)]",
            "lg:hidden", /* Desktop only sees nav CTA */
            "bg-[var(--color-white-pure)]",
            "border-t border-[rgb(10_22_40_/_8%)]",
            "shadow-[0_-4px_16px_rgb(10_22_40_/_8%)]",
            "px-4 pt-3",
            "pb-safe" /* iOS home indicator clearance */
          )}
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
        >
          <WhatsAppButton
            segment={segment}
            source={source}
            label={label}
            size="full"
            showIcon={true}
          />
          <p className="text-center text-[0.6875rem] text-[var(--color-text-muted)] mt-2 mb-1">
            Sem compromisso. Respondemos em até 2h.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StickyCtaBar;
