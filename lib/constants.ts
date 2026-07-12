export const SITE_URL = "https://beaconhouse.in";
export const CTA_URL = "https://admissions.beaconhouse.in/application-form";
export const CTA_LABEL = "Request a Strategic Review";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Leadership Team", href: "/our-leadership-team" },
  { label: "Our Program", href: "/our-program" },
  { label: "Our Results", href: "/our-results" },
  { label: "Case Studies", href: "/case-studies" },
] as const;

// Homepage section anchors — surfaced as quick links in the footer
// since they're not standalone pages.
export const FOOTER_QUICK_LINKS = [
  { label: "Why Beacon House", href: "/#why-different" },
  { label: "How We Build", href: "/#how-we-build" },
  { label: "The Journey", href: "/#journey" },
  { label: "FAQs", href: "/#faqs" },
] as const;
