import { links } from '../../data/data'
import styles from './LinkButton.module.css';
import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import resumeIcon from '../../assets/icons/resume.png';
const LinkButton = () => {
  const profiles = [
    {
      url: 'https://www.linkedin.com/in/brandon-lublin-78a550a8/',
      icon: linkedinIcon,
      alt: 'linkedin icon'
    },
    {
      url: 'https://github.com/brandonlublin',
      icon: githubIcon,
      alt: 'github icon'
    },
    {
      url: '#',
      icon: resumeIcon,
      alt: 'resume icon'
    }
  ];

  return (
    <div className={styles.linkContainer}>
      {profiles.map((profile, index) => (
        <a key={index} className={styles.profileLink} target="#" href={profile.url}>
          <img className={styles.icon} src={profile.icon} />
        </a>
      ))}
    </div>
  );
}

export default LinkButton;