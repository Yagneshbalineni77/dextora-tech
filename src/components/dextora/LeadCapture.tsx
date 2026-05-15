import { useState } from "react";
import { FadeIn } from "@/components/dextora/FadeIn";
import { Check } from "lucide-react";

const EXPECT = [
  "Honest assessment of your AI opportunity",
  "Rough architecture of how we'd approach your problem",
  "Realistic timeline and investment range",
  "Whether Dextora is the right fit for you",
  "Zero pressure. Zero sales pitch.",
];

export function LeadCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  return (
    <section id="book" className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.25), transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(99,102,241,0.2), transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[#3B82F6] font-mono uppercase tracking-[0.3em] text-xs mb-6 text-center">
            // Book a Strategy Call
          </p>
          <h2
            className="font-black uppercase leading-[0.95] tracking-tight text-[#F8FAFC] text-center max-w-4xl mx-auto"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
          >
            We Take a Limited Number
            <br />
            of Projects <span className="hero-heading">Each Quarter.</span>
          </h2>
          <p className="text-[#94A3B8] font-light max-w-2xl mx-auto mt-6 text-center text-base sm:text-lg">
            If you're building something ambitious and you're ready to move, a 30-minute strategy call
            is where every great project begins.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mt-14 sm:mt-20">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-white/5 bg-[#0E1420] p-7 sm:p-9 h-full">
              <h3 className="text-[#F8FAFC] font-semibold text-xl sm:text-2xl">
                What to Expect on the Call
              </h3>
              <ul className="mt-6 space-y-4">
                {EXPECT.map((e) => (
                  <li key={e} className="flex gap-3 text-[#94A3B8] text-sm sm:text-[15px]">
                    <Check className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/5 text-[#94A3B8]/80 italic font-light text-sm leading-relaxed">
                Calls are with a senior Dextora engineer or co-founder. Not a sales rep.
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-[#3B82F6]/30 bg-[#0E1420] p-7 sm:p-9 h-full shadow-[0_0_60px_-20px_rgba(59,130,246,0.4)]">
              <h3 className="text-[#F8FAFC] font-semibold text-xl sm:text-2xl">
                Book Your Free 30-Min Session
              </h3>
              <p className="text-[#94A3B8] text-sm mt-2">
                Tell us briefly what you're building — we reply within 24 hours.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-[#3B82F6]/40 bg-[#141B2D] p-6 text-center">
                  <div className="text-[#F8FAFC] font-semibold text-lg">Thanks — we got it.</div>
                  <p className="text-[#94A3B8] text-sm mt-2">
                    A senior engineer will reach out shortly to schedule your call.
                  </p>
                </div>
              ) : (
                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                    <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                  </div>
                  <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                  <Field label="What are you building?" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} />
                  <button
                    type="submit"
                    className="contact-btn w-full rounded-full text-white font-medium uppercase tracking-widest px-6 py-3.5 text-sm hover:opacity-90 transition-opacity"
                  >
                    Request a Strategy Call →
                  </button>
                  <p className="text-[#94A3B8]/60 text-xs text-center mt-3">
                    We work best with founders, CXOs, and product leaders ready to act.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-xl bg-[#080B14] border border-white/10 px-4 py-3 text-[#F8FAFC] text-sm placeholder:text-[#475569] focus:border-[#3B82F6] focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="text-[#94A3B8] uppercase tracking-wider text-[10px] font-mono">
        {label}
        {required && " *"}
      </span>
      {textarea ? (
        <textarea
          required={required}
          rows={3}
          className={`${cls} mt-2 resize-none`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          type={type}
          required={required}
          className={`${cls} mt-2`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
}
