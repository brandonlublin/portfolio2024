import WhoIAm from '../WhoIAm/WhoIAm';
import { useState, useEffect } from 'react';
import ProjectList from '../Projects/ProjectList';
import Title from '../Title/Title'
import WorkHistoryList from '../WorkHistory/WorkHistoryList';
import { projects, workHistory } from '../../data/data';
import styles from './Details.module.css';
import arrowIcon from '../../assets/icons/arrow.png';
const Details = () => {
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
      <Title titleText={'Projects'}/>
      <ProjectList projects={projects} />
      <Title titleText={'How did i get here?'}/>
      {showScrollButton && (
        <a onClick={scrollToTop} className={styles.scrollToTopButton}>
          <img className={styles.arrow} src={arrowIcon} />
        </a>
      )}
    </div>
  );
}
export default Details;