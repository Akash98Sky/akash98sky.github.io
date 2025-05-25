
'use client';

import type { RefObject } from 'react';

interface AchievementsSectionProps {
  achievementsRef: RefObject<HTMLElement>;
}

export function AchievementsSection({ achievementsRef }: AchievementsSectionProps) {
  return (
    <section id="achievements" ref={achievementsRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-foreground">Achievements</h2>
        <p className="text-muted-foreground">Highlight key achievements and skills...</p>
      </div>
    </section>
  );
}
