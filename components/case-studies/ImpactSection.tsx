import type { CaseStudy } from "@/lib/case-studies-data";

interface ImpactSectionProps {
  study: CaseStudy;
}

export default function ImpactSection({ study }: ImpactSectionProps) {
  if (!study.impact) return null;

  return (
    <section className="w-full bg-[var(--bh-deep-ink)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="max-w-[820px] mx-auto text-center">
          <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-warm-amber)] mb-3 md:mb-4">
            {study.impact.title}
          </span>
          <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-6 md:mb-8" />
          <p
            className="font-serif font-medium text-[var(--bh-warm-ivory)] leading-snug"
            style={{
              fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)",
              lineHeight: "1.25",
            }}
          >
            {study.impact.body}
          </p>
        </div>
      </div>
    </section>
  );
}
