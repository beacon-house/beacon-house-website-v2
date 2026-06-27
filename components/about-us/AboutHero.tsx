export default function AboutHero() {
  return (
    <section className="hero-gradient-bg w-full">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 pt-[108px] pb-16 md:pt-[130px] md:pb-20 lg:pt-[148px] lg:pb-24">
        <div className="max-w-[760px] mx-auto text-center">
          <span className="inline-block font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--bh-slate-text)] mb-4 md:mb-5">
            About Beacon House
          </span>
          <h1
            className="font-serif font-medium tracking-tight text-[var(--bh-deep-ink)]"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
              lineHeight: "1.08",
            }}
          >
            Making your
            <br className="md:hidden" />{" "}
            <em className="not-italic text-[var(--bh-warm-amber)]">dreams</em>
            <br className="hidden md:block" />{" "}
            come true
          </h1>
          <div className="w-10 h-[2px] bg-[var(--bh-warm-amber)] mx-auto mt-7 md:mt-8 mb-5 md:mb-6" />
          <p className="font-sans text-[var(--bh-slate-text)] text-[1rem] md:text-[1.1rem] leading-[1.7]">
            Founded at Yale and operating around the globe,
            <br className="hidden md:block" />{" "}
            we are the world's leading{" "}
            <span className="whitespace-nowrap">admissions experts.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
