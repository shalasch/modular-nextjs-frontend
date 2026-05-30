import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/layout/nav";
import { SiteFooter } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog — Coming soon · Language School",
  description:
    "The Language School blog is on its way. Coming soon: practical content on professional English, offshore, interviews, and workplace communication.",
};

export default function BlogPage() {
  return (
    <>
      <SiteNav />

      <main id="main-content" tabIndex={-1} className="min-h-[80dvh] flex flex-col">

        <div className="flex-1 flex items-center bg-[var(--color-navy-900)] relative overflow-hidden">

          {/* Atmospheric glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(21,85,196,0.22) 0%, transparent 65%)",
            }}
          />

          <Container className="relative z-10 py-32 lg:py-40">
            <div className="max-w-xl">

              <p className="font-body text-[0.625rem] font-bold text-[var(--color-red-brand)] uppercase tracking-[0.22em] mb-6">
                Blog
              </p>

              <h1
                className="font-display text-white leading-[1.15] tracking-[-0.02em] mb-5"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Coming soon.
              </h1>

              <div className="w-8 h-px bg-[var(--color-red-brand)] mb-6" aria-hidden="true" />

              <p className="font-body text-[1.0625rem] text-white/60 leading-relaxed mb-10 max-w-prose">
                The Language School blog is on its way — with practical content on
                professional English, offshore, interviews, and workplace
                communication. Follow on Instagram or reach out to be notified when
                it launches.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  segment="generic"
                  source="blog_coming_soon"
                  label="Talk to Language School"
                  size="md"
                />
                <Link
                  href="/"
                  className="inline-flex items-center justify-center h-[52px] px-8 rounded-[var(--radius-sm)] border border-white/20 font-body font-semibold text-base text-white/70 hover:text-white hover:border-white/40 transition-all duration-200"
                >
                  Back to home
                </Link>
              </div>

            </div>
          </Container>
        </div>

      </main>

      <SiteFooter />
    </>
  );
}
