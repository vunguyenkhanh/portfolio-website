'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    school: 'Hanoi University of Science and Technology (HUST)',
    degree: 'Information Technology',
    period: '2017 - 2022',
    description:
      'Graduated with a degree in Information Technology from one of Vietnam\'s leading universities in engineering and technology.',
    achievements: [
      'Major: Information Technology',
      'Degree: Engineer',
      'Participated in practical projects and research',
      'Developed programming and problem-solving skills',
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
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Education</h2>
            <p className="text-foreground/60">Learning and Development Journey</p>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 gap-6 relative">
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative p-6 rounded-xl border bg-card hover:bg-primary/5 transition-colors"
            >
              {/* School and Period */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {item.school}
                  </h3>
                  <p className="text-primary/80">{item.degree}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                  {item.period}
                </span>
              </div>

              {/* Description */}
              <p className="mb-4 text-foreground/80">{item.description}</p>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="font-medium text-primary">Details:</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
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
