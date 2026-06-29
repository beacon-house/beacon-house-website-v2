import { cn } from "@/lib/utils";
import type { ResultTable as ResultTableType } from "@/lib/results-data";

const HEADER_LABELS = {
  rank: "Rank",
  institution: "University",
  offers: "Class of 2029",
  total: "5 Year Total",
};

export default function ResultsTable({ table }: { table: ResultTableType }) {
  return (
    <div className="w-full">
      {/* Section kicker */}
      <div className="flex items-center gap-3 mb-6 md:mb-7">
        <div className="w-[3px] h-6 bg-[var(--bh-warm-amber)] rounded-full flex-shrink-0" />
        <h3
          className="font-serif font-medium text-[var(--bh-deep-ink)] leading-tight"
          style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.65rem)" }}
        >
          {table.kicker}
        </h3>
      </div>

      <p className="font-sans text-[var(--bh-slate-text)] text-[0.8rem] md:text-[0.85rem] leading-relaxed mb-6 md:mb-8 max-w-[640px]">
        {table.caption}
      </p>

      {/* Screenshot-style table: dark header, alternating rows, centered */}
      <div className="rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(20,33,61,0.06)]">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className="bg-[var(--bh-deep-ink)]">
              <th
                scope="col"
                className="font-sans text-[0.55rem] md:text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--bh-warm-ivory)] text-center py-3 md:py-4 px-1 md:px-2 w-[40px] md:w-[80px]"
              >
                {HEADER_LABELS.rank}
              </th>
              <th
                scope="col"
                className="font-sans text-[0.55rem] md:text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--bh-warm-ivory)] text-center py-3 md:py-4 px-1 md:px-2"
              >
                {HEADER_LABELS.institution}
              </th>
              <th
                scope="col"
                className="font-sans text-[0.55rem] md:text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--bh-warm-ivory)] text-center py-3 md:py-4 px-1 md:px-2 w-[78px] md:w-[150px]"
              >
                {HEADER_LABELS.offers}
                <span className="block">Offers</span>
              </th>
              <th
                scope="col"
                className="font-sans text-[0.55rem] md:text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--bh-warm-ivory)] text-center py-3 md:py-4 px-1 md:px-2 w-[72px] md:w-[130px]"
              >
                {HEADER_LABELS.total}
                <span className="block">Total</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => {
              const isStar = row.rank === "★";
              const isEven = i % 2 === 0;
              return (
                <tr
                  key={`${row.institution}-${i}`}
                  className={cn(
                    "transition-colors duration-200",
                    isEven ? "bg-[var(--bh-warm-ivory)]" : "bg-[var(--bh-soft-blue-mist)]"
                  )}
                >
                  <td className="py-3.5 md:py-4 px-1 md:px-2 text-center align-middle">
                    <span
                      className={cn(
                        "font-sans tabular-nums font-semibold",
                        isStar
                          ? "text-[var(--bh-warm-amber)] text-[0.95rem] md:text-[1.05rem]"
                          : "text-[var(--bh-deep-ink)] text-[0.85rem] md:text-[0.95rem]"
                      )}
                    >
                      {row.rank}
                    </span>
                  </td>
                  <td className="py-3.5 md:py-4 px-1 md:px-2 text-center align-middle">
                    <span className="font-serif font-medium text-[var(--bh-deep-ink)] text-[0.85rem] md:text-[0.95rem] leading-snug">
                      {row.institution}
                    </span>
                  </td>
                  <td className="py-3.5 md:py-4 px-1 md:px-2 text-center align-middle">
                    <span className="font-serif font-semibold text-[var(--bh-navy)] tabular-nums text-[0.95rem] md:text-[1.1rem]">
                      {row.offers}
                    </span>
                  </td>
                  <td className="py-3.5 md:py-4 px-1 md:px-2 text-center align-middle">
                    <span className="font-sans font-semibold text-[var(--bh-slate-text)] tabular-nums text-[0.9rem] md:text-[1rem]">
                      {row.fiveYearTotal}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
