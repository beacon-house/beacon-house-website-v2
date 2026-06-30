import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies-data";
import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import TransformationSection from "@/components/case-studies/TransformationSection";
import JourneySection from "@/components/case-studies/JourneySection";
import KeyHighlightsSection from "@/components/case-studies/KeyHighlightsSection";
import ProofPointsSection from "@/components/case-studies/ProofPointsSection";
import ImpactSection from "@/components/case-studies/ImpactSection";
import OutcomeSection from "@/components/case-studies/OutcomeSection";
import CaseStudyCTA from "@/components/case-studies/CaseStudyCTA";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return buildMetadata({
    title: `${study.name}: ${study.headline} | Beacon House Case Study`,
    description: `See how ${study.name} moved from ${study.before.subtitle.toLowerCase()} to ${study.after.subtitle.toLowerCase()} with Beacon House.`,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <CaseStudyHero study={study} />
      <TransformationSection study={study} />
      {study.journey ? (
        <JourneySection study={study} />
      ) : study.keyHighlights ? (
        <KeyHighlightsSection study={study} />
      ) : null}
      <ProofPointsSection study={study} />
      {study.impact ? <ImpactSection study={study} /> : null}
      {study.outcome ? <OutcomeSection study={study} /> : null}
      <CaseStudyCTA study={study} />
    </>
  );
}
