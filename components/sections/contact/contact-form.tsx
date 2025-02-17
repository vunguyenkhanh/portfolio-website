'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // TODO: Implement form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      reset();
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="mt-2 w-full rounded-lg border border-border bg-card/50 px-4 py-2 backdrop-blur focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="mt-2 w-full rounded-lg border border-border bg-card/50 px-4 py-2 backdrop-blur focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            className="mt-2 w-full rounded-lg border border-border bg-card/50 px-4 py-2 backdrop-blur focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your message here..."
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
        </div>

        {/* Error Message */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>

        {/* Success Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-lg bg-green-500/10 p-4"
          >
            <p className="text-center text-sm text-green-500">
              Thank you! Your message has been sent successfully.
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
