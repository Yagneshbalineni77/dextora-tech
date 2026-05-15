import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/dextora/FadeIn";

const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 12, suffix: "+", label: "Complex AI Products Shipped" },
  { value: 48, suffix: "%", label: "Avg. Increase in Client Outcomes" },
  { value: 1000, suffix: "+", label: "Data Points Tracked Per Student" },
  { value: 5, suffix: " Min", label: "Avg. Lead Response via AI CRM" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        const start = performance.now();
        const dur = 1200;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function CredibilityStrip() {
  return (
    <section className="relative border-y border-white/5 bg-[#0E1420]/50 py-12 sm:py-16 px-5 sm:px-8 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {STATS.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08}>
            <div className="text-center md:text-left">
              <div
                className="hero-heading font-black leading-none"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
              >
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[#94A3B8] uppercase tracking-wider text-[10px] sm:text-xs mt-3">
                {s.label}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
