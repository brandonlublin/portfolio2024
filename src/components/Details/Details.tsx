import WhoIAm from '../WhoIAm/WhoIAm';
import { useState, useEffect } from 'react';
import ProjectList from '../Projects/ProjectList';
import Title from '../Title/Title'
import WorkHistoryList from '../WorkHistory/WorkHistoryList';
import { projects, workHistory, skills } from '../../data/data';
import styles from './Details.module.css';
import arrowIcon from '../../assets/icons/arrow.png';
import HowDidIGetHere from '../HowDidIGetHere/HowDidIGetHere';
import CollapsibleSkills from '../CollapsibleSkills/CollapsibleSkills';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import PeerFeedback from '../PeerFeedback/PeerFeedback';

const Details = ({ selectedProject, openProjectDetails }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const position = document.querySelector('.details').scrollTop;
    setShowScrollButton(position > 50);
  };

  const scrollToTop = () => {
    document.querySelector('.details').scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const detailsElement = document.querySelector('.details');
    detailsElement.addEventListener('scroll', handleScroll);

    return () => detailsElement.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.detailsContainer}>
      <ProjectList projects={projects} onSelectProject={openProjectDetails}/>
      <Title titleText={'How did I get here?'}/>
      <HowDidIGetHere />
      <Title titleText={'What makes me tick'} />
      <CollapsibleSkills skills={skills} />
      <Title titleText={'What my peers are saying'} />
      <PeerFeedback />
      {showScrollButton && (
        <a onClick={scrollToTop} className={styles.scrollToTopButton}>
          <img className={styles.arrow} src={arrowIcon} />
          <div className={styles.backTo}>Back to Top</div>
        </a>
      )}
    </div>
  );
}
export default Details;
