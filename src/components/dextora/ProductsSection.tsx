import { FadeIn } from "@/components/dextora/FadeIn";

interface Product {
  emoji: string;
  category: string;
  name: string;
  tagline: string;
  italic: string;
  bullets: string[];
  claims?: string[];
  featured?: boolean;
}

const PRODUCTS: Product[] = [
  {
    emoji: "🎓",
    category: "Education",
    name: "Dextora Education",
    tagline: "AI That Teaches Like a Human Expert",
    italic: "Your child's personal IIT JEE / NEET / UPSC coach. Available 24/7.",
    bullets: [
      "Teaches from the student's own school books, line by line",
      "Asks micro-questions mid-lesson to lock learning in place",
      "Personalised videos, animations, simulations, and games",
      "Conducts oral tests in natural conversation",
      "Tracks 1,000+ individual data points per student",
    ],
    claims: [
      "📈 Min. 15% improvement in marks — guaranteed if followed.",
      "🎯 48% higher selection probability in IIT JEE, NEET, UPSC.",
    ],
    featured: true,
  },
  {
    emoji: "👨‍🏫",
    category: "EdTech",
    name: "Teacher & School Portal",
    tagline: "Give Teachers Their Power Back",
    italic: "A complete AI command centre for educators.",
    bullets: [
      "Auto-generates pre-class prep, in-class activities, post-class assessments",
      "Checks copies and handwritten work with human-level precision",
      "In-depth per-student analytics and progress reports",
      "Automates every repetitive admin task",
    ],
  },
  {
    emoji: "📞",
    category: "Sales",
    name: "Dextora CRM",
    tagline: "The AI That Runs Your Entire Sales Engine",
    italic: "Every lead. Every call. Every follow-up. Handled.",
    bullets: [
      "Captures every lead from website, social, phone, WhatsApp",
      "Responds within 5 minutes in perfectly natural AI voice",
      "Conducts full sales calls — recorded, logged, summarised",
      "Sends follow-ups, quotes, proposals on its own",
      "CEO-grade analytics across thousands of conversations",
    ],
    claims: [
      "📞 20,000 calls handled in a month — no lead went cold.",
      "💰 Multiply sales output without multiplying headcount.",
    ],
    featured: true,
  },
  {
    emoji: "🎬",
    category: "Video",
    name: "AI Video Studio",
    tagline: "Create. Clone. Go Viral.",
    italic: "The most powerful, most affordable AI video platform built for India.",
    bullets: [
      "Clone your own voice and avatar — deploy yourself at scale",
      "Generate reels, ads, explainers from a text prompt",
      "Hundreds of Indian avatars and regional language voices",
      "Auto-post to Instagram, YouTube, Facebook, LinkedIn",
    ],
    claims: ["🎥 From script to posted reel in under 5 minutes."],
  },
  {
    emoji: "📱",
    category: "Media",
    name: "Dextora News",
    tagline: "The News App India Actually Deserves",
    italic: "Hyper-local. AI-curated. Built for citizens who demand accountability.",
    bullets: [
      "Personalised, hyper-local news for your exact location",
      "AI filters noise — only verified stories reach you",
      "Question MPs, MLAs, IAS officers in your city publicly",
      "Personalised morning and evening briefings",
    ],
    claims: ["🗞️ The first news app that works for citizens, not advertisers."],
  },
  {
    emoji: "🌐",
    category: "Web",
    name: "Cinematic Website Builder",
    tagline: "Websites that look like they cost ₹50 lakh — built in hours.",
    italic: "AI-powered cinematic motion design and intelligent copywriting.",
    bullets: [
      "Conversion-optimised layouts",
      "Cinematic motion design out of the box",
      "Brand-conditioned copy and visuals",
    ],
  },
  {
    emoji: "🎓",
    category: "UPSC",
    name: "UPSC AI",
    tagline: "The Smartest UPSC Companion Ever Built",
    italic: "Knows the entire syllabus, your strengths, and exactly where you're losing marks.",
    bullets: ["Adaptive prelims + mains coverage", "Answer-writing evaluation", "Waitlist Open"],
  },
  {
    emoji: "🥽",
    category: "Hardware",
    name: "AI Glasses & Wearables",
    tagline: "We've already shipped AI into hardware.",
    italic:
      "If your vision involves wearables or IoT, we're one of the very few teams in India that can actually build it — and have.",
    bullets: ["Computer vision pipelines", "Edge inference", "Custom firmware + cloud"],
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[#3B82F6] font-mono uppercase tracking-[0.3em] text-xs mb-6">
            // Built by Dextora
          </p>
          <h2
            className="font-black uppercase leading-[0.95] tracking-tight text-[#F8FAFC] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
          >
            Products We've Already Built.
            <br />
            <span className="hero-heading">Proof We Can Build Yours.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 mt-14 sm:mt-20 auto-rows-fr">
          {PRODUCTS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.05} className={p.featured ? "md:row-span-1" : ""}>
              <ProductCard p={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <div className="group relative h-full rounded-2xl border border-white/5 bg-[#0E1420] p-7 sm:p-8 transition-all duration-300 hover:border-[#3B82F6]/40 hover:-translate-y-1 overflow-hidden">
      <div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25), transparent 70%)" }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="text-[#3B82F6] font-mono uppercase tracking-[0.25em] text-[10px]">
            {p.category}
          </div>
          <h3 className="text-[#F8FAFC] font-bold uppercase mt-2 text-xl sm:text-2xl leading-tight">
            {p.name}
          </h3>
          <p className="text-[#F8FAFC]/90 font-medium mt-2 text-sm sm:text-base">{p.tagline}</p>
        </div>
        <div className="text-3xl sm:text-4xl shrink-0">{p.emoji}</div>
      </div>

      <p className="relative text-[#94A3B8] italic font-light mt-4 text-sm sm:text-[15px]">
        {p.italic}
      </p>

      <ul className="relative mt-5 space-y-2">
        {p.bullets.map((b) => (
          <li
            key={b}
            className="text-[#94A3B8] text-sm font-light leading-relaxed flex gap-2.5"
          >
            <span className="text-[#3B82F6] mt-1 shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>

      {p.claims && (
        <div className="relative mt-6 pt-5 border-t border-white/5 space-y-2">
          {p.claims.map((c) => (
            <div
              key={c}
              className="text-[#F8FAFC] font-medium text-sm sm:text-[15px] leading-snug"
            >
              {c}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
