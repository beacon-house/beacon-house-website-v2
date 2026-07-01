"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import CTAButton from "@/components/shared/CTAButton";

export default function ProgramFinalCTA() {
  return (
    <section className="bg-[var(--bh-deep-ink)] w-full py-16 md:py-20 lg:py-24">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12">
        <div className="max-w-[720px] mx-auto text-center">
          <ScrollReveal>
            <h2
              className="font-serif font-medium text-[var(--bh-warm-ivory)] tracking-tight mb-5"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: "1.15",
              }}
            >
              Understand what your child needs now.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="font-sans text-[var(--bh-warm-ivory)]/70 text-[0.9rem] md:text-[0.95rem] leading-[1.7] mb-6 md:mb-8">
              A Strategic Review helps us assess:
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <ul className="font-sans text-[var(--bh-warm-ivory)]/80 text-[0.85rem] md:text-[0.9rem] leading-[1.7] grid sm:grid-cols-2 gap-x-6 gap-y-3 text-left max-w-[600px] mx-auto mb-8 md:mb-10">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)] mt-2 flex-shrink-0" />
                <span>Current academic context</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)] mt-2 flex-shrink-0" />
                <span>Interests and possible directions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)] mt-2 flex-shrink-0" />
                <span>Existing activities and evidence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)] mt-2 flex-shrink-0" />
                <span>University goals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)] mt-2 flex-shrink-0" />
                <span>Immediate strategic priorities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)] mt-2 flex-shrink-0" />
                <span>The right program structure</span>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mb-4">
              <CTAButton />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="font-sans text-[var(--bh-warm-ivory)]/50 text-[0.75rem] md:text-[0.8rem] leading-[1.6]">
              For families seriously considering selective international universities.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
