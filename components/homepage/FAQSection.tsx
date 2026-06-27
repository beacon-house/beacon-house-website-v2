"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq-data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="w-full bg-[var(--bh-warm-ivory)]"
    >
      <div className="max-w-content mx-auto w-full px-6 py-14 md:px-8 md:py-16 lg:px-12 lg:py-20">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block font-sans text-[0.7rem] md:text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--bh-slate-text)] mb-2 md:mb-2.5">
            Frequently Asked Questions
          </span>
          <div className="w-8 h-0.5 bg-[var(--bh-warm-amber)] mx-auto mb-3 md:mb-4" />
          <h2
            className="font-serif font-medium text-[var(--bh-deep-ink)] tracking-tight"
            style={{
              fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)",
              lineHeight: "1.1",
            }}
          >
            Common questions from families
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-[var(--bh-warm-amber)]/40 bg-white shadow-sm"
                    : "border-[var(--bh-border-blue-gray)] bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[1rem] md:text-[1.1rem] leading-snug">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[var(--bh-warm-amber)] rotate-45"
                        : "bg-[var(--bh-soft-blue-mist)]"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isOpen
                          ? "text-[var(--bh-deep-ink)]"
                          : "text-[var(--bh-slate-text)]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-[var(--bh-slate-text)] text-[0.9rem] md:text-[0.95rem] leading-relaxed px-5 pb-5 md:px-6 md:pb-6">
                      {faq.answer}
                    </p>
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
