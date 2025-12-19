import { useState, useEffect, useCallback } from 'react';
import ProjectList from '../Projects/ProjectList';
import Title from '../Title/Title';
import { projects, skills } from '../../data/data';
import styles from './Details.module.css';
import HowDidIGetHere from '../HowDidIGetHere/HowDidIGetHere';
import CollapsibleSkills from '../CollapsibleSkills/CollapsibleSkills';
import PeerFeedback from '../PeerFeedback/PeerFeedback';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { Project } from '../../types';

type DetailsProps = {
  selectedProject: Project | null;
  openProjectDetails: (project: Project) => void;
};

const Details = ({ selectedProject, openProjectDetails }: DetailsProps) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(window.innerWidth > 1700);

  const handleScroll = useCallback(() => {
    if (!isAboveBreakpoint) {
      setShowScrollButton(false);
      return;
    }

    const detailsElement = document.querySelector('.details');
    if (detailsElement) {
      const position = detailsElement.scrollTop;
      setShowScrollButton(position > 50);
    }
  }, [isAboveBreakpoint]);

  const scrollToTop = () => {
    const detailsElement = document.querySelector('.details');
    if (detailsElement) {
      detailsElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const checkBreakpoint = () => {
      const aboveBreakpoint = window.innerWidth > 1700;
      setIsAboveBreakpoint(aboveBreakpoint);
      
      if (!aboveBreakpoint) {
        setShowScrollButton(false);
      }
    };

    const handleResize = () => {
      checkBreakpoint();
    };

    checkBreakpoint();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isAboveBreakpoint) {
      return;
    }

    const detailsElement = document.querySelector('.details');
    if (detailsElement) {
      detailsElement.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      return () => {
        detailsElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll, isAboveBreakpoint]);

  return (
    <div className={styles.detailsContainer}>
      <ProjectList projects={projects} onSelectProject={openProjectDetails}/>
      <Title titleText={'How did I get here?'}/>
      <HowDidIGetHere />
      <Title titleText={'What makes me tick'} />
      <CollapsibleSkills skills={skills} />
      <Title titleText={'What my peers are saying'} />
      <PeerFeedback />
      <ScrollToTop show={isAboveBreakpoint && showScrollButton} onClick={scrollToTop} />
    </div>
  );
}
export default Details;
