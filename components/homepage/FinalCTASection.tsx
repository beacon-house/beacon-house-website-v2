import { CTA_URL, CTA_LABEL } from "@/lib/constants";

const qualifiers = ["IB & IGCSE focused", "Grades 8 to 12", "International aiming"];

export default function FinalCTASection() {
  return (
    <section id="final-cta" className="w-full bg-[var(--bh-deep-ink)]">
      <div className="max-w-content mx-auto w-full px-6 py-14 md:px-8 md:py-16 lg:px-12 lg:py-20 text-center">
        <h2
          className="font-serif font-medium text-[var(--bh-warm-ivory)] tracking-tight max-w-[820px] mx-auto mb-4 md:mb-5"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.35rem)",
            lineHeight: "1.15",
          }}
        >
          Understand where your child stands{" "}
          <span className="text-[var(--bh-warm-amber)]">
            before the application year arrives.
          </span>
        </h2>

        <p className="font-sans text-[var(--bh-warm-ivory)]/70 text-[0.9rem] md:text-[1rem] leading-relaxed max-w-[640px] mx-auto mt-4 mb-6">
          If your child is in IB or IGCSE Grades 8 to 12 and aiming
          internationally, this is the right time to assess whether the current
          path is compounding in the right direction.
        </p>

        <div className="mt-6 md:mt-7 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
          {qualifiers.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border border-[var(--bh-warm-amber-light)]/45 bg-[rgba(255,255,255,0.04)] px-3.5 py-1.5 font-sans text-[0.72rem] md:text-[0.78rem] font-semibold text-[var(--bh-warm-amber-light)]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 md:mt-8">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[var(--bh-warm-amber)] text-[var(--bh-deep-ink)] font-sans font-semibold text-[0.95rem] md:text-[1rem] px-7 md:px-8 py-3.5 rounded-lg shadow-[0_10px_22px_rgba(20,33,61,0.24),0_3px_0_rgba(20,33,61,0.24)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(20,33,61,0.28),0_4px_0_rgba(20,33,61,0.24)] active:translate-y-[2px] active:shadow-[0_4px_10px_rgba(20,33,61,0.2),0_1px_0_rgba(20,33,61,0.22)]"
          >
            {CTA_LABEL}
          </a>
        </div>
      </div>
    </section>
  );
}
