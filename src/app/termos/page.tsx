import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/layout/nav";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use — Language School",
  description:
    "Terms of use for Language School services, programs, and communication channels.",
};

const SECTIONS = [
  { n: "01", id: "apresentacao", title: "About Language School" },
  { n: "02", id: "funcionamento", title: "How sessions work" },
  { n: "03", id: "agendamentos", title: "Scheduling and rescheduling" },
  { n: "04", id: "pagamentos", title: "Payments" },
  { n: "05", id: "cancelamentos", title: "Cancellations" },
  { n: "06", id: "material", title: "Course materials" },
  { n: "07", id: "communication", title: "Communication and support" },
  { n: "08", id: "responsabilidade", title: "Limitation of liability" },
  { n: "09", id: "alteracoes", title: "Changes to terms" },
  { n: "10", id: "contato", title: "Contact" },
];

export default function TermosPage() {
  return (
    <>
      <SiteNav />

      <main id="main-content" tabIndex={-1}>

        {/* ── Hero ── */}
        <Section background="navy" contained={false} className="pt-32 lg:pt-40 pb-16">
          <Container>
            <div className="max-w-2xl">
              <p className="font-body text-[0.625rem] font-bold text-[var(--color-red-brand)] uppercase tracking-[0.22em] mb-4">
                Language School
              </p>
              <h1
                className="font-display text-white leading-[1.15] tracking-[-0.02em] mb-4"
                style={{ fontSize: "clamp(2.25rem,4.5vw,3.5rem)" }}
              >
                Terms of Use
              </h1>
              <p className="font-body text-[1rem] text-white/55 leading-relaxed">
                Terms of use for Language School services, programs, and
                communication channels.
              </p>
              <p className="mt-6 font-body text-[0.75rem] text-white/30 uppercase tracking-[0.12em]">
                Updated May 2025
              </p>
            </div>
          </Container>
        </Section>

        {/* ── Content ── */}
        <Section background="white" contained={false} className="py-16 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

              {/* Sticky sidebar nav */}
              <aside className="hidden lg:block lg:col-span-3">
                <nav className="sticky top-28 space-y-1" aria-label="Terms sections">
                  {SECTIONS.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-start gap-2.5 py-1.5 group"
                    >
                      <span className="font-body text-[0.625rem] font-bold text-[var(--color-red-brand)] uppercase tracking-[0.12em] mt-0.5 shrink-0">
                        {s.n}
                      </span>
                      <span className="font-body text-[0.8125rem] text-[var(--color-text-muted)] group-hover:text-[var(--color-navy-900)] transition-colors leading-snug">
                        {s.title}
                      </span>
                    </a>
                  ))}
                </nav>
              </aside>

              {/* Main content */}
              <article className="lg:col-span-8 lg:col-start-5 space-y-14">

                <LegalSection id="apresentacao" n="01" title="About Language School">
                  <p>
                    Language School offers English development programs focused on
                    practical communication, live online sessions, and personalized
                    follow-up.
                  </p>
                  <p>
                    By using our services, forms, or communication channels, the user
                    agrees to these Terms of Use.
                  </p>
                </LegalSection>

                <LegalSection id="funcionamento" n="02" title="How sessions work">
                  <p>
                    Sessions are conducted online, at times arranged in advance between
                    the student and Language School.
                  </p>
                  <p>
                    Students are responsible for having adequate internet access and the
                    necessary equipment to participate in sessions.
                  </p>
                </LegalSection>

                <LegalSection id="agendamentos" n="03" title="Scheduling and rescheduling">
                  <p>
                    Rescheduling requests should be made in advance whenever possible.
                  </p>
                  <p>
                    Make-up sessions are subject to availability and will be arranged
                    directly with the Language School team.
                  </p>
                </LegalSection>

                <LegalSection id="pagamentos" n="04" title="Payments">
                  <p>
                    Prices vary according to the program, frequency, and format chosen.
                  </p>
                  <p>
                    Investment information is presented during the initial conversation
                    and program alignment — before any financial commitment.
                  </p>
                </LegalSection>

                <LegalSection id="cancelamentos" n="05" title="Cancellations">
                  <p>
                    Cancellation requests must be made directly through Language School's
                    official communication channels.
                  </p>
                  <p>
                    Specific cancellation terms are communicated during the initial
                    program alignment.
                  </p>
                </LegalSection>

                <LegalSection id="material" n="06" title="Use of course materials">
                  <p>
                    Materials provided by Language School are intended exclusively for
                    the student's personal use.
                  </p>
                  <p>
                    Reproduction, sharing, or redistribution of any material without
                    express authorization from Language School is not permitted.
                  </p>
                </LegalSection>

                <LegalSection id="communication" n="07" title="Communication and support">
                  <p>
                    Language School may contact students via WhatsApp, email, or other
                    channels provided by the student for matters related to sessions,
                    support, and course information.
                  </p>
                  <p>
                    Students may request removal of their data or opt out of
                    communications at any time.
                  </p>
                </LegalSection>

                <LegalSection id="responsabilidade" n="08" title="Limitation of liability">
                  <p>
                    Language School is not responsible for temporary unavailability
                    caused by external internet failures, third-party platforms, or
                    technical issues outside its control.
                  </p>
                  <p>
                    In cases where a session cannot take place due to reasons beyond
                    Language School's control, the session will be rescheduled at no
                    additional cost.
                  </p>
                </LegalSection>

                <LegalSection id="alteracoes" n="09" title="Changes to terms">
                  <p>
                    These Terms of Use may be updated periodically to reflect service
                    improvements or operational changes.
                  </p>
                  <p>
                    Relevant changes will be communicated to active students through
                    the usual communication channels.
                  </p>
                </LegalSection>

                <LegalSection id="contato" n="10" title="Contact">
                  <p>
                    For questions, requests, or clarifications related to these terms,
                    contact Language School through its official channels:
                  </p>
                  <div className="mt-4 space-y-1">
                    <p>
                      <span className="font-medium text-[var(--color-text-primary)]">WhatsApp:</span>{" "}
                      <a
                        href={site.contact.whatsappHref}
                        className="text-[var(--color-navy-900)] underline underline-offset-2 hover:text-[var(--color-red-brand)] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {site.contact.phone}
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-[var(--color-text-primary)]">E-mail:</span>{" "}
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="text-[var(--color-navy-900)] underline underline-offset-2 hover:text-[var(--color-red-brand)] transition-colors"
                      >
                        {site.contact.email}
                      </a>
                    </p>
                  </div>
                </LegalSection>

              </article>
            </div>
          </Container>
        </Section>

        {/* ── Bottom nav ── */}
        <div className="border-t border-[rgb(10_22_40_/_8%)] bg-[var(--color-cream-100)]">
          <Container>
            <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="font-body text-[0.8125rem] text-[var(--color-text-muted)]">
                Language School — All rights reserved.
              </p>
              <Link
                href="/privacidade"
                className="font-body text-[0.8125rem] text-[var(--color-navy-900)] underline underline-offset-2 hover:text-[var(--color-red-brand)] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </Container>
        </div>

      </main>

      <SiteFooter />
    </>
  );
}

function LegalSection({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex items-start gap-4 mb-5">
        <span className="font-body text-[0.625rem] font-bold text-[var(--color-red-brand)] uppercase tracking-[0.14em] mt-1 shrink-0">
          {n}
        </span>
        <div className="flex-1 h-px bg-[rgb(10_22_40_/_10%)] mt-2.5" aria-hidden="true" />
      </div>
      <h2 className="font-display text-[var(--color-navy-900)] text-[1.375rem] leading-snug tracking-[-0.01em] mb-5">
        {title}
      </h2>
      <div className="space-y-4 font-body text-[0.9375rem] text-[var(--color-text-secondary)] leading-relaxed">
        {children}
      </div>
    </section>
  );
}
