import { motion } from 'framer-motion';
import { profiles } from '../../data/data';
import styles from './LinkButton.module.css';
import { hoverScale, hoverRotate } from '../../utils/animations';

type Profile = {
  url: string;
  icon: string;
};

type LinkButtonProps = {
  text?: string;
  href?: string;
};

const LinkButton = ({ text, href }: LinkButtonProps = {}) => {
  if (text && href) {
    return (
      <motion.a
        className={styles.profileLink}
        href={href}
        rel="noopener noreferrer"
        {...hoverScale}
        transition={{ duration: 0.2 }}
      >
        <svg
          className={styles.letterIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span className={styles.linkText}>{text}</span>
      </motion.a>
    );
  }

  return (
    <div className={styles.linkContainer}>
      {profiles.map((profile: Profile, index: number) => (
        <motion.a
          key={index}
          className={styles.profileLink}
          target="_blank"
          href={profile.url}
          rel="noopener noreferrer"
          {...hoverRotate}
          transition={{ duration: 0.2 }}
        >
          <img className={styles.icon} src={profile.icon} alt={`${profile.url} icon`} />
        </motion.a>
      ))}
    </div>
  );
};

export default LinkButton;