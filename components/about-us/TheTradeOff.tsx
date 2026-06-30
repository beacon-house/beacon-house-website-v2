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

        {/* Setup: Eyebrow + Headline + Body + List */}
        <div className="max-w-[760px] animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-[0.15em] text-navy uppercase mb-6">
            The Other Side of the Trade-Off
          </h2>

          <p className="text-[32px] md:text-[44px] lg:text-[48px] leading-[1.15] font-serif font-medium text-deep-ink mb-10">
            Smaller models can feel more personal. But they may not have the same depth of resources.
          </p>

          <div className="space-y-5 text-base md:text-lg text-slate mb-8">
            <p>
              A highly involved individual counsellor may understand the student well.
            </p>
            <p>
              But selective international admissions increasingly requires access to:
            </p>
          </div>

          <div className="border-l-2 border-amber pl-6 mb-0">
            <ul className="space-y-3 text-base md:text-lg text-deep-ink font-medium">
              {requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Narrative break */}
        <div className="border-t border-blue-gray mt-14 md:mt-20 pt-14 md:pt-20 animate-fade-in-up">

          {/* The dilemma statement */}
          <p className="text-2xl md:text-[34px] lg:text-[38px] leading-[1.2] font-serif font-medium text-deep-ink mb-12 md:mb-16 max-w-[600px]">
            Families are often forced to choose.
          </p>

          {/* Two-choice layout */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] items-stretch gap-4 md:gap-0">

            {/* Choice 1 */}
            <div className="border border-blue-gray rounded-lg p-7 md:p-9 bg-blue-mist flex items-center">
              <p className="text-lg md:text-xl lg:text-2xl font-serif font-medium text-deep-ink leading-[1.45]">
                Personal attention without the full depth of resources.
              </p>
            </div>

            {/* Or divider */}
            <div className="flex items-center justify-center py-3 md:py-0">
              <span className="flex items-center justify-center w-11 h-11 rounded-full border border-blue-gray bg-ivory font-serif italic text-slate text-sm shrink-0">
                or
              </span>
            </div>

            {/* Choice 2 */}
            <div className="border border-blue-gray rounded-lg p-7 md:p-9 bg-blue-mist flex items-center">
              <p className="text-lg md:text-xl lg:text-2xl font-serif font-medium text-deep-ink leading-[1.45]">
                World-class resources within a model that may not remain truly personal.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
