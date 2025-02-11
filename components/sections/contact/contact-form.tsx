'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get form data
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    // TODO: Implement form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl bg-card/50 p-6 backdrop-blur sm:p-8"
    >
      <h2 className="text-2xl font-semibold">Send a Message</h2>
      <p className="mt-2 text-muted-foreground">I&apos;ll get back to you as soon as possible.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-lg border border-border bg-card/50 px-4 py-2 backdrop-blur focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 w-full rounded-lg border border-border bg-card/50 px-4 py-2 backdrop-blur focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="john@example.com"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="mt-2 w-full rounded-lg border border-border bg-card/50 px-4 py-2 backdrop-blur focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your message here..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {/* Success Message */}
        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-green-500"
          >
            Thank you! Your message has been sent successfully.
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}
