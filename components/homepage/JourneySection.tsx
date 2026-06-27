import Image from "next/image";

const grades = [
  {
    step: "01",
    title: "Grades 8\u20139",
    description:
      "Preserve optionality. Explore direction early. Avoid choices that quietly narrow later paths.",
    icon: "/three-axis-icon.svg",
    isLast: false,
  },
  {
    step: "02",
    title: "Grade 10",
    description:
      "Make subject, rigor and profile choices more deliberate.",
    icon: "/class10-crosshair-icon.svg",
    isLast: false,
  },
  {
    step: "03",
    title: "Grade 11",
    description:
      "Prioritise sharply. Strengthen what can still move outcomes.",
    icon: "/class11-bullseye-with-arrow.svg",
    isLast: false,
  },
  {
    step: "04",
    title: "Grade 12",
    description:
      "Architect the strongest possible application from the evidence already built.",
    icon: null,
    isLast: true,
  },
];

function GradeIcon({ src }: { src: string | null }) {
  if (src) {
    return (
      <Image src={src} alt="" width={20} height={20} className="w-5 h-5" />
    );
  }
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--bh-navy)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function TimelineCard({
  title,
  description,
  align,
  icon,
  isLast,
}: {
  title: string;
  description: string;
  align: "left" | "right" | "center";
  icon: string | null;
  isLast: boolean;
}) {
  const alignClass =
    align === "right"
      ? "ml-auto text-right"
      : align === "left"
        ? "mr-auto text-left"
        : "mx-auto text-center";

  return (
    <div
      className={`relative w-full max-w-[430px] bg-white border border-[var(--bh-border-blue-gray)] rounded-xl px-6 py-5 lg:px-7 lg:py-6 ${alignClass}${
        isLast
          ? " border-l-4 border-l-[var(--bh-warm-amber)]/70 bg-[rgba(248,175,72,0.08)]"
          : ""
      }`}
    >
      <div className="absolute -top-3 -left-3 z-10">
        <div className="w-11 h-11 rounded-full bg-[var(--bh-warm-ivory)] border border-[var(--bh-border-blue-gray)] flex items-center justify-center shadow-sm">
          <GradeIcon src={icon} />
        </div>
      </div>

      <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1.45rem] leading-tight mb-3">
        {title}
      </h3>
      <p className="font-sans text-[var(--bh-slate-text)] text-[0.95rem] lg:text-[1rem] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="w-full min-h-[100svh] md:min-h-[100dvh] bg-[var(--bh-soft-blue-mist)] flex flex-col justify-center"
    >
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-6 md:px-8 md:pt-[80px] md:pb-8 lg:px-12 lg:pt-[82px] lg:pb-10">
        <div className="text-center mb-7 md:mb-10 lg:mb-12">
          <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2 md:mb-2.5">
            Where Your Child Is In The Journey Matters
          </span>
          <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-3 md:mb-4" />
          <h2
            className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight mb-1"
            style={{
              fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)",
              lineHeight: "1.1",
            }}
          >
            What matters now depends on where your child is.
          </h2>
        </div>

        <div className="md:hidden flex flex-col items-center space-y-4">
          {grades.map((grade) => (
            <TimelineCard
              key={grade.step}
              title={grade.title}
              description={grade.description}
              icon={grade.icon}
              align="center"
              isLast={grade.isLast}
            />
          ))}
        </div>

        <div className="hidden md:block relative max-w-[1100px] mx-auto px-2 lg:px-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--bh-border-blue-gray)] -translate-x-1/2" />

          <div className="flex flex-col gap-4 lg:gap-6">
            {grades.map((grade, index) => {
              const isLeft = index % 2 === 0;
              const dotSize = "w-10 h-10";
              return (
                <div
                  key={grade.step}
                  className="grid grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] items-center gap-4 lg:gap-7"
                >
                  {isLeft ? (
                    <TimelineCard
                      title={grade.title}
                      description={grade.description}
                      icon={grade.icon}
                      align="right"
                      isLast={grade.isLast}
                    />
                  ) : (
                    <div />
                  )}

                  <div className="relative z-10 flex justify-center">
                    <div
                      className={`${dotSize} rounded-full bg-[var(--bh-deep-ink)] shadow-sm`}
                    />
                  </div>

                  {!isLeft ? (
                    <TimelineCard
                      title={grade.title}
                      description={grade.description}
                      icon={grade.icon}
                      align="left"
                      isLast={grade.isLast}
                    />
                  ) : (
                    <div />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-8 md:mt-10 lg:mt-12 max-w-[640px] mx-auto">
          <p className="font-sans text-[var(--bh-slate-text)] text-[0.9rem] md:text-[1rem] leading-relaxed">
            Beacon House helps families understand what matters now, what can
            wait, and what should not be left to chance.
          </p>
        </div>
      </div>
    </section>
  );
}
