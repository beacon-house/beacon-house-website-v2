import Image from "next/image";
import { CTA_URL, CTA_LABEL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[var(--bh-deep-ink)] text-[var(--bh-warm-ivory)]">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
          <div className="max-w-sm">
            <Image
              src="/bh-ig-logo.png"
              alt="Beacon House"
              width={140}
              height={32}
              className="h-7 md:h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Premium Ivy League admissions consultancy for Indian students.
              Founder-supervised strategy, profile building, and candidacy
              development for selective universities.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-sm font-medium text-[var(--bh-warm-amber)] uppercase tracking-wider">
              Get Started
            </h3>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-white/70 hover:text-white transition-colors"
            >
              {CTA_LABEL}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-sans text-xs text-white/40">
            © {new Date().getFullYear()} Beacon House. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/40">
            In partnership with InGenius Prep — 150+ Former Admissions Officers
          </p>
        </div>
      </div>
    </footer>
  );
}
