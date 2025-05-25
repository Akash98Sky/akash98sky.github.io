
// src/interfaces/components.ts
import type { RefObject } from 'react';

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

// Props for AiChatWindow component (can be expanded later)
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AiChatWindowProps {}

export interface AchievementsSectionProps {
  achievementsRef: RefObject<HTMLElement>;
}

export interface ProjectsSectionProps {
  projectsRef: RefObject<HTMLElement>;
}

export interface SkillsSectionProps {
  skillsRef: RefObject<HTMLElement>;
}
