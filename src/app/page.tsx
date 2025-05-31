
'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { PublicationsSection } from '@/components/sections/publications-section';
import { AchievementsSection } from '@/components/sections/achievements-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { portfolioData } from '@/config/portfolio-data';

const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};

export default function Home() {
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const publicationsRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`sticky top-0 bg-background z-50 py-4 shadow-lg transition-transform duration-300 ease-in-out ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <span className="font-bold text-xl text-foreground">{portfolioData.personalInfo.name}'s Portfolio</span>
            <div className="hidden md:flex space-x-4">
              <Button variant="link" onClick={() => scrollToSection(experienceRef)} className="text-foreground">
                Experience
              </Button>
              <Button variant="link" onClick={() => scrollToSection(skillsRef)} className="text-foreground">
                Skills
              </Button>
              <Button variant="link" onClick={() => scrollToSection(projectsRef)} className="text-foreground">
                Projects
              </Button>
              <Button variant="link" onClick={() => scrollToSection(publicationsRef)} className="text-foreground">
                Publications
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
        <SkillsSection skillsRef={skillsRef} />
        <ProjectsSection projectsRef={projectsRef} />
        <PublicationsSection publicationsRef={publicationsRef} />
        <AchievementsSection achievementsRef={achievementsRef} />
      </main>

      <footer className="bg-primary text-primary-foreground py-6 border-t">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}</p>
        </div>
      </footer>
    </div>
  );
}
