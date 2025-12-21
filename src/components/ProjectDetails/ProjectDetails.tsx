import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectDetails.module.css';
import { Project } from '../../types';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { fadeInScale, defaultTransition, staggerContainer, staggerItem } from '../../utils/animations';

type ProjectProps = {
  project: Project;
  onBack: () => void;
};

const ProjectDetails = ({ project, onBack }: ProjectProps) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (contentRef.current) {
      const position = contentRef.current.scrollTop;
      setShowScrollButton(position > 50);
    }
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Check initial scroll position

      return () => {
        contentElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
  <motion.div
    ref={contentRef}
    className={styles.projectDetailsContent}
    {...fadeInScale}
    transition={defaultTransition}
  >
    <motion.button
      className={styles.backButton}
      onClick={onBack}
      whileHover={{ x: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <span className={styles.backArrow}></span>
    </motion.button>
    <div className={styles.projectHeader}>
      <img src={project.img} alt={project.imgAlt} />
      <h2 className={styles.projectTitle}>{project.title}</h2>
    </div>
    {project.liveDemoUrl && (
      <div className={styles.liveDemoLink}>
        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
          View Live Demo
        </a>
      </div>
    )}
    <div className={styles.projectDescription}>{project.description}</div>
    <div className={styles.projectResearch}>
      <div className={styles.sectionLabel}>Research</div>
      <ul>
        {project?.research?.length && project?.research?.length > 0 && project?.research?.map((research, index) => (
          <li key={index}>{research}</li>
        ))}
      </ul>
    </div>
    <div className={styles.projectResearch}>
      <div className={styles.sectionLabel}>Capabilities</div>
      <ul>
        {project.capabilities.map((capability, index) => (
          <li key={index}>{capability}</li>
        ))}
      </ul>
    </div>
    {project?.todos?.length && project?.todos?.length > 0 && (
      <div className={styles.todos}>
        <div className={styles.sectionLabel}>To-Dos</div>
        <ul>
          {project?.todos?.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    )}
    <motion.div
      className={styles.projectScreenshots}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        ...staggerContainer,
        visible: {
          ...staggerContainer.visible,
          transition: {
            staggerChildren: 0.08
          }
        }
      }}
    >
      {project.screenshots.map((screenshot, index) => (
        <motion.div
          key={index}
          variants={staggerItem}
          transition={defaultTransition}
        >
          <img src={screenshot.imgUrl} alt={`Screenshot ${index + 1}`} className={styles.screenshot} />
          <div className={styles.screenshotLabel}>{screenshot.label}</div>
        </motion.div>
      ))}
    </motion.div>
    <div className={styles.gitHubLink}>
      <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
        View GitHub Repository
      </a>
    </div>
    <ScrollToTop show={showScrollButton} onClick={scrollToTop} />
  </motion.div>
  );
};

export default ProjectDetails;
