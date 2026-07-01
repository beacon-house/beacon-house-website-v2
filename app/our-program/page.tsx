import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ProgramHero from "@/components/our-program/ProgramHero";
import PhaseOneSection from "@/components/our-program/PhaseOneSection";
import PhaseTwoSection from "@/components/our-program/PhaseTwoSection";
import ProgramFinalCTA from "@/components/our-program/ProgramFinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Our Program: Build the Student Before the Application | Beacon House",
  description:
    "A two-phase program for Grades 8–12: Candidacy Building creates direction, depth and evidence; Application Counselling brings it together into the strongest university application.",
  path: "/our-program",
});

export default function OurProgramPage() {
  return (
    <>
      <ProgramHero />
      <PhaseOneSection />
      <PhaseTwoSection />
      <ProgramFinalCTA />
    </>
  );
}
