const requirements = [
  "Former Admissions Officers",
  "Global admissions intelligence",
  "Course and university specialists",
  "Research and domain mentors",
  "Proven application systems",
  "Experience across thousands of admissions journeys",
];

export default function TheTradeOff() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">

        {/* Two-column: headline+body left, requirement cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14 md:mb-20">

          {/* Left: Eyebrow + headline + body */}
          <div className="animate-fade-in-up">
            <h2 className="text-sm font-bold tracking-[0.15em] text-navy uppercase mb-6">
              The Other Side of the Trade-Off
            </h2>
            <p className="text-[30px] md:text-[40px] lg:text-[44px] leading-[1.15] font-serif font-medium text-deep-ink mb-8">
              Smaller models can feel more personal. But they may not have the same depth of resources.
            </p>
            <div className="space-y-4 text-base md:text-lg text-slate">
              <p>A highly involved individual counsellor may understand the student well.</p>
              <p>But selective international admissions increasingly requires access to:</p>
            </div>
          </div>

          {/* Right: 2×3 requirement cards */}
          <div
            className="grid grid-cols-2 gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            {requirements.map((item) => (
              <div
                key={item}
                className="bg-white border border-blue-gray rounded-lg p-4 md:p-5 flex items-start gap-2.5"
                style={{ borderLeftWidth: "2px", borderLeftColor: "var(--bh-navy)" }}
              >
                <p className="text-sm md:text-base font-medium text-deep-ink leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hard break → climax */}
        <div
          className="border-t-2 pt-12 md:pt-16 animate-fade-in-up"
          style={{ borderTopColor: "var(--bh-navy)" }}
        >
          <p className="text-[34px] md:text-[48px] lg:text-[54px] leading-[1.1] font-serif font-medium text-deep-ink mb-12 md:mb-14 max-w-[620px]">
            Families are often forced to choose.
          </p>

          {/* Two choices */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_56px_1fr] items-stretch gap-4 md:gap-0">

            <div className="border border-blue-gray rounded-lg p-7 md:p-9 bg-blue-mist flex items-center">
              <p className="text-lg md:text-xl font-serif font-medium text-deep-ink leading-[1.45]">
                Personal attention without the full depth of resources.
              </p>
            </div>

            <div className="flex items-center justify-center py-2 md:py-0">
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-gray bg-ivory font-serif italic text-slate text-xs shrink-0">
                or
              </span>
            </div>

            <div className="border border-blue-gray rounded-lg p-7 md:p-9 bg-blue-mist flex items-center">
              <p className="text-lg md:text-xl font-serif font-medium text-deep-ink leading-[1.45]">
                World-class resources within a model that may not remain truly personal.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
