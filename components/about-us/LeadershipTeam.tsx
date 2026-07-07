import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

type Team = "beacon" | "ingenius";

const teamConfig: Record<
  Team,
  {
    label: string;
    accent: string;
    hoverBorder: string;
    line: string;
  }
> = {
  beacon: {
    label: "Beacon House Team",
    accent: "bg-[var(--bh-warm-amber)]",
    hoverBorder: "group-hover:border-[var(--bh-warm-amber)]",
    line: "bg-[var(--bh-warm-amber)]",
  },
  ingenius: {
    label: "InGenius Prep Team",
    accent: "bg-[var(--bh-navy)]",
    hoverBorder: "group-hover:border-[var(--bh-navy)]",
    line: "bg-[var(--bh-navy)]",
  },
};

const beaconHouseTeam: Leader[] = [
  {
    name: "Karthik Lakshman",
    role: "Co-Founder",
    bio: "Karthik did his undergraduate education in India and subsequently earned a Masters in Industrial Engineering from Georgia Tech, the No 1 ranked school for the discipline. He subsequently worked with Coke and McKinsey, world's leading strategic advisory firm, in the US. He later returned to India and founded Magic Crate, an early learning start-up. After The acquisition of Magic Crate by Byju's, he served as the P&L head for Byju's Test Prep division. Having gone to a top US university and seen the doors it has opened for him first-hand, he is determined to bring the best of the resources to Indian students so that they can pursue their dreams unhindered.",
    image: "/about-us/karthik.png",
  },
  {
    name: "Viswanathan R",
    role: "Co-Founder",
    bio: "Viswanathan, or Vishy as he is known, has an engineering degree from IIT-BHU and management degree from IIM Kozhikode. Vishy is passionate about making high quality education accessible to all and has been on this mission since 2008. Between 2008-2012, he was part of the leadership team at Tutorvista Global, which built out a chain of 36 K-12 schools in India, acquired by Pearson Education in 2012. Subsequently, he founded Magic Crate, a start-up focussed on early learning in children, that was acquired by Byju's in 2021. At Byju's, Vishy ran the online tuitions business and served as Chief Product Officer.",
    image: "/about-us/vishy.png",
  },
];

const ingeniusTeam: Leader[] = [
  {
    name: "Joel Butterly",
    role: "Co-Founder and Chief Executive Officer",
    bio: "Joel attended Dartmouth College, where he was inducted early into Phi Beta Kappa, and graduated Summa Cum Laude. He graduated with a double major in Government and International Studies, and a minor in Ethical Philosophy. After Dartmouth, Joel attended Yale Law School, where he served on the executive board of the Journal on Regulation, as well as the Law School's entrepreneurship society. Joel has been featured in Forbes for his expertise on leadership, management, and entrepreneurship. Joel lives with his wife, Emily, who teaches and is receiving her PhD in Medieval History from Yale.",
    image: "/about-us/joel.png",
  },
  {
    name: "Yosepha Greenfield",
    role: "Co-Founder and Chief Operating Officer",
    bio: "Yosepha graduated from Yale University, where she was a Political Science major and the Captain of the women's basketball team. Under her leadership, the team advanced to post-season play for the first time in program history. Yosepha credits her success to clearly identifying her own goals and working hard until she achieves them. Throughout her career, she has dedicated herself to helping others do the same. She has a strong track record of coaching and working with students to fully recognize their own abilities and get into their top schools. Yosepha is also a black belt and six-time National Champion in Tae Kwon Do.",
    image: "/about-us/yosepha.png",
  },
];

