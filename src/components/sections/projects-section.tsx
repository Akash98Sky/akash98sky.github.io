
'use client';

import type { RefObject } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

interface ProjectsSectionProps {
  projectsRef: RefObject<HTMLElement>;
}

const projectCardsData = [
  {
    title: 'Project 1',
    description: 'Description for Project 1. This is a brief summary of what the project does and its key features.',
    githubLink: 'https://github.com/user/project1',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2. Another project with its own set of challenges and solutions.',
    githubLink: 'https://github.com/user/project2',
  },
  {
    title: 'Project 3',
    description: 'Description for Project 3. The final project in this showcase, highlighting different skills.',
    githubLink: 'https://github.com/user/project3',
  },
];

const ProjectCard = ({ title, description, githubLink }: { title: string; description: string; githubLink: string }) => {
  return (
    <div className="perspective-1000">
      <div className="relative group transition-all duration-500 transform-style-3d hover:rotate-y-10 hover:scale-105">
      <div className="bg-card rounded-lg p-6 shadow-lg transform-style-3d transition-all duration-500 hover:shadow-2xl border">
        <h3 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-end">
          <Link href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      </div>
      </div>
    </div>
  );
};

export function ProjectsSection({ projectsRef }: ProjectsSectionProps) {
  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-foreground">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCardsData.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} githubLink={project.githubLink} />
          ))}
        </div>
      </div>
    </section>
  );
}
