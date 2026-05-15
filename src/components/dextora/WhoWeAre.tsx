import { FadeIn } from "@/components/dextora/FadeIn";

export function WhoWeAre() {
  return (
    <section className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <p className="text-[#3B82F6] font-mono uppercase tracking-[0.3em] text-xs mb-6">
            // Our Identity
          </p>
          <h2
            className="font-black uppercase leading-[0.95] tracking-tight text-[#F8FAFC]"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
          >
            We Are Not a Software Agency.
            <br />
            <span className="hero-heading">We Are Your AI R&D Partner.</span>
          </h2>
          <div className="mt-8 space-y-5 text-[#94A3B8] font-light leading-relaxed text-base sm:text-lg">
            <p>
              Most companies talk about AI. We've already shipped it — into classrooms, sales floors,
              newsrooms, and wearable devices.
            </p>
            <p>
              Dextora is a high-end AI development studio. We take on ambitious, complex problems and
              engineer systems that have measurable, transformative impact. Our clients don't come to
              us for websites. They come to us when they want to <em className="text-[#F8FAFC] not-italic font-medium">lead</em> their category.
            </p>
            <p>
              We take a limited number of serious mandates each quarter. If you're building something
              that matters, we should talk.
            </p>
          </div>
          <a
            href="#book"
            className="inline-flex items-center gap-2 mt-10 text-[#3B82F6] hover:text-[#6366F1] transition-colors text-sm uppercase tracking-widest font-medium"
          >
            → We're selective. Apply to work with us.
          </a>
        </FadeIn>

        <FadeIn delay={0.2} x={40}>
          <div className="relative aspect-square max-w-md mx-auto">
            <div
              className="absolute inset-0 rounded-full opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.5), transparent 60%)",
                filter: "blur(40px)",
              }}
            />
            <svg viewBox="0 0 400 400" className="relative w-full h-full">
              <defs>
                <radialGradient id="brain" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="80" fill="url(#brain)" />
              {[...Array(18)].map((_, i) => {
                const a = (i / 18) * Math.PI * 2;
                const r1 = 90, r2 = 170 + (i % 3) * 15;
                const x1 = 200 + Math.cos(a) * r1;
                const y1 = 200 + Math.sin(a) * r1;
                const x2 = 200 + Math.cos(a) * r2;
                const y2 = 200 + Math.sin(a) * r2;
                return (
                  <g key={i}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#line)" strokeWidth="1" opacity="0.5" />
                    <circle cx={x2} cy={y2} r="3" fill="#6366F1">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + (i % 4)}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                );
              })}
              <circle cx="200" cy="200" r="170" fill="none" stroke="rgba(99,102,241,0.2)" strokeDasharray="2 6" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(59,130,246,0.15)" />
            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
