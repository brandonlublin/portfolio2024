import { useState, useRef, useEffect } from 'react';
import styles from './ActionMenu.module.css';
import linkedinIcon from '../../assets/icons/linkedin.png';
import githubIcon from '../../assets/icons/github.png';
import resumeIcon from '../../assets/icons/resume.png';
import Logo from '../Logo/Logo';

const ActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.menuContainer} ref={menuRef}>
      <div className={styles.menuButton} onClick={toggleMenu} aria-label="Open menu">
        <Logo />
      </div>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <a href="https://www.linkedin.com/in/brandon-lublin-78a550a8/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" /> LinkedIn
          </a>
          <a href="https://github.com/brandonlublin" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" /> GitHub
          </a>
          <a href="https://docs.google.com/document/d/1aN8CQ0Bq2DaJla_W29cGK7GUTvjswCrw_rp0mQ0vMaQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img src={resumeIcon} alt="Resume" /> Resume
          </a>
        </div>
      )}  
    </div>
  );
};

export default ActionMenu;
