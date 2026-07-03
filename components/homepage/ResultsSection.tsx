import Link from "next/link";

const highlights = [
  { value: "730+", label: "Cumulative Ivy League admits" },
  { value: "159+", label: "Top 10 admits, 2025-26" },
  { value: "100+", label: "Cumulative Top 5 UK admits" },
];

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
              Class of 2029 offers and five-year cumulative admits across the
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

          {/* Right — highlight stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--bh-border-blue-gray)] border border-[var(--bh-border-blue-gray)] rounded-xl overflow-hidden">
            {highlights.map((stat) => (
              <div
                key={stat.label}
                className="bg-white px-6 py-7 md:px-7 md:py-8 flex flex-col"
              >
                <p
                  className="font-serif font-medium text-[var(--bh-navy)] tabular-nums leading-none mb-3"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
                >
                  {stat.value}
                </p>
                <p className="font-sans text-[var(--bh-slate-text)] text-[0.8rem] md:text-[0.85rem] leading-[1.5]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