function LeaderCard({ leader, team }: { leader: Leader; team: Team }) {
  const cfg = teamConfig[team];

  return (
    <div className="group relative flex flex-col md:flex-row bg-white rounded-xl overflow-hidden border border-[var(--bh-border-blue-gray)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(20,33,61,0.09)] hover:border-[var(--bh-warm-amber)]/30">
      {/* Top accent bar — amber for BH, navy for IGP */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] ${cfg.accent} z-10`} />

      {/* Mobile: rectangular photo on top */}
      <div className="md:hidden relative w-full aspect-[16/10] overflow-hidden bg-[var(--bh-soft-blue-mist)]">
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="100vw"
        />
      </div>

      {/* Desktop: circular photo column with vertical line */}
      <div className="hidden md:flex md:w-36 lg:w-40 xl:w-44 md:flex-shrink-0 flex-col items-center relative pt-4 pb-4 md:pl-4 md:pr-3">
        {/* Vertical team-colored line — fills the empty space above/below the image */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] opacity-20 ${cfg.line}`}
        />

        {/* Circular image */}
        <div
          className={`relative w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full overflow-hidden border-[3px] border-[var(--bh-border-blue-gray)] transition-colors duration-300 z-10 ${cfg.hoverBorder}`}
        >
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="160px"
          />
        </div>
      </div>

      {/* Content — below photo on mobile, right of photo on desktop */}
      <div className="flex-1 min-w-0 p-4 md:py-4 md:pl-5 md:pr-5">
        <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[0.95rem] md:text-[1.05rem] leading-tight mb-0.5">
          {leader.name}
        </h3>
        <span className="block font-sans text-[0.6rem] md:text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--bh-warm-amber)] mb-2.5 md:mb-3">
          {leader.role}
        </span>
        <p className="font-sans text-[var(--bh-slate-text)] text-[0.8rem] md:text-[0.83rem] lg:text-[0.85rem] leading-[1.6]">
          {leader.bio}
        </p>
      </div>
    </div>
  );
}

function TeamLabel({ team }: { team: Team }) {
  const cfg = teamConfig[team];
  return (
    <div className="flex items-center gap-2.5 mb-3 lg:mb-4">
      <div className={`w-2 h-2 rounded-full ${cfg.accent} flex-shrink-0`} />
      <span className="font-sans text-[0.56rem] lg:text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--bh-slate-text)]">
        {cfg.label}
      </span>
      <div className="flex-1 h-px bg-[var(--bh-border-blue-gray)]/60" />
    </div>
  );
}

export default function LeadershipTeam() {
  return (
    <section className="about-gradient-ivory relative w-full min-h-[100svh] md:min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      <div className="max-w-content mx-auto w-full px-6 pt-[80px] pb-10 md:px-8 md:pt-[76px] md:pb-8 lg:px-12 lg:pt-[78px] lg:pb-10">
        {/* Header */}
        <div className="max-w-[680px] mb-5 md:mb-7">
          <ScrollReveal>
            <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2">
              Leadership Team
            </span>
            <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mb-4 md:mb-5" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                lineHeight: "1.15",
              }}
            >
              The people behind{" "}
              <span className="text-[var(--bh-warm-amber)] italic">
                Beacon House
              </span>
              .
            </h2>
          </ScrollReveal>
        </div>

        {/* Mobile/tablet: stacked team columns */}
        <div className="lg:hidden space-y-6">
          <div>
            <TeamLabel team="beacon" />
            <div className="space-y-3 md:space-y-4">
              {beaconHouseTeam.map((leader, i) => (
                <ScrollReveal key={leader.name} delay={i * 100}>
                  <LeaderCard leader={leader} team="beacon" />
                </ScrollReveal>
              ))}
            </div>
          </div>
          <div>
            <TeamLabel team="ingenius" />
            <div className="space-y-3 md:space-y-4">
              {ingeniusTeam.map((leader, i) => (
                <ScrollReveal key={leader.name} delay={i * 100}>
                  <LeaderCard leader={leader} team="ingenius" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: labels in their own row, then a true 2x2 card grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-x-8 xl:gap-x-10 mb-4">
          <TeamLabel team="beacon" />
          <TeamLabel team="ingenius" />
        </div>
        <div className="hidden lg:grid lg:grid-cols-2 lg:auto-rows-fr gap-x-8 xl:gap-x-10 gap-y-4">
          <ScrollReveal delay={0}>
            <LeaderCard leader={beaconHouseTeam[0]} team="beacon" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <LeaderCard leader={ingeniusTeam[0]} team="ingenius" />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <LeaderCard leader={beaconHouseTeam[1]} team="beacon" />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <LeaderCard leader={ingeniusTeam[1]} team="ingenius" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
