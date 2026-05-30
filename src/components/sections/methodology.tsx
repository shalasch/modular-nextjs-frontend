import { Section, Divider } from "@/components/ui/section";
import { Container, Stack } from "@/components/ui/container";
import { H2, H4, Body, Label, PullQuote } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";

const DIFFERENTIATORS = [
  {
    n: "01",
    title: "Practical communication",
    body: "Learning happens through conversation, interaction, and real application of English across different contexts.",
  },
  {
    n: "02",
    title: "Personalized instruction",
    body: "Language School adapts each student's development to their goals, pace, and professional needs.",
  },
  {
    n: "03",
    title: "Confidence to speak",
    body: "The focus is helping students use English more naturally, clearly, and confidently.",
  },
];

export function MethodologySection() {
  return (
    <Section background="cream" contained={false} id="metodologia">
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Stack gap="md">
                <Label gold as="p">The Language School method</Label>
                <Divider width="short" />
                <H2>
                  English applied to real communication.
                </H2>
                <Body size="lg" className="max-w-prose">
                  Language School develops English according to the real needs of each
                  student — whether for work, interviews, travel, offshore operations,
                  or everyday international communication.
                </Body>
                <Body muted className="max-w-prose">
                  Sessions combine communicative practice, confidence-building, and
                  real-world English use. The goal isn't just to study the language —
                  it's to be able to use it clearly when it truly matters.
                </Body>
              </Stack>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={150}>
              <div className="h-full flex items-center lg:pt-8">
                <PullQuote className="text-(--color-text-primary)">
                  More than memorizing rules, you develop the confidence to use
                  English in real situations.
                </PullQuote>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.n} delay={i * 80}>
              <div className="relative space-y-3 pt-2">
                <span
                  aria-hidden="true"
                  className="absolute -top-4 -left-2 font-display text-[8rem] leading-none font-semibold text-(--color-navy-900) opacity-[0.05] select-none pointer-events-none"
                >
                  {d.n}
                </span>
                <div className="w-8 h-px bg-(--color-gold-500)" aria-hidden="true" />
                <H4 className="relative">{d.title}</H4>
                <Body size="sm" muted className="relative">{d.body}</Body>
              </div>
            </Reveal>
          ))}
        </div>

      </Container>
    </Section>
  );
}
