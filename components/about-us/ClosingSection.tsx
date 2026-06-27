export default function ClosingSection() {
  return (
    <section id="final-cta" className="w-full bg-[var(--bh-deep-ink)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="block font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--bh-warm-amber)] mb-5 md:mb-6">
            Meet Our Counselors
          </span>
          <h2
            className="font-serif font-medium text-[var(--bh-warm-ivory)] leading-[1.15] mb-4 md:mb-5"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Still have questions?
          </h2>
          <p className="font-sans text-white/50 text-[0.95rem] md:text-[1rem] leading-[1.7]">
            Can't find the answer you're looking for? Please chat with our
            friendly team.
          </p>
        </div>
      </div>
    </section>
  );
}
