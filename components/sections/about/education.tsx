'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    school: 'Hanoi University of Science and Technology (HUST)',
    degree: 'Information Technology',
    period: '2017 - 2022',
    description:
      "Graduated with a Engineering degree in Information Technology from one of Vietnam's leading universities in engineering and technology.",
    highlights: [
      {
        title: 'Major Focus',
        items: [
          'Software Engineering',
          'Web Development',
          'Database Management',
          'Computer Networks',
        ],
      },
      {
        title: 'Key Achievements',
        items: [
          'Developed multiple practical projects',
          'Participated in research activities',
          'Enhanced problem-solving skills',
          'Learned team collaboration',
        ],
      },
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function EducationSection() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex items-center gap-4"
      >
        <div className="p-2 bg-primary/10 rounded-xl">
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Education</h2>
          <p className="text-foreground/60">My academic background and achievements</p>
        </div>
      </motion.div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-4 bottom-0 w-px bg-border" />

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
              }}
              className="relative pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[22px] top-4 w-5 h-5 rounded-full border-4 border-primary bg-background -translate-y-1/2" />

              <div className="group relative p-6 rounded-2xl bg-card hover:bg-primary/5 border transition-colors">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {item.school}
                    </h3>
                    <p className="text-primary/80">{item.degree}</p>
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-6 text-foreground/80">{item.description}</p>

                {/* Highlights Grid */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <motion.div
                      key={highlightIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: highlightIndex * 0.2 }}
                      className="space-y-3"
                    >
                      <h4 className="font-medium text-primary">{highlight.title}</h4>
                      <ul className="space-y-2">
                        {highlight.items.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                            <span className="text-foreground/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border border-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
