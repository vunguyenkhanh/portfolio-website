'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Layout, Sparkles, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    description: 'Building beautiful and responsive user interfaces',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'ReactJS/NextJS', level: 85 },
      { name: 'Bootstrap', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Database,
    description: 'Creating robust and scalable server-side applications',
    skills: [
      { name: 'PHP', level: 85 },
      { name: 'Laravel', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Development Tools',
    icon: Wrench,
    description: 'Utilizing modern development and collaboration tools',
    skills: [
      { name: 'Git/Github', level: 90 },
      { name: 'Jira', level: 85 },
      { name: 'Trello', level: 85 },
      { name: 'Notion', level: 80 },
    ],
  },
  {
    title: 'Design Tools',
    icon: Sparkles,
    description: 'Creating and implementing beautiful designs',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Draw.io', level: 80 },
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function SkillsSection() {
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
          <Code2 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Skills & Technologies</h2>
          <p className="text-foreground/60">My technical expertise and proficiency levels</p>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1, duration: 0.5 },
                },
              }}
              className="group relative"
            >
              {/* Category Card */}
              <div className="relative p-6 rounded-2xl bg-card hover:bg-primary/5 border transition-all">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-foreground/60">{category.description}</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * category.skills.length + skillIndex) * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-foreground/80">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-primary/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border border-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
