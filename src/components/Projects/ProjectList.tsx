import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
const ProjectList = ({ projects, onSelectProject }) => {
  return (
    <>
      <div className={styles.projectCardsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onSelectProject={onSelectProject} />
        ))}
      </div>
    </>
  )
};

export default ProjectList;