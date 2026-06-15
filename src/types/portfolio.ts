export interface SkillsData {
  frontend: string[];
  backend: string[];
  devops: string[];
}

export interface StarMethod {
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface Project {
  id: number;
  title: string;
  tech: string[];
  images: string[];
  star: StarMethod;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  tasks: string[];
}
