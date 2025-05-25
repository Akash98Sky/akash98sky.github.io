
'use client';

import type { RefObject } from 'react';
import Image from 'next/image'; // Import next/image
import { portfolioData } from '@/config/portfolio-data';

interface SkillsSectionProps {
  skillsRef: RefObject<HTMLElement>;
}

export function SkillsSection({ skillsRef }: SkillsSectionProps) {
  const skills = portfolioData.skills;

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-foreground text-center">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-card/50 dark:bg-black/30 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col items-center text-center border border-border/20"
            >
              <div className="mb-4 animate-float">
                <Image
                  src={skill.iconUrl}
                  alt={`${skill.name} logo`}
                  width={48}
                  height={48}
                  data-ai-hint={skill.name.toLowerCase()}
                  className="object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-lg font-medium text-card-foreground">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
