
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
              className="group bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center text-center border border-border"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={skill.iconUrl}
                  alt={`${skill.name} logo`}
                  width={32}
                  height={32}
                  data-ai-hint={skill.name.toLowerCase()}
                  className="object-contain" // Added for better image scaling if not square
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
