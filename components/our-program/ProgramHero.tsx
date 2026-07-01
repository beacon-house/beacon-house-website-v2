"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import { CTA_URL, CTA_LABEL } from "@/lib/constants";

function CandidacyIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" fill="var(--bh-soft-blue-mist)" />
      <circle cx="160" cy="100" r="120" fill="url(#candGlow)" />
      <ellipse cx="160" cy="100" rx="95" ry="52" stroke="var(--bh-border-blue-gray)" strokeWidth="1" transform="rotate(-12 160 100)" />
      <ellipse cx="160" cy="100" rx="95" ry="52" stroke="var(--bh-navy)" strokeWidth="1.5" transform="rotate(-12 160 100)" strokeDasharray="8 8" opacity="0.5" />
      <ellipse cx="160" cy="100" rx="68" ry="38" stroke="var(--bh-border-blue-gray)" strokeWidth="1" transform="rotate(18 160 100)" />
      <circle cx="160" cy="100" r="12" fill="var(--bh-deep-ink)" />
      <circle cx="160" cy="100" r="5" fill="var(--bh-warm-amber)" />
      <circle cx="72" cy="100" r="7" fill="var(--bh-navy)" />
      <circle cx="248" cy="100" r="7" fill="var(--bh-warm-amber)" />
      <circle cx="160" cy="28" r="5" fill="var(--bh-navy)" />
      <circle cx="160" cy="172" r="5" fill="var(--bh-border-blue-gray)" />
      <path d="M72 100 C105 100, 130 100, 148 100" stroke="var(--bh-navy)" strokeWidth="2" strokeLinecap="round" />
      <path d="M172 100 C190 100, 220 100, 248 100" stroke="var(--bh-warm-amber)" strokeWidth="2" strokeLinecap="round" />
      <path d="M160 39 C160 63, 160 82, 160 92" stroke="var(--bh-navy)" strokeWidth="2" strokeLinecap="round" />
      <path d="M160 108 C160 128, 160 150, 160 167" stroke="var(--bh-border-blue-gray)" strokeWidth="2" strokeLinecap="round" />
      <path d="M212 58 C195 74, 182 88, 172 97" stroke="var(--bh-warm-amber)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M168 93 L172 97 L165 99" stroke="var(--bh-warm-amber)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <radialGradient id="candGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--bh-warm-ivory)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--bh-soft-blue-mist)" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function ApplicationIllustration() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" fill="var(--bh-warm-ivory)" />
      <circle cx="160" cy="100" r="100" fill="url(#appGlow)" />
      <circle cx="160" cy="100" r="72" stroke="var(--bh-border-blue-gray)" strokeWidth="1" />
      <circle cx="160" cy="100" r="55" stroke="var(--bh-navy)" strokeWidth="1.5" />
      <circle cx="160" cy="100" r="36" stroke="var(--bh-warm-amber)" strokeWidth="2.5" />
      <circle cx="160" cy="100" r="15" fill="var(--bh-deep-ink)" />
      <circle cx="160" cy="100" r="6" fill="var(--bh-warm-amber)" />
      <path d="M160 18 L160 38 M160 162 L160 182 M28 100 L48 100 M272 100 L292 100" stroke="var(--bh-navy)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M60 60 L74 74 M260 140 L274 154 M260 60 L274 74 M60 140 L74 154" stroke="var(--bh-border-blue-gray)" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="106" y="130" width="76" height="58" rx="5" fill="var(--bh-white)" stroke="var(--bh-navy)" strokeWidth="1.5" />
      <line x1="120" y1="148" x2="168" y2="148" stroke="var(--bh-border-blue-gray)" strokeWidth="2" strokeLinecap="round" />
      <line x1="120" y1="160" x2="156" y2="160" stroke="var(--bh-border-blue-gray)" strokeWidth="2" strokeLinecap="round" />
      <line x1="120" y1="172" x2="144" y2="172" stroke="var(--bh-border-blue-gray)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="180" cy="182" r="7" fill="var(--bh-warm-amber)" />
      <path d="M177 182 L179 184 L184 179" stroke="var(--bh-deep-ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <radialGradient id="appGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--bh-warm-ivory)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--bh-warm-ivory)" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

interface ComponentCardProps {
  title: string;
  gradeRange: string;
  illustration: React.ReactNode;
  href: string;
}

