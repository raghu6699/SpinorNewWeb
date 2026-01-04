import type { Metadata } from "next";
import ButtonLink from "@/components/ui/ButtonLink";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Spinor Innovations",
  description:
    "Spinor Innovations builds business-ready software, AI agents, and growth systems that reduce manual work and improve customer outcomes.",
};

const values = [
  {
    title: "Outcome-first",
    desc:
      "We focus on measurable results: faster response times, better conversions, stronger retention, and reduced manual workload.",
  },
  {
    title: "Workflow-first AI",
    desc:
      "AI is only useful when it fits real work. We build agents around triggers, rules, escalation, and reporting—not vague demos.",
  },
  {
    title: "Quality you can maintain",
    desc:
      "Clean code, clear handover, and sensible architecture—so your team can run it confidently after launch.",
  },
  {
    title: "Speed with guardrails",
    desc:
      "We move fast, but safely: approved knowledge, confidence rules, audit trails, and human handoff are built-in.",
  },
];

const approach = [
  {
    step: "01",
    title: "Discover",
    desc:
      "We map the workflow, define goals and KPIs, and identify what should be automated vs. kept human-led.",
  },
  {
    step: "02",
    title: "Build",
    desc:
      "We design and implement the product/agent, integrate with your tools, and set up reporting.",
  },
  {
    step: "03",
    title: "Pilot",
    desc:
      "We launch in a controlled way, review edge cases, tune performance, and report weekly.",
  },
  {
    step: "04",
    title: "Scale",
    desc:
      "We expand to more workflows, channels, and teams—while keeping the system stable and measurable.",
  },
];

const whatWeDo = [
  {
    title: "Software Development",
    bullets: [
      "Websites (static, dynamic, eCommerce)",
      "Mobile + desktop applications",
      "Extensions, integrations, internal portals",
      "Performance + SEO foundation",
    ],
    link: { label: "Explore Services", href: "/services#software" },
  },
  {
    title: "AI Agents",
    bullets: [
      "Marketing agents (retention + lifecycle)",
      "Customer service agents (phone + front desk)",
      "Sales agents (lead follow-up + booking)",
      "Guardrails: approved knowledge + human handoff",
    ],
    link: { label: "See AI Agents Hub", href: "/ai-agents" },
  },
  {
    title: "Marketing",
    bullets: [
      "D2C: social + offline growth support",
      "B2B: LinkedIn, email, SMS systems",
      "Tracking + weekly iteration",
      "Offers, messaging, conversion optimization",
    ],
    link: { label: "Explore Marketing", href: "/services#marketing" },
  },
];

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <div className="text-xs font-semibold opacity-70">{eyebrow}</div>
      ) : null}
      <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {desc ? <p className="mt-3 max-w-3xl opacity-90">{desc}</p> : null}
    </div>
  );
}

function Card({
  title,
  children,
  highlight,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark ${
        highlight ? "ring-1 ring-brand-primary/50" : ""
      }`}
    >
      <h3 className="font-serif text-xl font-semibold">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed opacity-90">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((it) => (
        <li key={it} className="flex gap-2">
          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <>
      <main className="bg-brand-bg">
        {/* HERO */}
        <section>
          <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
            <div className="rounded-lg border border-brand-border bg-brand-card p-8 shadow-card dark:shadow-cardDark">
              <div className="text-xs font-semibold opacity-70">About Spinor Innovations</div>

              <h1 className="mt-2 font-serif text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl">
                We turn manual work into automated growth.
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-relaxed opacity-90 md:text-lg">
                Spinor Innovations is a product-focused team that builds business-ready software, AI agents,
                and growth systems. We help companies respond faster, follow up consistently, retain customers,
                and reduce repetitive admin—without adding unnecessary tools or complexity.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary">
                  Talk to an Expert
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  View Services
                </ButtonLink>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                {["Workflow-first", "Guardrails built-in", "Measurable KPIs"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-brand-border bg-brand-muted px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section>
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="What we do"
              title="Build, automate, and grow—end to end."
              desc="Three core capabilities that work best together: strong software foundations, workflow-first AI, and growth systems that scale."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {whatWeDo.map((w) => (
                <Card key={w.title} title={w.title} highlight={w.title === "AI Agents"}>
                  <BulletList items={w.bullets} />
                  <div className="mt-5">
                    <Link
                      href={w.link.href}
                      className="inline-flex items-center text-sm font-semibold text-brand-primary hover:underline"
                    >
                      {w.link.label} →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section>
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="How we think"
              title="Principles that keep delivery clean and useful"
              desc="A modern build should be fast to ship, safe to operate, and easy to maintain."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {values.map((v) => (
                <Card key={v.title} title={v.title}>
                  {v.desc}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section>
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="Delivery"
              title="How we work"
              desc="A simple process that's lightweight, structured, and outcome-focused."
            />

            <div className="grid gap-6 md:grid-cols-4">
              {approach.map((a) => (
                <div
                  key={a.step}
                  className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark"
                >
                  <div className="text-xs font-semibold opacity-70">{a.step}</div>
                  <h3 className="mt-2 font-serif text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-90">{a.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-md border border-brand-border bg-brand-muted p-6">
              <div className="font-mono text-sm opacity-90">
                Signals → Decide → Act → Handoff → Report
              </div>
              <p className="mt-2 text-sm opacity-90">
                Whether it's software or AI agents, we connect work to outcomes with clear rules, clean handoffs,
                and consistent reporting.
              </p>
            </div>
          </div>
        </section>

        {/* TRUST / DIFFERENTIATOR */}
        <section>
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="Why Spinor"
              title="We build what teams actually use"
              desc="Most solutions fail because they don't match real workflows. We design around how your team works today—and where you want to be."
            />

            <div className="grid gap-6 md:grid-cols-3">
              <Card title="Practical, not theoretical">
                We prioritize real use cases: customer answers, lead follow-up, retention messaging, admin routing—then
                iterate with KPIs.
              </Card>
              <Card title="Built for safe operation">
                Agents include guardrails: approved knowledge, confidence rules, escalation, and audit trails—so your
                team trusts the system.
              </Card>
              <Card title="Clean handover">
                You get documentation, structured code, and a clear maintenance path. We can support long-term or hand
                off to your internal team.
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-lg border-2 border-brand-border bg-brand-card p-10 shadow-card dark:shadow-cardDark">
              <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                Want a clear plan in 30 minutes?
              </h2>
              <p className="mt-3 max-w-2xl opacity-90">
                Tell us your workflow (support, sales, retention, or a software rebuild). We'll recommend the fastest path
                to measurable outcomes.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary">
                  Talk to an Expert
                </ButtonLink>
                <ButtonLink href="/ai-agents" variant="secondary">
                  Explore AI Agents
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
