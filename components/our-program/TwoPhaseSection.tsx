"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";

interface PhaseCardProps {
  eyebrow: string;
  title: string;
  meta: string;
  body: string;
  href: string;
}

function PhaseCard({ eyebrow, title, meta, body, href }: PhaseCardProps) {
  return (
    <a
      href={href}
      className="group block h-full rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 p-6 md:p-7"
    >
      <span className="inline-block font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--bh-warm-amber)] mb-3">
        {eyebrow}
      </span>
      <h3 className="font-serif font-medium text-[var(--bh-warm-ivory)] text-[1.25rem] md:text-[1.4rem] leading-tight mb-1.5">
        {title}
      </h3>
      <p className="font-sans text-white/75 text-[0.72rem] md:text-[0.75rem] uppercase tracking-wide mb-4">
        {meta}
      </p>
      <p className="font-sans text-white/90 text-[0.85rem] md:text-[0.9rem] leading-[1.65]">
        {body}
      </p>
    </a>
  );
}

function Connector() {
  return (
    <div className="flex md:flex-col items-center justify-center gap-2 py-1 md:py-0 md:px-2">
      <div className="hidden md:block w-px h-8 bg-white/15" />
      <div className="h-px w-8 md:hidden bg-white/15" />
      <svg
        className="w-4 h-4 text-white/30 rotate-90 md:rotate-0 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <div className="hidden md:block w-px h-8 bg-white/15" />
      <div className="h-px w-8 md:hidden bg-white/15" />
    </div>
  );
}

export default function TwoPhaseSection() {
  return (
    <section className="bg-[var(--bh-navy)] w-full py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12">
        <div className="max-w-[680px] mx-auto text-center mb-12 md:mb-16">
          <ScrollReveal>
            <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--bh-warm-amber)] mb-3">
              One Program. Two Phases.
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className="font-serif font-medium text-[var(--bh-warm-ivory)] tracking-tight mb-4"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: "1.15",
              }}
            >
              The application year is only the final stage.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-sans text-white/90 text-[0.92rem] md:text-[1.02rem] leading-[1.7]">
              Our program is designed around two connected phases.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-[900px] mx-auto">
          <div className="grid md:grid-cols-[1fr_auto_1fr] items-stretch gap-5 md:gap-0">
            <ScrollReveal delay={200}>
              <PhaseCard
                eyebrow="Phase 1"
                title="Candidacy Building"
                meta="For students in Grades 8–11"
                body="We help the student identify direction, make better academic choices, develop depth and build credible evidence over time."
                href="#candidacy-building"
              />
            </ScrollReveal>

            <Connector />

            <ScrollReveal delay={300}>
              <PhaseCard
                eyebrow="Phase 2"
                title="Application Counselling"
                meta="For students in Grade 12"
                body="We bring the student’s academic record, activities, evidence and personal story together into a coherent university strategy and application."
                href="#application-counselling"
              />
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={400}>
          <p className="text-center font-serif italic text-[var(--bh-warm-ivory)]/80 text-[0.95rem] md:text-[1.05rem] leading-[1.6] mt-10 md:mt-12 max-w-[480px] mx-auto">
            The second phase is strongest when the first has been built deliberately.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
