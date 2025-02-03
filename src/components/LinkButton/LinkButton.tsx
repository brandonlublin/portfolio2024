import { profiles } from '../../data/data';
import styles from './LinkButton.module.css';

interface Profile {
  url: string;
  icon: string;
}

const LinkButton = () => (
  <div className={styles.linkContainer}>
    {profiles.map((profile: Profile, index: number) => (
      <a key={index} className={styles.profileLink} target="_blank" href={profile.url} rel="noopener noreferrer">
        <img className={styles.icon} src={profile.icon} alt={`${profile.url} icon`} />
      </a>
    ))}
  </div>
);

export default LinkButton;