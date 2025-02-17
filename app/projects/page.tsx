import { ProjectList } from '@/components/sections/projects/project-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Vu Nguyen Khanh',
  description:
    'Explore my portfolio of web development projects, showcasing my skills in frontend and backend development.',
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="relative space-y-6 text-center sm:text-left">
          {/* Decorative Elements */}
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-3xl sm:h-32 sm:w-32" />
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/10 blur-3xl sm:h-32 sm:w-32" />

          {/* Title */}
          <div className="relative space-y-2">
            <h1 className="text-4xl font-bold sm:text-5xl">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A collection of my personal projects and contributions. Each project represents a
              unique challenge and learning experience.
            </p>
          </div>

          {/* Stats */}
          <div className="relative flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8">
            <div className="flex items-center gap-8 rounded-2xl bg-card/50 p-4 backdrop-blur">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">4</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Completion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects List with Animation */}
        <div className="relative mt-12 sm:mt-16">
          {/* Decorative Elements */}
          <div className="absolute -left-4 top-1/2 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-4 top-1/2 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />

          <ProjectList />
        </div>
      </div>
    </main>
  );
}
