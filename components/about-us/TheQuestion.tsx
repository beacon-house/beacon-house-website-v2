import ScrollReveal from "@/components/shared/ScrollReveal";

export default function TheQuestion() {
  return (
    <section
      className="w-full min-h-[100svh] md:min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 38%, rgba(32, 58, 107, 0.16) 0%, transparent 52%), #14213D",
      }}
    >
      <div className="max-w-content mx-auto w-full px-6 pt-[84px] pb-14 md:px-8 md:pt-[80px] md:pb-12 lg:px-12 lg:pt-[82px] lg:pb-14">
        <div className="max-w-[760px] mx-auto text-center">
          {/* Eyebrow */}
          <ScrollReveal>
            <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-warm-amber)] mb-2.5">
              The Question Behind Beacon House
            </span>
            <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-6 md:mb-7" />
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={100}>
            <h2
              className="font-serif font-medium text-[var(--bh-warm-ivory)] tracking-tight mb-7 md:mb-9"
              style={{
                fontSize: "clamp(1.7rem, 4.2vw, 2.75rem)",
                lineHeight: "1.14",
              }}
            >
              We asked whether that{" "}
              <span className="text-[var(--bh-warm-amber)] italic">
                trade-off
              </span>{" "}
              was necessary.
            </h2>
          </ScrollReveal>

          {/* The question */}
          <ScrollReveal delay={200}>
            <p className="font-serif italic text-[var(--bh-warm-ivory)]/70 text-[0.95rem] md:text-[1.1rem] leading-[1.65] max-w-[620px] mx-auto mb-8 md:mb-10">
              Could Indian families access some of the world&rsquo;s strongest
              admissions resources&mdash;while ensuring that their child
              remained individually understood, strategically guided and never
              lost in the system?
            </p>
          </ScrollReveal>

          {/* The answer */}
          <ScrollReveal delay={300}>
            <p className="font-serif font-medium text-[var(--bh-warm-ivory)] text-[1.05rem] md:text-[1.2rem] leading-snug mb-5 md:mb-6">
              Beacon House was created to answer that question.
            </p>
          </ScrollReveal>

          {/* Not this, but that */}
          <ScrollReveal delay={400}>
            <p className="font-sans text-white/35 text-[0.88rem] md:text-[0.95rem] leading-relaxed mb-2">
              Not by building another large counselling company.
            </p>
            <p
              className="font-serif font-medium text-[var(--bh-warm-ivory)] tracking-tight"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                lineHeight: "1.3",
              }}
            >
              But by designing a{" "}
              <span className="text-[var(--bh-warm-amber)] italic">
                different operating model
              </span>
              .
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
