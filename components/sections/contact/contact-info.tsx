'use client';

import { motion } from 'framer-motion';
import { SocialLinks } from '@/components/shared/social-links';

const contactInfo = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: 'Email',
    value: 'vunguyenkhanh.6599@gmail.com',
    href: 'mailto:vunguyenkhanh.6599@gmail.com',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: 'Phone',
    value: '+84 944 426 469',
    href: 'tel:+84944426469',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: 'Location',
    value: 'District 7, HCMC',
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-xl bg-card/50 p-6 backdrop-blur sm:p-8"
    >
      <h2 className="text-2xl font-semibold">Contact Information</h2>
      <p className="mt-2 text-muted-foreground">
        Feel free to reach out through any of these channels.
      </p>

      {/* Contact Details */}
      <div className="mt-8 space-y-6">
        {contactInfo.map((info) => (
          <div key={info.label} className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {info.icon}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{info.label}</p>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-lg font-medium">{info.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-8">
        <p className="text-sm font-medium">Follow me on social media</p>
        <SocialLinks className="mt-4" />
      </div>
    </motion.div>
  );
}
