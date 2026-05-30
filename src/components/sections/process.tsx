"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

/* Button height (h-12 = 48px) + gap between buttons (gap-1.5 = 6px) + container padding (p-2 = 8px) */
const BTN_H = 48;
const GAP   = 6;
const PAD   = 8;

const STEPS = [
  {
    n: 1,
    title: "Initial conversation via WhatsApp",
    body: "We understand your professional context, your current English level, and identify which program makes the most sense for your situation.",
  },
  {
    n: 2,
    title: "Communication assessment",
    body: "A live session pinpoints exactly where you are and what needs to be developed. No formal tests — a real conversation.",
  },
  {
    n: 3,
    title: "Personalized program",
    body: "We build a plan specific to your context, your pace, and your goal. Nothing generic — everything aligned with what you'll actually need to use.",
  },
  {
    n: 4,
    title: "Live sessions on Zoom",
    body: "One-on-one or small group sessions (4 people max), at times that work for you — including offshore rotation schedules.",
  },
  {
    n: 5,
    title: "Ongoing WhatsApp support",
    body: "Questions between sessions, text reviews, and vocabulary practice. Support happens where English is needed.",
  },
];

export function ProcessSection() {
  const [active, setActive] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);

  /* Detect desktop (≥ md breakpoint = 768px) to enable vertical alignment */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const current = STEPS.find((s) => s.n === active)!;

  /* Panel top offset = container padding + (index × step height) */
  const panelOffset = isDesktop ? PAD + (active - 1) * (BTN_H + GAP) : 0;

  return (
    <Section background="white" contained={false} id="como-funciona">
      <Container>
        <SectionHeader
          overline="How it works"
          headline="From first contact to first result."
          headlineClassName="!text-[clamp(2rem,3.2vw,2.75rem)]"
          narrow
        />
        <p className="font-body text-[var(--text-body-l)] text-[var(--color-text-secondary)] leading-relaxed -mt-6 mb-12 max-w-prose">
          A simple process, personalized from the very first conversation.
        </p>

        <Reveal>
          <div className="flex flex-col md:flex-row gap-4 items-start">

            {/* ── Retângulo lateral de números ── */}
            <div className="bg-[var(--color-navy-900)] rounded-2xl p-2 flex flex-row md:flex-col gap-1.5 shrink-0">
              {STEPS.map((step) => (
                <button
                  key={step.n}
                  type="button"
                  onMouseEnter={() => setActive(step.n)}
                  onClick={() => setActive(step.n)}
                  aria-pressed={active === step.n}
                  className={cn(
                    "flex-1 md:flex-none md:w-12 h-11 md:h-12 rounded-xl font-body font-bold text-[0.9375rem] transition-all duration-200",
                    active === step.n
                      ? "bg-[var(--color-red-brand)] text-white shadow-[0_2px_12px_rgba(212,43,43,0.35)]"
                      : "text-white/45 hover:text-white hover:bg-white/[0.12]"
                  )}
                >
                  {step.n}
                </button>
              ))}
            </div>

            {/* ── Painel de conteúdo — desliza verticalmente para alinhar com o número ativo ── */}
            <motion.div
              className="rounded-2xl border border-[rgb(10_22_40_/_8%)] bg-[var(--color-cream-100)] p-6 lg:p-8 w-full max-w-lg"
              animate={{ marginTop: panelOffset }}
              transition={{ type: "spring", stiffness: 380, damping: 38, mass: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="space-y-3"
                >
                  <span className="font-body text-[0.6875rem] font-bold text-[var(--color-red-brand)] uppercase tracking-[0.14em]">
                    {String(active).padStart(2, "0")}
                  </span>
                  <h4 className="font-body font-bold text-[var(--color-text-primary)] text-[1.125rem] leading-snug">
                    {current.title}
                  </h4>
                  <p className="font-body text-[0.9rem] text-[var(--color-text-secondary)] leading-relaxed">
                    {current.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        </Reveal>

        <div className="mt-14 flex flex-col items-center text-center gap-4">
          <WhatsAppButton
            segment="trial-lesson"
            source="process_section"
            label="Schedule a free assessment"
            size="lg"
            className="w-full sm:w-auto sm:px-10"
          />
          <p className="font-body text-[var(--text-body-s)] text-[var(--color-text-muted)]">
            Trial lesson included — no commitment before you decide.
          </p>
        </div>
      </Container>
    </Section>
  );
}
