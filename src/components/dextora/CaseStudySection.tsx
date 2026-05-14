import { FadeIn } from "@/components/dextora/FadeIn";

const BLOCKS = [
  ["Problem", "Grading was the bottleneck.", "A board of examiners spent ~4 months evaluating tens of thousands of theory answer scripts each cycle. Slow. Inconsistent. Expensive."],
  ["Solution", "A rubric-aware AI evaluator.", "Copy Checker ingests scanned scripts, runs handwriting OCR, applies the official rubric, and produces a per-question score with rationale."],
  ["How", "Three-stage pipeline.", "Stage 1: OCR + answer-segmentation. Stage 2: rubric-conditioned LLM scoring. Stage 3: examiner review with explainable trails."],
  ["Outcome", "4 months → 3 days.", "The same workload now finishes in under 72 hours. Students get rich per-question feedback within the same week."],
];

export function CaseStudySection() {
  return (
    <section className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#0C0C0C]/50 mb-6">Case Study · Copy Checker</p>
          <h2 className="font-black uppercase leading-[0.9] tracking-tight max-w-4xl" style={{ fontSize: "clamp(2.5rem, 8vw, 110px)" }}>
            Months of grading. Minutes of intelligence.
          </h2>
          <p className="mt-8 text-[#0C0C0C]/65 font-light max-w-2xl" style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}>
            A theory-exam evaluator built for an institution drowning in answer scripts. We replaced a 4-month manual grading cycle with a rubric-aware AI evaluator that reads, scores and explains every answer — at the speed of an API call.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-px bg-[#0C0C0C]/15 mt-16 sm:mt-20">
          {BLOCKS.map(([label, head, body], i) => (
            <FadeIn key={label} delay={i * 0.08} className="bg-white p-8 md:p-12">
              <div>
                <div className="uppercase tracking-widest text-xs text-[#B600A8]">{label}</div>
                <div className="font-black uppercase mt-4 text-2xl md:text-3xl leading-tight">{head}</div>
                <p className="mt-4 text-[#0C0C0C]/65 font-light leading-relaxed">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
