import { useState, useEffect, useRef } from 'react';
import WhoIAm from '../WhoIAm/WhoIAm';
import ProjectList from '../Projects/ProjectList';
import Title from '../Title/Title';
import WorkHistoryList from '../WorkHistory/WorkHistoryList';
import { projects, workHistory, skills } from '../../data/data';
import styles from './Details.module.css';
import arrowIcon from '../../assets/icons/arrow.png';
import HowDidIGetHere from '../HowDidIGetHere/HowDidIGetHere';
import CollapsibleSkills from '../CollapsibleSkills/CollapsibleSkills';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

type DetailsProps = {
  selectedProject: any; 
  openProjectDetails: (project: any) => void;
};

const Details = ({ selectedProject, openProjectDetails }: DetailsProps) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (detailsRef.current) {
      setShowScrollButton(detailsRef.current.scrollTop > 50);
    }
  };

  const scrollToTop = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const detailsElement = detailsRef.current;
    if (!detailsElement) return;

    detailsElement.addEventListener('scroll', handleScroll);
    return () => detailsElement.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={detailsRef} className={styles.detailsContainer}>
      <Title titleText="my projects" />
      <ProjectList projects={projects} onSelectProject={openProjectDetails} />
      <Title titleText="crafting my career path" />
      <HowDidIGetHere />
      <Title titleText="What makes me tick" />
      <CollapsibleSkills skills={skills} />
      <Title titleText="What my peers are saying" />
      {showScrollButton && (
        <button onClick={scrollToTop} className={styles.scrollToTopButton}>
          <img className={styles.arrow} src={arrowIcon} alt="Back to Top" />
          <div>Back to Top</div>
        </button>
      )}
    </div>
  );
};

export default Details;
