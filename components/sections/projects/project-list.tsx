'use client';

import { AnimatePresence, motion } from 'framer-motion';
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

type SortOption = 'name' | 'techCount';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ProjectList() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesTech = selectedTech
      ? project.technologies.some((tech) => tech.name === selectedTech)
      : true;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTech && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'name') {
      return a.title.localeCompare(b.title);
    }
    return b.technologies.length - a.technologies.length;
  });

  const handleFilter = async (tech: string | null) => {
    setIsLoading(true);
    setSelectedTech(tech);
    // Simulate loading state
    await new Promise((resolve) => setTimeout(resolve, 300));
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Filters */}
      <div className="flex flex-col gap-6">
        {/* Search and Sort */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-card/50 px-4 py-2 pl-10 backdrop-blur focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:w-64"
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

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="rounded-lg border border-border bg-card/50 px-3 py-1.5 text-sm backdrop-blur focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="name">Name</option>
              <option value="techCount">Technology Count</option>
            </select>
          </div>
        </div>

        {/* Technology Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleFilter(null)}
            disabled={isLoading}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              selectedTech === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-card/50 text-muted-foreground hover:bg-card/80 backdrop-blur'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            All
          </button>
          {ALL_TECHNOLOGIES.map((tech) => (
            <button
              key={tech}
              onClick={() => handleFilter(tech)}
              disabled={isLoading}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                selectedTech === tech
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card/50 text-muted-foreground hover:bg-card/80 backdrop-blur'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedTech}-${sortBy}-${searchQuery}`}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl bg-card/50 p-8 text-center backdrop-blur"
        >
          <p className="text-lg text-muted-foreground">No projects found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              handleFilter(null);
            }}
            disabled={isLoading}
            className="mt-4 text-sm text-primary hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear filters
          </button>
        </motion.div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm"
        >
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </motion.div>
      )}
    </motion.div>
  );
}
