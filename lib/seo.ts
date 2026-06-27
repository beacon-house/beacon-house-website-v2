import type { Metadata } from "next";
import { SITE_URL } from "./constants";

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Beacon House",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Beacon House",
  url: SITE_URL,
  description:
    "Premium Ivy League admissions consultancy for Indian students. Founder-supervised strategy, profile building, and candidacy development for selective universities.",
  founder: [
    { "@type": "Person", name: "Karthik Lakshman" },
    { "@type": "Person", name: "Viswanathan" },
  ],
  knowsAbout: [
    "Ivy League admissions",
    "Selective university admissions",
    "Profile building",
    "Candidacy development",
    "College counselling",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    bestRating: "5",
    ratingSource: "Trustpilot",
  },
};

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
