import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import LeadershipTeam from "@/components/about-us/LeadershipTeam";

export const metadata: Metadata = buildMetadata({
  title: "Our Leadership Team | Beacon House",
  description:
    "Meet the people behind Beacon House — the Beacon House and InGenius Prep leadership teams.",
  path: "/our-leadership-team",
});

export default function OurLeadershipTeamPage() {
  return <LeadershipTeam />;
}
