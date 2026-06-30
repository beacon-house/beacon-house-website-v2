import ScrollReveal from "@/components/shared/ScrollReveal";

const commitments = [
  "Build genuine capability.",
  "Make better choices.",
  "Develop credible evidence.",
  "And present an application that reflects who they have actually become.",
];

export default function OurCommitment() {
  return (
    <section className="about-gradient-ivory relative w-full min-h-[100svh] md:min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-14 md:px-8 md:pt-[80px] md:pb-12 lg:px-12 lg:pt-[82px] lg:pb-14">
        <div className="max-w-[680px] mx-auto text-center">
          {/* Eyebrow */}
          <ScrollReveal>
            <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2.5">
              Our Commitment
            </span>
            <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-6 md:mb-7" />
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={100}>
            <h2
              className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight mb-6 md:mb-7"
              style={{
                fontSize: "clamp(1.6rem, 3.8vw, 2.5rem)",
                lineHeight: "1.15",
              }}
            >
              We do not believe in{" "}
              <span className="text-[var(--bh-warm-amber)] italic">
                manufacturing applicants
              </span>
              .
            </h2>
          </ScrollReveal>

          {/* Body */}
          <ScrollReveal delay={200}>
            <p className="font-sans text-[var(--bh-slate-text)] text-[0.92rem] md:text-[1rem] leading-[1.72] mb-5 md:mb-6">
              Every student begins with a different combination of strengths,
              interests, temperament, context and ambition.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="font-sans text-[var(--bh-slate-text)] text-[0.92rem] md:text-[1rem] leading-[1.72] mb-6 md:mb-7">
              Our responsibility is to understand that student deeply enough to
              help them:
            </p>
          </ScrollReveal>

          {/* Commitment list */}
          <ScrollReveal delay={300}>
            <ul className="max-w-[520px] mx-auto mb-7 md:mb-9 space-y-3 md:space-y-3.5">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-left"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)] flex-shrink-0 mt-[0.55rem]" />
                  <span className="font-sans text-[var(--bh-navy)] text-[0.9rem] md:text-[0.98rem] font-medium leading-[1.55]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Closing */}
          <ScrollReveal delay={400}>
            <p className="font-sans text-[var(--bh-slate-text)] text-[0.88rem] md:text-[0.95rem] leading-relaxed mb-2">
              That requires resources.
            </p>
            <p className="font-sans text-[var(--bh-slate-text)] text-[0.88rem] md:text-[0.95rem] leading-relaxed mb-6 md:mb-7">
              But it also requires{" "}
              <span className="font-medium text-[var(--bh-navy)]">
                judgement, continuity and personal responsibility
              </span>
              .
            </p>
            <p
              className="font-serif font-medium text-[var(--bh-navy)] tracking-tight"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                lineHeight: "1.3",
              }}
            >
              Beacon House was built to bring{" "}
              <span className="text-[var(--bh-warm-amber)] italic">
                all four together
              </span>
              .
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
