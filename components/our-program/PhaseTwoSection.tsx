"use client";

import { useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface FoldContent {
  number: string;
  title: string;
  subtitle: string;
  body: React.ReactNode;
}

const introContent = {
  body: (
    <>
      <p className="mb-4">By Grade 12, the central question changes.</p>
      <p className="mb-4">The task is no longer broad exploration.</p>
      <p className="mb-4">It is to make the strongest possible decisions with the evidence already built.</p>
      <p className="mb-4">Application Counselling integrates:</p>
      <ul className="list-disc pl-5 space-y-1.5 mb-4">
        <li>University strategy</li>
        <li>Application positioning</li>
        <li>Essays</li>
        <li>Activities and honours</li>
        <li>Recommendations</li>
        <li>Interviews</li>
        <li>Final submission</li>
        <li>Decision support</li>
      </ul>
    </>
  ),
};

const allFolds: FoldContent[] = [
  {
    number: "17",
    title: "University and Course Strategy",
    subtitle: "Build a list around fit, competitiveness and family goals.",
    body: (
      <>
        <p className="mb-4">The counselling team helps evaluate:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Academic fit</li>
          <li>Course strength</li>
          <li>University environment</li>
          <li>Research access</li>
          <li>Career pathways</li>
          <li>Geography</li>
          <li>Cost</li>
          <li>Family preferences</li>
          <li>Admissions probability</li>
        </ul>
        <p className="mb-4">The final list balances:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li className="font-semibold text-[var(--bh-deep-ink)]">Ambition</li>
          <li className="font-semibold text-[var(--bh-deep-ink)]">Fit</li>
          <li className="font-semibold text-[var(--bh-deep-ink)]">Risk</li>
          <li className="font-semibold text-[var(--bh-deep-ink)]">Optionality</li>
        </ul>
        <p className="mb-4">Where relevant, the team also develops:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Early Decision strategy</li>
          <li>Early Action strategy</li>
          <li>Regular Decision strategy</li>
          <li>Country-specific application plans</li>
        </ul>
      </>
    ),
  },
  {
    number: "18",
    title: "Application Positioning",
    subtitle: "Decide what the application should make clear.",
    body: (
      <>
        <p className="mb-4">The student’s application must answer:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Who is this student?</li>
          <li>What do they care about?</li>
          <li>What have they done about it?</li>
          <li>What intellectual or personal qualities distinguish them?</li>
          <li>Why are they prepared for the course and university?</li>
        </ul>
        <p className="mb-4">We help identify the strongest positioning based on the student’s actual body of work.</p>
        <p className="mb-4">The application does not invent the identity.</p>
        <p>It brings it into focus.</p>
      </>
    ),
  },
  {
    number: "19",
    title: "Personal Statement and Essays",
    subtitle: "Strong essays reveal how the student thinks.",
    body: (
      <>
        <p className="mb-4">The process may include:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Reflection exercises</li>
          <li>Story discovery</li>
          <li>Topic selection</li>
          <li>Essay architecture</li>
          <li>Outlining</li>
          <li>Draft development</li>
          <li>Structural feedback</li>
          <li>Voice and tone refinement</li>
          <li>University-specific supplements</li>
          <li>Final editing</li>
        </ul>
        <p className="mb-4">The aim is not to make every essay sound polished in the same way.</p>
        <p>It is to preserve the student’s voice while improving clarity, depth and strategic relevance.</p>
      </>
    ),
  },
  {
    number: "20",
    title: "Activities and Honours",
    subtitle: "Limited space requires strategic precision.",
    body: (
      <>
        <p className="mb-4">We help students present:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Activities</li>
          <li>Leadership</li>
          <li>Research</li>
          <li>Projects</li>
          <li>Awards</li>
          <li>Responsibilities</li>
          <li>Impact</li>
          <li>Time commitment</li>
        </ul>
        <p className="mb-4">Each description should communicate what the student actually did and why it matters.</p>
        <p>The activity list should support the larger positioning without sounding manufactured.</p>
      </>
    ),
  },
  {
    number: "21",
    title: "Application Management",
    subtitle: "Strong strategy still needs disciplined execution.",
    body: (
      <>
        <p className="mb-4">The team helps manage:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Application portals</li>
          <li>Deadlines</li>
          <li>Document requirements</li>
          <li>Testing submissions</li>
          <li>Essay versions</li>
          <li>Recommendation status</li>
          <li>Financial-aid requirements where applicable</li>
          <li>Final quality checks</li>
        </ul>
        <p>A structured timeline reduces avoidable stress and ensures that strategic work is not undermined by operational errors.</p>
      </>
    ),
  },
  {
    number: "22",
    title: "Former Admissions Officer Review",
    subtitle: "The application is evaluated through an admissions lens.",
    body: (
      <>
        <p className="mb-4">Before final submission, a Former Admissions Officer may review the complete application for:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Positioning</li>
          <li>Coherence</li>
          <li>Competitiveness</li>
          <li>School fit</li>
          <li>Essay effectiveness</li>
          <li>Activities and honours</li>
          <li>Potential gaps</li>
          <li>Overall reader impression</li>
        </ul>
        <p className="mb-4">This creates a valuable final test:</p>
        <p className="font-semibold text-[var(--bh-deep-ink)]">Does the application communicate what the team intended it to communicate?</p>
      </>
    ),
  },
  {
    number: "23",
    title: "Interview Preparation",
    subtitle: "Preparation should improve clarity, not create rehearsed answers.",
    body: (
      <>
        <p className="mb-4">Support may include:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Interview strategy</li>
          <li>Question frameworks</li>
          <li>Mock interviews</li>
          <li>Course-specific interviews</li>
          <li>University-specific preparation</li>
          <li>Body language and communication</li>
          <li>Follow-up guidance</li>
        </ul>
        <p>The goal is to help students articulate their thinking with confidence and authenticity.</p>
      </>
    ),
  },
  {
    number: "24",
    title: "After Submission",
    subtitle: "Guidance continues beyond the submit button.",
    body: (
      <>
        <p className="mb-4">Depending on the student’s situation, support may include:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Additional application requests</li>
          <li>Updates to universities</li>
          <li>Letters of continued interest</li>
          <li>Waitlist strategy</li>
          <li>Interview follow-up</li>
          <li>Offer comparison</li>
          <li>Final university selection</li>
        </ul>
        <p>The final decision considers more than ranking.</p>
        <p>It should reflect academic fit, personal fit, opportunity and long-term goals.</p>
      </>
    ),
  },
  {
    number: "25",
    title: "How the Team Works",
    subtitle: "Different expertise. One coordinated strategy.",
    body: (
      <>
        <p className="mb-4">The program may bring together:</p>
        <div className="space-y-4 mb-4">
          <div>
            <p className="font-semibold text-[var(--bh-deep-ink)] mb-1">Dedicated Counsellor</p>
            <p>Provides ongoing guidance, planning and accountability.</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--bh-deep-ink)] mb-1">Beacon House Leadership</p>
            <p>Supports key decisions around direction, evidence, positioning and family alignment.</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--bh-deep-ink)] mb-1">Former Admissions Officer</p>
            <p>Brings direct insight into how selective applications are evaluated.</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--bh-deep-ink)] mb-1">Academic or Domain Mentor</p>
            <p>Supports research, projects and specialist development.</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--bh-deep-ink)] mb-1">Application Specialists</p>
            <p>Help shape essays, application strategy, interviews and final execution.</p>
          </div>
        </div>
        <p>The student should experience one integrated journey—not a collection of disconnected experts.</p>
      </>
    ),
  },
  {
    number: "26",
    title: "Built Around the Student",
    subtitle: "The program changes according to where the student begins.",
    body: (
      <>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>A Grade 8 student may need exploration.</li>
          <li>A Grade 10 student may need academic and evidence-building choices.</li>
          <li>A Grade 11 student may need sharper prioritisation.</li>
          <li>A Grade 12 student may need application architecture.</li>
        </ul>
        <p>The support model, team structure and intensity are adapted accordingly.</p>
      </>
    ),
  },
];

