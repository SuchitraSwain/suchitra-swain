export interface StackItem {
  icon: string;
  name: string;
}

export interface ProjectData {
  name?: string;
  description?: string;
  projectLink?: string;
  github?: string;
  useStack?: StackItem[];
  carousel?: any;
}

export interface StackDisplayProps {
  useStack?: StackItem[];
}

export interface ProjectDetailsProps {
  show: boolean;
  onHide: () => void;
  selectedData: ProjectData | null;
}
