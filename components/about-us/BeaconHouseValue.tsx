import ScrollReveal from "@/components/shared/ScrollReveal";

const values = [
  {
    title: "Founder-led judgement",
    description:
      "Senior leaders remain involved in the decisions that shape direction, evidence, positioning and university strategy.",
  },
  {
    title: "India-context execution",
    description:
      "We understand the realities of Indian and international schools, curriculum choices, family decisions and student schedules.",
  },
  {
    title: "Ongoing accountability",
    description:
      "A dedicated team ensures that strategy becomes action and that the child continues to move in the right direction.",
  },
  {
    title: "Deliberate personalisation",
    description:
      "The student is not fitted into a pre-existing activity plan. The model adapts to their interests, strengths, constraints and ambitions.",
  },
];

export default function BeaconHouseValue() {
  return (
    <section className="about-gradient-mist relative w-full min-h-[100svh] md:min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-14 md:px-8 md:pt-[80px] md:pb-12 lg:px-12 lg:pt-[82px] lg:pb-14">
        {/* Header */}
        <div className="max-w-[680px] mb-8 md:mb-10">
          <ScrollReveal>
            <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2.5">
              What Beacon House Adds
            </span>
            <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mb-6 md:mb-7" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight mb-5 md:mb-6"
              style={{
                fontSize: "clamp(1.55rem, 3.6vw, 2.35rem)",
                lineHeight: "1.15",
              }}
            >
              Global expertise only matters when it is translated into{" "}
              <span className="text-[var(--bh-warm-amber)] italic">
                better decisions for the student
              </span>
              .
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-sans text-[var(--bh-slate-text)] text-[0.92rem] md:text-[1rem] leading-[1.7]">
              Beacon House brings:
            </p>
          </ScrollReveal>
        </div>

        {/* Value cards */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[860px]">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="bg-white border border-[var(--bh-border-blue-gray)] rounded-xl px-6 py-5 md:px-7 md:py-6"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-serif text-[var(--bh-warm-amber)] text-[0.8rem] md:text-[0.85rem] font-medium tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-px bg-[var(--bh-border-blue-gray)]" />
                </div>
                <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1.02rem] md:text-[1.12rem] leading-tight mb-2.5">
                  {value.title}
                </h3>
                <p className="font-sans text-[var(--bh-slate-text)] text-[0.88rem] md:text-[0.93rem] leading-[1.6]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
