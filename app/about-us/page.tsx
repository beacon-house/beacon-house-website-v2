import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import AboutHero from "@/components/about-us/AboutHero";
import OurStory from "@/components/about-us/OurStory";
import LeadershipTeam from "@/components/about-us/LeadershipTeam";
import AdmissionTeam from "@/components/about-us/AdmissionTeam";
import EducationalApproach from "@/components/about-us/EducationalApproach";
import ClosingSection from "@/components/about-us/ClosingSection";

export const metadata: Metadata = buildMetadata({
  title: "About Us: Beacon House - Ivy League Admissions Experts",
  description:
    "Founded at Yale, Beacon House partners with InGenius Prep to bring the world's best admissions resources to Indian students. Meet our founders and team of 150+ Former Admissions Officers.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <LeadershipTeam />
      <AdmissionTeam />
      <EducationalApproach />
      <ClosingSection />
    </>
  );
}
