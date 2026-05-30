import { Section, SectionHeader, Divider } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { H2, Body, Label } from "@/components/ui/typography";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";

const TESTIMONIALS = [
  {
    tag: "English for Offshore",
    quote:
      "I used to understand some things on the radio and in meetings, but I'd freeze when I needed to respond. Now I communicate much more clearly during operations and toolbox talks without that constant fear of making mistakes.",
    name: "Carlos M.",
    role: "Offshore Operations",
    initial: "C",
    avatarBg: "bg-[var(--color-navy-900)]",
    offset: "",
  },
  {
    tag: "English for Interviews",
    quote:
      "I had studied English before, but I had never been able to use it in an interview. Language School helped me structure my answers, build confidence, and speak with much more naturalness.",
    name: "Rafael S.",
    role: "International interview approved",
    initial: "R",
    avatarBg: "bg-[var(--color-red-brand)]",
    offset: "lg:mt-10",
  },
  {
    tag: "Professional Communication",
    quote:
      "The sessions made English much more practical for my daily life. I started participating in meetings, writing messages, and handling international situations with much more confidence.",
    name: "Juliana A.",
    role: "International Professional Communication",
    initial: "J",
    avatarBg: "bg-[var(--color-gold-500)]",
    offset: "lg:mt-5",
  },
] as const;

const PROGRAM_FACTS = [
  { value: "3", label: "specialized programs by professional context" },
  { value: "Live", label: "100% in real time" },
  { value: "1-on-1", label: "exclusive attention and continuous support outside sessions" },
];

export function SocialProofSection() {
  return (
    <Section background="white" contained={false}>
      <Container>
        <SectionHeader
          overline="Testimonials"
          headline="Results that show up early."
          lead="What our students say after the program."
          narrow
          headlineClassName="text-[var(--text-h1)]"
        />

        {/* Testimonial cards */}
        <RevealGroup
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20 items-start"
          stagger={0.12}
        >
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.name}>
              <figure
                className={`bg-white rounded-2xl border border-[rgb(10_22_40_/_7%)] shadow-[0_2px_20px_rgba(10,22,40,0.06)] p-7 flex flex-col gap-5 ${t.offset}`}
                aria-label={`Testimonial — ${t.name}`}
              >
                {/* Top: badge + quote mark */}
                <div className="flex items-start justify-between">
                  <Badge variant="tag">{t.tag}</Badge>
                  <span
                    className="font-display text-[2.5rem] leading-none text-[var(--color-gold-500)] opacity-40 select-none -mt-1"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="flex-1 font-body text-[0.9375rem] text-[var(--color-text-secondary)] leading-relaxed">
                  {t.quote}
                </blockquote>

                {/* Attribution */}
                <div className="pt-5 border-t border-[rgb(10_22_40_/_6%)] flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center shrink-0`}
                    aria-hidden="true"
                  >
                    <span className="font-body font-bold text-white text-[0.875rem]">
                      {t.initial}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-body font-semibold text-[0.875rem] text-[var(--color-text-primary)] leading-tight">
                      {t.name}
                    </p>
                    <p className="font-body text-[0.75rem] text-[var(--color-text-muted)] leading-tight truncate">
                      {t.role}
                    </p>
                  </div>
                </div>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Program facts bar */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-y border-[rgb(10_22_40_/_8%)] mb-16">
            {PROGRAM_FACTS.map((f) => (
              <div key={f.value} className="text-center space-y-2">
                <p className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-[var(--color-navy-900)] tracking-[-0.02em]">
                  {f.value}
                </p>
                <p className="font-body text-[var(--text-body-s)] text-[var(--color-text-secondary)] uppercase tracking-[var(--tracking-wider)]">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* About / Instructor */}
        <div id="sobre" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="aspect-[4/5] bg-[var(--color-cream-100)] rounded-[var(--radius-lg)] flex items-end overflow-hidden">
                <div className="w-full p-6 bg-gradient-to-t from-[var(--color-cream-100)] to-transparent">
                  <p className="font-body text-[var(--text-body-s)] text-[var(--color-text-muted)]">
                    Instructor photo
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={100}>
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label gold as="p">Why Language School exists</Label>
                  <Divider width="short" />
                  <H2>
                    Built by someone who understands both sides: English and career.
                  </H2>
                </div>
                <Body size="lg">
                  Language School was founded by a language teacher from a direct
                  observation: highly qualified professionals losing career
                  opportunities over a problem that wasn't knowledge —
                  it was confidence and context.
                </Body>
                <Body muted>
                  The program was developed with a focus on real communication,
                  not abstract grammar. Every module, every simulation, every
                  session is designed for the specific moment where English
                  needs to work.
                </Body>
              </div>
            </Reveal>
          </div>
        </div>

      </Container>
    </Section>
  );
}
