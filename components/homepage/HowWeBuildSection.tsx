const steps = [
  {
    number: "1",
    title: "Direction",
    description:
      "We identify the academic, personal and strategic direction that can anchor the student\u2019s journey.",
  },
  {
    number: "2",
    title: "Positioning",
    description:
      "We shape how the student\u2019s choices, strengths and interests should come together.",
  },
  {
    number: "3",
    title: "Evidence",
    description:
      "We help build the research, projects, writing, competitions, portfolio work and initiatives that make the direction credible.",
  },
  {
    number: "4",
    title: "Application",
    description:
      "The final application brings the built profile together. It should not be the first time the story is created.",
  },
];

export default function HowWeBuildSection() {
  return (
    <section
      id="how-we-build"
      className="w-full min-h-[100svh] md:min-h-[100dvh] bg-[var(--bh-warm-ivory)] flex flex-col justify-center"
    >
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-8 md:px-8 md:pt-[80px] md:pb-8 lg:px-12 lg:pt-[82px] lg:pb-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-14">
          <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2 md:mb-2.5">
            How We Build
          </span>
          <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-3 md:mb-4" />
          <h2
            className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight max-w-[720px] mx-auto"
            style={{
              fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)",
              lineHeight: "1.1",
            }}
          >
            We build the applicant before we build the application.
          </h2>
        </div>

        <div className="md:hidden relative pl-16 pr-2 max-w-[480px] mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative mb-7 last:mb-0">
              {index < steps.length - 1 && (
                <div className="absolute left-[-44px] top-12 w-[2px] h-full bg-gradient-to-b from-[var(--bh-warm-amber)] to-[var(--bh-warm-amber-light)]" />
              )}
              <div className="absolute left-[-64px] top-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--bh-warm-amber)] to-[var(--bh-warm-amber-light)] flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-[var(--bh-deep-ink)]">
                  {step.number}
                </span>
              </div>
              <div className="ml-1">
                <h3 className="font-serif text-[var(--bh-navy)] text-[1.0625rem] font-medium mb-1.5 leading-tight">
                  {step.title}
                </h3>
                <p className="font-sans text-[var(--bh-slate-text)] text-[0.8125rem] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block relative max-w-[1000px] mx-auto">
          <div className="flex justify-between items-start relative">
            <div className="absolute top-10 left-10 right-10 h-[3px] bg-gradient-to-r from-[var(--bh-warm-amber)] via-[var(--bh-warm-amber)] to-[var(--bh-warm-amber-light)] rounded-full" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center"
                style={{ width: "22%" }}
              >
                <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[var(--bh-warm-amber)] to-[var(--bh-warm-amber-light)] flex items-center justify-center shadow-lg mb-8">
                  <span className="text-2xl font-bold text-[var(--bh-deep-ink)]">
                    {step.number}
                  </span>
                </div>
                <div className="text-center px-2">
                  <h3 className="font-serif text-[var(--bh-navy)] text-[1.125rem] lg:text-[1.25rem] font-medium mb-2.5 leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[var(--bh-slate-text)] text-[0.875rem] lg:text-[1rem] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <span className="font-sans text-[0.8rem] md:text-[0.9rem] font-medium text-[var(--bh-slate-text)] tracking-wide">
              Direction → Positioning → Evidence → Application
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
