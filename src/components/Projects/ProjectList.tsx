import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import { Project } from '../../types';

type ProjectListProps = {
  projects: Project[];
  onSelectProject: (project: Project) => void;
};

const ProjectList = ({ projects, onSelectProject }: ProjectListProps) => {
  return (
    <motion.div
      className={styles.projectCardsContainer}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} onSelectProject={onSelectProject} index={index} />
      ))}
    </motion.div>
  );
};

export default ProjectList;