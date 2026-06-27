const blocks = [
  {
    title: "Academic Direction",
    description:
      "What the student leans into academically begins shaping which university paths feel credible later.",
  },
  {
    title: "Subject and Rigor Choices",
    description:
      "The right subject mix and level of academic challenge can preserve options. The wrong fit can quietly narrow them.",
  },
  {
    title: "Evidence-Building",
    description:
      "Research, projects, competitions, writing, portfolios and initiatives need time to develop depth and credibility.",
  },
  {
    title: "Strategic Focus",
    description:
      "The goal is not more activity. It is knowing what to deepen, what to reduce and what should not be left too late.",
  },
];

export default function EarlyYearsSection() {
  return (
    <section
      id="why-early-years"
      className="w-full min-h-[100svh] md:min-h-[100dvh] bg-[var(--bh-soft-blue-mist)] flex flex-col justify-center"
    >
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-8 md:px-8 md:pt-[80px] md:pb-10 lg:px-12 lg:pt-[82px] lg:pb-12">
        <div className="text-center mb-8 md:mb-12 lg:mb-14">
          <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2 md:mb-2.5">
            Why The Early Years Matter
          </span>
          <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-3 md:mb-4" />
          <h2
            className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight max-w-[800px] mx-auto mb-3 md:mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              lineHeight: "1.12",
            }}
          >
            The choices made earlier often decide which university paths remain
            realistic later.
          </h2>
          <p className="font-sans text-[var(--bh-slate-text)] text-[0.95rem] md:text-[1.05rem] leading-relaxed max-w-[640px] mx-auto">
            Subject choices, activity depth, academic direction and
            evidence-building all start compounding earlier than most families
            realise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[900px] mx-auto">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="bg-white border border-[var(--bh-border-blue-gray)] rounded-xl px-6 py-5 md:px-7 md:py-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-1 h-6 bg-[var(--bh-warm-amber)] rounded-full flex-shrink-0 mt-1" />
                <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1.15rem] md:text-[1.25rem] leading-tight">
                  {block.title}
                </h3>
              </div>
              <p className="font-sans text-[var(--bh-slate-text)] text-[0.9rem] md:text-[0.95rem] leading-relaxed pl-4">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
