import { BioSection } from '@/components/sections/about/bio';
import { EducationSection } from '@/components/sections/about/education';
import { ExperienceSection } from '@/components/sections/about/experience';
import { SkillsSection } from '@/components/sections/about/skills';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Header Section */}
      <div className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto">
            Get to know more about my journey, skills, and experiences in web development
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 py-16">
          {/* Bio Section with Card Style */}
          <div className="relative p-8 rounded-2xl bg-card border shadow-lg hover:shadow-xl transition-shadow">
            <BioSection />
          </div>

          {/* Experience Section with Modern Layout */}
          <div className="relative p-8 rounded-2xl bg-card border shadow-lg hover:shadow-xl transition-shadow">
            <ExperienceSection />
          </div>

          {/* Skills Section with Interactive Elements */}
          <div className="relative p-8 rounded-2xl bg-card border shadow-lg hover:shadow-xl transition-shadow">
            <SkillsSection />
          </div>

          {/* Education Section with Timeline */}
          <div className="relative p-8 rounded-2xl bg-card border shadow-lg hover:shadow-xl transition-shadow">
            <EducationSection />
          </div>
        </div>
      </div>
    </main>
  );
}
