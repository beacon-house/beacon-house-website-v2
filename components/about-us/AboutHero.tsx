import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="about-gradient-ivory pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="max-w-text animate-fade-in-up">
            <h2 className="text-sm font-bold tracking-[0.15em] text-navy uppercase mb-6">
              Why We Exist
            </h2>
            
            <h1 className="text-[36px] md:text-[40px] lg:text-[36px] leading-[1.15] font-serif font-medium text-deep-ink mb-10">
              The students competing for the most selective universities are already strong.
            </h1>
            
            <div className="border-l-2 border-amber pl-6 mb-10">
              <ul className="space-y-4 text-lg md:text-xl text-deep-ink font-medium">
                <li>They have excellent grades.</li>
                <li>Rigorous subjects.</li>
                <li>Serious activities.</li>
                <li>Ambitious goals.</li>
              </ul>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-slate">
              <p>
                What separates them is not simply how much they have done.
              </p>
              <p>
                It is whether their choices have developed into a distinctive, credible and coherent applicant.
              </p>
              <p className="font-medium text-deep-ink">
                That requires true <span className="text-amber">personalisation.</span>
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px] animate-slide-in-down" style={{ animationDelay: "0.2s" }}>
            {/* 
              Placeholder for the diagram image. 
              The user will provide an image without a frame that fits directly on the background.
            */}
            <Image
              src="/about-us/fold-1.png"
              alt="Diagram showing how grades, subjects, activities, and goals combine into a distinctive applicant"
              fill
              className="object-contain object-center lg:object-right"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