function AccordionCard({
  fold,
  isOpen,
  onToggle,
}: {
  fold: FoldContent;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group relative bg-white rounded-xl border border-[var(--bh-border-blue-gray)] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen
          ? "shadow-[0_16px_40px_rgba(20,33,61,0.1)]"
          : "shadow-[0_2px_10px_rgba(20,33,61,0.03)] hover:shadow-[0_8px_24px_rgba(20,33,61,0.06)]"
      }`}
    >
      <button
        onClick={onToggle}
        className="relative w-full p-5 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h4 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1.05rem] md:text-[1.2rem] leading-tight mb-1.5">
              {fold.title}
            </h4>
            <p className="font-sans text-[var(--bh-navy)] text-[0.85rem] md:text-[0.9rem] leading-snug">
              {fold.subtitle}
            </p>
          </div>

          <div
            className={`relative w-10 h-10 rounded-full border border-[var(--bh-border-blue-gray)] flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
              isOpen
                ? "bg-[var(--bh-deep-ink)] border-[var(--bh-deep-ink)] rotate-180"
                : "bg-white group-hover:border-[var(--bh-navy)]"
            }`}
          >
            <svg
              className={`w-5 h-5 transition-all duration-500 ${
                isOpen ? "text-[var(--bh-warm-ivory)]" : "text-[var(--bh-navy)]"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={isOpen ? "M5 12h14" : "M12 5v14M5 12h14"} />
            </svg>
          </div>
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-3 md:px-6 md:pb-4">
            <div className="font-sans text-[var(--bh-slate-text)] text-[0.8rem] md:text-[0.85rem] leading-[1.45] [&_p]:mb-2 [&_ul]:mb-2 [&_li]:mb-0">
              {fold.body}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PhaseTwoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="application-counselling" className="about-gradient-ivory w-full py-16 md:py-20 lg:py-24">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12">
        {/* Section header + intro */}
        <div className="max-w-[800px] mx-auto mb-12 md:mb-16">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-10">
              <h2
                className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight mb-4"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  lineHeight: "1.15",
                }}
              >
                Application Counselling
              </h2>
              <p className="font-sans text-[var(--bh-slate-text)] text-[0.95rem] md:text-[1.05rem] leading-[1.7]">
                Bring the built profile together.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="text-left max-w-[640px] mx-auto">
              <h3
                className="font-serif font-medium text-[var(--bh-deep-ink)] mb-5"
                style={{
                  fontSize: "clamp(1.35rem, 3vw, 1.7rem)",
                  lineHeight: "1.25",
                }}
              >
                Bring the built profile together.
              </h3>
              <div className="font-sans text-[var(--bh-slate-text)] text-[0.85rem] md:text-[0.9rem] leading-[1.7]">
                {introContent.body}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline of folds */}
        <div className="relative max-w-[1000px] mx-auto">
          {/* Vertical spine */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--bh-border-blue-gray)] md:-translate-x-1/2" />

          {allFolds.map((fold, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={fold.number}>
                <div className="relative mb-6 md:mb-8">
                  {/* Timeline dot */}
                  <div className="absolute top-5 left-6 md:left-1/2 w-3 h-3 rounded-full bg-[var(--bh-navy)] border-2 border-white z-10 md:-translate-x-1/2" />

                  {/* Card */}
                  <div
                    className={`pl-14 md:pl-0 relative transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      openIndex === index
                        ? "md:w-full md:mx-auto z-20"
                        : isLeft
                        ? "md:mr-auto md:pr-8 md:w-[calc(50%-16px)]"
                        : "md:ml-auto md:pl-8 md:w-[calc(50%-16px)]"
                    }`}
                  >
                    <ScrollReveal>
                      <AccordionCard
                        fold={fold}
                        isOpen={openIndex === index}
                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                      />
                    </ScrollReveal>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
