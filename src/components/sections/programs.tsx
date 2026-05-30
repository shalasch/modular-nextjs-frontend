import * as React from "react";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardFooter, FeatureList } from "@/components/ui/card";
import { H3, Body } from "@/components/ui/typography";
import { WhatsAppButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import type { WhatsAppSegment } from "@/lib/whatsapp";

/* ── Program card visual headers — cinematic photo areas ──
   Replace the src with real photo paths when available, e.g.:
   src="/photos/offshore.jpg"
   ── */

function OffshoreHeader() {
  return (
    <div
      className="group relative w-full h-56 shrink-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Photo with hover zoom */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.05]">
        <Image
          src="/program-offshore.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      {/* Cinematic gradient — dark bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2444]/80 via-[#0F2444]/20 to-transparent" />
      {/* Subtle dark top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2444]/30 to-transparent" />
      {/* Category chip */}
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/15 border border-white/20 font-body text-[0.5625rem] font-bold text-white uppercase tracking-[0.14em]">
          Offshore
        </span>
      </div>
      {/* Bottom technical label */}
      <div className="absolute bottom-4 left-4 right-4">
        <p className="font-body font-semibold text-[0.5625rem] uppercase tracking-[0.14em] text-white/55">
          PTW · JSA · HSE · RADIO COMMS · TOOLBOX
        </p>
      </div>
    </div>
  );
}

function InterviewsHeader() {
  return (
    <div
      className="group relative w-full h-56 shrink-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.05]">
        <Image
          src="/program-interviews.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2444]/75 via-[#0F2444]/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2444]/25 to-transparent" />
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/15 border border-white/20 font-body text-[0.5625rem] font-bold text-white uppercase tracking-[0.14em]">
          Interviews
        </span>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <p className="font-body font-semibold text-[0.5625rem] uppercase tracking-[0.14em] text-white/55">
          MULTINATIONAL · OFFSHORE · CIVIL SERVICE
        </p>
      </div>
    </div>
  );
}

function CommunicationHeader() {
  return (
    <div
      className="group relative w-full h-56 shrink-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.05]">
        <Image
          src="/program-communication.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2444]/75 via-[#0F2444]/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2444]/25 to-transparent" />
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/15 border border-white/20 font-body text-[0.5625rem] font-bold text-white uppercase tracking-[0.14em]">
          Communication
        </span>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <p className="font-body font-semibold text-[0.5625rem] uppercase tracking-[0.14em] text-white/55">
          MEETINGS · PRESENTATIONS · NEGOTIATIONS
        </p>
      </div>
    </div>
  );
}

const CARD_HEADERS: Record<string, () => React.ReactElement> = {
  offshore: OffshoreHeader,
  interviews: InterviewsHeader,
  communication: CommunicationHeader,
};

interface Program {
  id: string;
  segment: WhatsAppSegment;
  badge: string;
  name: string;
  for: string;
  items: string[];
  outcome: string;
  ctaLabel: string;
}

const PROGRAMS: Program[] = [
  {
    id: "offshore",
    segment: "offshore",
    badge: "Offshore",
    name: "English for Offshore",
    for: "For oil & gas, maritime, and industrial professionals who need to communicate clearly in international operational environments.",
    items: [
      "PTW, JSA, SWA, and HSE procedures in operational English",
      "Toolbox talks, shift handovers, and radio communications",
      "PPE, technical terminology, and safety instructions in English",
      "Emergencies, drills, and musters with multinational crews",
      "Preparation for rotations, assessments, and international contracts",
    ],
    outcome: "You communicate with confidence in any international operation.",
    ctaLabel: "Talk about the offshore program",
  },
  {
    id: "interviews",
    segment: "interviews",
    badge: "Interviews",
    name: "English for Interviews",
    for: "For professionals who need intensive preparation for English-language interviews — at multinationals, offshore positions, civil service exams, or international opportunities.",
    items: [
      "Interview simulations for multinationals and offshore positions",
      "Structured answers for the most demanded market formats",
      "Pronunciation, fluency, and professional English delivery",
      "Preparation for civil service exams and international career opportunities",
      "Intensive format: 4 to 8 weeks, adapted to your timeline",
    ],
    outcome: "You walk into the interview knowing what to say — and how to say it.",
    ctaLabel: "Interview preparation",
  },
  {
    id: "communication",
    segment: "communication",
    badge: "Professional Communication",
    name: "English for Professional Communication",
    for: "For professionals who use English day-to-day — meetings, emails, presentations, negotiations — and for those who need confidence in international environments.",
    items: [
      "Meetings, presentations, and negotiations in English",
      "Emails and professional written communication",
      "Vocabulary specific to your industry",
      "Communication abroad — travel, exchange, and global environments",
      "Ongoing program of 3 to 6 months",
    ],
    outcome: "English stops being a barrier and becomes a competitive advantage in your career.",
    ctaLabel: "Talk about professional communication",
  },
];

export function ProgramsSection() {
  return (
    <Section background="white" contained={false} id="programas">
      <Container>
        <SectionHeader
          overline="Programs"
          headline="The right program for your context."
          lead="Three specialized programs. Each designed for a specific moment in your career."
          narrow
          headlineClassName="!text-[clamp(2rem,3.2vw,2.75rem)]"
        />

        <RevealGroup className="grid grid-cols-1 lg:grid-cols-3 gap-6" stagger={0.1}>
          {PROGRAMS.map((p) => (
            <RevealItem key={p.id}>
              <Card hoverable className="h-full flex flex-col overflow-hidden">
                {/* Program-specific visual header */}
                {React.createElement(CARD_HEADERS[p.id])}

                <CardContent className="flex-1 space-y-4">
                  <Badge variant="tag">{p.badge}</Badge>
                  <H3>{p.name}</H3>
                  <Body size="sm" muted>{p.for}</Body>
                  <FeatureList items={p.items} />
                  <p className="font-body font-medium text-[var(--text-body-s)] text-[var(--color-text-primary)] leading-snug pt-2">
                    {p.outcome}
                  </p>
                </CardContent>
                <CardFooter>
                  <WhatsAppButton
                    segment={p.segment}
                    source={`programs_${p.id}`}
                    label={p.ctaLabel}
                    size="full"
                    variant="navy"
                    showIcon={false}
                    className="text-sm"
                  />
                </CardFooter>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
