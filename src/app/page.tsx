import { SiteNav } from "@/components/layout/nav";
import { SiteFooter } from "@/components/layout/footer";
import { StickyCtaBar } from "@/components/layout/sticky-cta";

import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { MethodologySection } from "@/components/sections/methodology";
import { ProgramsSection } from "@/components/sections/programs";
import { OffshoreSection } from "@/components/sections/offshore";
import { ProcessSection } from "@/components/sections/process";
import { SocialProofSection } from "@/components/sections/social-proof";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <SiteNav />

      <main id="main-content" tabIndex={-1}>
        {/* 1 — navy */}
        <HeroSection />

        {/* 2 — white */}
        <ProblemSection />

        {/* 3 — cream */}
        <MethodologySection />

        {/* 4 — white */}
        <ProgramsSection />

        {/* 5 — navy */}
        <OffshoreSection />

        {/* 6 — cream */}
        <ProcessSection />

        {/* 7 — white */}
        <SocialProofSection />

        {/* 8 — cream */}
        <FAQSection />

        {/* 9 — navy */}
        <FinalCTASection />
      </main>

      <SiteFooter />

      <StickyCtaBar
        segment="generic"
        source="sticky_bar"
        showAfterScroll={500}
      />
    </>
  );
}
