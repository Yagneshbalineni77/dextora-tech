import { motion } from "framer-motion";

/**
 * Hero centerpiece — an ambient "constellation" instead of a heavy orb.
 * Mostly transparent: thin wireframe rings, floating glyph satellites,
 * and a soft glow. Designed to sit over the Dextora wordmark without
 * blocking it.
 */
export function RealityOrb() {
  const satellites = [
    { label: "LEARN", angle: 0, r: 44 },
    { label: "REEL", angle: 60, r: 44 },
    { label: "SITES", angle: 120, r: 44 },
    { label: "CRM", angle: 180, r: 44 },
    { label: "FORESIGHT", angle: 240, r: 44 },
    { label: "GLASSES", angle: 300, r: 44 },
  ];

  return (
    <div className="aspect-square relative select-none pointer-events-none">
      {/* soft atmospheric glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(182,0,168,0.35), rgba(118,33,176,0.18) 40%, transparent 70%)",
        }}
      />

      {/* slow rotating wireframe ring */}
      <motion.div
        className="absolute inset-[6%] rounded-full border border-[#D7E2EA]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
          style={{ background: "#BE4C00", boxShadow: "0 0 14px #BE4C00" }}
        />
        <div
          className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
          style={{ background: "#B600A8", boxShadow: "0 0 12px #B600A8" }}
        />
      </motion.div>

      {/* counter-rotating dashed ring */}
      <motion.div
        className="absolute inset-[18%] rounded-full border border-dashed border-[#D7E2EA]/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      {/* tilted ellipse (perspective ring) */}
      <div
        className="absolute inset-[12%] rounded-full border border-[#D7E2EA]/10"
        style={{ transform: "rotateX(72deg)" }}
      />

      {/* floating product satellites */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        {satellites.map((s) => {
          const rad = (s.angle * Math.PI) / 180;
          const x = 50 + s.r * Math.cos(rad);
          const y = 50 + s.r * Math.sin(rad);
          return (
            <motion.div
              key={s.label}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            >
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-full backdrop-blur-sm border border-[#D7E2EA]/15"
                style={{ background: "rgba(12,12,12,0.55)" }}
              >
                <span className="w-1 h-1 rounded-full bg-[#B600A8] shadow-[0_0_6px_#B600A8]" />
                <span className="text-[8px] tracking-[0.25em] text-[#D7E2EA]/70 uppercase">{s.label}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* subtle center pulse */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "#D7E2EA", boxShadow: "0 0 20px #B600A8, 0 0 40px rgba(182,0,168,0.5)" }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.9, 0.4, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* HUD corner labels */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.4em] text-[#D7E2EA]/50 uppercase">
        Reality Engine
      </div>
      <div className="absolute bottom-0 right-0 text-[9px] tracking-[0.3em] text-[#D7E2EA]/40 uppercase flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#BE4C00] animate-pulse" />
        Live
      </div>
    </div>
  );
}
