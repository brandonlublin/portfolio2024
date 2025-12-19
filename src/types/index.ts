export type Project = {
  id: number;
  title: string;
  img: string;
  imgAlt: string;
  description: string;
  languages: string[];
  gitHubLink: string;
  screenshots: { imgUrl: string; label: string }[];
  research: string[];
  capabilities: string[];
  todos?: string[];
};

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string;
};

