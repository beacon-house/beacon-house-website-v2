import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import AboutHero from "@/components/about-us/AboutHero";
import StructuralProblem from "@/components/about-us/StructuralProblem";
import TheTradeOff from "@/components/about-us/TheTradeOff";

export const metadata: Metadata = {
  title: "About Us | Beacon House",
  description: "Learn why Beacon House exists and how we help students build distinctive, credible, and coherent applications for the world's most selective universities.",
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
  openGraph: {
    title: "About Us | Beacon House",
    description: "Learn why Beacon House exists and how we help students build distinctive, credible, and coherent applications for the world's most selective universities.",
    url: `${SITE_URL}/about-us`,
    siteName: "Beacon House",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <AboutHero />
      <StructuralProblem />
      <TheTradeOff />
    </main>
  );
}
