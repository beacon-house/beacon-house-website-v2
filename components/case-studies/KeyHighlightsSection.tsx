import type { CaseStudy } from "@/lib/case-studies-data";

interface KeyHighlightsSectionProps {
  study: CaseStudy;
}

export default function KeyHighlightsSection({ study }: KeyHighlightsSectionProps) {
  if (!study.keyHighlights) return null;

  return (
    <section className="w-full bg-[var(--bh-soft-blue-mist)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2 md:mb-2.5">
            The Journey
          </span>
          <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-3 md:mb-4" />
          <h2
            className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight max-w-[720px] mx-auto"
            style={{
              fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)",
              lineHeight: "1.1",
            }}
          >
            {study.keyHighlights.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {study.keyHighlights.items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[var(--bh-border-blue-gray)] rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--bh-navy)] hover:shadow-[0_12px_30px_rgba(20,33,61,0.08)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--bh-warm-amber)] to-[var(--bh-warm-amber-light)] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="inline-block font-serif text-[2.5rem] md:text-[3rem] font-medium text-[var(--bh-deep-ink)]/5 leading-none mb-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1.15rem] md:text-[1.25rem] leading-tight mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-[var(--bh-slate-text)] text-[0.85rem] md:text-[0.9rem] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
