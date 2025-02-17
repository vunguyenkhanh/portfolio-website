import { BioSection } from '@/components/sections/about/bio';
import { EducationSection } from '@/components/sections/about/education';
import { ExperienceSection } from '@/components/sections/about/experience';
import { SkillsSection } from '@/components/sections/about/skills';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
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
