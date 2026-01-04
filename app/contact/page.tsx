import type { Metadata } from "next";
import ButtonLink from "@/components/ui/ButtonLink";
import ContactForm from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Spinor Innovations",
  description:
    "Get in touch with Spinor Innovations. Let's discuss how we can help with your software, AI agents, and growth systems.",
};

export default function ContactPage() {
  return (
    <main className="bg-brand-bg">
      {/* HERO */}
      <section>
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
          <div className="rounded-lg border border-brand-border bg-brand-card p-8 shadow-card dark:shadow-cardDark">
            <div className="text-xs font-semibold opacity-70">Get in touch</div>

            <h1 className="mt-2 font-serif text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl">
              Let's talk about your next move.
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed opacity-90 md:text-lg">
              Whether you need software built, AI agents deployed, or a growth system designed—we're here to help.
              Tell us what you're working on, and we'll suggest the fastest path to outcomes.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <div className="font-semibold">Email</div>
                <p className="mt-1 text-sm opacity-90">hello@spinorinnovations.com</p>
              </div>
              <div>
                <div className="font-semibold">Response time</div>
                <p className="mt-1 text-sm opacity-90">24 hours (usually faster)</p>
              </div>
              <div>
                <div className="font-semibold">Based in</div>
                <p className="mt-1 text-sm opacity-90">Remote-first team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="rounded-lg border border-brand-border bg-brand-card p-8 shadow-card dark:shadow-cardDark">
            <h2 className="font-serif text-2xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-sm opacity-90">
              Fill out the form below. We'll review it and get back to you within 24 hours.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ QUICK LINKS */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-6">
            <h2 className="font-serif text-3xl font-semibold tracking-tight">Common questions</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
              <h3 className="font-semibold">How long does a project take?</h3>
              <p className="mt-2 text-sm opacity-90">
                Discovery + pilot is usually 4–8 weeks. Scale depends on scope. We like starting small and expanding fast.
              </p>
            </div>

            <div className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
              <h3 className="font-semibold">Do you handle everything end-to-end?</h3>
              <p className="mt-2 text-sm opacity-90">
                Yes. Strategy, design, build, launch, and long-term support. Or we can plug into your existing team and handoff cleanly.
              </p>
            </div>

            <div className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
              <h3 className="font-semibold">What if we're unsure about the scope?</h3>
              <p className="mt-2 text-sm opacity-90">
                That's normal. Let's start with a 30-minute discovery call. We'll map your workflow and suggest the highest-impact path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-lg border-2 border-brand-border bg-brand-card p-10 shadow-card dark:shadow-cardDark">
            <h2 className="font-serif text-3xl font-semibold tracking-tight">Still deciding?</h2>
            <p className="mt-3 max-w-2xl opacity-90">
              Check out our services to see if we're a fit. Or jump straight to a conversation—no commitment, just a clear 30-minute chat.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services" variant="secondary">
                View Services
              </ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                Learn About Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