function ComponentCard({
  title,
  gradeRange,
  illustration,
  href,
}: ComponentCardProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3.5 bg-white rounded-xl border border-[var(--bh-border-blue-gray)] shadow-[0_4px_14px_rgba(20,33,61,0.05)] p-4 sm:p-4.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(20,33,61,0.08)] active:scale-[0.99]"
    >
      <div className="relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-[var(--bh-soft-blue-mist)]/60">
        <div className="absolute inset-0 scale-125">{illustration}</div>
      </div>
      <div className="flex-1 min-w-0">
        <span className="font-sans text-[0.62rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--bh-slate-text)]">
          {gradeRange}
        </span>
        <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1rem] sm:text-[1.1rem] leading-snug">
          {title}
        </h3>
      </div>
      <svg className="shrink-0 w-4 h-4 text-[var(--bh-navy)] transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}

const journeySteps = [
  { label: "Direction", phase: 1 },
  { label: "Depth", phase: 1 },
  { label: "Evidence", phase: 1 },
  { label: "Positioning", phase: 2 },
  { label: "Application", phase: 2 },
] as const;

function JourneyConnector() {
  return (
    <svg className="w-2 h-2 text-[var(--bh-warm-amber)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function JourneySteps() {
  return (
    <div className="flex flex-wrap items-center gap-1.5 mb-5 md:mb-7">
      {journeySteps.map((step, index) => {
        const isLast = index === journeySteps.length - 1;
        const isPhase2 = step.phase === 2;

        return (
          <span key={step.label} className="inline-flex items-center gap-1.5">
            <span
              className={`inline-flex items-center px-2.5 py-1.5 rounded-lg text-[0.62rem] sm:text-[0.65rem] font-sans font-semibold uppercase tracking-[0.08em] whitespace-nowrap ${
                isPhase2
                  ? "bg-[var(--bh-navy)] text-[var(--bh-warm-ivory)]"
                  : "bg-white border border-[var(--bh-border-blue-gray)] text-[var(--bh-navy)]"
              }`}
            >
              {step.label}
            </span>
            {!isLast && <JourneyConnector />}
          </span>
        );
      })}
    </div>
  );
}

export default function ProgramHero() {
  return (
    <section className="about-gradient-ivory relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden">
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-8 md:px-8 md:pt-[80px] md:pb-10 lg:px-12 lg:pt-[82px] lg:pb-12">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center gap-6 lg:gap-10">
          {/* Left: text content */}
          <div className="max-w-[600px] lg:max-w-none">
            <ScrollReveal>
              <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2">
                Our Program
              </span>
              <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mb-3.5 md:mb-6" />
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1
                className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight mb-3.5 md:mb-6"
                style={{
                  fontSize: "clamp(1.7rem, 4.5vw, 2.85rem)",
                  lineHeight: "1.14",
                }}
              >
                We{" "}
                <span className="text-[var(--bh-warm-amber)] italic">build the student</span>{" "}
                before we build the application.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="font-sans text-[var(--bh-slate-text)] text-[0.88rem] md:text-[1.02rem] leading-[1.6] md:leading-[1.7] mb-5 md:mb-7 max-w-[520px]">
                Beacon House supports students across the years in which academic direction,
                intellectual depth, leadership and evidence are formed — and then brings that
                work together into the strongest possible university application.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={260}>
              <JourneySteps />
            </ScrollReveal>

            <ScrollReveal delay={340}>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[var(--bh-warm-amber)] text-[var(--bh-deep-ink)] font-sans font-semibold text-[0.9rem] md:text-[0.95rem] px-6 md:px-7 py-3 rounded-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(20,33,61,0.14)] active:translate-y-[1px]"
              >
                {CTA_LABEL}
              </a>
            </ScrollReveal>
          </div>

          {/* Right: component cards */}
          <div className="flex flex-col gap-2.5 sm:gap-4 md:gap-5">
            <ScrollReveal delay={200}>
              <ComponentCard
                title="Candidacy Building"
                gradeRange="Grades 8 – 11"
                illustration={<CandidacyIllustration />}
                href="#candidacy-building"
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <ComponentCard
                title="Application Counselling"
                gradeRange="Grade 12"
                illustration={<ApplicationIllustration />}
                href="#application-counselling"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
