import ScrollReveal from "@/components/shared/ScrollReveal";

const decisions = [
  "What to explore",
  "What to deepen",
  "What to stop",
  "What evidence to build",
  "Which university pathways to preserve",
  "How the student\u2019s work should come together",
];

export default function WhatThisMeans() {
  return (
    <section className="about-gradient-ivory relative w-full min-h-[100svh] md:min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-14 md:px-8 md:pt-[80px] md:pb-12 lg:px-12 lg:pt-[82px] lg:pb-14">
        <div className="max-w-[760px] mx-auto text-center">
          {/* Eyebrow */}
          <ScrollReveal>
            <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2.5">
              What This Means for the Student
            </span>
            <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-6 md:mb-7" />
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={100}>
            <h2
              className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight mb-4 md:mb-5"
              style={{
                fontSize: "clamp(1.6rem, 3.8vw, 2.5rem)",
                lineHeight: "1.15",
              }}
            >
              The goal is not to make the student{" "}
              <span className="text-[var(--bh-warm-amber)] italic">
                do more
              </span>
              .
            </h2>
          </ScrollReveal>

          {/* Intro */}
          <ScrollReveal delay={200}>
            <p className="font-sans text-[var(--bh-slate-text)] text-[0.92rem] md:text-[1rem] leading-[1.7] mb-7 md:mb-9">
              It is to make better decisions about:
            </p>
          </ScrollReveal>

          {/* Decision grid */}
          <ScrollReveal delay={300}>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-[680px] mx-auto mb-9 md:mb-11">
              {decisions.map((item) => (
                <div
                  key={item}
                  className="bg-white border border-[var(--bh-border-blue-gray)] rounded-lg px-4 py-3.5 md:px-5 md:py-4 flex items-start gap-2.5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)] flex-shrink-0 mt-[0.45rem]" />
                  <span className="font-sans text-[0.83rem] md:text-[0.9rem] font-medium text-[var(--bh-navy)] leading-snug text-left">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Closing statements */}
          <ScrollReveal delay={400}>
            <p className="font-sans text-[var(--bh-slate-text)]/60 text-[0.88rem] md:text-[0.95rem] leading-relaxed mb-2.5">
              The student does not become distinctive through a longer list of
              activities.
            </p>
            <p
              className="font-serif font-medium text-[var(--bh-navy)] tracking-tight"
              style={{
                fontSize: "clamp(1.15rem, 2.8vw, 1.55rem)",
                lineHeight: "1.3",
              }}
            >
              They become distinctive when their choices build towards{" "}
              <span className="text-[var(--bh-warm-amber)] italic">
                something real
              </span>
              .
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
