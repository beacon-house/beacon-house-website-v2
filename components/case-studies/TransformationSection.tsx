import type { CaseStudy } from "@/lib/case-studies-data";

interface TransformationSectionProps {
  study: CaseStudy;
}

export default function TransformationSection({ study }: TransformationSectionProps) {
  return (
    <section className="w-full bg-[var(--bh-warm-ivory)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
          {/* Central path line - visible on lg */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--bh-border-blue-gray)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--bh-warm-amber)] flex items-center justify-center shadow-lg z-10">
              <svg className="w-4 h-4 text-[var(--bh-deep-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--bh-warm-amber)]" />
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[var(--bh-border-blue-gray)] via-[var(--bh-warm-amber)] to-[var(--bh-warm-amber)]" />
          </div>

          {/* Before card */}
          <div className="lg:pr-12">
            <div className="bg-[var(--bh-soft-blue-mist)] border border-[var(--bh-border-blue-gray)] rounded-2xl p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bh-deep-ink)]/10 text-[var(--bh-deep-ink)] font-sans text-[0.7rem] font-semibold">
                  Before
                </span>
                <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1.25rem] md:text-[1.5rem] leading-tight">
                  {study.before.title}
                </h3>
              </div>
              <p className="font-sans text-[var(--bh-slate-text)] text-[0.85rem] md:text-[0.95rem] leading-relaxed mb-5">
                {study.before.subtitle}
              </p>
              <ul className="space-y-3">
                {study.before.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--bh-border-blue-gray)] mt-2.5" />
                    <span className="font-sans text-[var(--bh-slate-text)] text-[0.85rem] md:text-[0.95rem] leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile arrow */}
          <div className="lg:hidden flex justify-center -my-2 relative z-10">
            <div className="w-10 h-10 rounded-full bg-[var(--bh-warm-amber)] flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-[var(--bh-deep-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>

          {/* After card */}
          <div className="lg:pl-12">
            <div className="bg-white border-l-4 border-l-[var(--bh-warm-amber)] border border-[var(--bh-border-blue-gray)] rounded-2xl p-6 md:p-8 h-full shadow-[0_4px_20px_rgba(20,33,61,0.05)]">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bh-warm-amber)] text-[var(--bh-deep-ink)] font-sans text-[0.7rem] font-semibold">
                  After
                </span>
                <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1.25rem] md:text-[1.5rem] leading-tight">
                  {study.after.title}
                </h3>
              </div>
              <p className="font-sans text-[var(--bh-slate-text)] text-[0.85rem] md:text-[0.95rem] leading-relaxed mb-5">
                {study.after.subtitle}
              </p>
              <ul className="space-y-3">
                {study.after.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)] mt-2.5" />
                    <span className="font-sans text-[var(--bh-slate-text)] text-[0.85rem] md:text-[0.95rem] leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
