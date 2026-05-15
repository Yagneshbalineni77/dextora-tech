import { FadeIn } from "@/components/dextora/FadeIn";

const STEPS = [
  {
    n: "01",
    title: "Discovery Call",
    when: "Week 1",
    body:
      "We understand your business, the problem, and what success looks like. No templates. No assumptions. We listen first.",
  },
  {
    n: "02",
    title: "Architecture & Proposal",
    when: "Weeks 1–2",
    body:
      "We map the full AI system — models, data flows, integrations, timelines, cost. You get a blueprint, not a guess.",
  },
  {
    n: "03",
    title: "Build & Iterate",
    when: "Weeks 3–12",
    body:
      "Engineering begins. Weekly demos. We move fast without cutting corners. Every sprint is transparent and visible.",
  },
  {
    n: "04",
    title: "Deploy, Measure & Scale",
    when: "Ongoing",
    body:
      "We launch. We measure. We improve. Dextora doesn't disappear after delivery. We're in it with you.",
  },
];

export function HowWeWork() {
  return (
    <section className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 bg-[#0E1420]/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[#3B82F6] font-mono uppercase tracking-[0.3em] text-xs mb-6">// Our Process</p>
          <h2
            className="font-black uppercase leading-[0.95] tracking-tight text-[#F8FAFC] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
          >
            From Conversation
            <br />
            to <span className="hero-heading">Deployed AI.</span>
          </h2>
        </FadeIn>

        <div className="relative grid md:grid-cols-4 gap-4 sm:gap-5 mt-14 sm:mt-20">
          <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent" />
          {STEPS.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.1}>
              <div className="relative">
                <div className="relative w-14 h-14 rounded-full bg-[#0E1420] border border-[#3B82F6]/40 flex items-center justify-center text-[#6366F1] font-mono font-bold shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)]">
                  {s.n}
                </div>
                <div className="text-[#3B82F6] font-mono text-xs uppercase tracking-widest mt-5">
                  {s.when}
                </div>
                <h3 className="text-[#F8FAFC] font-semibold text-lg sm:text-xl mt-2">{s.title}</h3>
                <p className="text-[#94A3B8] font-light text-sm leading-relaxed mt-3">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
