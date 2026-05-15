import { useState } from "react";
import { FadeIn } from "@/components/dextora/FadeIn";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — if the problem is real and the founder is serious. We've worked with pre-revenue founders and large enterprises. Clarity of vision is what matters.",
  },
  {
    q: "What does working with Dextora cost?",
    a: "Project-based pricing. Highly variable on scope. Our strategy call is the fastest way to get a realistic number. We're not the cheapest — we're the most cost-efficient at the quality we deliver.",
  },
  {
    q: "How long does a typical project take?",
    a: "An MVP AI product is typically 6–12 weeks. A full-scale platform takes 3–6 months. You always get a detailed timeline before we start.",
  },
  {
    q: "Do you work on revenue share or equity?",
    a: "On a selective basis for exceptional opportunities. Let's talk.",
  },
  {
    q: "Can you integrate AI into our existing product?",
    a: "Absolutely. A significant portion of our work is augmenting existing platforms — CRM, ERP, apps, websites, and internal tools.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 bg-[#0E1420]/40 border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-[#3B82F6] font-mono uppercase tracking-[0.3em] text-xs mb-6">// FAQ</p>
          <h2
            className="font-black uppercase leading-[0.95] tracking-tight text-[#F8FAFC]"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
          >
            Questions, <span className="hero-heading">answered.</span>
          </h2>
        </FadeIn>

        <div className="mt-12 sm:mt-16 divide-y divide-white/5 border-y border-white/5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={f.q} delay={i * 0.04}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-6 sm:py-7 flex items-start justify-between gap-4 group"
                >
                  <span className="text-[#F8FAFC] font-medium text-base sm:text-lg group-hover:text-[#6366F1] transition-colors">
                    {f.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-[#3B82F6] shrink-0 mt-1 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6 sm:pb-7" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#94A3B8] font-light leading-relaxed text-sm sm:text-base max-w-2xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
