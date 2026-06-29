import HeroSection from "@/components/homepage/HeroSection";
import EarlyYearsSection from "@/components/homepage/EarlyYearsSection";
import WhyDifferentSection from "@/components/homepage/WhyDifferentSection";
import HowWeBuildSection from "@/components/homepage/HowWeBuildSection";
import JourneySection from "@/components/homepage/JourneySection";
import ResultsSection from "@/components/homepage/ResultsSection";
import FinalCTASection from "@/components/homepage/FinalCTASection";
import FAQSection from "@/components/homepage/FAQSection";
import { faqJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/faq-data";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqs)),
        }}
      />
      <HeroSection />
      <EarlyYearsSection />
      <WhyDifferentSection />
      <HowWeBuildSection />
      <JourneySection />
      <ResultsSection />
      <FinalCTASection />
      <FAQSection />
    </>
  );
}
