
'use client';

import type { RefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/config/portfolio-data';

interface ProjectsSectionProps {
  projectsRef: RefObject<HTMLElement>;
}

const ProjectCard = ({ project }: { project: typeof portfolioData.projects[0] }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border rounded-xl">
      <CardHeader className="p-0">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={project.imageAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 text-foreground">{project.title}</CardTitle>
        <div className="mb-3 space-x-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-end space-x-2">
        {project.liveDemoLink && (
          <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" aria-label="View Live Demo">
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Button>
          </Link>
        )}
        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
          <Button variant="default" size="sm">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export function ProjectsSection({ projectsRef }: ProjectsSectionProps) {
  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-foreground text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
