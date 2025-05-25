
'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { AiChatWindow } from '@/components/ai-chat-window';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { AchievementsSection } from '@/components/sections/achievements-section';

const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};

export default function Home() {
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 bg-background z-50 py-4 shadow-sm border-b">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <span className="font-bold text-xl text-foreground">My Portfolio</span>
            <div className="space-x-4">
              <Button variant="link" onClick={() => scrollToSection(experienceRef)} className="text-foreground">
                Experience
              </Button>
              <Button variant="link" onClick={() => scrollToSection(projectsRef)} className="text-foreground">
                Projects
              </Button>
              <Button variant="link" onClick={() => scrollToSection(achievementsRef)} className="text-foreground">
                Achievements
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <ExperienceSection experienceRef={experienceRef} />
        <ProjectsSection projectsRef={projectsRef} />
        <AchievementsSection achievementsRef={achievementsRef} />
        <AiChatWindow />
      </main>

      <footer className="bg-primary text-primary-foreground py-6 border-t">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        </div>
      </footer>
    </div>
  );
}
