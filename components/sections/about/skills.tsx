'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings, Sparkles, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
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
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Skills</h2>
            <p className="text-foreground/60">Technologies and skills I have learned</p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative p-6 rounded-xl border bg-card hover:bg-primary/5 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/80">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border border-primary/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
