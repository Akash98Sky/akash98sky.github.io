
'use client';

import type { RefObject } from 'react';
import Image from 'next/image';

interface ExperienceSectionProps {
  experienceRef: RefObject<HTMLElement>;
}

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
            <Image
              src="https://placehold.co/200x200.png"
              alt="Profile Picture Placeholder"
              width={200}
              height={200}
              className="rounded-full shadow-lg border"
              data-ai-hint="profile picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
