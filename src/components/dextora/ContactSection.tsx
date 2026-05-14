import { FadeIn } from "@/components/dextora/FadeIn";
import { ContactButton, GhostButton } from "@/components/dextora/Buttons";

export function ContactSection() {
  return (
    <section id="contact" className="relative px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40 overflow-hidden" style={{ backgroundColor: "#0C0C0C" }}>
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 100%, #7621B0 0%, transparent 60%), radial-gradient(ellipse at 20% 50%, #B600A8 0%, transparent 50%)",
        filter: "blur(80px)"
      }} />
      <div className="max-w-5xl mx-auto relative">
        <FadeIn>
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#D7E2EA]/50 text-center mb-6">Let's build</p>
          <h2 className="hero-heading font-black uppercase text-center leading-[0.9] tracking-tight" style={{ fontSize: "clamp(2.5rem, 9vw, 130px)" }}>
            Cinematic engineering, on demand.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-center max-w-2xl mx-auto mt-10 text-[#D7E2EA]/70 font-light" style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}>
            We partner with a small number of teams each quarter — from pre-seed founders to global brands. If you're shipping something ambitious, we'd love to talk.
          </p>
        </FadeIn>
        <FadeIn delay={0.35}>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-12">
            <ContactButton href="mailto:hello@dextora.ai">hello@dextora.ai</ContactButton>
            <GhostButton href="#products">Review the work →</GhostButton>
          </div>
        </FadeIn>

        <div className="mt-24 sm:mt-32 pt-8 border-t border-[#D7E2EA]/10 flex flex-wrap items-center justify-between gap-4 text-[#D7E2EA]/40 text-xs uppercase tracking-widest">
          <div>© Dextora Reality Engine</div>
          <div>Engineering the interactive future.</div>
        </div>
      </div>
    </section>
  );
}
