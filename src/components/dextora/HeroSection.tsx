import { FadeIn } from "@/components/dextora/FadeIn";
import { Magnet } from "@/components/dextora/Magnet";
import { ContactButton } from "@/components/dextora/Buttons";
import { RealityOrb } from "@/components/dextora/RealityOrb";

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: "clip" }}>
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          {["Studio", "Products", "Capabilities", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:opacity-70 transition-opacity duration-200">
              {l}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-end px-6 md:px-10 relative">
        <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
          <FadeIn delay={0.6} y={30}>
            <Magnet padding={180} strength={3.5}>
              <RealityOrb />
            </Magnet>
          </FadeIn>
        </div>

        <div className="mt-6 sm:mt-4 md:-mt-5 overflow-hidden relative z-0">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              Dextora
            </h1>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 relative z-20">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px]"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            >
              A studio of three god-tier products engineering the interactive future
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton>Partner With Us</ContactButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
