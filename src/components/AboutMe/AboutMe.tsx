import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './AboutMe.module.css';
import Pill from '../Pill/Pill';
import LanguageIcon from '../LanguageIcon/LanguageIcon';
import { quirks, languageIcons } from '../../data/data';
import { fadeIn, fadeInLeft, fadeInUp, staggerContainer, staggerItemScale, springTransition, hoverRotate, defaultTransition } from '../../utils/animations';

const AboutMe = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
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
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`${styles.aboutMeContainer} ${isScrolled ? styles.shrunk : ''}`}
      {...fadeIn}
      transition={defaultTransition}
    >
      <div className={styles.nameContainer}>
        <motion.div
          className={styles.nameBorder}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ ...defaultTransition, delay: 0.1 }}
          style={{ transformOrigin: "top" }}
        />
        <div className={styles.nameWrapper}>
          <motion.div
            className={styles.firstName}
            {...fadeInLeft}
            transition={{ ...defaultTransition, delay: 0.15 }}
          >
            Brandon
          </motion.div>
          <motion.div
            className={styles.lastName}
            {...fadeInLeft}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            Lublin
          </motion.div>
        </div>
      </div>
      <motion.div
        className={styles.title}
        {...fadeInUp}
        transition={{ ...defaultTransition, delay: 0.3 }}
      >
        Senior Frontend Engineer
      </motion.div>
      <motion.div
        className={styles.quirksContainer}
        variants={{
          ...staggerContainer,
          visible: {
            ...staggerContainer.visible,
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.35
            }
          }
        }}
        initial="hidden"
        animate="visible"
      >
        {quirks.map((quirk, index) => (
          <motion.div
            key={index}
            variants={staggerItemScale}
            transition={defaultTransition}
          >
            <Pill data={quirk} id={index} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className={styles.languagesContainer}
        variants={{
          ...staggerContainer,
          visible: {
            ...staggerContainer.visible,
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.5
            }
          }
        }}
        initial="hidden"
        animate="visible"
      >
        {languageIcons.map((language) => (
          <motion.div
            key={language.id}
            variants={{
              hidden: { opacity: 0, y: 10, rotate: -3 },
              visible: { opacity: 1, y: 0, rotate: 0 }
            }}
            transition={springTransition}
            {...hoverRotate}
          >
            <LanguageIcon language={language} id={language.id} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
