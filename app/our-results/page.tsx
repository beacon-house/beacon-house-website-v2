import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ResultsHero from "@/components/our-results/ResultsHero";
import ResultsHighlights from "@/components/our-results/ResultsHighlights";
import ResultsTable from "@/components/our-results/ResultsTable";
import { resultTables } from "@/lib/results-data";
import FinalCTASection from "@/components/homepage/FinalCTASection";

export const metadata: Metadata = buildMetadata({
  title: "Our Results: Beacon House Admissions Outcomes Class of 2029",
  description:
    "Class of 2029 offers and five-year cumulative admits across US national universities, liberal arts colleges, UK universities, and art & design schools.",
  path: "/our-results",
});

export default function OurResultsPage() {
  return (
    <>
      <ResultsHero />

      <ResultsHighlights />

      <section className="w-full bg-[var(--bh-warm-ivory)]">
        <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 pb-16 md:pb-20 lg:pb-24 pt-8 md:pt-10">
          <div className="space-y-14 md:space-y-20 lg:space-y-24">
            {resultTables.map((table) => (
              <ResultsTable key={table.id} table={table} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
