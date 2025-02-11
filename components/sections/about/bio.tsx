'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function BioSection() {
  return (
    <section className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-primary/5 to-background" />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-64 h-64 lg:w-96 lg:h-96"
        >
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl"
            whileHover={{ scale: 1.1 }}
          />
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src="/avatar.png"
              alt="Vu Nguyen Khanh - About"
              fill
              className="object-cover rounded-2xl border-8 border-background"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 space-y-6"
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeIn} className="space-y-2">
            <h1 className="text-4xl font-bold">Vu Nguyen Khanh</h1>
            <p className="text-foreground/60">Web Developer</p>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-4 text-foreground/80">
            <p>
              I graduated with an engineering degree majoring in Information Technology at Hanoi
              University of Science and Technology. I'm a passionate learner who's always willing to
              learn and work across technologies and domains. I love to explore new technologies and
              leverage them to solve real-life problems.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-primary">🎯</span>
              <span>Full Stack Web Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">📚</span>
              <span>IT Engineer - Hanoi University of Science and Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">🌟</span>
              <span>Passionate about new technologies</span>
            </div>
          </motion.div>

          {/* Contact Links */}
          <motion.div variants={fadeIn} className="flex items-center gap-4 pt-4">
            <a
              href="mailto:vunguyenkhanh.6599@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Email</span>
              <svg
                className="w-6 h-6"
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
            </a>
            <a
              href="https://linkedin.com/in/kain6599"
              className="text-foreground/60 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/vunguyenkhanh"
              className="text-foreground/60 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
