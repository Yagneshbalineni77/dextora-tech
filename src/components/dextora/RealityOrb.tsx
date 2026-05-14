import { motion } from "framer-motion";

/**
 * Hero centerpiece — a "Reality Engine" orb.
 * Layered conic gradients, orbiting rings, scan-lines and a floating
 * monogram. No giant "D" letter; the brand reads as a system, not a logo.
 */
export function RealityOrb() {
  return (
    <div className="aspect-[3/4] relative select-none">
      {/* outer soft glow */}
      <div
        className="absolute -inset-10 rounded-full opacity-70 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(182,0,168,0.55), rgba(118,33,176,0.25) 45%, transparent 70%)",
        }}
      />

      {/* frame */}
      <div
        className="absolute inset-0 rounded-[40px] overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #1a0420 0%, #0C0C0C 60%, #0C0C0C 100%)",
          boxShadow:
            "0 40px 100px -30px rgba(182,0,168,0.45), inset 0 0 0 1px rgba(215,226,234,0.08)",
        }}
      >
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(215,226,234,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(215,226,234,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(circle at 50% 45%, black 30%, transparent 75%)",
          }}
        />

        {/* scan lines */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 4px)",
          }}
        />

        {/* core orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative"
            style={{ width: "62%", aspectRatio: "1 / 1" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* spinning conic */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #BE4C00, #B600A8, #7621B0, #18011F, #B600A8, #BE4C00)",
                filter: "blur(14px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
            {/* counter-spin inner */}
            <motion.div
              className="absolute inset-[14%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #ffffff 0%, #f5c6ff 12%, #B600A8 35%, #18011F 75%, #08000c 100%)",
                boxShadow:
                  "inset -20px -30px 60px rgba(0,0,0,0.7), inset 18px 22px 50px rgba(255,255,255,0.18)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            {/* highlight */}
            <div
              className="absolute inset-[14%] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 40% 25% at 38% 28%, rgba(255,255,255,0.55), transparent 70%)",
              }}
            />
          </motion.div>
        </div>

        {/* orbit rings */}
        <motion.div
          className="absolute inset-[8%] rounded-full border border-[#D7E2EA]/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
            style={{ background: "#BE4C00", boxShadow: "0 0 12px #BE4C00" }}
          />
        </motion.div>
        <motion.div
          className="absolute inset-[18%] rounded-full border border-dashed border-[#D7E2EA]/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
            style={{ background: "#B600A8", boxShadow: "0 0 10px #B600A8" }}
          />
        </motion.div>

        {/* corner brackets */}
        {[
          "top-3 left-3 border-l border-t",
          "top-3 right-3 border-r border-t",
          "bottom-3 left-3 border-l border-b",
          "bottom-3 right-3 border-r border-b",
        ].map((c) => (
          <div
            key={c}
            className={`absolute w-5 h-5 border-[#D7E2EA]/40 ${c}`}
          />
        ))}

        {/* HUD labels */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.4em] text-[#D7E2EA]/60 uppercase">
          Reality Engine
        </div>
        <div className="absolute bottom-4 left-4 text-[9px] tracking-[0.3em] text-[#D7E2EA]/50 uppercase">
          v 03.24
        </div>
        <div className="absolute bottom-4 right-4 text-[9px] tracking-[0.3em] text-[#D7E2EA]/50 uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BE4C00] animate-pulse" />
          Live
        </div>
      </div>
    </div>
  );
}
