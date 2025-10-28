export interface StackItem {
  name: string;
  icon: string;
}

export interface ProjectImage {
  image: string;
}

export interface Project {
  url: string;
  name: string;
  title: string;
  image: string;
  icon: string;
  projectLink: string;
  github?: string;
  selected: string;
  description: string;
  useStack: StackItem[];
  carousel: ProjectImage[];
}

export interface ProjectCardProps {
  project: Project;
  onViewProject: (project: Project) => void;
}

export interface ProjectDetailsProps {
  show: boolean;
  onHide: () => void;
  selectedData: Project | null;
}
