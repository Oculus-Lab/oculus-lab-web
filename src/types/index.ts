/**
 * Type definitions for the application
 */

export interface ResearchLine {
  id: string;
  name: string;
  description: string;
  icon?: string;
  color?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  email?: string;
  links?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  researchLineId: string;
  status: "active" | "completed" | "planned";
  image?: string;
  link?: string;
  tags?: string[];
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  repeat?: number;
}
