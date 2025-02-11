'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { SocialLinks } from '@/components/shared/social-links';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-primary/5 to-background" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Content */}
        <motion.div
          className="flex flex-col justify-center"
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeIn} className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Vu Nguyen Khanh
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-foreground/60">Web Developer</p>
          </motion.div>

          <motion.p variants={fadeIn} className="mt-6 text-lg text-foreground/80 max-w-2xl">
            I&apos;m a passionate web developer with expertise in building modern web applications.
            Currently focused on creating beautiful and functional user interfaces with React and
            Next.js.
          </motion.p>

          <motion.div variants={fadeIn} className="flex items-center gap-4 mt-8">
            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:gap-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="/CV_VuNguyenKhanh.pdf"
              className="group flex items-center gap-2 px-6 py-3 border border-border hover:border-primary/50 hover:bg-primary/5 rounded-full transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden group-hover:inline-block"
              >
                📄
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto"
        >
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl"
            whileHover={{ scale: 1.1 }}
          />
          <motion.div
            className="relative aspect-square"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src="/avatar.png"
              alt="Vu Nguyen Khanh - Web Developer"
              fill
              className="object-cover rounded-2xl border-8 border-background"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
