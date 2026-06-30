import Link from "next/link";
import { CTA_URL, CTA_LABEL } from "@/lib/constants";
import { caseStudies } from "@/lib/case-studies-data";
import type { CaseStudy } from "@/lib/case-studies-data";

interface CaseStudyCTAProps {
  study: CaseStudy;
}

export default function CaseStudyCTA({ study }: CaseStudyCTAProps) {
  const currentIndex = caseStudies.findIndex((s) => s.slug === study.slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];
  const prev = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];

  return (
    <section className="w-full bg-[var(--bh-warm-ivory)] border-t border-[var(--bh-border-blue-gray)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-14 md:py-16 lg:py-20 text-center">
        <h2
          className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight max-w-[720px] mx-auto mb-4 md:mb-5"
          style={{
            fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)",
            lineHeight: "1.1",
          }}
        >
          Ready to build your child&apos;s{" "}
          <span className="text-[var(--bh-warm-amber)]">defensible identity</span>?
        </h2>
        <p className="font-sans text-[var(--bh-slate-text)] text-[0.9rem] md:text-[1rem] leading-relaxed max-w-[640px] mx-auto mb-7 md:mb-8">
          Every transformation begins with a single strategic conversation. Request a review and see where the current path is compounding.
        </p>

        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[var(--bh-warm-amber)] text-[var(--bh-deep-ink)] font-sans font-semibold text-[0.95rem] md:text-[1rem] px-7 md:px-8 py-3.5 rounded-lg shadow-[0_10px_22px_rgba(20,33,61,0.24),0_3px_0_rgba(20,33,61,0.24)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(20,33,61,0.28),0_4px_0_rgba(20,33,61,0.24)] active:translate-y-[2px]"
        >
          {CTA_LABEL}
        </a>

        <div className="mt-12 md:mt-14 pt-8 md:pt-10 border-t border-[var(--bh-border-blue-gray)]">
          <p className="font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-5">
            Explore another transformation
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href={`/case-studies/${prev.slug}`}
              className="group flex items-center gap-3 font-sans text-[0.85rem] md:text-[0.9rem] font-semibold text-[var(--bh-slate-text)] hover:text-[var(--bh-navy)] transition-colors"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--bh-border-blue-gray)] group-hover:border-[var(--bh-navy)] group-hover:bg-[var(--bh-soft-blue-mist)] transition-all">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </span>
              {prev.name}
            </Link>
            <span className="hidden sm:block w-px h-6 bg-[var(--bh-border-blue-gray)]" />
            <Link
              href={`/case-studies/${next.slug}`}
              className="group flex items-center gap-3 font-sans text-[0.85rem] md:text-[0.9rem] font-semibold text-[var(--bh-slate-text)] hover:text-[var(--bh-navy)] transition-colors"
            >
              {next.name}
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--bh-border-blue-gray)] group-hover:border-[var(--bh-navy)] group-hover:bg-[var(--bh-soft-blue-mist)] transition-all">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
