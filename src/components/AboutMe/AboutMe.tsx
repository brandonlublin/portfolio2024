import { useState, useEffect, useRef } from 'react';
import styles from './AboutMe.module.css';
import Pill from '../Pill/Pill';
import LinkButton from '../LinkButton/LinkButton';
import LanguageIcon from '../LanguageIcon/LanguageIcon';
import { quirks, languageIcons } from '../../data/data';

const AboutMe = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  console.log('isScrolled', isScrolled);
  
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setIsScrolled(containerRef.current.scrollTop > 50);
      }
    };

    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
    console.log("containerRef.current:", containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className={`${styles.aboutMeContainer} ${isScrolled ? styles.shrunk : ''}`}>
      <div className={styles.name}>Brandon Lublin</div>
      <div className={styles.title}>Senior Frontend Engineer</div>
      <div className={styles.quirksContainer}>
        {quirks.map((quirk, index) => (
          <Pill data={quirk} key={index} id={index} />
        ))}
      </div>
      <div className={styles.languagesContainer}>
        {languageIcons.map((language) => (
          <LanguageIcon language={language} key={language.id} id={language.id} />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

