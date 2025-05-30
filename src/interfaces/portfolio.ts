
// src/interfaces/portfolio.ts

export interface PersonalInfo {
  name: string;
  title: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string; // Added optional company URL
  duration: string;
  descriptionPoints: string[];
}

export interface ExperienceData {
  summary: string;
  profileImage: string;
  profileImageAiHint: string;
  items: ExperienceItem[];
}

export interface SkillItem {
  name: string;
  iconUrl: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  imageAiHint: string;
  tags: string[];
  liveDemoLink?: string;
  githubLink?: string; // Made githubLink optional
}

export interface AchievementItem {
  title: string;
  description: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experience: ExperienceData;
  skills: SkillItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
}
