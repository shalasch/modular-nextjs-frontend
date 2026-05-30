import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Body } from "@/components/ui/typography";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const STATEMENTS = [
  {
    n: "01",
    headline: "You understand more than you can use.",
    body: "Most students already have English vocabulary and comprehension, but freeze when they need to communicate in real situations.",
  },
  {
    n: "02",
    headline: "The right practice changes confidence.",
    body: "Language School develops English through conversation, practical situations, and gradual growth in communication confidence.",
  },
  {
    n: "03",
    headline: "Communication for high-stakes moments.",
    body: "Interviews, offshore operations, travel, meetings, and professional communication demand more than theory — they demand clarity and confidence.",
  },
];

export function ProblemSection() {
  return (
    <Section background="navy" contained={false} className="relative overflow-hidden">

      {/* ── Atmospheric background layers ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: [
            "radial-gradient(ellipse 80% 55% at 50% -8%, rgba(21,85,196,0.24) 0%, transparent 65%)",
            "radial-gradient(ellipse 40% 55% at 8%  55%, rgba(21,85,196,0.08) 0%, transparent 55%)",
            "radial-gradient(ellipse 40% 55% at 92% 55%, rgba(21,85,196,0.06) 0%, transparent 55%)",
            "radial-gradient(ellipse 55% 35% at 50% 115%, rgba(10,22,40,0.55) 0%, transparent 65%)",
          ].join(", "),
        }}
      />

      <Container>
        {/* ── Section micro-label ── */}
        <div className="mb-10 lg:mb-14 flex items-center gap-4">
          <p className="font-body text-[0.625rem] font-bold text-red-brand uppercase tracking-[0.22em]">
            The diagnosis
          </p>
          <div className="flex-1 h-px bg-white/10 max-w-[80px]" aria-hidden="true" />
        </div>

        {/* ── Cards grid ── */}
        <RevealGroup
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
          stagger={0.09}
        >
          {STATEMENTS.map((s, i) => (
            <RevealItem key={s.n}>
              <div
                className={cn(
                  /* Base */
                  "group relative bg-white rounded-2xl p-8 h-full flex flex-col gap-5 overflow-hidden",
                  "border border-white/80",
                  /* Transition */
                  "transition-all duration-500 ease-out",
                  /* Hover: lift + shadow bloom */
                  "hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(10,22,40,0.30)]",
                  /* Per-card elevation */
                  i === 1
                    ? "shadow-[0_16px_52px_rgba(10,22,40,0.22)] lg:-translate-y-3"
                    : "shadow-[0_4px_22px_rgba(10,22,40,0.13)]"
                )}
              >
                {/* ── Top accent line ── */}
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl transition-all duration-500",
                    i === 1
                      ? "bg-[var(--color-red-brand)]"
                      : "bg-transparent group-hover:bg-[rgb(10_22_40_/_8%)]"
                  )}
                  aria-hidden="true"
                />

                {/* ── Oversized ghost number (editorial depth) ── */}
                <span
                  className="absolute bottom-0 right-5 font-display font-bold leading-none select-none pointer-events-none text-[7rem] text-[var(--color-navy-900)] opacity-[0.045]"
                  aria-hidden="true"
                >
                  {s.n}
                </span>

                {/* ── Subtle inner glow on center card ── */}
                {i === 1 && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(21,85,196,0.04) 0%, transparent 70%)",
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* ── Number label ── */}
                <span className="font-body text-[0.625rem] font-bold text-red-brand uppercase tracking-[0.18em]">
                  {s.n}
                </span>

                {/* ── Headline ── */}
                <h3 className="font-body font-bold text-[clamp(1.1875rem,1.9vw,1.4375rem)] leading-[1.2] tracking-[-0.02em] text-(--color-text-primary) text-balance relative z-10">
                  {s.headline}
                </h3>

                {/* ── Thin editorial divider ── */}
                <div className="w-6 h-px bg-[rgb(10_22_40_/_12%)]" aria-hidden="true" />

                {/* ── Body ── */}
                <Body
                  size="sm"
                  className="text-text-secondary leading-relaxed relative z-10"
                >
                  {s.body}
                </Body>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
