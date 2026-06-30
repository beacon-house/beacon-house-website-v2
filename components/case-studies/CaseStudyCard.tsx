import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies-data";
import StudentPlaceholder from "./StudentPlaceholder";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block h-full"
    >
      <article className="relative h-full flex flex-col bg-white border border-[var(--bh-border-blue-gray)] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--bh-navy)] hover:shadow-[0_18px_40px_rgba(20,33,61,0.10)]">
        {/* Top visual */}
        <div className="relative h-48 sm:h-52 md:h-56">
          <StudentPlaceholder theme={study.theme} name={study.name} className="h-full rounded-none border-0 rounded-t-2xl" />
          <div className="absolute top-4 left-4">
            <span className="inline-block font-sans text-[0.6rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--bh-slate-text)] bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[var(--bh-border-blue-gray)]">
              Case Study
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--bh-warm-amber)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <h3
              className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 4vw, 1.875rem)", lineHeight: "1.1" }}
            >
              {study.name}
            </h3>
            <span className="font-sans text-[0.65rem] sm:text-[0.7rem] font-medium text-[var(--bh-slate-text)] bg-[var(--bh-soft-blue-mist)] px-2.5 py-1 rounded-md">
              {study.gradeAtEntry}
            </span>
          </div>

          <p className="font-sans text-[var(--bh-slate-text)] text-[0.85rem] sm:text-[0.9rem] leading-relaxed mb-5 flex-1">
            {study.headline}
          </p>

          {/* Before / After micro-preview */}
          <div className="space-y-2 mb-5">
            <div className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--bh-border-blue-gray)] mt-2" />
              <p className="font-sans text-[0.75rem] sm:text-[0.8rem] text-[var(--bh-slate-text)] leading-snug">
                <span className="text-[var(--bh-slate-text)]/60 font-medium uppercase tracking-wider text-[0.65rem]">Before: </span>
                {study.before.points.slice(0, 2).join(" · ")}
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--bh-warm-amber)] mt-2" />
              <p className="font-sans text-[0.75rem] sm:text-[0.8rem] text-[var(--bh-slate-text)] leading-snug">
                <span className="text-[var(--bh-navy)] font-medium uppercase tracking-wider text-[0.65rem]">After: </span>
                {study.after.points.slice(0, 2).join(" · ")}
              </p>
            </div>
          </div>

          {/* CTA link */}
          <div className="flex items-center justify-between pt-4 border-t border-[var(--bh-border-blue-gray)]">
            <span className="font-sans text-[0.8rem] sm:text-[0.85rem] font-semibold text-[var(--bh-navy)] group-hover:text-[var(--bh-deep-ink)] transition-colors">
              Read the transformation
            </span>
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--bh-soft-blue-mist)] text-[var(--bh-navy)] group-hover:bg-[var(--bh-warm-amber)] group-hover:text-[var(--bh-deep-ink)] transition-all duration-300">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Corner index */}
        <span className="absolute top-4 right-4 font-serif text-[var(--bh-deep-ink)]/5 text-[3rem] sm:text-[3.5rem] leading-none pointer-events-none select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </article>
    </Link>
  );
}
