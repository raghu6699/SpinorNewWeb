import Link from "next/link";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <h1 className="font-serif text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl">
              Turn manual work into automated growth.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed md:text-lg">
              Spinor builds business-ready software and AI agents that answer customers, follow up leads,
              and run retention campaigns—so your team focuses on what matters.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-brand-primary px-6 py-3 font-semibold text-white
                           shadow-sm transition hover:bg-brand-primaryHover"
              >
                Talk to an Expert
              </Link>

              <Link
                href="/ai-agents"
                className="inline-flex items-center justify-center rounded-sm border-2 border-brand-primary px-6 py-3 font-semibold
                           text-brand-primary transition hover:bg-brand-bg"
              >
                See AI Agent Use Cases
              </Link>
            </div>

            {/* Micro-proof chips */}
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              {["Approved knowledge", "Human handoff", "KPI reporting"].map((t) => (
                <span key={t} className="rounded-md border border-brand-fg/20 bg-brand-card px-3 py-1 shadow-[0_1px_0_rgba(61,57,41,0.04)]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="rounded-lg border border-brand-fg/20 bg-brand-card p-5 shadow-card">
              <HeroIllustration />
            </div>
            <p className="mt-3 text-xs text-brand-fg/70">

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
