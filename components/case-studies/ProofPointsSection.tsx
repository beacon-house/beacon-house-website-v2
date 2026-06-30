import type { CaseStudy } from "@/lib/case-studies-data";

interface ProofPointsSectionProps {
  study: CaseStudy;
}

export default function ProofPointsSection({ study }: ProofPointsSectionProps) {
  return (
    <section className="w-full bg-[var(--bh-warm-ivory)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2 md:mb-2.5">
            Key Proof Points
          </span>
          <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-3 md:mb-4" />
          <h2
            className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight max-w-[720px] mx-auto"
            style={{
              fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)",
              lineHeight: "1.1",
            }}
          >
            Evidence that anchored the candidacy
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {study.proofPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[var(--bh-border-blue-gray)] rounded-2xl p-5 md:p-6 text-center flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--bh-navy)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--bh-warm-amber)] rounded-t-2xl" />
              <p
                className="font-serif font-medium text-[var(--bh-navy)] tabular-nums leading-none mb-3"
                style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)" }}
              >
                {point.value}
              </p>
              <p className="font-sans text-[var(--bh-slate-text)] text-[0.7rem] md:text-[0.8rem] leading-[1.5] whitespace-pre-line">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
