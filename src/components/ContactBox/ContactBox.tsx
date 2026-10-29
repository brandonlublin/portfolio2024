import { Link } from 'react-router-dom';
import { profile } from '../../data/data';
import { InfoBox } from '../InfoBox/InfoBox';
import styles from './ContactBox.module.css';

const ContactBox = () => {
  return (
    <InfoBox title={`Contacting ${profile.name}`}>
      <div className={styles.grid}>
        <Link to='/contact'>Send Message</Link>
        <a href={profile.linkedinUrl} target='_blank' rel='noopener noreferrer'>Add to Network</a>
        <a href={profile.githubUrl} target='_blank' rel='noopener noreferrer'>Follow on GitHub</a>
        <a href={profile.resumeUrl} target='_blank' rel='noopener noreferrer'>View Résumé</a>
      </div>
    </InfoBox>
  );
};

export default ContactBox;
