import { FadeIn } from "@/components/dextora/FadeIn";
import { AnimatedText } from "@/components/dextora/AnimatedText";
import { ContactButton } from "@/components/dextora/Buttons";

export function StudioSection() {
  return (
    <section id="studio" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      {/* Decorative blobs */}
      <FadeIn delay={0.1} x={-80} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] aspect-square rounded-full"
        style={{ background: "radial-gradient(circle at 30% 30%, #BBCCD7, #646973 60%, #18011F)", filter: "blur(2px)" }}>
        <span />
      </FadeIn>
      <FadeIn delay={0.15} x={80} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] aspect-square"
        style={{ background: "conic-gradient(from 45deg, #B600A8, #7621B0, #BE4C00, #B600A8)", borderRadius: "30%", filter: "blur(1px)" }}>
        <span />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] aspect-square rounded-2xl"
        style={{ background: "linear-gradient(135deg, #BE4C00, #B600A8)", transform: "rotate(15deg)", boxShadow: "0 20px 60px rgba(182,0,168,0.4)" }}>
        <span />
      </FadeIn>
      <FadeIn delay={0.3} x={80} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] aspect-square rounded-full"
        style={{ background: "radial-gradient(circle at 60% 40%, #7621B0, #18011F)", boxShadow: "inset 0 -20px 40px rgba(0,0,0,0.5), 0 20px 60px rgba(118,33,176,0.4)" }}>
        <span />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 max-w-3xl">
        <FadeIn y={40}>
          <p className="text-[#D7E2EA]/60 uppercase tracking-[0.3em] text-xs sm:text-sm text-center mb-6">The Studio</p>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
            The Studio
          </h2>
        </FadeIn>

        <AnimatedText
          text="We are building the Apple of AI products — clinical, premium, and unmistakably ours. A small team of engineers, designers and AI researchers obsessed with replacing the cluttered, playful aesthetic of modern software with something quieter, sharper and more intentional."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[640px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 mt-4">
            {[
              ["3", "Flagship products"],
              ["14k+", "Users served"],
              ["60s", "Time to magic"],
              ["100%", "In-house build"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="hero-heading font-black text-4xl sm:text-5xl md:text-6xl">{n}</div>
                <div className="text-[#D7E2EA]/60 uppercase tracking-wider text-[10px] sm:text-xs mt-2">{l}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-4 sm:mt-8">
          <ContactButton>Partner With Us</ContactButton>
        </div>
      </div>
    </section>
  );
}
