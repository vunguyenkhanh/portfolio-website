import { BioSection } from '@/components/sections/about/bio';
import { EducationSection } from '@/components/sections/about/education';
import { ExperienceSection } from '@/components/sections/about/experience';
import { SkillsSection } from '@/components/sections/about/skills';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <BioSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
      </div>
    </main>
  );
}
