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
      className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors"
    >
      {children}
    </a>
  );
}
