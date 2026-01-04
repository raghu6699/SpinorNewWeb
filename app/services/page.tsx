import type { Metadata } from "next";
import ButtonLink from "@/components/ui/ButtonLink";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Spinor Innovations",
  description:
    "Spinor builds business-ready software, AI agents, and growth marketing systems. Websites, apps, automations, retention, sales and customer support—built for outcomes.",
};

const quickLinks = [
  { label: "Software Development", href: "#software" },
  { label: "AI Agents", href: "#ai-agents" },
  { label: "Marketing", href: "#marketing" },
  { label: "How We Work", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const software = {
  title: "Software Development",
  tagline: "Build reliable products fast—without the messy handoffs.",
  description:
    "We design and develop production-ready software that's easy to maintain, quick to ship, and built around your business workflow—not just screens.",
  offerings: [
    {
      name: "Websites",
      items: [
        "Static websites (fast, clean, SEO-ready)",
        "Dynamic websites (CMS, dashboards, portals)",
        "eCommerce (catalog, checkout, payments, shipping)",
        "Landing pages + conversion optimization",
      ],
    },
    {
      name: "Applications",
      items: [
        "Mobile apps (iOS/Android) for customers or teams",
        "Desktop apps (internal tools, operations, offline workflows)",
        "Admin panels + internal portals",
      ],
    },
    {
      name: "Extensions & Integrations",
      items: [
        "Browser extensions (Chrome/Edge) for productivity",
        "API integrations (CRM, payments, email/SMS tools)",
        "Automation workflows (forms → approvals → notifications)",
      ],
    },
  ],
  deliverables: [
    "UX flow + lightweight UI design",
    "Clean codebase + repo setup",
    "QA checklist + launch support",
    "Basic analytics + performance tuning",
    "Handover docs + maintenance plan",
  ],
};

const agents = {
  title: "AI Agents",
  tagline: "Automate conversations and workflows—safely and measurably.",
  description:
    "We build custom AI agents that operate inside clear guardrails: approved knowledge, routing rules, escalation to humans, and KPI reporting.",
  outcomes: [
    "Faster response times (support + sales)",
    "Consistent follow-ups (no lead left behind)",
    "Retention campaigns shipped weekly",
    "Lower manual workload for admin tasks",
  ],
  links: [
    { label: "AI Agents Hub", href: "/ai-agents" },
    { label: "Marketing AI Agents (Retention)", href: "/ai-agents-marketing" },
    { label: "Customer Service AI Agents", href: "/ai-agents-customer-service" },
    { label: "Sales AI Agents", href: "/ai-agents-sales" },
  ],
  guardrails: [
    "Approved knowledge sources only",
    "Confidence rules + safe fallback",
    "Human handoff + escalation",
    "Audit logs + iteration tracking",
  ],
};

const marketing = {
  title: "Marketing",
  tagline: "Full-funnel growth systems—D2C and B2B.",
  description:
    "We don't just post content. We build a repeatable system: messaging, creative, distribution, tracking, and iteration—so growth becomes predictable.",
  d2c: [
    "Social content system (reels/shorts + posts)",
    "Offline marketing support (print, local activations)",
    "Offer positioning + landing page conversion",
    "Retention flows (email/SMS/WhatsApp) + segments",
  ],
  b2b: [
    "LinkedIn outbound (ICP → list → messaging → booking)",
    "Email + SMS sequences (compliant and tracked)",
    "Lead magnets + case-study content",
    "CRM hygiene + pipeline reporting",
  ],
  measurement: [
    "Simple KPI dashboards (weekly)",
    "A/B testing plan for offers + messaging",
    "Channel performance insights",
  ],
};

const engagementModels = [
  {
    title: "Project Build",
    desc: "Best for launches and rebuilds. Fixed scope, clear timeline, clean handover.",
    bullets: ["Discovery + plan", "Build + QA", "Launch + support"],
  },
  {
    title: "Retainer (Build + Improve)",
    desc: "Best for continuous improvements. Monthly delivery cadence + reporting.",
    bullets: ["Weekly priorities", "Shipping rhythm", "KPI tracking"],
  },
  {
    title: "Pilot → Scale",
    desc: "Best for AI agents and growth systems. Start small, prove value, expand.",
    bullets: ["Pilot in weeks", "Tune + guardrails", "Scale channels/workflows"],
  },
];

const faqs = [
  {
    q: "Do you do everything end-to-end (design → build → launch)?",
    a: "Yes. We can start from strategy and design, build the system, and support launch. If you already have designs, we can plug in and build faster.",
  },
  {
    q: "What tech do you use?",
    a: "We choose based on your needs, but our default is modern, reliable web stacks with clean handover. We also integrate with common CRMs, marketing tools, and messaging channels.",
  },
  {
    q: "How do AI agents avoid giving wrong answers?",
    a: "We use approved knowledge sources, confidence rules, and human handoff. If confidence is low or topics are sensitive, the agent escalates instead of guessing.",
  },
  {
    q: "Can you start small?",
    a: "That's the recommended approach. Launch one high-impact workflow, measure results, and then expand to more channels or use cases.",
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

export default function ServicesPage() {
  return (
    <>
      <main className="bg-brand-bg">
        {/* HERO */}
        <section>
          <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
            <div className="rounded-lg border border-brand-border bg-brand-card p-8 shadow-card dark:shadow-cardDark">
              <h1 className="font-serif text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl">
                Services built for outcomes—not busywork.
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed opacity-90 md:text-lg">
                Spinor helps teams ship business-ready software, deploy practical AI agents, and run growth
                systems that improve retention, support, and pipeline—without adding complexity.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary">
                  Talk to an Expert
                </ButtonLink>
                <ButtonLink href="/ai-agents" variant="secondary">
                  See AI Agent Use Cases
                </ButtonLink>
              </div>

              {/* Quick internal nav */}
              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                {quickLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-md border border-brand-border bg-brand-muted px-3 py-1 hover:underline"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOFTWARE */}
        <section id="software">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="01 — Build"
              title={software.title}
              desc={`${software.tagline} ${software.description}`}
            />

            <div className="grid gap-6 md:grid-cols-3">
              {software.offerings.map((o) => (
                <Card key={o.name} title={o.name}>
                  <BulletList items={o.items} />
                </Card>
              ))}
            </div>

            <div className="mt-6 rounded-md border border-brand-border bg-brand-muted p-6">
              <h3 className="font-serif text-xl font-semibold">What you get</h3>
              <BulletList items={software.deliverables} />
            </div>
          </div>
        </section>

        {/* AI AGENTS */}
        <section id="ai-agents">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="02 — Automate"
              title={agents.title}
              desc={`${agents.tagline} ${agents.description}`}
            />

            <div className="grid gap-6 md:grid-cols-3">
              <Card title="Outcomes you can measure" highlight>
                <BulletList items={agents.outcomes} />
                <div className="mt-5">
                  <ButtonLink href="/ai-agents" variant="primary">
                    Open AI Agents Hub
                  </ButtonLink>
                </div>
              </Card>

              <Card title="Built-in guardrails">
                <BulletList items={agents.guardrails} />
              </Card>

              <Card title="Explore use cases">
                <ul className="space-y-2">
                  {agents.links.map((l) => (
                    <li key={l.href}>
                      <Link className="font-semibold text-brand-primary hover:underline" href={l.href}>
                        {l.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="mt-6 rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
              <div className="font-mono text-sm opacity-90">
                Signals → Decide → Act → Handoff → Report
              </div>
              <p className="mt-2 text-sm opacity-90">
                We keep agents workflow-first: define triggers, actions, escalation, and reporting so it's safe and useful.
              </p>
            </div>
          </div>
        </section>

        {/* MARKETING */}
        <section id="marketing">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="03 — Grow"
              title={marketing.title}
              desc={`${marketing.tagline} ${marketing.description}`}
            />

            <div className="grid gap-6 md:grid-cols-3">
              <Card title="D2C Marketing">
                <BulletList items={marketing.d2c} />
              </Card>
              <Card title="B2B Marketing">
                <BulletList items={marketing.b2b} />
              </Card>
              <Card title="Measurement & Optimization">
                <BulletList items={marketing.measurement} />
              </Card>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section id="process">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="Delivery model"
              title="How we work"
              desc="Simple process, clear accountability. We keep delivery tight and measurable."
            />

            <div className="grid gap-6 md:grid-cols-4">
              <Card title="Discovery">
                Workflow mapping, goals, KPIs, scope, and handoff rules.
              </Card>
              <Card title="Build">
                Design + implementation + integrations. Weekly checkpoints.
              </Card>
              <Card title="Pilot">
                Controlled rollout, tune edge cases, weekly reporting.
              </Card>
              <Card title="Scale">
                Expand channels/workflows with an improvement cadence.
              </Card>
            </div>

            <div className="mt-8">
              <SectionTitle title="Engagement models" />
              <div className="grid gap-6 md:grid-cols-3">
                {engagementModels.map((m) => (
                  <Card key={m.title} title={m.title}>
                    <p className="opacity-90">{m.desc}</p>
                    <BulletList items={m.bullets} />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle title="FAQ" />
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="rounded-md border border-brand-border bg-brand-card p-5 shadow-card dark:shadow-cardDark"
                >
                  <summary className="cursor-pointer list-none font-semibold">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-lg border-2 border-brand-border bg-brand-card p-10 shadow-card dark:shadow-cardDark">
              <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                Tell us what you want to improve this quarter.
              </h2>
              <p className="mt-3 max-w-2xl opacity-90">
                Support volume, lead follow-up, retention, or a software rebuild—we'll suggest the fastest path to outcomes.
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
