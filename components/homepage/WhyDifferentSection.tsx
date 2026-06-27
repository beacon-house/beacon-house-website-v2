import type { ReactNode } from "react";

interface ComparisonItem {
  label: string;
  beacon: ReactNode;
  conventional: ReactNode;
}

const comparisons: ComparisonItem[] = [
  {
    label: "Who makes the key decisions?",
    beacon: "Founders + Former Admissions Officers",
    conventional: "Often junior-led",
  },
  {
    label: "How is depth built?",
    beacon: "Via mentorship by domain experts from top schools",
    conventional: "Usually, generalist counsellor-led",
  },
  {
    label: "What resources does my child have access to?",
    beacon: "Global (US/UK/India) research and mentorship access",
    conventional: "Internal or standardised options",
  },
  {
    label: "What experience informs the strategy?",
    beacon: "Experience across thousands of selective-university outcomes",
    conventional:
      "Advice may depend heavily on the experience of an individual counsellor",
  },
];

function ComparisonCard({ item }: { item: ComparisonItem }) {
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden">
      <div className="bg-[var(--bh-navy)] px-5 py-5 md:px-7 md:py-6">
        <span className="block font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--bh-warm-amber)] mb-2">
          {item.label}
        </span>
        <p className="font-serif font-medium text-[var(--bh-warm-ivory)] text-[1rem] md:text-[1.1rem] leading-snug">
          {item.beacon}
        </p>
      </div>

      <div className="relative h-px bg-white/10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[var(--bh-deep-ink)] border border-white/15 flex items-center justify-center">
          <span className="text-[0.65rem] font-semibold text-white/50 uppercase tracking-wider">
            VS
          </span>
        </div>
      </div>

      <div className="bg-[var(--bh-deep-ink)] px-5 py-5 md:px-7 md:py-6">
        <span className="block font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white/30 mb-2">
          {item.label}
        </span>
        <p className="font-sans text-white/50 text-[0.95rem] md:text-[1.05rem] leading-relaxed">
          {item.conventional}
        </p>
      </div>
    </div>
  );
}

export default function WhyDifferentSection() {
  return (
    <section
      id="why-different"
      className="w-full min-h-[100svh] md:min-h-[100dvh] bg-[var(--bh-deep-ink)] flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-8 md:px-8 md:pt-[82px] md:pb-8 lg:px-12 lg:pt-[84px] lg:pb-10">
        <h2
          className="font-serif font-medium text-[var(--bh-warm-ivory)] tracking-tight max-w-[930px] mb-5 md:mb-6"
          style={{
            fontSize: "clamp(2rem, 5.2vw, 3.5rem)",
            lineHeight: "1.12",
          }}
        >
          Most counselling models delegate important decisions downwards.{" "}
          <span className="text-[var(--bh-warm-amber)]">
            We move them upwards.
          </span>
        </h2>

        <p className="font-sans text-[var(--bh-warm-ivory)] text-[0.95rem] md:text-[1.02rem] leading-relaxed max-w-[760px] mb-8 md:mb-10">
          The decisions made through Grades 9 to 12 can either build optionality
          or quietly narrow it. That is why it matters who is involved in the
          key calls.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl">
          {comparisons.map((item) => (
            <ComparisonCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
