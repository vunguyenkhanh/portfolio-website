'use client';

import { SocialLinks } from '@/components/shared/social-links';
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
              University of Science and Technology. I&apos;m a passionate learner who&apos;s always
              willing to learn and work across technologies and domains. I love to explore new
              technologies and leverage them to solve real-life problems.
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
          <motion.div variants={fadeIn} className="pt-4">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
