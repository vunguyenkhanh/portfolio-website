'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Freelancer',
    period: '2023 - Now',
    description: [
      'Building web applications with web development best practices',
      'Transforming app designs into front-end code with HTML, CSS, JavaScript',
      'Integrating UI components with APIs and databases',
      'Gathering and refining specifications based on technical requirements',
      'Debugging errors and performing routine performance optimizations',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS', 'TypeScript'],
  },
  {
    title: 'PHP Developer',
    company: 'Monstarlab',
    period: '2021 - 2022',
    description: [
      'Developed and maintained web applications using PHP and Laravel',
      'Troubleshooted application and code issues',
      'Integrated data storage solutions',
      'Responded to integration requests from front-end developers',
      'Finalized back-end features and testing web applications',
      'Updated and altered application features to enhance performance',
    ],
    skills: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function ExperienceSection() {
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
          <Briefcase className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Work Experience</h2>
          <p className="text-foreground/60">My professional journey</p>
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-4 bottom-0 w-px bg-border" />

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0, transition: { delay: index * 0.2 } },
              }}
              className="relative pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[22px] top-4 w-5 h-5 rounded-full border-4 border-primary bg-background -translate-y-1/2" />

              <div className="group relative p-6 rounded-2xl bg-card hover:bg-primary/5 border transition-colors">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {experience.title}
                    </h3>
                    <p className="text-foreground/60">{experience.company}</p>
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    {experience.period}
                  </span>
                </div>

                {/* Description */}
                <ul className="mb-6 space-y-2 text-foreground/80">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
                    >
                      {skill}
                    </span>
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
