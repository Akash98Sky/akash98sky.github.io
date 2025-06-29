
'use client';

import type { RefObject } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/config/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

// SVG definition for the splash clip path
const SplashClipPathDefinition = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <clipPath id="splashClipPath" clipPathUnits="objectBoundingBox">
        <path d="M0.49,0.02C0.48,0.01,0.26,-0.05,0.16,0.11C0.06,0.27,0.07,0.47,0.02,0.55C-0.04,0.63,-0.01,0.8,0.12,0.9C0.25,1,0.48,0.99,0.52,0.98C0.56,0.97,0.79,1.05,0.89,0.89C0.99,0.73,0.97,0.53,1,0.45C1.03,0.37,1.01,0.2,0.88,0.1C0.75,0,0.52,0.03,0.49,0.02Z" />
      </clipPath>
    </defs>
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

export function ExperienceSection({ experienceRef }: { experienceRef: RefObject<HTMLElement> }) {
  const { summary, profileImage, profileImageAiHint, items } = portfolioData.experience;
  const { title, linkedinUrl, resumeUrl, githubUrl } = portfolioData.personalInfo;

  return (
    <section id="experience" ref={experienceRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center md:flex-row md:items-center mb-12">
          <div className="w-full md:w-2/3 md:pr-8 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-2 text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">{title}</p>
            <p className="text-muted-foreground leading-relaxed">{summary}</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <LinkedInIcon className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary">
                    <Icons.github className="mr-2 h-4 w-4" />
                    Follow on GitHub
                  </Button>
                </a>
              )}
              {resumeUrl && (
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" download>
                  <Button variant="outline">
                    <Icons.download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center md:justify-end">
            <SplashClipPathDefinition />
            <div
              className="relative shadow-lg"
              style={{
                width: 250, // Increased size
                height: 250, // Increased size
                clipPath: 'url(#splashClipPath)',
              }}
            >
              <Image
                src={profileImage}
                alt="Profile Picture"
                width={250} // Increased size
                height={250} // Increased size
                data-ai-hint={profileImageAiHint}
                style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-8 text-foreground text-center md:text-left">Professional Experience</h3>
        <div className="space-y-8">
          {items.map((item, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <div>
                    <CardTitle className="text-xl text-primary">{item.role}</CardTitle>
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md font-medium text-foreground hover:underline inline-flex items-center group"
                      >
                        {item.company}
                        <ExternalLink className="ml-1 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="text-md font-medium text-foreground">{item.company}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {item.descriptionPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
