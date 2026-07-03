import ScrollReveal from "@/components/shared/ScrollReveal";

const effects = [
  "Students enter common processes.",
  "Activities come from familiar playbooks.",
  "Decisions move through layers.",
  "The most experienced people become further removed from the child.",
];

export default function StructuralProblem() {
  return (
    <section
      className="w-full min-h-[100svh] md:min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 25% 18%, rgba(32, 58, 107, 0.18) 0%, transparent 52%), radial-gradient(circle at 82% 82%, rgba(248, 175, 72, 0.05) 0%, transparent 42%), #14213D",
      }}
    >
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-14 md:px-8 md:pt-[80px] md:pb-12 lg:px-12 lg:pt-[82px] lg:pb-14">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] gap-10 md:gap-12 lg:gap-16">
          {/* Left: headline + intro */}
          <div>
            <ScrollReveal>
              <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-warm-amber)] mb-2.5">
                The Structural Problem
              </span>
              <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mb-6 md:mb-7" />
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                className="font-serif font-medium text-[var(--bh-warm-ivory)] tracking-tight mb-6 md:mb-7"
                style={{
                  fontSize: "clamp(1.7rem, 4.2vw, 2.75rem)",
                  lineHeight: "1.14",
                }}
              >
                Personalisation is also where most counselling models become{" "}
                <span className="text-[var(--bh-warm-amber)] italic">
                  weakest
                </span>
                .
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="font-sans text-white/90 text-[0.92rem] md:text-[1.02rem] leading-[1.72] max-w-[480px]">
                As counselling companies grow, they gain access to wider
                resources. But scale creates pressure towards
                standardisation.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: 4 effects as descending numbered list */}
          <div className="flex flex-col">
            {effects.map((effect, i) => (
              <ScrollReveal key={effect} delay={300 + i * 100}>
                <div
                  className={`flex items-start gap-4 py-4 md:py-[1.35rem] ${
                    i < effects.length - 1
                      ? "border-b border-white/[0.07]"
                      : ""
                  }`}
                >
                  <span className="font-serif text-[var(--bh-warm-amber)] text-[1.05rem] md:text-[1.15rem] font-medium flex-shrink-0 tabular-nums mt-[0.1rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans text-white/90 text-[0.9rem] md:text-[0.96rem] leading-[1.55]">
                    {effect}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <ScrollReveal delay={800}>
          <div className="mt-12 md:mt-16 lg:mt-20 max-w-[680px] mx-auto text-center">
            <p className="font-sans text-white/85 text-[0.86rem] md:text-[0.92rem] leading-relaxed mb-3">
              The organisation may have impressive resources.
            </p>
            <p
              className="font-serif font-medium text-[var(--bh-warm-ivory)] tracking-tight"
              style={{
                fontSize: "clamp(1.25rem, 3.2vw, 1.85rem)",
                lineHeight: "1.25",
              }}
            >
              Yet the student&apos;s chances may not improve materially.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
