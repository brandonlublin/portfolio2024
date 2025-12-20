import { motion } from 'framer-motion';
import { hoverScale } from '../../utils/animations';
import styles from './SocialLinks.module.css';

type Profile = {
  url: string;
  icon: string;
  alt: string;
};

type SocialLinksProps = {
  profiles: Profile[];
  showResume?: boolean;
};

const SocialLinks = ({ profiles, showResume = true }: SocialLinksProps) => {
  const resumeLink = profiles.find(p => p.alt === 'resume icon');
  const socialLinks = profiles.filter(p => p.alt !== 'resume icon');

  const getSocialText = (alt: string) => {
    if (alt.includes('linkedin')) return 'LinkedIn';
    if (alt.includes('github')) return 'GitHub';
    return alt;
  };

  return (
    <>
      <div className={styles.socialLinks}>
        {socialLinks.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            {...hoverScale}
            transition={{ duration: 0.2 }}
          >
            <img src={profile.icon} alt={profile.alt} className={styles.socialIcon} />
            <span className={styles.socialText}>{getSocialText(profile.alt)}</span>
          </motion.a>
        ))}
      </div>

      {showResume && resumeLink && (
        <motion.a
          href={resumeLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeLink}
          {...hoverScale}
          transition={{ duration: 0.2 }}
        >
          <img src={resumeLink.icon} alt="Resume" className={styles.resumeIcon} />
          <span>View Resume</span>
        </motion.a>
      )}
    </>
  );
};

export default SocialLinks;


