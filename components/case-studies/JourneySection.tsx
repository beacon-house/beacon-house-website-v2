import type { CaseStudy } from "@/lib/case-studies-data";

interface JourneySectionProps {
  study: CaseStudy;
}

export default function JourneySection({ study }: JourneySectionProps) {
  if (!study.journey) return null;

  return (
    <section className="w-full bg-[var(--bh-soft-blue-mist)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
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
            {study.journey.title}
          </h2>
        </div>

        {/* Mobile: left-aligned timeline */}
        <div className="lg:hidden relative max-w-[560px] mx-auto">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--bh-border-blue-gray)] via-[var(--bh-warm-amber)] to-[var(--bh-navy)]" />

          <div className="space-y-8">
            {study.journey.phases.map((phase, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[var(--bh-warm-ivory)] border-2 border-[var(--bh-warm-amber)] flex items-center justify-center">
                  <span className="font-sans text-[0.65rem] font-bold text-[var(--bh-deep-ink)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="bg-white border border-[var(--bh-border-blue-gray)] rounded-xl p-5 shadow-sm">
                  <span className="inline-block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--bh-warm-amber)] mb-2">
                    {phase.period}
                  </span>
                  <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1.15rem] leading-tight mb-2">
                    {phase.title}
                  </h3>
                  <p className="font-sans text-[var(--bh-slate-text)] text-[0.85rem] leading-relaxed mb-3">
                    {phase.description}
                  </p>
                  {phase.bullets && phase.bullets.length > 0 && (
                    <div className="space-y-1.5 mt-3 pt-3 border-t border-[var(--bh-border-blue-gray)]/50">
                      {phase.bullets.map((bullet, i) => (
                        <p key={i} className="font-sans text-[0.8rem] font-semibold text-[var(--bh-navy)]">
                          {bullet}
                        </p>
                      ))}
                    </div>
                  )}
                  {phase.stat && (
                    <div className="mt-3 pt-3 border-t border-[var(--bh-border-blue-gray)]/50">
                      <p className="font-serif font-medium text-[var(--bh-navy)] text-[1.25rem]">
                        {phase.stat.value}
                      </p>
                      <p className="font-sans text-[0.75rem] text-[var(--bh-slate-text)]">
                        {phase.stat.label}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: alternating center-spine timeline */}
        <div className="hidden lg:block relative max-w-[1100px] mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--bh-border-blue-gray)] via-[var(--bh-warm-amber)] to-[var(--bh-navy)] -translate-x-1/2" />

          <div className="space-y-10">
            {study.journey.phases.map((phase, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative grid grid-cols-[1fr_72px_1fr] items-center gap-6">
                  {isLeft ? (
                    <div className="text-right">
                      <div className="bg-white border border-[var(--bh-border-blue-gray)] rounded-xl p-6 shadow-sm inline-block text-left">
                        <span className="inline-block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--bh-warm-amber)] mb-2">
                          {phase.period}
                        </span>
                        <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1.25rem] leading-tight mb-2">
                          {phase.title}
                        </h3>
                        <p className="font-sans text-[var(--bh-slate-text)] text-[0.9rem] leading-relaxed max-w-[400px]">
                          {phase.description}
                        </p>
                        {phase.bullets && phase.bullets.length > 0 && (
                          <div className="space-y-1.5 mt-4 pt-3 border-t border-[var(--bh-border-blue-gray)]/50">
                            {phase.bullets.map((bullet, i) => (
                              <p key={i} className="font-sans text-[0.85rem] font-semibold text-[var(--bh-navy)]">
                                {bullet}
                              </p>
                            ))}
                          </div>
                        )}
                        {phase.stat && (
                          <div className="mt-4 pt-3 border-t border-[var(--bh-border-blue-gray)]/50">
                            <p className="font-serif font-medium text-[var(--bh-navy)] text-[1.5rem]">
                              {phase.stat.value}
                            </p>
                            <p className="font-sans text-[0.8rem] text-[var(--bh-slate-text)]">
                              {phase.stat.label}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}

                  <div className="relative flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--bh-warm-ivory)] border-2 border-[var(--bh-warm-amber)] flex items-center justify-center shadow-md z-10">
                      <span className="font-sans text-[0.75rem] font-bold text-[var(--bh-deep-ink)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {!isLeft ? (
                    <div className="text-left">
                      <div className="bg-white border border-[var(--bh-border-blue-gray)] rounded-xl p-6 shadow-sm inline-block">
                        <span className="inline-block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--bh-warm-amber)] mb-2">
                          {phase.period}
                        </span>
                        <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1.25rem] leading-tight mb-2">
                          {phase.title}
                        </h3>
                        <p className="font-sans text-[var(--bh-slate-text)] text-[0.9rem] leading-relaxed max-w-[400px]">
                          {phase.description}
                        </p>
                        {phase.bullets && phase.bullets.length > 0 && (
                          <div className="space-y-1.5 mt-4 pt-3 border-t border-[var(--bh-border-blue-gray)]/50">
                            {phase.bullets.map((bullet, i) => (
                              <p key={i} className="font-sans text-[0.85rem] font-semibold text-[var(--bh-navy)]">
                                {bullet}
                              </p>
                            ))}
                          </div>
                        )}
                        {phase.stat && (
                          <div className="mt-4 pt-3 border-t border-[var(--bh-border-blue-gray)]/50">
                            <p className="font-serif font-medium text-[var(--bh-navy)] text-[1.5rem]">
                              {phase.stat.value}
                            </p>
                            <p className="font-sans text-[0.8rem] text-[var(--bh-slate-text)]">
                              {phase.stat.label}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
