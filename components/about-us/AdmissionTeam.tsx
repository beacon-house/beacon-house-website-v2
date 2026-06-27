const stats = [
  { number: "150+", label: "Former admission officers" },
  { number: "75+", label: "Graduate Coaches" },
  { number: "75+", label: "Academic Mentors" },
  { number: "150+", label: "Writing Teachers" },
  { number: "75+", label: "Corporate Partnerships" },
];

export default function AdmissionTeam() {
  return (
    <section className="w-full bg-[var(--bh-soft-blue-mist)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">

        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-5 md:mb-6">
            <div className="w-[3px] h-7 bg-[var(--bh-warm-amber)] rounded-full flex-shrink-0" />
            <span className="font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--bh-slate-text)]">
              Meet your admission team
            </span>
          </div>
          <h2
            className="font-serif font-medium text-[var(--bh-deep-ink)] leading-[1.2] max-w-[680px] mx-auto"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
          >
            The team that once selected candidates to the top universities, will
            now work with you
          </h2>
        </div>

        {/* Stats — full-width divided row on desktop, 2-col grid on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-y-0 md:divide-x md:divide-[var(--bh-border-blue-gray)] max-w-[1000px] mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="md:px-6 first:pl-0 last:pr-0 text-center md:text-left">
              <p
                className="font-serif font-medium text-[var(--bh-deep-ink)] leading-none mb-2"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
              >
                {stat.number}
              </p>
              <p className="font-sans text-[var(--bh-slate-text)] text-[0.8rem] md:text-[0.85rem] leading-[1.5]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
