import type { CaseStudy } from "@/lib/case-studies-data";
import StudentPlaceholder from "./StudentPlaceholder";

interface CaseStudyHeroProps {
  study: CaseStudy;
}

export default function CaseStudyHero({ study }: CaseStudyHeroProps) {
  const initial = study.name.replace("Student ", "");

  return (
    <section className="hero-gradient-bg w-full">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 pt-[108px] pb-16 md:pt-[130px] md:pb-20 lg:pt-[148px] lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <span className="inline-block font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--bh-slate-text)] mb-4 md:mb-5">
              Case Study
            </span>
            <h1
              className="font-serif font-medium tracking-tight text-[var(--bh-deep-ink)] mb-4 md:mb-5"
              style={{
                fontSize: "clamp(2.75rem, 8vw, 4.5rem)",
                lineHeight: "1.02",
              }}
            >
              {study.name}
            </h1>
            <div className="w-10 h-[2px] bg-[var(--bh-warm-amber)] mb-5 md:mb-6" />
            <p
              className="font-serif font-medium text-[var(--bh-navy)] leading-snug mb-5 md:mb-6"
              style={{
                fontSize: "clamp(1.25rem, 2.8vw, 1.75rem)",
              }}
            >
              {study.headline}
            </p>
            <p className="font-sans text-[var(--bh-slate-text)] text-[0.85rem] md:text-[0.95rem] leading-relaxed inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-[var(--bh-border-blue-gray)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)]" />
              Grade at entry: {study.gradeAtEntry}
            </p>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
              <StudentPlaceholder theme={study.theme} name={study.name} className="aspect-[4/5] shadow-2xl shadow-[rgba(20,33,61,0.12)]" />
              <div className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--bh-deep-ink)] flex items-center justify-center border-4 border-[var(--bh-warm-ivory)] shadow-lg">
                <span className="font-serif text-[var(--bh-warm-amber)] text-3xl md:text-4xl font-medium">
                  {initial}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
