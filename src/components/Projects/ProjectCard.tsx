import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import Pill from '../Pill/Pill';
import { Project } from '../../types';
import { fadeInUp, defaultTransition, hoverLift } from '../../utils/animations';

type ProjectCardProps = {
  project: Project;
  onSelectProject: (project: Project) => void;
  index?: number;
};

const ProjectCard = ({ project, onSelectProject, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      className={styles.projectCard}
      id={String(project?.id)}
      onClick={() => onSelectProject(project)}
      {...fadeInUp}
      transition={{ ...defaultTransition, delay: index * 0.1 }}
      {...hoverLift}
    >
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
          <div className={styles.projectArrow}></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;