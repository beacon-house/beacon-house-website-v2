import { caseStudies } from "@/lib/case-studies-data";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudiesGrid() {
  return (
    <section className="w-full bg-[var(--bh-warm-ivory)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 pt-8 md:pt-10 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
