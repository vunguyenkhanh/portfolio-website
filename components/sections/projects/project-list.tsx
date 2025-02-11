'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProjectCard, ProjectCardProps } from './project-card';

const PROJECTS: ProjectCardProps[] = [
  {
    title: 'Food Express',
    description:
      'A responsive website interface for ordering food, offering a simple and convenient experience to order your favorite dishes.',
    technologies: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
    ],
    imageUrl: '/projects/food-express.png',
    demoUrl: 'https://vunguyenkhanh.github.io/food-express',
    sourceUrl: 'https://github.com/vunguyenkhanh/food-express',
  },
  {
    title: 'Travelio',
    description:
      'A responsive travel website interface offering comprehensive guides to popular destinations worldwide, making trip planning easy and convenient.',
    technologies: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
    ],
    imageUrl: '/projects/travelio.png',
    demoUrl: 'https://vunguyenkhanh.github.io/travelio',
    sourceUrl: 'https://github.com/vunguyenkhanh/travelio',
  },
  {
    title: 'Tea House',
    description:
      'A responsive website interface that offers a variety of drinks and cakes and allows you to order the selected dishes.',
    technologies: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'Normalize CSS', icon: '📐' },
    ],
    imageUrl: '/projects/tea-house.png',
    demoUrl: 'https://vunguyenkhanh.github.io/tea-house',
    sourceUrl: 'https://github.com/vunguyenkhanh/tea-house',
  },
];

const ALL_TECHNOLOGIES = Array.from(
  new Set(PROJECTS.flatMap((project) => project.technologies.map((tech) => tech.name))),
);

export function ProjectList() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesTech = selectedTech
      ? project.technologies.some((tech) => tech.name === selectedTech)
      : true;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTech && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-4 py-2 pl-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:w-64"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Technology Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTech(null)}
            className={`rounded-full px-4 py-1 text-sm transition-colors ${
              selectedTech === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            All
          </button>
          {ALL_TECHNOLOGIES.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`rounded-full px-4 py-1 text-sm transition-colors ${
                selectedTech === tech
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center">
          <p className="text-lg text-muted-foreground">No projects found.</p>
        </div>
      )}
    </div>
  );
}
