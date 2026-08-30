export type TechStackKey =
  | "react"
  | "tailwind"
  | "golang"
  | "lambda"
  | "rds"
  | "s3"
  | "figma"
  | "html"
  | "css"
  | "js";

export interface ProjectDoc {
  label: string;
  to: string;
}

export interface ProjectData {
  headTitle: string;
  title: string;
  role: string;
  developed: string;
  docs: ProjectDoc[];
  aboutColor: string;
  aboutText: string;
  paragraphs: string[];
  paragraphsClassName?: string;
  techStack: TechStackKey[];
  images: string[];
}
