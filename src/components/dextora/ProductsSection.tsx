import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/dextora/FadeIn";
import { GhostButton } from "@/components/dextora/Buttons";

interface Product {
  num: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  features?: string[];
  stats?: [string, string][];
  gradient: string;
}

const PRODUCTS: Product[] = [
  {
    num: "01",
    category: "Flagship · Education",
    name: "Dextora Learn",
    tagline: "India's most advanced AI-powered learning engine.",
    description: "An adaptive curriculum that replaces static video lectures. A reality-engine canvas for K-12 and higher education — engineered for mastery, scaled to thousands.",
    features: ["Adaptive AI Tutor", "Reality Engine Canvas", "Parent & Educator Portals", "Mastery-Based Progression"],
    stats: [["14k+", "Active learners"], ["92%", "Completion rate"], ["3.2x", "Faster mastery"]],
    gradient: "linear-gradient(135deg, #18011F 0%, #7621B0 50%, #B600A8 100%)",
  },
  {
    num: "02",
    category: "Flagship · Video",
    name: "Dextora Reel Studio",
    tagline: "Cinematic short-form video — generated from a single prompt.",
    description: "Production-grade SaaS that turns text into scroll-stopping reels in seconds. Studio-tier dark UI, brand-conditioned outputs, algorithm-tuned formats.",
    features: ["One-Prompt Generation", "Brand Conditioning", "Algorithm Optimization", "Batch Production"],
    gradient: "linear-gradient(135deg, #BE4C00 0%, #B600A8 70%, #18011F 100%)",
  },
  {
    num: "03",
    category: "Flagship · Web",
    name: "Dextora Sites",
    tagline: "Awwwards-grade websites — orchestrated in 60 seconds.",
    description: "Multi-modal pipeline fusing LLM creative direction, Google VEO video, WebGL fluid shaders and GSAP scrollytelling into investor-grade interactive experiences.",
    features: ["LLM Creative Direction", "VEO Video Pipeline", "WebGL Shaders", "GSAP Scrollytelling"],
    gradient: "linear-gradient(135deg, #7621B0 0%, #18011F 60%, #BE4C00 100%)",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" style={{ backgroundColor: "#0C0C0C" }}>
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#D7E2EA]/50 text-center mb-6">Flagship</p>
          <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
            Products
          </h2>
        </FadeIn>

        <div className="mt-16 sm:mt-20 md:mt-24">
          {PRODUCTS.map((p, i) => (
            <StackedCard key={p.num} product={p} index={i} total={PRODUCTS.length} />
          ))}
        </div>

        <EnterpriseGovGrid />
      </div>
    </section>
  );
}

function StackedCard({ product, index, total }: { product: Product; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh] sticky" style={{ top: `${24 + index * 28}px` }}>
      <motion.div
        style={{ scale, background: "#0C0C0C" }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 h-full flex flex-col"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <div className="text-[#D7E2EA] font-black leading-none" style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}>{product.num}</div>
            <div>
              <div className="text-[#D7E2EA]/50 uppercase tracking-widest text-[10px] sm:text-xs">{product.category}</div>
              <div className="text-[#D7E2EA] font-medium uppercase mt-1" style={{ fontSize: "clamp(1rem, 2.2vw, 2rem)" }}>{product.name}</div>
            </div>
          </div>
          <GhostButton>Live Project</GhostButton>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 mt-4 sm:mt-6 min-h-0">
          <div className="md:col-span-2 flex flex-col gap-3 sm:gap-4">
            <div className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] flex-shrink-0 relative overflow-hidden" style={{ height: "clamp(120px, 14vw, 200px)", background: product.gradient }}>
              <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)" }} />
            </div>
            <div className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] flex-1 p-6 md:p-8" style={{ background: "rgba(215,226,234,0.05)", border: "1px solid rgba(215,226,234,0.1)" }}>
              <p className="text-[#D7E2EA]/80 font-light leading-relaxed text-sm sm:text-base">{product.tagline}</p>
              {product.features && (
                <ul className="mt-4 space-y-1.5">
                  {product.features.map((f) => (
                    <li key={f} className="text-[#D7E2EA]/60 text-xs sm:text-sm">— {f}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="md:col-span-3 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] relative overflow-hidden" style={{ background: product.gradient, minHeight: 280 }}>
            <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3), transparent 60%)" }} />
            <div className="absolute inset-0 flex items-end p-6 sm:p-8 md:p-10">
              <div>
                <div className="text-white/70 uppercase tracking-widest text-[10px] sm:text-xs">{product.category}</div>
                <div className="text-white font-black uppercase mt-2" style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)", lineHeight: 1 }}>{product.name}</div>
                {product.stats && (
                  <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-8">
                    {product.stats.map(([n, l]) => (
                      <div key={l}>
                        <div className="text-white font-black text-xl sm:text-2xl md:text-3xl">{n}</div>
                        <div className="text-white/60 uppercase text-[9px] sm:text-[10px] tracking-wider mt-1">{l}</div>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-white/70 max-w-md mt-4 sm:mt-6 text-xs sm:text-sm font-light leading-relaxed hidden md:block">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const ENTERPRISE = [
  { tag: "Enterprise", name: "Dextora CRM", desc: "An AI-native CRM for high-velocity sales teams." },
  { tag: "Enterprise", name: "Social Media AI", desc: "An autonomous social desk that posts, replies and reports." },
  { tag: "Enterprise", name: "Dextora Broadcast", desc: "AI-powered global news engine and autonomous broadcasting." },
  { tag: "Government", name: "IAS Personal Agent", desc: "A private, secure agentic copilot for senior bureaucrats. Air-gapped deployment." },
  { tag: "Government", name: "Dextora Foresight", desc: "AI prediction engine running 1 million simulated agents to forecast outcomes and systemic risks." },
  { tag: "Platform", name: "Interview Analysis", desc: "Structured signals from every candidate conversation." },
  { tag: "Flagship", name: "Copy Checker", desc: "Trained on examiner rubrics. Evaluates handwritten and typed theory answers in minutes." },
  { tag: "Flagship", name: "Dextora AI Glasses", desc: "Heads-up intelligence for field officers. Live transcription, translation, recognition." },
];

function EnterpriseGovGrid() {
  return (
    <div className="mt-32 sm:mt-40">
      <FadeIn>
        <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#D7E2EA]/50 text-center mb-6">Enterprise · Government · Platform</p>
        <h3 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16" style={{ fontSize: "clamp(2rem, 7vw, 90px)" }}>
          The full stack
        </h3>
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {ENTERPRISE.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.05}>
            <div className="rounded-[24px] border border-[#D7E2EA]/15 p-6 sm:p-7 h-full hover:border-[#D7E2EA]/40 transition-colors group" style={{ background: "rgba(215,226,234,0.02)" }}>
              <div className="text-[#B600A8] uppercase tracking-widest text-[10px]">{p.tag}</div>
              <div className="text-[#D7E2EA] font-medium uppercase mt-3 text-lg sm:text-xl">{p.name}</div>
              <p className="text-[#D7E2EA]/55 font-light text-sm leading-relaxed mt-3">{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
