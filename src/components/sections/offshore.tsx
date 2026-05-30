"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container, Stack } from "@/components/ui/container";
import { DisplayL, Body, Label } from "@/components/ui/typography";
import { WhatsAppButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const GRID_PHOTOS = [
  { src: "/offshore-plataforma.jpg", label: "Offshore platform" },
  { src: "/offshore-petroleiro.jpg", label: "Oil tanker" },
  { src: "/offshore-seguranca.jpg", label: "Operational safety" },
  { src: "/offshore-multinacionais.jpg", label: "Multinational crew" },
];

const VOCAB = [
  {
    term: "PTW",
    definition: "Permit to Work — work authorization with international supervisors",
  },
  {
    term: "Toolbox talk",
    definition: "Pre-operational safety briefings in technical English",
  },
  {
    term: "JSA / SWA",
    definition: "Job Safety Analysis and Stop Work Authority — risk analysis and communication",
  },
  {
    term: "HSE",
    definition: "Health, Safety & Environment — communication in critical situations",
  },
  {
    term: "PPE / EPIs",
    definition: "Protective equipment — terminology and instructions in English",
  },
  {
    term: "Shift handover",
    definition: "Precision shift handovers — night reports and operational history",
  },
  {
    term: "Radio comms",
    definition: "Radio communication procedures with international crews",
  },
  {
    term: "Muster drill",
    definition: "Emergency and evacuation drills with multinational teams",
  },
  {
    term: "SIMOPS / FPSO",
    definition: "Simultaneous Operations — coordination on complex offshore units",
  },
];

export function OffshoreSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section
      background="navy"
      contained={false}
      className="text-[var(--color-text-inverse)]"
      id="offshore"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left: narrative */}
          <div className="lg:col-span-5">
            <Reveal>
              <Stack gap="lg">
                <DisplayL className="text-[var(--color-white)]">
                  English to operate with confidence.
                  <span className="block">On any international team.</span>
                </DisplayL>

                <Body size="lg" className="text-[var(--color-text-muted)]">
                  Offshore, a communication failure isn't an embarrassing moment.
                  It's a potential safety incident. The English for Offshore
                  program was built specifically for that context.
                </Body>

                <Body className="text-[var(--color-text-muted)]">
                  Adapted for 14/14, 21/21, and 28/28 rotations. Intensive sessions
                  during onshore periods, structured practice during rotations.
                  WhatsApp support when the connection allows.
                </Body>

                <div className="grid grid-cols-2 gap-4 py-2">
                  <StatItem value="Operational" label="focus on field communication, not grammar" />
                  <StatItem value="14/21/28" label="rotation schedules supported by the program" />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <WhatsAppButton
                    segment="offshore"
                    source="offshore_section"
                    label="See the offshore program"
                    size="lg"
                    className="w-full sm:w-auto"
                  />
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="inline-flex items-center gap-2 font-body font-medium text-white/60 hover:text-white transition-colors text-[0.9375rem] h-14 px-2"
                  >
                    {expanded ? "Show less" : "Learn more about the teaching model"}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Stack>
            </Reveal>
          </div>

          {/* Right: 2×2 photo grid — wider, closer to edge */}
          <div className="hidden lg:block lg:col-span-7 lg:col-start-6 lg:-mr-6">
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {GRID_PHOTOS.map((photo, i) => (
                  <div
                    key={photo.src}
                    className="group relative rounded-2xl overflow-hidden bg-white/10 aspect-[4/3] cursor-pointer"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    {/* Zoom wrapper — dramatic scale on hover */}
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.40]">
                      <Image
                        src={photo.src}
                        alt={photo.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 0px, 380px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2444]/70 via-[#0F2444]/10 to-transparent" />
                    </div>
                    {/* Label — glassmorphism pill, stays fixed */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end pointer-events-none">
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-black/30 backdrop-blur-md border border-white/10 font-body text-[0.5625rem] font-semibold uppercase tracking-[0.12em] text-white/80 leading-tight">
                        {photo.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

        </div>

        {/* Expandable vocab list — glassmorphism cards */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-10 pt-10 border-t border-white/10">
                <Label as="p" className="mb-6">Vocabulary you will master</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {VOCAB.map((item) => (
                    <div
                      key={item.term}
                      className="group flex flex-col gap-2 px-5 py-4 rounded-xl bg-white/[0.05] border border-white/[0.10] hover:bg-white/[0.10] hover:border-white/[0.20] transition-all duration-200 cursor-default"
                    >
                      <span className="font-body font-bold text-white text-[0.9375rem] leading-snug group-hover:text-[var(--color-gold-400)] transition-colors duration-200">
                        {item.term}
                      </span>
                      <span className="font-body text-[0.8125rem] text-white/55 leading-snug">
                        {item.definition}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="space-y-1">
      <p className="font-display text-[1.875rem] leading-none text-[var(--color-white)]">
        {value}
      </p>
      <p className="font-body text-[0.8125rem] text-[var(--color-text-muted)] leading-snug">
        {label}
      </p>
    </div>
  );
}
