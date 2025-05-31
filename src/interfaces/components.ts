
// src/interfaces/components.ts
import type { RefObject } from 'react';

export interface AchievementsSectionProps {
  achievementsRef: RefObject<HTMLElement>;
}

export interface ProjectsSectionProps {
  projectsRef: RefObject<HTMLElement>;
}

export interface PublicationsSectionProps {
  publicationsRef: RefObject<HTMLElement>;
}

export interface SkillsSectionProps {
  skillsRef: RefObject<HTMLElement>;
}
