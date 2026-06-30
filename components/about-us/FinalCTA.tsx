import ScrollReveal from "@/components/shared/ScrollReveal";
import { CTA_URL, CTA_LABEL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="w-full bg-[var(--bh-deep-ink)]">
      <div className="max-w-content mx-auto w-full px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 text-center">
        <ScrollReveal>
          <h2
            className="font-serif font-medium text-[var(--bh-warm-ivory)] tracking-tight max-w-[760px] mx-auto mb-7 md:mb-8"
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.85rem)",
              lineHeight: "1.18",
            }}
          >
            Understand whether your child&rsquo;s current path is building
            towards the{" "}
            <span className="text-[var(--bh-warm-amber)] italic">
              right future
            </span>
            .
          </h2>

          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[var(--bh-warm-amber)] text-[var(--bh-deep-ink)] font-sans font-semibold text-[0.95rem] md:text-[1rem] px-7 md:px-8 py-3.5 rounded-lg shadow-[0_10px_22px_rgba(20,33,61,0.24),0_3px_0_rgba(20,33,61,0.24)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(20,33,61,0.28),0_4px_0_rgba(20,33,61,0.24)] active:translate-y-[2px] active:shadow-[0_4px_10px_rgba(20,33,61,0.2),0_1px_0_rgba(20,33,61,0.22)]"
          >
            {CTA_LABEL}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
