type Theme = "aerospace" | "quantum" | "physics";

interface StudentPlaceholderProps {
  theme: Theme;
  name: string;
  className?: string;
}

const AerospaceIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="var(--bh-warm-ivory)" />
    <path
      d="M40 140 C60 120, 80 130, 100 100 C120 70, 140 60, 170 50"
      stroke="var(--bh-border-blue-gray)"
      strokeWidth="2"
      strokeDasharray="6 6"
      fill="none"
    />
    <path
      d="M40 140 C60 120, 80 130, 100 100 C120 70, 140 60, 170 50"
      stroke="var(--bh-navy)"
      strokeWidth="2"
      strokeDasharray="6 6"
      strokeDashoffset="60"
      fill="none"
    />
    <circle cx="40" cy="140" r="5" fill="var(--bh-border-blue-gray)" />
    <circle cx="100" cy="100" r="6" fill="var(--bh-warm-amber)" />
    <circle cx="170" cy="50" r="5" fill="var(--bh-navy)" />
    <path
      d="M160 44 L172 50 L162 56 L166 50 Z"
      fill="var(--bh-navy)"
    />
  </svg>
);

const QuantumIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="var(--bh-soft-blue-mist)" />
    <ellipse
      cx="100"
      cy="100"
      rx="55"
      ry="28"
      stroke="var(--bh-border-blue-gray)"
      strokeWidth="1.5"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="55"
      ry="28"
      stroke="var(--bh-navy)"
      strokeWidth="1.5"
      transform="rotate(60 100 100)"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="55"
      ry="28"
      stroke="var(--bh-navy)"
      strokeWidth="1.5"
      transform="rotate(120 100 100)"
    />
    <circle cx="100" cy="100" r="10" fill="var(--bh-warm-amber)" />
    <circle cx="100" cy="55" r="5" fill="var(--bh-navy)" />
    <circle cx="145" cy="120" r="5" fill="var(--bh-navy)" />
    <circle cx="55" cy="120" r="5" fill="var(--bh-navy)" />
  </svg>
);

const PhysicsIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="var(--bh-warm-ivory)" />
    <circle cx="70" cy="70" r="4" fill="var(--bh-navy)" />
    <circle cx="130" cy="60" r="5" fill="var(--bh-warm-amber)" />
    <circle cx="150" cy="120" r="4" fill="var(--bh-navy)" />
    <circle cx="60" cy="140" r="5" fill="var(--bh-navy)" />
    <circle cx="110" cy="150" r="4" fill="var(--bh-border-blue-gray)" />
    <circle cx="95" cy="95" r="7" fill="var(--bh-navy)" />
    <path
      d="M70 70 L95 95 L130 60 M95 95 L150 120 M95 95 L60 140 M95 95 L110 150"
      stroke="var(--bh-border-blue-gray)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M70 70 L95 95 L130 60"
      stroke="var(--bh-navy)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const illustrations: Record<Theme, React.FC> = {
  aerospace: AerospaceIllustration,
  quantum: QuantumIllustration,
  physics: PhysicsIllustration,
};

export default function StudentPlaceholder({
  theme,
  name,
  className = "",
}: StudentPlaceholderProps) {
  const initial = name.replace("Student ", "");
  const Illustration = illustrations[theme];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[var(--bh-soft-blue-mist)] border border-[var(--bh-border-blue-gray)] ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-[180px] aspect-square opacity-80">
          <Illustration />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-serif font-medium text-[var(--bh-deep-ink)]/10"
          style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
        >
          {initial}
        </span>
      </div>
    </div>
  );
}
