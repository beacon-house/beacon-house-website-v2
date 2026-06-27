import Image from "next/image";

interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

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

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div className="pb-8 md:pb-9 last:pb-0 last:border-0 border-b border-white/[0.08]">
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] rounded-xl overflow-hidden bg-[var(--bh-navy)] mb-5">
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 540px"
        />
      </div>
      <h3
        className="font-serif font-medium text-[var(--bh-warm-ivory)] leading-tight mb-0.5"
        style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)" }}
      >
        {leader.name}
      </h3>
      <span className="block font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-warm-amber)] mb-3 md:mb-4">
        {leader.role}
      </span>
      <p className="font-sans text-white/50 text-[0.85rem] md:text-[0.88rem] leading-[1.75]">
        {leader.bio}
      </p>
    </div>
  );
}

function TeamColumn({
  label,
  team,
}: {
  label: string;
  team: Leader[];
}) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-7 md:mb-8">
        <div className="h-px flex-1 bg-white/[0.08]" />
        <span className="font-sans text-[0.6rem] md:text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--bh-slate-text)] flex-shrink-0">
          {label}
        </span>
        <div className="h-px flex-1 bg-white/[0.08]" />
      </div>
      <div className="space-y-8 md:space-y-9">
        {team.map((leader) => (
          <LeaderCard key={leader.name} leader={leader} />
        ))}
      </div>
    </div>
  );
}

export default function LeadershipTeam() {
  return (
    <section className="w-full bg-[var(--bh-deep-ink)]">
      <div className="max-w-content mx-auto w-full px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">

        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <div className="w-[3px] h-7 bg-[var(--bh-warm-amber)] rounded-full flex-shrink-0" />
          <span className="font-sans text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--bh-slate-text)]">
            Leadership Team
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 xl:gap-16">
          <TeamColumn label="Beacon House Team" team={beaconHouseTeam} />
          <TeamColumn label="InGenius Prep Team" team={ingeniusTeam} />
        </div>
      </div>
    </section>
  );
}
