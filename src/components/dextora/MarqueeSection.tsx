import { useEffect, useRef, useState } from "react";

interface Tile {
  name: string;
  tag: string;
  gradient: string;
  glyph: string;
}

const TILES: Tile[] = [
  { name: "Dextora Learn", tag: "Adaptive AI Tutor", glyph: "01", gradient: "linear-gradient(135deg, #18011F 0%, #7621B0 55%, #B600A8 100%)" },
  { name: "Reel Studio", tag: "Prompt → Cinematic", glyph: "02", gradient: "linear-gradient(135deg, #BE4C00 0%, #B600A8 70%, #18011F 100%)" },
  { name: "Dextora Sites", tag: "60s Awwwards-grade", glyph: "03", gradient: "linear-gradient(135deg, #7621B0 0%, #18011F 60%, #BE4C00 100%)" },
  { name: "Dextora CRM", tag: "AI-native Sales", glyph: "04", gradient: "linear-gradient(135deg, #0C0C0C 0%, #18011F 50%, #7621B0 100%)" },
  { name: "Social AI", tag: "Autonomous Desk", glyph: "05", gradient: "linear-gradient(135deg, #B600A8 0%, #BE4C00 100%)" },
  { name: "Broadcast", tag: "Global News Engine", glyph: "06", gradient: "linear-gradient(135deg, #18011F 0%, #BE4C00 100%)" },
  { name: "IAS Agent", tag: "Air-gapped Copilot", glyph: "07", gradient: "linear-gradient(135deg, #0C0C0C 0%, #7621B0 100%)" },
  { name: "Foresight", tag: "1M Agent Sims", glyph: "08", gradient: "linear-gradient(135deg, #7621B0 0%, #B600A8 60%, #BE4C00 100%)" },
  { name: "Interview Analysis", tag: "Signal Engine", glyph: "09", gradient: "linear-gradient(135deg, #18011F 0%, #B600A8 100%)" },
  { name: "Copy Checker", tag: "Examiner-grade AI", glyph: "10", gradient: "linear-gradient(135deg, #BE4C00 0%, #7621B0 100%)" },
  { name: "AI Glasses", tag: "Heads-up Intel", glyph: "11", gradient: "linear-gradient(135deg, #0C0C0C 0%, #B600A8 80%, #BE4C00 100%)" },
];

const ROW1 = [...TILES, ...TILES, ...TILES];
const ROW2 = [...TILES.slice().reverse(), ...TILES.slice().reverse(), ...TILES.slice().reverse()];

export function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const move = offset - 200;

  return (
    <section ref={ref} className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden" style={{ backgroundColor: "#0C0C0C" }}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4" style={{ transform: `translateX(${move}px)`, willChange: "transform" }}>
          {ROW1.map((t, i) => (
            <ProductTile key={`a-${i}`} tile={t} />
          ))}
        </div>
        <div className="flex gap-4" style={{ transform: `translateX(${-move}px)`, willChange: "transform" }}>
          {ROW2.map((t, i) => (
            <ProductTile key={`b-${i}`} tile={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductTile({ tile }: { tile: Tile }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex-shrink-0 border border-[#D7E2EA]/10"
      style={{ width: 420, height: 270, background: tile.gradient }}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.35), transparent 55%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-white/70 uppercase tracking-[0.25em] text-[10px]">Dextora</span>
          <span className="text-white/50 font-mono text-[11px]">{tile.glyph}</span>
        </div>
        <div>
          <div className="text-white/60 uppercase tracking-widest text-[10px] mb-2">{tile.tag}</div>
          <div className="text-white font-black uppercase leading-none" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)" }}>
            {tile.name}
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
    </div>
  );
}
