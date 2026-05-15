import { FadeIn } from "@/components/dextora/FadeIn";
import { ContactButton, GhostButton } from "@/components/dextora/Buttons";

const TICKER = [
  "AI Glasses & Wearables",
  "EdTech Platforms",
  "AI-Powered CRM",
  "Media & News Apps",
  "Video Generation",
  "UPSC & Competitive Exam AI",
  "Cinematic Website Builders",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col" style={{ overflowX: "clip" }}>
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.25), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(59,130,246,0.18), transparent 60%)",
        }}
      />
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000, transparent 70%)",
        }}
      />

      <FadeIn delay={0} y={-20}>
        <nav className="relative flex justify-between items-center px-5 sm:px-8 md:px-10 pt-5 sm:pt-6 md:pt-8">
          <div className="text-[#F8FAFC] font-black tracking-[0.2em] text-base sm:text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_12px_#3B82F6] animate-pulse" />
            DEXTORA
          </div>
          <div className="hidden md:flex gap-7 lg:gap-9 text-[#94A3B8] uppercase tracking-wider text-xs lg:text-sm">
            {[
              ["What We Build", "#capabilities"],
              ["Products", "#products"],
              ["Industries", "#industries"],
              ["About", "#about"],
            ].map(([l, h]) => (
              <a key={l} href={h} className="hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
          <a
            href="#book"
            className="contact-btn rounded-full text-white text-[10px] sm:text-xs uppercase tracking-widest px-4 sm:px-5 py-2 sm:py-2.5"
          >
            Book a Call →
          </a>
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center items-center text-center px-5 sm:px-8 md:px-10 relative z-10 pt-10 sm:pt-16 pb-10">
        <FadeIn delay={0.1}>
          <p className="text-[#3B82F6] uppercase tracking-[0.35em] text-[10px] sm:text-xs font-mono mb-6 sm:mb-8">
            India's Premier AI Development Studio
          </p>
        </FadeIn>
        <FadeIn delay={0.2} y={30}>
          <h1
            className="hero-heading font-black uppercase leading-[0.95] tracking-tight max-w-5xl mx-auto"
            style={{ fontSize: "clamp(2.5rem, 8.5vw, 6rem)" }}
          >
            We Build the AI That
            <br />
            Runs Your Industry.
          </h1>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p
            className="text-[#94A3B8] font-light max-w-2xl mx-auto mt-6 sm:mt-8 leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)" }}
          >
            From idea to deployment — Dextora engineers intelligent systems that don't just automate
            tasks, they transform entire businesses. Trusted by bold founders and serious enterprises
            across India.
          </p>
        </FadeIn>
        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <ContactButton href="#book">Schedule a Free Strategy Call</ContactButton>
            <GhostButton href="#products">See Our Work ↓</GhostButton>
          </div>
        </FadeIn>
      </div>

      {/* Trust ticker */}
      <FadeIn delay={0.7}>
        <div className="relative border-y border-white/5 bg-black/30 backdrop-blur-sm py-3 sm:py-4 overflow-hidden">
          <div className="flex gap-10 sm:gap-14 whitespace-nowrap animate-[ticker_40s_linear_infinite]">
            {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-[#94A3B8] uppercase tracking-widest text-[10px] sm:text-xs font-mono"
              >
                <span className="text-[#6366F1]">✦</span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
