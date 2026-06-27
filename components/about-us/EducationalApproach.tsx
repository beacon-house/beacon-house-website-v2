const approaches = [
  {
    number: "01",
    title: "Data Driven",
    description:
      "Our team has analyzed thousands of applications from every top university, looking at more than 200 variables along the way. We use this data to provide our students with objective, actionable insights that improve their applications.",
  },
  {
    number: "02",
    title: "Curriculum-led",
    description:
      "When students work with us, they benefit from our cutting-edge curriculum, built from the experiences of our 150+ Former Admissions Officers.",
  },
  {
    number: "03",
    title: "Tech-enabled",
    description:
      "Our custom student-management platform, The Brain, allows us to oversee all of our student-counselor work. The Brain keeps us on track and organized, and allows parents to check progress at all times.",
  },
];

export default function EducationalApproach() {
  return (
    <section className="w-full bg-[var(--bh-warm-ivory)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">

        <div className="flex items-center gap-3 mb-10 md:mb-12">
          <div className="w-[3px] h-7 bg-[var(--bh-warm-amber)] rounded-full flex-shrink-0" />
          <span className="font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--bh-slate-text)]">
            Our Educational Approach
          </span>
        </div>

        <p
          className="font-serif font-medium text-[var(--bh-deep-ink)] leading-[1.35] mb-12 md:mb-14 max-w-[800px]"
          style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
        >
          The right application strategy, personalized for every student, is
          just the starting point. Working with teenagers to make it happen on
          the ground is where the battle is won or lost. At Beacon
          House-Ingenius Prep, we excel at both.
        </p>

        {/* Three-column grid on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {approaches.map((approach) => (
            <div key={approach.title} className="border-t border-[var(--bh-border-blue-gray)] pt-6 md:pt-7">
              <span className="font-sans text-[0.65rem] font-semibold tracking-[0.18em] text-[var(--bh-warm-amber)] block mb-3">
                {approach.number}
              </span>
              <h3
                className="font-serif font-medium text-[var(--bh-deep-ink)] mb-4"
                style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)" }}
              >
                {approach.title}
              </h3>
              <p className="font-sans text-[var(--bh-slate-text)] text-[0.9rem] md:text-[0.95rem] leading-[1.8]">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
