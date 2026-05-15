import { FadeIn } from "@/components/dextora/FadeIn";
import {
  GraduationCap,
  Phone,
  Newspaper,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Building2,
  Glasses,
} from "lucide-react";

const INDUSTRIES = [
  { Icon: GraduationCap, name: "Education & EdTech" },
  { Icon: Phone, name: "Sales & CRM" },
  { Icon: Newspaper, name: "Media & Journalism" },
  { Icon: HeartPulse, name: "Healthcare" },
  { Icon: Landmark, name: "Finance & Banking" },
  { Icon: ShoppingBag, name: "D2C & E-commerce" },
  { Icon: Building2, name: "Government & Civic Tech" },
  { Icon: Glasses, name: "Hardware & Wearables" },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[#3B82F6] font-mono uppercase tracking-[0.3em] text-xs mb-6">// Sectors</p>
          <h2
            className="font-black uppercase leading-[0.95] tracking-tight text-[#F8FAFC] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
          >
            Built Across Industries.
            <br />
            <span className="hero-heading">Proven in the Wild.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mt-14 sm:mt-20">
          {INDUSTRIES.map(({ Icon, name }, i) => (
            <FadeIn key={name} delay={i * 0.04}>
              <div className="group rounded-2xl border border-white/5 bg-[#0E1420] p-6 sm:p-7 text-center transition-all duration-300 hover:border-[#3B82F6]/40 hover:-translate-y-1">
                <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center bg-[#141B2D] border border-[#3B82F6]/20 text-[#6366F1] group-hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.6)] transition-shadow">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div className="text-[#F8FAFC] font-medium mt-4 text-sm sm:text-[15px]">{name}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
