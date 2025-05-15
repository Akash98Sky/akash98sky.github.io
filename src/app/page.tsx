'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import { AiChatWindow } from '@/components/ai-chat-window';
 
const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({behavior: 'smooth'});
};

export default function Home() {
  const experienceRef = useRef<HTMLElement>(null);
  const projectCards = [
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
        <div className="bg-white rounded-lg p-6 shadow-lg transform-style-3d transition-all duration-500 hover:shadow-2xl">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex justify-end">
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button>
                GitHub
              </Button>
            </Link>
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

        </div>
        </div>
      </div>
    );
  };

  




  const projectsRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 bg-background z-50 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <span className="font-bold text-xl">My Portfolio</span>
            <div className="space-x-4">
              <Button variant="link" onClick={() => scrollToSection(experienceRef)}>
                Experience
              </Button>
              <Button variant="link" onClick={() => scrollToSection(projectsRef)}>
                Projects
              </Button>
              <Button variant="link" onClick={() => scrollToSection(achievementsRef)}>
                Achievements
              </Button>
              </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="experience" ref={experienceRef} className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Experience</h2>
            <p>Concise summary of professional experience...</p>
          </div>
        </section>

        <section id="projects" ref={projectsRef} className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectCards.map((project, index) => (
                <ProjectCard key={index} title={project.title} description={project.description} githubLink={project.githubLink} />
              ))}
            </div>
          

          </div>
        </section>

        <section id="achievements" ref={achievementsRef} className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Achievements</h2>
            <p>Highlight key achievements and skills...</p>
          </div>
        </section>

                <AiChatWindow />
               </main>

      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        </div>
      </footer>
    </div>
  )
};
