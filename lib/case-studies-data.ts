export interface TransformationBlock {
  title: string;
  subtitle: string;
  points: string[];
}

export interface JourneyPhase {
  period: string;
  title: string;
  description: string;
  bullets?: string[];
  stat?: { value: string; label: string };
}

export interface JourneyBlock {
  title: string;
  phases: JourneyPhase[];
}

export interface KeyHighlight {
  title: string;
  description: string;
}

export interface KeyHighlightsBlock {
  title: string;
  items: KeyHighlight[];
}

export interface ProofPoint {
  value: string;
  label: string;
}

export interface ImpactBlock {
  title: string;
  body: string;
}

export interface OutcomeBlock {
  title: string;
  body: string;
  whatChanged?: {
    intro: string;
    points: string[];
    conclusion: string;
  };
}

export interface CaseStudy {
  slug: string;
  name: string;
  gradeAtEntry: string;
  headline: string;
  before: TransformationBlock;
  after: TransformationBlock;
  journey?: JourneyBlock;
  keyHighlights?: KeyHighlightsBlock;
  proofPoints: ProofPoint[];
  impact?: ImpactBlock;
  outcome?: OutcomeBlock;
  theme: "aerospace" | "quantum" | "physics";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "student-y",
    name: "Student Y",
    gradeAtEntry: "Class 10",
    headline: "From a dream of becoming a pilot to a high-conviction aerospace and computational-math candidacy.",
    theme: "aerospace",
    before: {
      title: "Scattered curiosity",
      subtitle: "No strategic spine",
      points: [
        "Pilot dream",
        "Scattered interests",
        "No defined direction",
        "Limited leadership",
        "Inconsistent academics",
      ],
    },
    after: {
      title: "A builder with a clear trajectory",
      subtitle: "Direction became momentum",
      points: [
        "Aircraft design",
        "Aviation-safety research",
        "AI flight-delay model",
        "Flight simulator",
        "Computational mathematics",
        "Institutional leadership",
      ],
    },
    journey: {
      title: "The journey timeline",
      phases: [
        {
          period: "Nov 2024 – Jan 2025",
          title: "Foundation & direction",
          description:
            "Reality check, academic planning, SAT roadmap, structured exploration and early project ideas.",
        },
        {
          period: "Feb 2025 – Apr 2025",
          title: "Academic & testing build",
          description:
            "Stronger coursework, independent SAT preparation, research direction and skill-building.",
        },
        {
          period: "May 2025 – Jul 2025",
          title: "Ideas to systems",
          description:
            "School newspaper launched, research deepened, first aircraft built and crashed, learning compounded.",
        },
        {
          period: "Aug 2025 – Sep 2025",
          title: "Engineering & computation",
          description:
            "Oblique-wing aircraft, AI flight-delay prediction model, flight-simulator build and real-world validation.",
        },
        {
          period: "Oct 2025 onwards",
          title: "Positioning & consolidation",
          description:
            "A clear academic identity emerged, supported by stronger testing, leadership and impact.",
        },
      ],
    },
    proofPoints: [
      { value: "1490", label: "SAT score\n780 Math" },
      { value: "24", label: "Students in his school newspaper" },
      { value: "Aircraft design", label: "and flight simulator built" },
      { value: "AI model", label: "for predicting flight delays" },
    ],
    impact: {
      title: "The impact",
      body: "Aviation evolved from a childhood dream into a serious systems-and-data-driven pursuit—powered by leadership, research and engineering.",
    },
  },
  {
    slug: "student-x",
    name: "Student X",
    gradeAtEntry: "Grade 11",
    headline: "From interdisciplinary excellence to a quantum-computing application identity.",
    theme: "quantum",
    before: {
      title: "Impressive in many areas, with no unifying idea",
      subtitle: "Strength without a spine",
      points: [
        "Strong academics",
        "Physics and mathematics interest",
        "Music and philosophy",
        "Multiple activities",
        "No coherent narrative",
      ],
    },
    after: {
      title: "A quantum physicist making science accessible",
      subtitle: "A coherent intellectual identity",
      points: [
        "Quantum research",
        "Founder-level project",
        "Music–physics integration",
        "Education and outreach",
        "Coherent intellectual identity",
      ],
    },
    keyHighlights: {
      title: "Key highlights of the journey",
      items: [
        {
          title: "Research depth",
          description:
            "Mentored research on light–matter interactions and quantum-computing applications, with a paper targeted for submission.",
        },
        {
          title: "Signature project",
          description:
            "Founder of an educational game that makes quantum physics accessible—blending science, story and original music.",
        },
        {
          title: "Narrative integration",
          description:
            "Essays built around the harmony of music, philosophy and physics—showing how he thinks, not only what he does.",
        },
        {
          title: "Leadership ownership",
          description:
            "Founder, initiator and organiser across academics, arts and public engagement—from math circles to performances.",
        },
        {
          title: "Strategic school fit",
          description:
            "Targeted universities with leading quantum research, strong faculty alignment and vibrant academic ecosystems.",
        },
      ],
    },
    proofPoints: [
      { value: "1530", label: "SAT score" },
      { value: "Quantum", label: "research" },
      { value: "Founder", label: "of an educational technology project" },
      { value: "Top 0.1%", label: "ICSE academic performance" },
      { value: "Music", label: "performance and composition" },
    ],
    outcome: {
      title: "The outcome",
      body: "A cohesive intellectual identity connecting quantum physics, computing, music and philosophy to real-world impact and future research.",
    },
  },
  {
    slug: "student-z",
    name: "Student Z",
    gradeAtEntry: "Grade 10",
    headline: "From broad STEM achievement to a high-conviction astrophysics, particle-physics and dark-sky advocacy candidacy.",
    theme: "physics",
    before: {
      title: "Strong achievement, but no singular academic identity",
      subtitle: "Breadth without a centre",
      points: [
        "Strong mathematics and science",
        "Interest in astronomy, AI and technology",
        "Multiple engineering projects",
        "Participation across sport, music and MUN",
        "No defined research pathway",
        "No unifying intellectual direction",
      ],
    },
    after: {
      title: "A physics researcher connecting advanced science with public impact",
      subtitle: "Depth with a public purpose",
      points: [
        "Astrophysics and particle-physics research",
        "Team India selection for ISEF",
        "Founder of a Beamline Challenge team",
        "Dark-sky measurement and advocacy initiative",
        "Computational tools applied to physics",
        "School and community science leadership",
      ],
    },
    journey: {
      title: "The journey timeline",
      phases: [
        {
          period: "Oct 2024 – Jan 2025",
          title: "Finding the intellectual centre",
          description:
            "The team distinguished between her competence in computer science and her deeper curiosity in physics. The strategic direction became: Physics first. Computation as a tool.",
        },
        {
          period: "Jan 2025 – Aug 2025",
          title: "Building the academic spine",
          description:
            "Rigorous coursework, research mentorship and a deliberate testing plan established the academic foundation.",
          stat: { value: "1530", label: "SAT | 800 Math | 1560 Superscore" },
        },
        {
          period: "Early – Late 2025",
          title: "From interest to research",
          description:
            "Astronomy developed into formal research involving neutron stars, computational analysis, high-energy physics, mesons and quarks, particle interactions and dark matter.",
          bullets: ["Astronomy → Astrophysics → Particle Physics"],
        },
        {
          period: "2025 onwards",
          title: "Leadership through science",
          description:
            "Student Z founded her school’s first Beamline Challenge team, formed and led the team, coordinated proposal development, reached out to professors, translated advanced physics for peers and created opportunities that did not previously exist at school.",
        },
        {
          period: "2025 – 2026",
          title: "Signature initiative: Starlight",
          description:
            "A simple astronomy-awareness idea evolved into a layered science and civic initiative: a low-cost sky-quality meter, sensor and hardware experimentation, an Android light-pollution app, crowdsourced local data, school workshops, stargazing-linked awareness, community and NGO partnerships, and plans for wider chapter expansion.",
          bullets: ["Measurement → Technology → Education → Advocacy"],
        },
        {
          period: "Late 2025 – 2026",
          title: "International science-fair readiness",
          description:
            "Student Z submitted particle-physics research to the IRIS National Fair, progressed to the national finals and was later selected from the waitlist to represent Team India at ISEF.",
        },
      ],
    },
    proofPoints: [
      { value: "1560", label: "SAT superscore" },
      { value: "800", label: "SAT Mathematics" },
      { value: "ISEF", label: "Team India representative" },
      { value: "Beamline", label: "Challenge team founder" },
      { value: "Starlight", label: "Dark-sky science and advocacy initiative" },
    ],
    outcome: {
      title: "The outcome",
      body: "Student Z is no longer best described as a strong STEM student doing many activities. Her emerging identity is a physics researcher who uses computational tools to investigate astrophysical and particle-physics questions—and makes science and darker skies more accessible to communities.",
      whatChanged: {
        intro: "This transformation came from:",
        points: [
          "Choosing the right intellectual centre",
          "Positioning computation as an enabling capability",
          "Allowing exploration to narrow into precision",
          "Converting scientific interest into research production",
          "Building leadership through systems rather than titles",
          "Evolving a signature project through real-world resistance",
          "Protecting depth by removing lower-value commitments",
        ],
        conclusion:
          "The result was not simply a longer résumé. It was a more coherent and defensible candidacy.",
      },
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAdjacentCaseStudies(slug: string): {
  prev: CaseStudy | null;
  next: CaseStudy | null;
} {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: caseStudies[index - 1] ?? null,
    next: caseStudies[index + 1] ?? null,
  };
}
