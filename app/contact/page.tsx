import { ContactForm } from '@/components/sections/contact/contact-form';
import { ContactInfo } from '@/components/sections/contact/contact-info';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Vu Nguyen Khanh',
  description: 'Get in touch with me for any questions, opportunities, or just to say hello.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="relative space-y-6 text-center sm:text-left">
          {/* Decorative Elements */}
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-3xl sm:h-32 sm:w-32" />
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/10 blur-3xl sm:h-32 sm:w-32" />

          {/* Title */}
          <div className="relative space-y-2">
            <h1 className="text-4xl font-bold sm:text-5xl">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Have a question or want to work together? Feel free to reach out to me using the form
              below or through my social media channels.
            </p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="relative mt-12 sm:mt-16">
          {/* Decorative Elements */}
          <div className="absolute -left-4 top-1/2 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-4 top-1/2 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </div>
    </main>
  );
}
