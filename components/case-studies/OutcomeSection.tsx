import type { CaseStudy } from "@/lib/case-studies-data";

interface OutcomeSectionProps {
  study: CaseStudy;
}

export default function OutcomeSection({ study }: OutcomeSectionProps) {
  if (!study.outcome) return null;

  return (
    <section className="w-full bg-[var(--bh-soft-blue-mist)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2 md:mb-2.5">
              Outcome
            </span>
            <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mb-4 md:mb-5" />
            <h2
              className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)",
                lineHeight: "1.1",
              }}
            >
              {study.outcome.title}
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p
              className="font-serif font-medium text-[var(--bh-navy)] leading-snug mb-8 md:mb-10"
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
                lineHeight: "1.35",
              }}
            >
              {study.outcome.body}
            </p>

            {study.outcome.whatChanged && (
              <div className="bg-white border border-[var(--bh-border-blue-gray)] rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(20,33,61,0.05)]">
                <p className="font-sans text-[var(--bh-slate-text)] text-[0.85rem] md:text-[0.9rem] font-semibold mb-4">
                  {study.outcome.whatChanged.intro}
                </p>
                <ol className="space-y-3 mb-6">
                  {study.outcome.whatChanged.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--bh-warm-amber)] text-[var(--bh-deep-ink)] font-sans text-[0.7rem] font-bold flex items-center justify-center mt-0.5">
                        {index + 1}
                      </span>
                      <span className="font-sans text-[var(--bh-slate-text)] text-[0.85rem] md:text-[0.95rem] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="pt-5 border-t border-[var(--bh-border-blue-gray)]">
                  <p
                    className="font-serif font-medium text-[var(--bh-deep-ink)] leading-snug"
                    style={{
                      fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                      lineHeight: "1.35",
                    }}
                  >
                    {study.outcome.whatChanged.conclusion}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
