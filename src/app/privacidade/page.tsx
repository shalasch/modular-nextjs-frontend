import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/layout/nav";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Language School",
  description:
    "How Language School collects, uses, and protects the information of its students and visitors.",
};

const SECTIONS = [
  { n: "01", id: "dados", title: "Data collected" },
  { n: "02", id: "utilizacao", title: "How data is used" },
  { n: "03", id: "communication", title: "Communication via WhatsApp and email" },
  { n: "04", id: "plataformas", title: "Platforms used" },
  { n: "05", id: "armazenamento", title: "Storage and protection" },
  { n: "06", id: "compartilhamento", title: "Data sharing" },
  { n: "07", id: "direitos", title: "User rights" },
  { n: "08", id: "remocao", title: "Data removal requests" },
  { n: "09", id: "alteracoes", title: "Policy changes" },
  { n: "10", id: "contato", title: "Contact" },
];

const PLATFORMS = [
  { name: "Google Forms", desc: "Contact forms and questionnaires" },
  { name: "Google Sheets", desc: "Information organization and management" },
  { name: "Airtable", desc: "Operational management of programs" },
  { name: "Zoom", desc: "Live online sessions" },
  { name: "WhatsApp", desc: "Direct communication with students" },
  { name: "Email", desc: "Information delivery and support" },
];

export default function PrivacidadePage() {
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
                Privacy Policy
              </h1>
              <p className="font-body text-[1rem] text-white/55 leading-relaxed">
                How we collect, use, and protect the information of our students,
                prospective students, and visitors.
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
                <nav className="sticky top-28 space-y-1" aria-label="Policy sections">
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

                {/* Intro */}
                <div className="p-6 rounded-xl border border-[rgb(10_22_40_/_8%)] bg-[var(--color-cream-100)]">
                  <p className="font-body text-[0.9375rem] text-[var(--color-text-secondary)] leading-relaxed">
                    Language School values the privacy and protection of personal
                    data of its students, prospective students, and visitors. This
                    Privacy Policy clearly explains how information is collected,
                    used, and stored.
                  </p>
                </div>

                <LegalSection id="dados" n="01" title="Data collected">
                  <p>Language School may collect the following information:</p>
                  <BulletList items={[
                    "Full name",
                    "Phone number (WhatsApp)",
                    "Email address",
                    "Information submitted through contact forms",
                    "Responses to placement or interest questionnaires",
                  ]} />
                  <p>
                    Collection is voluntary, occurring when the user reaches out,
                    fills in a form, or initiates a conversation through Language School
                    channels.
                  </p>
                </LegalSection>

                <LegalSection id="utilizacao" n="02" title="How data is used">
                  <p>The information collected is used to:</p>
                  <BulletList items={[
                    "Communicate with students and prospective students",
                    "Schedule sessions and meetings",
                    "Send information about programs and lessons",
                    "Provide support and follow-up throughout the program",
                    "Handle internal and operational course management",
                  ]} />
                  <p>
                    Language School does not use user information for third-party
                    advertising purposes.
                  </p>
                </LegalSection>

                <LegalSection id="communication" n="03" title="Communication via WhatsApp and email">
                  <p>
                    Contact may be made via WhatsApp, email, online forms, or online
                    session platforms, always in relation to Language School services.
                  </p>
                  <p>
                    Users may request removal of their data or opt out of communications
                    at any time, directly through Language School contact channels.
                  </p>
                </LegalSection>

                <LegalSection id="plataformas" n="04" title="Platforms used">
                  <p>
                    Language School may use partner tools and platforms for the
                    organization and operation of its services. Each platform has its
                    own privacy and data security policy.
                  </p>
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PLATFORMS.map((p) => (
                      <div
                        key={p.name}
                        className="flex items-start gap-3 p-3.5 rounded-lg border border-[rgb(10_22_40_/_8%)] bg-[var(--color-cream-100)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-red-brand)] shrink-0 mt-1.5" />
                        <div>
                          <p className="font-body font-semibold text-[0.875rem] text-[var(--color-text-primary)]">
                            {p.name}
                          </p>
                          <p className="font-body text-[0.8125rem] text-[var(--color-text-muted)]">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </LegalSection>

                <LegalSection id="armazenamento" n="05" title="Storage and protection">
                  <p>
                    Information is stored in digital environments used by Language School
                    to maintain the organization, communication, and proper functioning
                    of its services.
                  </p>
                  <p>
                    Language School seeks to use reliable tools and adopts reasonable
                    practices to protect student information.
                  </p>
                </LegalSection>

                <LegalSection id="compartilhamento" n="06" title="Data sharing">
                  <p>
                    Language School does not sell personal information of students or
                    prospective students.
                  </p>
                  <p>
                    Information may be shared only when strictly necessary for the
                    operational functioning of services or in compliance with legal
                    obligations.
                  </p>
                </LegalSection>

                <LegalSection id="direitos" n="07" title="User rights">
                  <p>At any time, users may request:</p>
                  <BulletList items={[
                    "Access to stored personal information",
                    "Update or correction of data",
                    "Removal of information from Language School records",
                    "Clarification on how their data is used",
                    "Opt-out from communications",
                  ]} />
                </LegalSection>

                <LegalSection id="remocao" n="08" title="Data removal requests">
                  <p>
                    Requests related to data removal or updates can be made through
                    Language School's official contact channels.
                  </p>
                  <p>
                    Requests will be addressed within a reasonable timeframe and the
                    user will be notified upon completion.
                  </p>
                </LegalSection>

                <LegalSection id="alteracoes" n="09" title="Policy changes">
                  <p>
                    This Privacy Policy may be updated periodically to reflect
                    operational improvements or changes to Language School services.
                  </p>
                  <p>
                    Relevant changes will be communicated to active students through
                    the usual communication channels.
                  </p>
                </LegalSection>

                <LegalSection id="contato" n="10" title="Contact">
                  <p>
                    For questions related to privacy or data use, contact Language School
                    through its official channels:
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
                href="/termos"
                className="font-body text-[0.8125rem] text-[var(--color-navy-900)] underline underline-offset-2 hover:text-[var(--color-red-brand)] transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </Container>
        </div>

      </main>

      <SiteFooter />
    </>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="space-y-2 mt-2">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-2.5">
          <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-red-brand)] shrink-0" aria-hidden="true" />
          <span>{item}</span>
        </div>
      ))}
    </div>
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
      <div className="flex items-center gap-4 mb-5">
        <span className="font-body text-[0.625rem] font-bold text-[var(--color-red-brand)] uppercase tracking-[0.14em] shrink-0">
          {n}
        </span>
        <div className="flex-1 h-px bg-[rgb(10_22_40_/_10%)]" aria-hidden="true" />
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
