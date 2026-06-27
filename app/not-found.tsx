export default function NotFound() {
  return (
    <div className="min-h-[100svh] flex flex-col items-center justify-center bg-[var(--bh-warm-ivory)] px-6">
      <h1 className="font-serif font-medium text-[var(--bh-deep-ink)] text-[3rem] md:text-[4rem] mb-4">
        404
      </h1>
      <p className="font-sans text-[var(--bh-slate-text)] text-[1rem] md:text-[1.1rem] mb-6">
        This page doesn&apos;t exist yet.
      </p>
      <a
        href="/"
        className="font-sans font-semibold text-[var(--bh-navy)] hover:text-[var(--bh-warm-amber)] transition-colors"
      >
        ← Back to Beacon House
      </a>
    </div>
  );
}
