import { Section, SectionHeader } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Body } from "@/components/ui/typography";
import { WhatsAppButton } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";

const FAQS = [
  {
    q: "What's the difference between Language School and a regular English course?",
    a: "Three main differences. First, personalization: at Language School, the program is built for you — your level, your context, your goal. Second, professional context: we develop English for the specific context where you need to use it — offshore, interviews, presentations, negotiations. Third, format: all sessions are live, individual or in very small groups, focused on real practice.",
  },
  {
    q: "What exactly will I learn at Language School?",
    a: "It depends on your program. If you're preparing for offshore, we'll focus on operational communication, HSE, PTW, and interaction with international teams. If you're preparing for interviews, we'll simulate real situations and develop the answers you'll actually use. What you won't find: grammar for grammar's sake or vocabulary disconnected from your professional context.",
  },
  {
    q: "How quickly will I see results?",
    a: "For interview preparation, most students feel a significant difference in 4 to 6 weeks of intensive practice. For professional communication or offshore, noticeable results appear after the first month, and concrete results after 2 to 3 months. What won't happen: you won't 'learn English' in two weeks. What will happen: deliberate practice in the English you need to use, with specialized feedback.",
  },
  {
    q: "I've tried several courses and nothing worked. Why would Language School be different?",
    a: "Previous courses probably didn't work because they solved the wrong problem. They taught English instead of developing the ability to use English under pressure in the context that matters to you. Language School will help you use the English you already have in the specific scenario where you need it. The only way to know if it'll work for you is the trial lesson — no commitment.",
  },
  {
    q: "What are the available time slots?",
    a: "Sessions are available Monday through Saturday, between 7am and 9pm (Brasília time). For offshore professionals on rotation schedules (14/14, 21/21, 28/28), the program is adapted to be intensive during onshore periods and include structured practice during rotations.",
  },
  {
    q: "How long does the program last?",
    a: "Programs vary in duration depending on the goal. Interview preparation: 4 to 8 week intensive. Professional communication or offshore: 3 to 6 months. Duration and frequency are defined based on your context in the initial conversation.",
  },
  {
    q: "What is the investment?",
    a: "Each program is developed according to the student's goals and needs. The investment varies depending on session frequency, support, and the format chosen.",
  },
  {
    q: "Can I join even if I'm starting from scratch?",
    a: "You can and should. Language School works with students from beginners to more advanced levels, always adapting development to each person's pace, goals, and needs. The focus is building real confidence and genuine progress in English communication, regardless of your starting point.",
  },
  {
    q: "Is there any guarantee?",
    a: "We offer a trial lesson before any financial commitment. This session lets you evaluate the program quality, the teacher's approach, and whether the format works for you. We don't offer a 'fluency guarantee' — that would be dishonest. What we offer is a structured program, a committed teacher, and a method that works when the student genuinely engages.",
  },
];

export function FAQSection() {
  return (
    <Section background="cream" contained={false} id="faq">
      <Container narrow>
        <SectionHeader
          overline="Frequently asked questions"
          headline="Your questions, answered."
          lead="Before reaching out, some direct answers."
          headlineClassName="text-[var(--text-h1)]"
        />

        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <Body muted>{faq.a}</Body>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <div className="mt-10 pt-8 border-t border-[rgb(10_22_40_/_8%)] flex flex-col sm:flex-row sm:items-center gap-4">
          <div>
            <p className="font-body font-medium text-[var(--text-body-m)] text-[var(--color-text-primary)]">
              Didn't find what you were looking for?
            </p>
            <p className="font-body text-[var(--text-body-s)] text-[var(--color-text-muted)]">
              Speak directly with Language School.
            </p>
          </div>
          <WhatsAppButton
            segment="generic"
            source="faq"
            label="Ask a question"
            size="md"
            variant="navy"
            showIcon
            className="sm:ml-auto shrink-0"
          />
        </div>
      </Container>
    </Section>
  );
}
