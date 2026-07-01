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
      <p className="mb-4">It is about helping the student decide:</p>
      <ul className="list-disc pl-5 space-y-1.5 mb-4">
        <li>What to explore</li>
        <li>What to deepen</li>
        <li>What to stop</li>
        <li>What academic choices preserve the right pathways</li>
        <li>What evidence will make the student’s direction credible</li>
        <li>How their work should compound over time</li>
      </ul>
      <p>The focus changes depending on the student’s age, current profile and university ambitions.</p>
    </>
  ),
};

const allFolds: FoldContent[] = [
  {
    number: "04",
    title: "Interest Exploration",
    subtitle: "Direction should be discovered, not assigned.",
    body: (
      <>
        <p className="mb-4">Many students begin with broad interests, conflicting signals or premature career labels.</p>
        <p className="mb-4">We help them explore possible academic and personal directions through:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Structured conversations</li>
          <li>Reading and reflection</li>
          <li>Courses and guided exposure</li>
          <li>Mentor interactions</li>
          <li>Small projects and experiments</li>
          <li>Career and major exploration</li>
          <li>Review of existing strengths and interests</li>
        </ul>
        <p className="mb-4">The goal is not to force an early answer.</p>
        <p>It is to progressively identify the areas worth deeper investment.</p>
      </>
    ),
  },
  {
    number: "05",
    title: "Academic Strategy",
    subtitle: "Subject choices quietly shape future options.",
    body: (
      <>
        <p className="mb-4">We help families make deliberate decisions around:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>IB, IGCSE, A-Level, AP and other curricula</li>
          <li>Subject selection</li>
          <li>Academic rigor</li>
          <li>Course combinations</li>
          <li>Predicted-grade strategy</li>
          <li>Additional online coursework where useful</li>
          <li>Academic gaps and strengthening priorities</li>
        </ul>
        <p className="mb-4">The right academic plan must balance:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li className="font-semibold text-[var(--bh-deep-ink)]">Student ability</li>
          <li className="font-semibold text-[var(--bh-deep-ink)]">Student interest</li>
          <li className="font-semibold text-[var(--bh-deep-ink)]">University requirements</li>
          <li className="font-semibold text-[var(--bh-deep-ink)]">Long-term optionality</li>
        </ul>
      </>
    ),
  },
  {
    number: "06",
    title: "Testing Strategy",
    subtitle: "Testing should be planned, not reacted to.",
    body: (
      <>
        <p className="mb-4">Where standardised tests are relevant, we help students decide:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Which tests are required</li>
          <li>When to begin preparation</li>
          <li>What score is realistically competitive</li>
          <li>Whether SAT or ACT is the better fit</li>
          <li>How testing should fit around school demands</li>
          <li>When a retake is strategically worthwhile</li>
        </ul>
        <p className="mb-4">Preparation support may include:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Diagnostic testing</li>
          <li>Study planning</li>
          <li>Specialist test preparation</li>
          <li>Progress review</li>
          <li>University-specific admissions-test support</li>
          <li>Interview preparation where required</li>
        </ul>
      </>
    ),
  },
  {
    number: "07",
    title: "Depth and Evidence",
    subtitle: "Interest becomes credible when it produces serious work.",
    body: (
      <>
        <p className="mb-4">Depending on the student’s direction, evidence may include:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Research</li>
          <li>Independent projects</li>
          <li>Writing and publication</li>
          <li>Competitions</li>
          <li>Portfolios</li>
          <li>Internships</li>
          <li>Entrepreneurship</li>
          <li>Community initiatives</li>
          <li>Academic clubs</li>
          <li>Creative or technical work</li>
        </ul>
        <p className="mb-4">We do not begin with a standard list.</p>
        <p>We determine which forms of evidence are most relevant to the student’s interests, intended field and university pathway.</p>
      </>
    ),
  },
  {
    number: "08",
    title: "Research and Academic Mentorship",
    subtitle: "Move from curiosity to disciplined inquiry.",
    body: (
      <>
        <p className="mb-4">Students may work with university researchers, professors or specialist mentors to explore a focused academic question.</p>
        <p className="mb-4">Support can include:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Topic exploration</li>
          <li>Literature review</li>
          <li>Research design</li>
          <li>Data collection and analysis</li>
          <li>Academic writing</li>
          <li>Mentor feedback</li>
          <li>Submission or publication pathways where appropriate</li>
        </ul>
        <p className="mb-4">Research is not treated as a decorative credential.</p>
        <p>It should deepen the student’s thinking and strengthen the academic direction already being built.</p>
      </>
    ),
  },
  {
    number: "09",
    title: "Signature Projects and Capstones",
    subtitle: "Build something that could not have come from a template.",
    body: (
      <>
        <p className="mb-4">A signature project allows the student to apply their interests through meaningful creation or contribution.</p>
        <p className="mb-4">This may involve:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>A product</li>
          <li>A research-led initiative</li>
          <li>A social-impact project</li>
          <li>A technical build</li>
          <li>An educational platform</li>
          <li>A publication</li>
          <li>A creative portfolio</li>
          <li>A community institution</li>
        </ul>
        <p className="mb-4">Beacon House helps shape:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>The central idea</li>
          <li>The strategic relevance</li>
          <li>The execution plan</li>
          <li>Mentor involvement</li>
          <li>Public distribution</li>
          <li>Evidence of impact</li>
          <li>Long-term sustainability</li>
        </ul>
        <p className="mb-4">The objective is not novelty for its own sake.</p>
        <p>It is ownership, depth and credible execution.</p>
      </>
    ),
  },
  {
    number: "10",
    title: "Extracurricular Strategy",
    subtitle: "More activity is rarely the answer.",
    body: (
      <>
        <p className="mb-4">We review the student’s existing commitments and help decide:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>What should be deepened</li>
          <li>What should be reduced</li>
          <li>Where leadership can become more meaningful</li>
          <li>Which competitions or programs are relevant</li>
          <li>Whether an activity demonstrates genuine interest</li>
          <li>How the student can move from participation to ownership</li>
        </ul>
        <p className="mb-4">The strongest extracurricular profiles are not necessarily the busiest.</p>
        <p>They are the most intentional.</p>
      </>
    ),
  },
  {
    number: "11",
    title: "School Break and Summer Planning",
    subtitle: "Breaks should create momentum, not random activity.",
    body: (
      <>
        <p className="mb-4">We help students plan summers and school breaks around the larger strategy.</p>
        <p className="mb-4">This may include:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Academic programs</li>
          <li>Research</li>
          <li>Internships</li>
          <li>Independent projects</li>
          <li>Competitions</li>
          <li>Skill development</li>
          <li>Reading and writing</li>
          <li>Travel-linked exploration</li>
          <li>Rest and recovery</li>
        </ul>
        <p>Where relevant, we also support selected summer-program applications.</p>
      </>
    ),
  },
  {
    number: "12",
    title: "Leadership and Personal Development",
    subtitle: "Strong applicants must also be able to operate.",
    body: (
      <>
        <p className="mb-4">Students may need support beyond academics and activities.</p>
        <p className="mb-4">Depending on the student, the program may develop:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Time management</li>
          <li>Independent working habits</li>
          <li>Communication</li>
          <li>Public speaking</li>
          <li>Initiative</li>
          <li>Team leadership</li>
          <li>Reflection</li>
          <li>Decision-making</li>
          <li>Resilience through failure</li>
        </ul>
        <p>These capabilities often determine whether an ambitious plan becomes real work.</p>
      </>
    ),
  },
  {
    number: "13",
    title: "Major and University Exploration",
    subtitle: "University choices should emerge from fit, not rankings alone.",
    body: (
      <>
        <p className="mb-4">Before the application year, we help students understand:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Possible majors</li>
          <li>Differences between academic fields</li>
          <li>Course structures</li>
          <li>Country-specific admissions systems</li>
          <li>University cultures</li>
          <li>Research ecosystems</li>
          <li>Career pathways</li>
          <li>Academic prerequisites</li>
        </ul>
        <p>The aim is to build informed hypotheses early, while keeping appropriate options open.</p>
      </>
    ),
  },
  {
    number: "14",
    title: "Recommendation Preparation",
    subtitle: "Strong recommendations are built before they are requested.",
    body: (
      <>
        <p className="mb-4">We help students:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Identify potential recommenders</li>
          <li>Build authentic teacher and mentor relationships</li>
          <li>Demonstrate engagement over time</li>
          <li>Decide whom to approach</li>
          <li>Prepare supporting material</li>
          <li>Communicate their request thoughtfully</li>
        </ul>
        <p className="mb-4">The purpose is not to script the recommendation.</p>
        <p>It is to ensure that the recommender has enough substance to write something meaningful.</p>
      </>
    ),
  },
  {
    number: "15",
    title: "The Output of Candidacy Building",
    subtitle: "A student with greater direction, depth and coherence.",
    body: (
      <>
        <p className="mb-4">By the end of the candidacy-building phase, the student should have:</p>
        <div className="space-y-4 mb-4">
          <div>
            <p className="font-semibold text-[var(--bh-deep-ink)] mb-1">Academic direction</p>
            <p>A clearer understanding of the subjects and fields worth pursuing.</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--bh-deep-ink)] mb-1">Stronger evidence</p>
            <p>Research, projects, achievements, leadership or creative work that supports the direction.</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--bh-deep-ink)] mb-1">Better positioning</p>
            <p>A more coherent relationship between the student’s choices, strengths and ambitions.</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--bh-deep-ink)] mb-1">Greater readiness</p>
            <p>A stronger foundation for university selection and application work.</p>
          </div>
        </div>
        <p className="mb-4">The output is not merely a longer résumé.</p>
        <p>It is a more credible applicant.</p>
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

export default function PhaseOneSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="candidacy-building" className="about-gradient-mist w-full py-16 md:py-20 lg:py-24">
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
                Candidacy Building
              </h2>
              <p className="font-sans text-[var(--bh-slate-text)] text-[0.95rem] md:text-[1.05rem] leading-[1.7]">
                Develop the student before positioning the applicant.
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
                Candidacy Building is not about adding more activities.
              </h3>
              <div className="font-sans text-[var(--bh-slate-text)] text-[0.85rem] md:text-[0.9rem] leading-[1.7]">
                {introContent.body}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline of folds */}
        <div className="relative max-w-[640px] mx-auto">
          {/* Vertical spine */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--bh-border-blue-gray)]" />

          {allFolds.map((fold, index) => (
            <div key={fold.number} className="relative mb-5 md:mb-6">
              {/* Timeline dot */}
              <div className="absolute top-5 left-6 w-3 h-3 rounded-full bg-[var(--bh-navy)] border-2 border-white z-10" />

              {/* Card */}
              <div className="pl-14 relative">
                <ScrollReveal>
                  <AccordionCard
                    fold={fold}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
