import ScrollReveal from "@/components/shared/ScrollReveal";

const resources = [
  {
    title: "Global admissions intelligence",
    description:
      "Experience built across thousands of selective university applications.",
  },
  {
    title: "Former Admissions Officers",
    description:
      "Professionals who understand how applications are evaluated inside leading universities.",
  },
  {
    title: "Specialist mentors",
    description:
      "Researchers, domain experts and top-university mentors who can support serious academic and real-world work.",
  },
  {
    title: "Proven admissions systems",
    description:
      "Structured expertise across university strategy, positioning, essays, recommendations and interviews.",
  },
];

export default function GlobalResources() {
  return (
    <section className="about-gradient-ivory relative w-full min-h-[100svh] md:min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-14 md:px-8 md:pt-[80px] md:pb-12 lg:px-12 lg:pt-[82px] lg:pb-14">
        <div className="max-w-[820px] mx-auto text-center mb-9 md:mb-11">
          {/* Eyebrow */}
          <ScrollReveal>
            <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2.5">
              Why Beacon House &times; InGenius Prep
            </span>
            <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-6 md:mb-7" />
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={100}>
            <h2
              className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight mb-4 md:mb-5"
              style={{
                fontSize: "clamp(1.55rem, 3.6vw, 2.35rem)",
                lineHeight: "1.15",
              }}
            >
              Global scale at the resource layer.{" "}
              <span className="text-[var(--bh-warm-amber)] italic">
                Deliberate intimacy at the decision layer.
              </span>
            </h2>
          </ScrollReveal>

          {/* Intro */}
          <ScrollReveal delay={200}>
            <p className="font-sans text-[var(--bh-slate-text)] text-[0.92rem] md:text-[1rem] leading-[1.7] max-w-[560px] mx-auto">
              Through our partnership with InGenius Prep, students gain access
              to:
            </p>
          </ScrollReveal>
        </div>

        {/* Resource cards */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[820px] mx-auto mb-9 md:mb-11">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white border border-[var(--bh-border-blue-gray)] rounded-xl px-6 py-5 md:px-7 md:py-6"
              >
                <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mb-4" />
                <h3 className="font-serif font-medium text-[var(--bh-navy)] text-[1.02rem] md:text-[1.12rem] leading-tight mb-2.5">
                  {resource.title}
                </h3>
                <p className="font-sans text-[var(--bh-slate-text)] text-[0.88rem] md:text-[0.93rem] leading-[1.6]">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Closing */}
        <ScrollReveal delay={400}>
          <p className="font-sans text-[var(--bh-slate-text)] text-[0.92rem] md:text-[1rem] leading-[1.7] max-w-[600px] mx-auto text-center">
            Beacon House ensures that these resources are applied to the
            individual child&mdash;{" "}
            <span className="font-medium text-[var(--bh-navy)]">
              not delivered as a standard package
            </span>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
