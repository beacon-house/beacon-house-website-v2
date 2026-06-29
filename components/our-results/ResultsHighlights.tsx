const highlights = [
  {
    value: "112",
    label: "Ivy League Offers",
  },
  {
    value: "950",
    label: "Top 50 Offers",
  },
  {
    value: "90%",
    label: "Reach School Acceptance for Grades 8 & 9 Students",
  },
  {
    value: "+10%",
    label: "Top School More Likely with Additional Yr of Our Program",
  },
];

export default function ResultsHighlights() {
  return (
    <section className="w-full bg-[var(--bh-warm-ivory)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 pt-16 md:pt-20 lg:pt-24 pb-6 md:pb-8">
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2 md:mb-2.5">
            At a Glance
          </span>
          <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-3 md:mb-4" />
          <h2
            className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight"
            style={{
              fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)",
              lineHeight: "1.15",
            }}
          >
            Numbers that tell the story
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {highlights.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[var(--bh-border-blue-gray)] rounded-2xl px-4 py-5 md:px-5 md:py-6 text-center flex flex-col items-center justify-center"
            >
              <p
                className="font-serif font-medium text-[var(--bh-navy)] tabular-nums leading-none mb-2 md:mb-3"
                style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)" }}
              >
                {stat.value}
              </p>
              <p className="font-sans text-[var(--bh-slate-text)] text-[0.7rem] md:text-[0.8rem] leading-[1.5]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
