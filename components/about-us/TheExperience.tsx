import ScrollReveal from "@/components/shared/ScrollReveal";
import CountUp from "@/components/shared/CountUp";

const stats = [
  { target: 620, prefix: "", suffix: "+", label: "Ivy League admits" },
  { target: 516, prefix: "", suffix: "", label: "Top 30 admits in 2025" },
  { target: 100, prefix: "", suffix: "+", label: "Admits to leading UK universities" },
  { target: 4, prefix: "$", suffix: "Mn+", label: "In scholarships" },
];

const qualitative = [
  "A global network of Former Admissions Officers",
  "Academic and domain mentors across leading universities and disciplines",
];

export default function TheExperience() {
  return (
    <section
      className="w-full min-h-[100svh] md:min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 75% 25%, rgba(32, 58, 107, 0.16) 0%, transparent 52%), radial-gradient(circle at 25% 75%, rgba(248, 175, 72, 0.04) 0%, transparent 38%), #14213D",
      }}
    >
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-14 md:px-8 md:pt-[80px] md:pb-12 lg:px-12 lg:pt-[82px] lg:pb-14">
        {/* Header */}
        <div className="max-w-[760px] mx-auto text-center mb-8 md:mb-10">
          <ScrollReveal>
            <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-warm-amber)] mb-2.5">
              The Experience Behind the Model
            </span>
            <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-6 md:mb-7" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className="font-serif font-medium text-[var(--bh-warm-ivory)] tracking-tight mb-4 md:mb-5"
              style={{
                fontSize: "clamp(1.6rem, 3.8vw, 2.5rem)",
                lineHeight: "1.15",
              }}
            >
              Global experience.{" "}
              <span className="text-[var(--bh-warm-amber)] italic">
                Local accountability.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-sans text-white/50 text-[0.88rem] md:text-[0.95rem] leading-relaxed">
              The partnership brings together experience spanning:
            </p>
          </ScrollReveal>
        </div>

        {/* Stat cards */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-[860px] mx-auto mb-7 md:mb-9">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.04] rounded-xl p-4 md:px-5 md:py-5 ring-1 ring-white/[0.06] border-t border-[var(--bh-warm-amber)]/20"
              >
                <CountUp
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-serif font-medium text-[var(--bh-warm-amber)] text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-none mb-1.5 md:mb-2"
                />
                <span className="font-sans text-[var(--bh-warm-ivory)]/70 text-[0.78rem] md:text-[0.84rem] leading-snug block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Qualitative items */}
        <ScrollReveal delay={400}>
          <div className="max-w-[680px] mx-auto mb-8 md:mb-10 space-y-2.5">
            {qualitative.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-3 text-center"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)]/60 flex-shrink-0" />
                <span className="font-sans text-white/65 text-[0.85rem] md:text-[0.92rem] leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Closing */}
        <ScrollReveal delay={500}>
          <div className="max-w-[620px] mx-auto text-center">
            <p className="font-serif font-medium text-[var(--bh-warm-ivory)] text-[1rem] md:text-[1.1rem] leading-snug mb-2.5">
              These resources create possibility.
            </p>
            <p className="font-sans text-white/55 text-[0.9rem] md:text-[0.98rem] leading-[1.65]">
              The Beacon House model ensures that possibility is applied{" "}
              <span className="text-[var(--bh-warm-amber)] italic font-medium">
                thoughtfully to each student
              </span>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
