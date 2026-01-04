"use client";

import { useState, useRef } from "react";
import { sendContactEmail } from "@/app/actions/contact";
import ButtonLink from "@/components/ui/ButtonLink";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      await sendContactEmail(formData);
      setIsSubmitted(true);
      formRef.current?.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mt-6 rounded-md bg-brand-primary/10 border border-brand-primary p-6">
        <div className="flex gap-3">
          <svg className="h-6 w-6 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <h3 className="font-semibold text-brand-primary">Message sent!</h3>
            <p className="text-sm opacity-90 mt-1">
              Thanks for reaching out. We'll review your message and get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5">
      {error && (
        <div className="rounded-md bg-brand-danger/10 border border-brand-danger p-4">
          <p className="text-sm text-brand-danger">{error}</p>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">
            Name <span className="text-brand-danger">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-md bg-brand-bg px-4 py-3 text-brand-fg border border-brand-border placeholder-brand-fg/50 focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold">
            Email <span className="text-brand-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@company.com"
            className="mt-2 w-full rounded-md bg-brand-bg px-4 py-3 text-brand-fg border border-brand-border placeholder-brand-fg/50 focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Your company"
            className="mt-2 w-full rounded-md bg-brand-bg px-4 py-3 text-brand-fg border border-brand-border placeholder-brand-fg/50 focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 000-0000"
            className="mt-2 w-full rounded-md bg-brand-bg px-4 py-3 text-brand-fg border border-brand-border placeholder-brand-fg/50 focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
          />
        </div>
      </div>

      {/* Topic */}
      <div>
        <label htmlFor="topic" className="block text-sm font-semibold">
          What are you interested in? <span className="text-brand-danger">*</span>
        </label>
        <select
          id="topic"
          name="topic"
          required
          className="mt-2 w-full rounded-md bg-brand-bg px-4 py-3 text-brand-fg border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
        >
          <option value="">Select a topic</option>
          <option value="Software Development">Software Development</option>
          <option value="AI Agents">AI Agents & Automation</option>
          <option value="Marketing">Growth & Marketing</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold">
          Message <span className="text-brand-danger">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project, challenge, or question..."
          rows={6}
          className="mt-2 w-full rounded-md bg-brand-bg px-4 py-3 text-brand-fg border border-brand-border placeholder-brand-fg/50 focus:outline-none focus:ring-2 focus:ring-brand-primary transition resize-none"
        />
      </div>

      {/* Privacy notice */}
      <p className="text-xs opacity-70">
        We respect your privacy. Your information will only be used to respond to your inquiry. See our privacy policy for more details.
      </p>

      {/* Submit button */}
      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-brand-primary px-8 py-3 font-semibold text-white hover:bg-brand-primary-hover transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
