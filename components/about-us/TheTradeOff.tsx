import ScrollReveal from "@/components/shared/ScrollReveal";

const resources = [
  "Former Admissions Officers",
  "Course and university specialists",
  "Research and domain mentors",
  "Experience across thousands of admissions journeys",
];

export default function TheTradeOff() {
  return (
    <section className="about-gradient-mist relative w-full min-h-[100svh] md:min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-14 md:px-8 md:pt-[80px] md:pb-12 lg:px-12 lg:pt-[82px] lg:pb-14">
        {/* Header */}
        <div className="max-w-[800px] mx-auto text-center mb-9 md:mb-11">
          <ScrollReveal>
            <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2.5">
              The Other Side of the Trade-Off
            </span>
            <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-6 md:mb-7" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight mb-5 md:mb-6"
              style={{
                fontSize: "clamp(1.6rem, 3.8vw, 2.5rem)",
                lineHeight: "1.15",
              }}
            >
              Smaller models can feel more personal. But they may not have the{" "}
              <span className="text-[var(--bh-warm-amber)] italic">
                same depth of resources
              </span>
              .
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-sans text-[var(--bh-slate-text)] text-[0.92rem] md:text-[1rem] leading-[1.7] max-w-[560px] mx-auto">
              A highly involved individual counsellor may understand the student
              well. But selective international admissions increasingly requires
              access to:
            </p>
          </ScrollReveal>
        </div>

        {/* Resources grid */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-[780px] mx-auto mb-10 md:mb-12">
            {resources.map((resource) => (
              <div
                key={resource}
                className="flex items-start gap-2.5 bg-white/70 border border-[var(--bh-border-blue-gray)] rounded-lg px-4 py-3.5 md:px-5 md:py-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)] flex-shrink-0 mt-[0.45rem]" />
                <span className="font-sans text-[0.83rem] md:text-[0.9rem] font-medium text-[var(--bh-navy)] leading-snug">
                  {resource}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Climax: forced to choose */}
        <ScrollReveal delay={400}>
          <div className="text-center mb-7 md:mb-9">
            <p
              className="font-serif font-medium text-[var(--bh-navy)] tracking-tight"
              style={{
                fontSize: "clamp(1.15rem, 2.6vw, 1.55rem)",
                lineHeight: "1.3",
              }}
            >
              Families are often forced to choose.
            </p>
          </div>
        </ScrollReveal>

        {/* Two choice cards */}
        <ScrollReveal delay={500}>
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6 max-w-[740px] mx-auto">
            {/* Choice 1 */}
            <div className="flex-1 bg-white border border-[var(--bh-border-blue-gray)] rounded-xl px-6 py-6 md:px-7 md:py-7">
              <div className="w-8 h-0.5 bg-[var(--bh-slate-text)]/30 mb-4" />
              <p className="font-serif font-medium text-[var(--bh-deep-ink)] text-[0.95rem] md:text-[1.05rem] leading-snug">
                Personal attention without the full depth of resources.
              </p>
            </div>

            {/* OR divider */}
            <div className="flex items-center justify-center flex-shrink-0">
              <div className="w-11 h-11 rounded-full bg-[var(--bh-warm-ivory)] border border-[var(--bh-border-blue-gray)] flex items-center justify-center shadow-sm">
                <span className="font-sans text-[0.65rem] font-semibold text-[var(--bh-slate-text)] uppercase tracking-[0.1em]">
                  Or
                </span>
              </div>
            </div>

            {/* Choice 2 */}
            <div className="flex-1 bg-white border border-[var(--bh-border-blue-gray)] rounded-xl px-6 py-6 md:px-7 md:py-7">
              <div className="w-8 h-0.5 bg-[var(--bh-slate-text)]/30 mb-4" />
              <p className="font-serif font-medium text-[var(--bh-deep-ink)] text-[0.95rem] md:text-[1.05rem] leading-snug">
                World-class resources within a model that may not remain truly
                personal.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
