
'use client';

import type { RefObject } from 'react';
import { portfolioData } from '@/config/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Star } from 'lucide-react'; // Example icons

interface AchievementsSectionProps {
  achievementsRef: RefObject<HTMLElement>;
}

// Helper to select an icon based on index or some logic
const getAchievementIcon = (index: number) => {
  const icons = [
    <Award className="w-6 h-6 text-primary" />,
    <Trophy className="w-6 h-6 text-primary" />,
    <Star className="w-6 h-6 text-primary" />
  ];
  return icons[index % icons.length]; // Cycle through icons
};

export function AchievementsSection({ achievementsRef }: AchievementsSectionProps) {
  const achievements = portfolioData.achievements;

  return (
    <section id="achievements" ref={achievementsRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-foreground text-center">Achievements</h2>
        {achievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border rounded-xl">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {getAchievementIcon(index)}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-card-foreground">{achievement.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center">No achievements listed yet.</p>
        )}
      </div>
    </section>
  );
}
