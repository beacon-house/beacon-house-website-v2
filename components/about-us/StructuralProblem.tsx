import Image from "next/image";

export default function StructuralProblem() {
  return (
    <section className="bg-blue-mist py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column - Content */}
          <div className="max-w-text animate-fade-in-up">
            <h2 className="text-sm font-bold tracking-[0.15em] text-navy uppercase mb-6">
              The Structural Problem
            </h2>

            <h1 className="text-[36px] md:text-5xl lg:text-[52px] leading-[1.15] font-serif font-medium text-deep-ink mb-10">
              Personalisation is also where most counselling models become weakest.
            </h1>

            <div className="space-y-6 text-base md:text-lg text-slate mb-8">
              <p>
                As counselling companies grow, they gain access to stronger systems, larger teams and wider resources.
              </p>
              <p>
                But scale creates pressure towards standardisation.
              </p>
            </div>

            <div className="border-l-2 border-amber pl-6 mb-8">
              <ul className="space-y-4 text-lg md:text-xl text-deep-ink font-medium">
                <li>Students enter common processes.</li>
                <li>Activities come from familiar playbooks.</li>
                <li>Decisions move through layers.</li>
                <li>The most experienced people become further removed from the child.</li>
              </ul>
            </div>

            <div className="space-y-4 text-base md:text-lg text-slate">
              <p>
                The organisation may have impressive resources.
              </p>
              <p>
                Yet the student can still become <span className="text-amber font-medium">lost within the system.</span>
              </p>
            </div>
          </div>

          {/* Right Column - Composite Image */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[750px] animate-slide-in-down" style={{ animationDelay: "0.2s" }}>
            <Image
              src="/about-us/fold-2.png"
              alt="Diagram showing how scale creates standardisation: stronger systems, larger teams, and wider resources still leave students lost within the system"
              fill
              className="object-contain object-center lg:object-right"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
