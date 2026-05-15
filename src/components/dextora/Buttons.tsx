import type { ReactNode } from "react";

export function ContactButton({ children = "Contact Us", href = "#contact" }: { children?: ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="contact-btn inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base hover:opacity-90 transition-opacity"
    >
      {children}
    </a>
  );
}

export function GhostButton({ children, href = "#" }: { children: ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="inline-block rounded-full border border-white/15 text-[#F8FAFC] font-medium uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm hover:border-[#3B82F6]/60 hover:bg-white/5 transition-all"
    >
      {children}
    </a>
  );
}
