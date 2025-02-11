import { ProjectList } from '@/components/sections/projects/project-list';

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A collection of my personal projects and contributions. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>

        <div className="mt-12">
          <ProjectList />
        </div>
      </div>
    </main>
  );
}
