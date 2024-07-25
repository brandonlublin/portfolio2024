import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
const ProjectList = ({ projects }) => {
  return (
    <>
      <div className={styles.projectCardsContainer}>
        {projects.map((project) => (
          <ProjectCard key={project.id} title={project.title} img={project.img} description={project.description} languages={project.languages} />
        ))}
      </div>
    </>
  )
};

export default ProjectList;