import styles from './Projects.module.css';
import Pill from '../Pill/Pill';

type Project = {
  id: string;
  title: string;
  img: string;
  imgAlt: string;
  description: string;
  languages: string[];
};

type ProjectCardProps = {
  project: Project;
  onSelectProject: (project: Project) => void;
};

const ProjectCard = ({ project, onSelectProject }: ProjectCardProps) => {
  return (
    <div className={styles.projectCard} id={project?.id} onClick={() => onSelectProject(project)}>
      <div className={styles.projectContent}>
        <div className={styles.projectTopRow}>
          <h3 className={styles.projectTitle}>{project?.title}</h3>
        </div>
        <p className={styles.description}>{project?.description}</p>
      </div>
      <div className={styles.languageArrowContainer}>
        <div className={styles.languageContainer}>
          {project?.languages.map((language, index) => (
            <Pill key={index} id={index} data={language} />
          ))}
        </div>
        <div className={styles.arrowContainer}>
          <div className={styles.arrow}></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;