import ScrollReveal from "@/components/shared/ScrollReveal";

const globalSystem = [
  "Admissions intelligence",
  "Former Admissions Officers",
  "Specialist mentors",
  "Research and capstone resources",
  "Application expertise",
];

const beaconHouseLayer = [
  "Individual understanding",
  "Senior judgement",
  "Local execution",
  "Continuity",
  "Accountability",
];

const journeyStages = [
  "Direction",
  "Depth",
  "Evidence",
  "Positioning",
  "Application",
];

export default function HowModelWorks() {
  return (
    <section
      className="w-full min-h-[100svh] md:min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 20% 80%, rgba(32, 58, 107, 0.14) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(248, 175, 72, 0.04) 0%, transparent 38%), #14213D",
      }}
    >
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-14 md:px-8 md:pt-[80px] md:pb-12 lg:px-12 lg:pt-[82px] lg:pb-14">
        {/* Header */}
        <div className="max-w-[760px] mx-auto text-center mb-9 md:mb-11">
          <ScrollReveal>
            <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-warm-amber)] mb-2.5">
              How the Model Works
            </span>
            <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-6 md:mb-7" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className="font-serif font-medium text-[var(--bh-warm-ivory)] tracking-tight"
              style={{
                fontSize: "clamp(1.6rem, 3.8vw, 2.5rem)",
                lineHeight: "1.15",
              }}
            >
              We bring proven resources.{" "}
              <span className="text-[var(--bh-warm-amber)] italic">
                We personalise the decisions.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Two columns */}
        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-[820px] mx-auto mb-10 md:mb-12">
            {/* Global system */}
            <div className="border border-white/10 rounded-xl p-5 md:p-6">
              <span className="block font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-warm-amber)] mb-4">
                The global system provides:
              </span>
              <ul className="space-y-2.5">
                {globalSystem.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)]/60 flex-shrink-0" />
                    <span className="font-sans text-[var(--bh-warm-ivory)]/85 text-[0.88rem] md:text-[0.93rem]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beacon House layer */}
            <div className="border border-white/10 rounded-xl p-5 md:p-6">
              <span className="block font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-warm-amber)] mb-4">
                The Beacon House layer provides:
              </span>
              <ul className="space-y-2.5">
                {beaconHouseLayer.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)]/60 flex-shrink-0" />
                    <span className="font-sans text-[var(--bh-warm-ivory)]/85 text-[0.88rem] md:text-[0.93rem]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Integrated journey */}
        <ScrollReveal delay={300}>
          <div className="text-center">
            <p className="font-sans text-white/85 text-[0.82rem] md:text-[0.88rem] mb-5 md:mb-6">
              Together, they support one integrated journey:
            </p>

            {/* Desktop: horizontal flow */}
            <div className="hidden md:flex items-center justify-center gap-3 flex-wrap">
              {journeyStages.map((stage, i) => (
                <div key={stage} className="flex items-center gap-3">
                  <span className="font-serif italic text-[var(--bh-warm-ivory)] text-[1rem] md:text-[1.1rem]">
                    {stage}
                  </span>
                  {i < journeyStages.length - 1 && (
                    <span className="text-[var(--bh-warm-amber)] text-[1rem] md:text-[1.1rem]">
                      &rarr;
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: vertical flow */}
            <div className="md:hidden flex flex-col items-center gap-3">
              {journeyStages.map((stage, i) => (
                <div key={stage} className="flex flex-col items-center gap-3">
                  <span className="font-serif italic text-[var(--bh-warm-ivory)] text-[0.95rem]">
                    {stage}
                  </span>
                  {i < journeyStages.length - 1 && (
                    <div className="w-px h-4 bg-[var(--bh-warm-amber)]/40" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
