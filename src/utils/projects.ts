import { Project } from '../types';
import { projects, vibeProjects } from '../data/data';

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const projectSlug = (p: Project): string => p.slug ?? slugify(p.title);

export const allProjects: Project[] = [...vibeProjects, ...projects];

export const findProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find((p) => projectSlug(p) === slug);
};

export const searchProjects = (query: string): Project | undefined => {
  const q = query.trim().toLowerCase();
  if (!q) return undefined;
  return allProjects.find((p) =>
    [p.title, p.description, ...p.languages].join(' ').toLowerCase().includes(q)
  );
};

export const projectHue = (p: Project): number => {
  let hash = 0;
  for (const char of p.title) {
    hash = (hash * 31 + char.charCodeAt(0)) % 360;
  }
  return hash;
};

export const projectInitials = (title: string): string => {
  const caps = title.replace(/[^A-Z0-9]/g, '');
  return (caps.length >= 2 ? caps : title).slice(0, 2).toUpperCase();
};
