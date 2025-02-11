'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/vunguyenkhanh',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/kain6599',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/VuNguyenKhanh.Profile',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/kain6599',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:vunguyenkhanh.6599@gmail.com',
  },
];

export function HeroSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 py-16 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-primary/5 to-background" />
      </div>

      {/* Text Content */}
      <motion.div
        className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl"
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div
          variants={fadeIn}
          className="flex items-center gap-2 text-sm text-foreground/60 font-medium mb-4"
        >
          <span className="w-6 h-[2px] bg-primary" />
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
            Full Stack Developer
          </span>
        </motion.div>

        <motion.h1 variants={fadeIn} className="text-4xl lg:text-6xl font-bold mb-4">
          Vũ Nguyễn Khánh{' '}
          <motion.span
            initial={{ rotate: -15 }}
            animate={{ rotate: 15 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
            className="inline-block"
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.p variants={fadeIn} className="text-foreground/60 mb-8 leading-relaxed">
          A passionate Full Stack Developer having experience in building Web applications with
          JavaScript / ReactJS / NodeJS and some other cool libraries and frameworks.
        </motion.p>

        <motion.div variants={fadeIn} className="flex items-center gap-4">
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

        <motion.div variants={fadeIn} className="flex items-center gap-4 mt-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 text-foreground/60 hover:text-primary transition-colors group"
                aria-label={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                <Icon className="relative w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-64 h-64 lg:w-96 lg:h-96 group"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl group-hover:blur-2xl transition-all"
          whileHover={{ scale: 1.1 }}
        />
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Image
            src="/avatar.png"
            alt="Vu Nguyen Khanh"
            fill
            className="object-cover rounded-full border-8 border-background"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
