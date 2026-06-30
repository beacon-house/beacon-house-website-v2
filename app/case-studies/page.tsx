import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import FinalCTASection from "@/components/homepage/FinalCTASection";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies: Student Transformations | Beacon House",
  description:
    "See how Beacon House students moved from scattered potential to a clear, defensible academic identity—from aerospace and quantum computing to astrophysics and ISEF.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <FinalCTASection />
    </>
  );
}
