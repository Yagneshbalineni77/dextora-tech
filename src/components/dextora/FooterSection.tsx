export function FooterSection() {
  return (
    <footer className="relative px-5 sm:px-8 md:px-10 pt-16 pb-10 border-t border-white/5 bg-[#0E1420]/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 md:gap-8">
        <div>
          <div className="text-[#F8FAFC] font-black tracking-[0.2em] text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_12px_#3B82F6]" />
            DEXTORA TECH
          </div>
          <p className="text-[#94A3B8] font-light text-sm mt-4 max-w-xs leading-relaxed">
            Building the AI that runs India's future industries.
          </p>
        </div>

        <div className="flex md:justify-center">
          <div className="space-y-3">
            <div className="text-[#3B82F6] font-mono uppercase tracking-widest text-[10px] mb-3">
              // Navigate
            </div>
            {[
              ["What We Build", "#capabilities"],
              ["Our Products", "#products"],
              ["Industries", "#industries"],
              ["Book a Call", "#book"],
              ["Privacy Policy", "#"],
            ].map(([l, h]) => (
              <a
                key={l}
                href={h}
                className="block text-[#94A3B8] hover:text-white text-sm transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="md:text-right">
          <div className="text-[#3B82F6] font-mono uppercase tracking-widest text-[10px] mb-3">
            // Contact
          </div>
          <a
            href="mailto:hello@dextora.tech"
            className="text-[#F8FAFC] hover:text-[#6366F1] transition-colors text-sm"
          >
            hello@dextora.tech
          </a>
          <div className="flex md:justify-end gap-5 mt-5 text-[#94A3B8] text-sm">
            {["LinkedIn", "Twitter", "Instagram"].map((s) => (
              <a key={s} href="#" className="hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-14 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[#475569] text-xs">
        <div>© 2025 Dextora Tech. All Rights Reserved.</div>
        <div className="italic">"We don't demo AI. We ship it."</div>
      </div>
    </footer>
  );
}
