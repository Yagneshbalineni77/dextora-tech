import { FadeIn } from "@/components/dextora/FadeIn";
import { FlaskConical, Handshake, Flag } from "lucide-react";

const PILLARS = [
  {
    Icon: FlaskConical,
    title: "Research-Grade AI",
    body:
      "We don't copy-paste prompts. We architect AI systems with the right models, fine-tuned where needed, evaluated rigorously.",
  },
  {
    Icon: Handshake,
    title: "Partnership, Not Vending",
    body:
      "We're in your Slack. We're in your war room. Your problem is our problem until it's solved.",
  },
  {
    Icon: Flag,
    title: "Built for India, Ready for the World",
    body:
      "We understand Indian languages, Indian data, Indian regulation, and Indian users. Our AI doesn't sound foreign.",
  },
];

export function AboutPillars() {
  return (
    <section id="about" className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[#3B82F6] font-mono uppercase tracking-[0.3em] text-xs mb-6">// About</p>
          <h2
            className="font-black uppercase leading-[0.95] tracking-tight text-[#F8FAFC] max-w-4xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
          >
            Built by Engineers
            <br />
            <span className="hero-heading">Who've Done It Before.</span>
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-[#94A3B8] font-light leading-relaxed text-base sm:text-lg">
            <p>
              Dextora is a team of AI engineers, product architects, and domain specialists who have
              shipped real AI products into the real world — not just proof-of-concepts and pitch decks.
            </p>
            <p>
              We've built for education, media, sales, and hardware. We know what breaks in production.
              We know where AI genuinely changes outcomes and where it's just noise.
            </p>
            <p>That's why our clients trust us with their most important bets.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 mt-14 sm:mt-20">
          {PILLARS.map(({ Icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/5 bg-[#0E1420] p-7 sm:p-8 h-full">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#141B2D] border border-[#3B82F6]/30 text-[#6366F1]">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-[#F8FAFC] font-semibold mt-5 text-lg sm:text-xl">{title}</h3>
                <p className="text-[#94A3B8] font-light text-sm leading-relaxed mt-3">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
