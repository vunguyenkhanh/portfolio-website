'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Freelancer',
    period: '2023 - Now',
    description: `
      - Building web applications with web development best practices.
      - Transforming app designs into front-end code with HTML, CSS, JavaScript.
      - Integrating UI components with APIs and databases.
      - Gathering and refining specifications and requirements based on technical requirements or UX design.
      - Debugging errors, troubleshooting issues, and performing routine performance optimizations.
    `,
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS', 'TypeScript'],
  },
  {
    title: 'PHP Developer',
    company: 'Monstarlab',
    period: '2021 - 2022',
    description: `
      - Developed, maintained web applications using PHP and Laravel framework.
      - Troubleshooted application and code issues.
      - Integrated data storage solutions.
      - Responded to integration requests from front-end developers.
      - Finalized back-end features and testing web applications.
      - Updated and altered application features to enhance performance.
    `,
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
    <section className="relative">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="space-y-8"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-xl">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <p className="text-foreground/60">My career development journey</p>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative p-6 rounded-xl border bg-card hover:bg-primary/5 transition-colors"
            >
              {/* Company and Period */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-foreground/60">{experience.company}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                  {experience.period}
                </span>
              </div>

              {/* Description */}
              <div className="mb-4 text-foreground/80 space-y-2">
                {experience.description.split('\n').map((line, i) => (
                  <p key={i} className="text-sm">
                    {line.trim()}
                  </p>
                ))}
              </div>

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
              <div className="absolute inset-0 border border-primary/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
