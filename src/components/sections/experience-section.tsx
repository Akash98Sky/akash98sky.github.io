
'use client';

import type { RefObject } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/config/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, ExternalLink } from 'lucide-react';

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

export function ExperienceSection({ experienceRef }: { experienceRef: RefObject<HTMLElement> }) {
  const { summary, profileImage, profileImageAiHint, items } = portfolioData.experience;

  return (
    <section id="experience" ref={experienceRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center md:flex-row md:items-center mb-12">
          <div className="w-full md:w-2/3 md:pr-8 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-2 text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">{portfolioData.personalInfo.title}</p>
            <p className="text-muted-foreground leading-relaxed">{summary}</p>
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
