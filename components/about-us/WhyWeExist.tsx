import ScrollReveal from "@/components/shared/ScrollReveal";

const attributes = [
  "Excellent grades",
  "Rigorous subjects",
  "Serious activities",
  "Ambitious goals",
];

function AttributeCard() {
  return (
    <div className="bg-[var(--bh-deep-ink)] rounded-xl p-6 md:p-7 ring-1 ring-white/[0.06] border-t-2 border-[var(--bh-warm-amber)]/30">
      <span className="block font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-warm-amber)] mb-4 md:mb-5">
        They have
      </span>
      <ul className="space-y-3 md:space-y-3.5">
        {attributes.map((attr) => (
          <li key={attr} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)] flex-shrink-0" />
            <span className="font-sans text-[0.9rem] md:text-[0.95rem] font-medium text-[var(--bh-warm-ivory)]">
              {attr}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhyWeExist() {
  return (
    <section className="about-gradient-ivory relative w-full min-h-[100svh] md:min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      <div className="max-w-content mx-auto w-full px-6 pt-[88px] pb-14 md:px-8 md:pt-[80px] md:pb-10 lg:px-12 lg:pt-[82px] lg:pb-12">
        <div className="grid md:grid-cols-[minmax(0,1.12fr)_minmax(260px,0.68fr)] md:items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left: text content */}
          <div className="max-w-[600px]">
            {/* Eyebrow */}
            <ScrollReveal>
              <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2.5">
                Why We Exist
              </span>
              <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mb-6 md:mb-7" />
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={100}>
              <h2
                className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight mb-8 md:mb-9"
                style={{
                  fontSize: "clamp(1.75rem, 4.5vw, 2.85rem)",
                  lineHeight: "1.14",
                }}
              >
                The students competing for the most selective universities are{" "}
                <span className="text-[var(--bh-warm-amber)] italic">
                  already strong
                </span>
                .
              </h2>
            </ScrollReveal>

            {/* Mobile: attribute card here */}
            <ScrollReveal delay={200} className="md:hidden mb-8">
              <AttributeCard />
            </ScrollReveal>

            {/* Pivot */}
            <ScrollReveal delay={300}>
              <p className="font-sans text-[var(--bh-slate-text)] text-[0.95rem] md:text-[1.06rem] leading-[1.72] mb-6 md:mb-8">
                What separates them is not simply how much they have done. It is
                whether their choices have developed into a distinctive,
                credible and coherent applicant.
              </p>
            </ScrollReveal>

            {/* Thesis */}
            <ScrollReveal delay={400}>
              <p
                className="font-serif font-medium text-[var(--bh-navy)] tracking-tight"
                style={{
                  fontSize: "clamp(1.25rem, 3vw, 1.7rem)",
                  lineHeight: "1.3",
                }}
              >
                That requires{" "}
                <span className="text-[var(--bh-warm-amber)] italic">
                  true personalisation
                </span>
                .
              </p>
            </ScrollReveal>
          </div>

          {/* Right: attribute card (desktop only) */}
          <ScrollReveal delay={250} className="hidden md:block">
            <AttributeCard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
