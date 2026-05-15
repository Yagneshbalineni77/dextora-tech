import { FadeIn } from "@/components/dextora/FadeIn";
import { Brain, GraduationCap, BarChart3, Film, Newspaper, Globe } from "lucide-react";

const CAPS = [
  {
    Icon: Brain,
    title: "Conversational AI & Voice Agents",
    desc: "Natural-language AI that speaks, listens, persuades, and closes. Phone calls, support, sales — handled entirely by AI that sounds genuinely human.",
  },
  {
    Icon: GraduationCap,
    title: "AI-Powered Education Systems",
    desc: "Personalised learning that adapts in real time. Oral tests, micro-questions, animations, simulations, memory techniques — all generated from the student's own syllabus.",
  },
  {
    Icon: BarChart3,
    title: "Intelligent CRM & Sales Automation",
    desc: "All leads captured. All calls handled. All follow-ups sent. CEO-level analytics from every conversation. Your team only touches qualified, warm opportunities.",
  },
  {
    Icon: Film,
    title: "AI Video & Content Generation",
    desc: "Clone your voice and avatar. Generate viral-ready reels, ads, and content at scale. Auto-post across platforms. Built for Indian creators and brands.",
  },
  {
    Icon: Newspaper,
    title: "AI-First Media & News Platforms",
    desc: "Hyper-local. Hyper-personal. AI-curated news that respects your time. Built-in community, civic accountability, and personalised daily briefs.",
  },
  {
    Icon: Globe,
    title: "Full-Product AI Development",
    desc: "End-to-end: product strategy, AI model selection, UX, development, and launch. We've shipped AI glasses. We'll ship your vision.",
  },
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[#3B82F6] font-mono uppercase tracking-[0.3em] text-xs mb-6">// Capabilities</p>
          <h2
            className="font-black uppercase leading-[0.95] tracking-tight text-[#F8FAFC] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
          >
            The Full Stack of AI.
            <br />
            <span className="hero-heading">End to End.</span>
          </h2>
          <p className="text-[#94A3B8] font-light mt-6 max-w-2xl text-base sm:text-lg">
            From LLM fine-tuning to voice agents to real-time analytics — we architect, build, and deploy.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-14 sm:mt-20">
          {CAPS.map(({ Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.06}>
              <div className="group relative h-full rounded-2xl border border-white/5 bg-[#0E1420] p-7 sm:p-8 transition-all duration-300 hover:border-[#3B82F6]/40 hover:-translate-y-1 hover:bg-[#141B2D]">
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ boxShadow: "0 0 60px -10px rgba(99,102,241,0.4) inset" }}
                />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#141B2D] border border-[#3B82F6]/30 text-[#6366F1] shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[#F8FAFC] font-semibold mt-5 text-lg sm:text-xl leading-snug">
                    {title}
                  </h3>
                  <p className="text-[#94A3B8] font-light text-sm sm:text-[15px] leading-relaxed mt-3">
                    {desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
