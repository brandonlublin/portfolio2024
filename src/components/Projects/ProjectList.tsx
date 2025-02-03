import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

type ProjectListProps = {
  projects: Project[];
  onSelectProject: (project: Project) => void;
};

const ProjectList = ({ projects, onSelectProject }: ProjectListProps) => {
  return (
    <div className={styles.projectCardsContainer}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} onSelectProject={onSelectProject} />
      ))}
    </div>
  );
};

export default ProjectList;