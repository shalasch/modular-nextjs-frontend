import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/layout/nav";
import { SiteFooter } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Materials — Language School Library",
  description:
    "Supplementary material developed for professionals in international selection processes.",
};

/* ── Product data ── */
const MATERIAL = {
  badge: "OFFSHORE SERIES · VOLUME 1",
  title: "Complete Offshore Interview Preparation Guide",
  subtitle:
    "Supplementary material developed for professionals who need to communicate clearly in real offshore interviews.",
  description: [
    "Developed for professionals preparing for international selection processes.",
    "The material brings together answer structures, operational vocabulary, real examples, and practical simulations used in multinational interviews.",
  ],
  topics: [
    "Real offshore interview questions",
    "Professional answer structures",
    "Applied operational vocabulary",
    "Practical simulations",
    "International professional communication",
    "Preparation for multinational companies",
  ],
  cta: "Get the material",
  kiwifyUrl: site.checkout.manualOffshore,
  note: "Supplementary material used in the Language School methodology.",
};

const LIBRARY = [
  {
    id: "professional-communication",
    title: "Professional Communication in English",
    subtitle: "Meetings, emails, presentations, and corporate communication.",
    status: "development" as const,
  },
  {
    id: "phrasal-verbs",
    title: "Phrasal Verbs for Work",
    subtitle:
      "The most commonly used phrasal verbs in international professional environments.",
    status: "soon" as const,
  },
  {
    id: "radio-communication",
    title: "Radio Communication Essentials",
    subtitle:
      "Phrases and structures used in operational and offshore communication.",
    status: "soon" as const,
  },
];

export default function MateriaisPage() {
  return (
    <>
      <SiteNav />

      <main id="main-content" tabIndex={-1}>

        {/* ── Hero ── */}
        <Section
          background="navy"
          contained={false}
          className="relative overflow-hidden pt-32 lg:pt-40"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(21,85,196,0.22) 0%, transparent 65%)",
            }}
          />
          <Container className="relative z-10">
            <div className="max-w-2xl">
              <p className="font-body text-[0.625rem] font-bold text-[var(--color-red-brand)] uppercase tracking-[0.22em] mb-4">
                Language School Library
              </p>
              <h1
                className="font-body font-bold text-white leading-[1.1] tracking-[-0.025em] mb-6"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
              >
                Supplementary material for those who need real results.
              </h1>
              <p className="font-body text-[1.0625rem] text-white/65 leading-relaxed max-w-prose">
                Developed by the Language School team focused on real professional
                contexts — offshore, interviews, and international communication.
              </p>
            </div>
          </Container>
        </Section>

        {/* ── Material disponível ── */}
        <Section background="white" contained={false}>
          <Container>

            <div className="mb-20">
              <p className="font-body text-[0.625rem] font-bold text-[var(--color-red-brand)] uppercase tracking-[0.18em] mb-12">
                Available now
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                {/* Capa */}
                <div className="lg:col-span-4">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white shadow-[0_24px_64px_rgba(15,36,68,0.13)]">
                    <Image
                      src="/capa-manual-offshore.png"
                      alt="Cover — Complete Offshore Interview Preparation Guide"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-7 lg:col-start-6 space-y-8">

                  <div>
                    <span className="inline-block mb-4 font-body text-[0.5625rem] font-bold text-[var(--color-red-brand)] uppercase tracking-[0.22em]">
                      {MATERIAL.badge}
                    </span>
                    <h2
                      className="font-body font-bold text-[var(--color-text-primary)] leading-[1.15] tracking-[-0.025em]"
                      style={{ fontSize: "clamp(1.625rem, 2.8vw, 2.25rem)" }}
                    >
                      {MATERIAL.title}
                    </h2>
                    <p className="mt-3 font-body text-[1rem] text-[var(--color-text-secondary)] leading-relaxed">
                      {MATERIAL.subtitle}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {MATERIAL.description.map((para, i) => (
                      <p
                        key={i}
                        className="font-body text-[0.9375rem] text-[var(--color-text-secondary)] leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <p className="font-body text-[0.625rem] font-bold text-[var(--color-text-primary)] uppercase tracking-[0.14em]">
                      What you will find
                    </p>
                    <ul className="space-y-3.5">
                      {MATERIAL.topics.map((t) => (
                        <li key={t} className="flex items-start gap-3.5">
                          <span
                            className="mt-[0.42rem] w-[5px] h-[5px] rounded-full bg-[var(--color-red-brand)] shrink-0"
                            aria-hidden="true"
                          />
                          <span className="font-body text-[0.9375rem] text-[var(--color-text-secondary)] leading-snug">
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 space-y-3">
                    <a
                      href={MATERIAL.kiwifyUrl}
                      className={cn(
                        buttonVariants({ variant: "primary", size: "lg" })
                      )}
                    >
                      {MATERIAL.cta}
                    </a>
                    <p className="font-body text-[0.8125rem] text-[var(--color-text-muted)]">
                      {MATERIAL.note}
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* ── Biblioteca ── */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <p className="font-body text-[0.625rem] font-bold text-[var(--color-text-muted)] uppercase tracking-[0.18em] whitespace-nowrap">
                  Upcoming supplementary materials
                </p>
                <div
                  className="flex-1 h-px bg-[rgb(10_22_40_/_8%)]"
                  aria-hidden="true"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {LIBRARY.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-[rgb(10_22_40_/_7%)] bg-[var(--color-cream-100)] p-7 space-y-4"
                  >
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[var(--color-navy-900)]/6 font-body text-[0.5rem] font-bold text-[var(--color-text-muted)] uppercase tracking-[0.14em]">
                      {item.status === "development"
                        ? "In Development"
                        : "Coming Soon"}
                    </span>
                    <h3 className="font-body font-bold text-[var(--color-text-primary)] text-[0.9375rem] leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body text-[0.875rem] text-[var(--color-text-secondary)] leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </Container>
        </Section>

        {/* ── Bottom CTA ── */}
        <Section background="navy" contained={false} className="text-white">
          <Container>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <h2 className="font-body font-bold text-white text-[1.625rem] leading-snug tracking-[-0.02em]">
                  Want to be notified when new materials are released?
                </h2>
                <p className="font-body text-[0.9375rem] text-white/60">
                  Reach out and get on the launch list.
                </p>
              </div>
              <WhatsAppButton
                segment="generic"
                source="materiais_cta"
                label="Join the launch list"
                size="lg"
                className="shrink-0"
              />
            </div>
          </Container>
        </Section>

      </main>

      <SiteFooter />
    </>
  );
}
