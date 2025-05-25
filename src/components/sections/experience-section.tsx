
'use client';

import type { RefObject } from 'react';
import Image from 'next/image';

interface ExperienceSectionProps {
  experienceRef: RefObject<HTMLElement>;
}

// SVG definition for the splash clip path
// This SVG is defined with width="0" height="0" and absolute positioning
// to prevent it from taking up space in the layout.
const SplashClipPathDefinition = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <clipPath id="splashClipPath" clipPathUnits="objectBoundingBox">
        <path d="M0.49,0.02C0.48,0.01,0.26,-0.05,0.16,0.11C0.06,0.27,0.07,0.47,0.02,0.55C-0.04,0.63,-0.01,0.8,0.12,0.9C0.25,1,0.48,0.99,0.52,0.98C0.56,0.97,0.79,1.05,0.89,0.89C0.99,0.73,0.97,0.53,1,0.45C1.03,0.37,1.01,0.2,0.88,0.1C0.75,0,0.52,0.03,0.49,0.02Z" />
      </clipPath>
    </defs>
  </svg>
);

export function ExperienceSection({ experienceRef }: ExperienceSectionProps) {
  return (
    <section id="experience" ref={experienceRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8">
            <h2 className="text-3xl font-semibold mb-6 text-foreground">Experience</h2>
            <p className="text-muted-foreground">Concise summary of professional experience...</p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center md:justify-end">
            <SplashClipPathDefinition />
            <div
              className="relative shadow-lg"
              style={{
                width: 200,
                height: 200,
                clipPath: 'url(#splashClipPath)',
              }}
            >
              <Image
                src="https://placehold.co/200x200.png"
                alt="Profile Picture Placeholder"
                width={200}
                height={200}
                className="" // Removed rounded-full and border
                data-ai-hint="profile picture"
                style={{ display: 'block', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
