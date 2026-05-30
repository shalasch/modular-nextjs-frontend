"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container, Stack } from "@/components/ui/container";
import { Body } from "@/components/ui/typography";
import { WhatsAppButton, ScrollCTA } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const CHIPS = [
  "Live sessions",
  "Personalized",
  "Professional context",
  "WhatsApp support",
];

const SLIDES = [
  {
    src: "/hero-1.png",
    alt: "Offshore team in safety gear communicating in English at sea",
  },
  {
    src: "/hero-2.jpg",
    alt: "Live English class with instructor and student via video call",
  },
  {
    src: "/hero-3.jpg",
    alt: "Aerial view of aircraft wing — international travel and global communication",
  },
  {
    src: "/hero-4.jpg",
    alt: "Offshore oil platform seen from above — international work environment",
  },
  {
    src: "/hero-5.jpg",
    alt: "Direction sign with international destinations — Vancouver, London, Sydney",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 3000);
  }

  function resetTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  }

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function goTo(i: number) {
    setCurrent(i);
    resetTimer();
  }

  return (
    <Section
      background="white"
      contained={false}
      noTopPadding
      noBottomPadding
      className="relative min-h-[90dvh] flex flex-col justify-center pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
    >
      {/* Subtle dot texture */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none dot-grid opacity-30" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left: headline + CTAs */}
          <div className="lg:col-span-6">
            <Reveal>
              <Stack gap="lg">
                <p className="font-body font-semibold tracking-[0.12em] uppercase text-[var(--color-text-secondary)] text-[0.6875rem]">
                  Professional English Communication
                </p>

                <h1
                  className="font-body font-bold text-[var(--color-navy-900)] leading-[1.05] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}
                >
                  Build your communication{" "}
                  <span className="block font-display italic font-normal text-[var(--color-red-brand)] tracking-[-0.02em]">
                    for real-world situations.
                  </span>
                </h1>

                <Body size="lg" className="text-[var(--color-text-secondary)] max-w-[48ch]">
                  Discover Language School and see how our methodology applies
                  to interviews, professional environments, offshore operations
                  and international communication.
                </Body>

                {/* Feature chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {CHIPS.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-sm border border-[rgb(10_22_40_/_10%)] shadow-[0_2px_8px_rgba(10,22,40,0.07)] font-body text-[0.8125rem] text-[var(--color-text-primary)] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(10,22,40,0.14)] hover:bg-[var(--color-navy-900)] hover:text-white hover:border-transparent cursor-default"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
                  <WhatsAppButton
                    segment="generic"
                    source="hero"
                    label="Talk to us"
                    size="lg"
                    className="w-full sm:w-auto"
                  />
                  <ScrollCTA
                    targetId="programas"
                    label="Explore programs"
                    size="lg"
                    className="w-full sm:w-auto"
                  />
                </div>
              </Stack>
            </Reveal>
          </div>

          {/* Right: cinematic photo carousel — desktop only */}
          <div className="hidden lg:block lg:col-span-5 lg:col-start-8">
            <Reveal delay={300}>
              <PhotoCarousel current={current} onDotClick={goTo} />
            </Reveal>
          </div>
        </div>

        {/* Credential bar */}
        <Reveal delay={200}>
          <div className="mt-16 lg:mt-20 pt-8 border-t border-[rgb(15_36_68_/_8%)]">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgb(15_36_68_/_8%)]">
              <CredentialItem
                value="80+"
                label="Professionals trained"
                detail="Offshore, interviews, international communication and real workplace situations."
              />
              <CredentialItem
                value="Live"
                label="Real-time classes"
                detail="Online sessions with interaction, communicative practice and personalized support."
              />
              <CredentialItem
                value="Custom"
                label="Applied English"
                detail="Offshore, interviews, travel, hospitality, corporate, professional communication and more."
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ── Cinematic Photo Carousel — fade + Ken Burns ── */
function PhotoCarousel({
  current,
  onDotClick,
}: {
  current: number;
  onDotClick: (i: number) => void;
}) {
  return (
    <div className="relative" style={{ height: 540 }}>
      <div className="relative h-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgb(15_36_68_/_18%)]">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[1100ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <div className={`absolute inset-0 ${i === current ? "ken-burns" : ""}`}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === current ? "w-7 bg-white" : "w-[7px] bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── CredentialItem — light background ── */
function CredentialItem({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="py-6 sm:py-0 sm:px-8 first:pl-0 last:pr-0 space-y-1">
      <p className="font-body font-bold text-[2rem] leading-none text-[var(--color-text-primary)]">
        {value}
      </p>
      <p className="font-body font-semibold text-[0.75rem] text-[var(--color-text-primary)] opacity-50 uppercase tracking-[0.08em]">
        {label}
      </p>
      <p className="font-body text-[0.8125rem] text-[var(--color-text-secondary)] leading-snug max-w-[240px]">
        {detail}
      </p>
    </div>
  );
}
