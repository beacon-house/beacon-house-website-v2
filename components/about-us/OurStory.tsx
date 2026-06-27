export default function OurStory() {
  return (
    <section className="w-full bg-[var(--bh-warm-ivory)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">

        {/* Section label with amber bar accent */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <div className="w-[3px] h-7 bg-[var(--bh-warm-amber)] rounded-full flex-shrink-0" />
          <span className="font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--bh-slate-text)]">
            Our Story
          </span>
        </div>

        {/* Two-column on desktop: pull quote left, body right */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 xl:gap-20">

          {/* Left column — pull quote anchor */}
          <div className="lg:pt-2">
            <p
              className="font-serif font-medium text-[var(--bh-deep-ink)] leading-[1.35]"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)" }}
            >
              Ingenious Prep, the world's leading admissions counseling company
              and Beacon House, started by education veterans, come together to
              serve Indian students and families
            </p>
          </div>

          {/* Right column — body + closing */}
          <div>
            <div className="w-16 h-px bg-[var(--bh-border-blue-gray)] mb-8 md:mb-9" />

            <div className="space-y-5 md:space-y-6 text-[var(--bh-slate-text)] font-sans text-[0.95rem] md:text-[1rem] leading-[1.8]">
              <p>
                Today, the world recognises India's intellectual capital and its
                potential. The world's best universities welcome Indian students.
                But when they apply to these universities, Indian students are
                competing against the world's best. But the opportunities
                available to their international counterparts to build out a
                stand-out profile are not really available to Indian students.
              </p>
              <p>
                As entrepreneurs building for Indian students since 2008, we asked
                ourselves - how do we level the playing field and give our
                students the access to the world's very best resources.
              </p>
              <p>
                Thus was born the partnership between Beacon House and Ingenius
                Prep, the world's leading admissions counseling company. Founded
                in Yale campus in 2014, Ingenious is home to the largest number of
                Former Admission Officers from every top school in the United
                States that has helped countless students get into their dream
                schools.
              </p>
            </div>

            {/* Closing statement — amber left border for weight */}
            <div className="mt-8 md:mt-9 border-l-[3px] border-[var(--bh-warm-amber)] pl-5 md:pl-6">
              <p className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1rem] md:text-[1.1rem] leading-[1.6]">
                Together, Beacon House and InGenius Prep combine the best of both
                worlds - deep understanding of the needs of the Indian students
                with best-in-class team, curriculum and resources, to make dreams
                of thousands of Indian students come true.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
