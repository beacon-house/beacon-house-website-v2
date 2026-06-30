import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import WhyWeExist from "@/components/about-us/WhyWeExist";
import StructuralProblem from "@/components/about-us/StructuralProblem";
import TheTradeOff from "@/components/about-us/TheTradeOff";
import TheQuestion from "@/components/about-us/TheQuestion";
import GlobalResources from "@/components/about-us/GlobalResources";
import BeaconHouseValue from "@/components/about-us/BeaconHouseValue";
import HowModelWorks from "@/components/about-us/HowModelWorks";
import WhatThisMeans from "@/components/about-us/WhatThisMeans";
import TheExperience from "@/components/about-us/TheExperience";
import OurCommitment from "@/components/about-us/OurCommitment";
import FinalCTA from "@/components/about-us/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "About Beacon House: Premium Admissions Advisory for Indian Families",
  description:
    "Beacon House was created to remove the trade-off between personal attention and world-class admissions resources. Founder-led judgement, global expertise, one student at a time.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <>
      <WhyWeExist />
      <StructuralProblem />
      <TheTradeOff />
      <TheQuestion />
      <GlobalResources />
      <BeaconHouseValue />
      <HowModelWorks />
      <WhatThisMeans />
      <TheExperience />
      <OurCommitment />
      <FinalCTA />
    </>
  );
}
