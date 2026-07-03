import Link from "next/link";

const outcomes = [
  { name: "Harvard", other: 3, ours: 15, multiplier: "4.3X" },
  { name: "Oxford University", other: 9, ours: 29, multiplier: "3.2X" },
  { name: "Cambridge University", other: 11, ours: 36, multiplier: "3.3X" },
  { name: "MIT", other: 4, ours: 21, multiplier: "5.4X" },
];

const getOtherBarWidth = (value: number) => `${Math.max(value, 10)}%`;

export default function ResultsSection() {
  return (
    <section
      id="our-results"
      className="w-full bg-[var(--bh-soft-blue-mist)]"
    >
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Left — headline + link */}
          <div className="lg:pt-2">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-[3px] h-7 bg-[var(--bh-warm-amber)] rounded-full flex-shrink-0" />
              <span className="font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--bh-slate-text)]">
                Our Results
              </span>
            </div>

            <h2
              className="font-serif font-medium text-[var(--bh-deep-ink)] leading-[1.15] mb-5 md:mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.8vw, 2.5rem)" }}
            >
              Outcomes that compound{" "}
              <span className="text-[var(--bh-warm-amber)]">over years</span>
            </h2>

            <p className="font-sans text-[var(--bh-slate-text)] text-[0.95rem] md:text-[1rem] leading-[1.7] mb-7 md:mb-8 max-w-[520px]">
              2025-26 final offers and five-year cumulative admits across the
              most selective universities in the US, UK, and beyond. The work
              begins long before the application year.
            </p>

            <Link
              href="/our-results"
              className="inline-flex items-center gap-2 font-sans font-semibold text-[var(--bh-navy)] text-[0.95rem] hover:text-[var(--bh-warm-amber)] transition-colors group"
            >
              See the full results
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </div>

          {/* Right — success-rate bar comparators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {outcomes.map((outcome) => (
              <div
                key={outcome.name}
                className="bg-white border border-[var(--bh-border-blue-gray)] rounded-xl px-6 py-6 md:px-7 md:py-7"
              >
                <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1.15rem] md:text-[1.25rem] leading-tight mb-5">
                  {outcome.name}
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-sans text-[var(--bh-slate-text)] text-[0.85rem]">
                        Other Students
                      </span>
                      <span className="font-sans font-semibold text-[var(--bh-deep-ink)] text-[0.85rem]">
                        {outcome.other} out of 100
                      </span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-[var(--bh-border-blue-gray)]/70 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[var(--bh-slate-text)]"
                        style={{ width: getOtherBarWidth(outcome.other) }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-sans text-[var(--bh-slate-text)] text-[0.85rem]">
                        Our Students
                      </span>
                      <span className="font-sans font-semibold text-[var(--bh-navy)] text-[0.85rem]">
                        {outcome.ours} out of 100
                      </span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-[var(--bh-border-blue-gray)]/70 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[var(--bh-warm-amber)]"
                        style={{ width: `${outcome.ours}%` }}
                      />
                    </div>
                  </div>

                  <div className="pt-1 text-center">
                    <span className="inline-flex items-center justify-center rounded-full border border-[var(--bh-border-blue-gray)] bg-[var(--bh-soft-blue-mist)] px-4 py-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--bh-navy)]">
                      {outcome.multiplier} Higher Success Rate
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
