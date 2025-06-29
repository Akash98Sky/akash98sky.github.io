
'use client';

import type { RefObject } from 'react';
import { portfolioData } from '@/config/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, ExternalLink } from 'lucide-react';

export function ExperienceSection({ experienceRef }: { experienceRef: RefObject<HTMLElement> }) {
  const { items } = portfolioData.experience;

  return (
    <section id="experience" ref={experienceRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
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
