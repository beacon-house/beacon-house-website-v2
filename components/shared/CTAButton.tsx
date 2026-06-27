import Link from "next/link";
import { CTA_URL, CTA_LABEL } from "@/lib/constants";

interface CTAButtonProps {
  variant?: "primary" | "ghost";
  className?: string;
  children?: React.ReactNode;
}

export default function CTAButton({
  variant = "primary",
  className = "",
  children,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-sans font-semibold transition-all duration-150 hover:-translate-y-0.5 active:translate-y-[2px]";

  if (variant === "primary") {
    return (
      <Link
        href={CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} bg-[var(--bh-warm-amber)] text-[var(--bh-deep-ink)] px-7 md:px-8 py-3.5 text-[1rem] shadow-[0_10px_22px_rgba(20,33,61,0.24),0_3px_0_rgba(20,33,61,0.24)] hover:shadow-[0_14px_30px_rgba(20,33,61,0.28),0_4px_0_rgba(20,33,61,0.24)] active:shadow-[0_4px_10px_rgba(20,33,61,0.2),0_1px_0_rgba(20,33,61,0.22)] ${className}`}
      >
        {children || CTA_LABEL}
      </Link>
    );
  }

  return (
    <Link
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} border border-[var(--bh-border-blue-gray)] text-[var(--bh-navy)] px-6 py-3 text-[0.95rem] hover:border-[var(--bh-navy)] ${className}`}
    >
      {children || CTA_LABEL}
    </Link>
  );
}
