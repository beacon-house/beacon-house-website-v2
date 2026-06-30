const requirements = [
  "Former Admissions Officers",
  "Global admissions intelligence",
  "Course and university specialists",
  "Research and domain mentors",
  "Proven application systems",
  "Experience across thousands of admissions journeys",
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
    </svg>
  );
}

export default function TheTradeOff() {
  return (
    <section className="about-gradient-ivory py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">

        {/* Eyebrow + headline */}
        <div className="mb-10 md:mb-14 animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-[0.15em] text-navy uppercase mb-6">
            The Other Side of the Trade-Off
          </h2>
          <p className="text-[30px] md:text-[40px] lg:text-[44px] leading-[1.15] font-serif font-medium text-deep-ink max-w-[820px]">
            Smaller models can feel more personal. But they may not have the same depth of resources.
          </p>
        </div>

        {/* Body + requirements left, climax right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left column */}
          <div className="space-y-6 text-base md:text-lg text-slate animate-fade-in-up">
            <p>A highly involved individual counsellor may understand the student well.</p>
            <p className="font-medium text-deep-ink">
              But selective international admissions increasingly requires access to:
            </p>
            <ul className="space-y-3 mt-2">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-5 h-5 mt-1 rounded-full bg-amber/10 text-amber shrink-0">
                    <CheckIcon className="w-3 h-3" />
                  </span>
                  <span className="text-deep-ink font-medium text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: the forced choice */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="flex flex-col items-center text-center mb-8">
              <StarIcon className="w-4 h-4 text-amber mb-4" />
              <div className="w-12 h-px bg-blue-gray mb-6" />
              <p className="text-[28px] md:text-[36px] leading-[1.15] font-serif font-medium text-deep-ink">
                Families are often forced to choose.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_56px_1fr] items-stretch gap-4 md:gap-0">
              <div className="border border-blue-gray rounded-lg p-6 md:p-8 bg-blue-mist flex items-center justify-center">
                <p className="text-lg md:text-xl font-serif font-medium text-deep-ink leading-[1.45] text-center">
                  Personal attention without the full depth of resources.
                </p>
              </div>

              <div className="flex items-center justify-center py-2 md:py-0">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-gray bg-ivory font-serif italic text-slate text-xs shrink-0">
                  or
                </span>
              </div>

              <div className="border border-blue-gray rounded-lg p-6 md:p-8 bg-blue-mist flex items-center justify-center">
                <p className="text-lg md:text-xl font-serif font-medium text-deep-ink leading-[1.45] text-center">
                  World-class resources within a model that may not remain truly personal.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
