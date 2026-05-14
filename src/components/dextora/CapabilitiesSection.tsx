import { FadeIn } from "@/components/dextora/FadeIn";

const CAPS = [
  ["AI Engineering", "LLM orchestration, retrieval pipelines, adaptive personalization, evaluation harnesses."],
  ["Generative Media", "Text-to-video pipelines (Google VEO), cinematic prompt design, brand-conditioned outputs."],
  ["Interactive 3D", "Three.js, WebGL fluid shaders, GSAP scrollytelling, audio-reactive UI."],
  ["Product Design", "Onyx & Frost system. Premium dark aesthetics. Apple-tier motion and typography."],
  ["Frontend Architecture", "React, Vite, TanStack, edge SSR. Zero-jank performance budgets."],
  ["Scale & Reliability", "Multi-tenant infra, RLS, observability — from prototype to thousands of users."],
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-[5]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#0C0C0C]/50 text-center mb-6">Capabilities</p>
          <h2 className="font-black uppercase text-center leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}>
            Vertically integrated
          </h2>
          <p className="text-center max-w-2xl mx-auto mt-8 text-[#0C0C0C]/70 font-light" style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}>
            We design, engineer and ship — from the AI core to the last pixel. No handoffs. No compromises. Just products that feel inevitable.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px mt-16 sm:mt-20 md:mt-24 bg-[#0C0C0C]/15">
          {CAPS.map(([title, desc], i) => (
            <FadeIn key={title} delay={i * 0.08} className="bg-white p-8 md:p-10">
              <div>
                <div className="font-black uppercase text-xl md:text-2xl">{title}</div>
                <p className="mt-4 text-[#0C0C0C]/60 font-light leading-relaxed">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
