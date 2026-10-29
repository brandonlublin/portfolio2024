import selfie from '../../assets/images/selfie.png';
import { profile } from '../../data/data';
import styles from './ProfileCard.module.css';

const ProfileCard = () => {
  const today = new Date().toLocaleDateString('en-US');

  return (
    <section>
      <h1 className={styles.name}>{profile.name}</h1>
      <div className={styles.card}>
        <img className={styles.photo} src={selfie} alt={profile.fullName} />
        <div className={styles.facts}>
          <p>{profile.headline}</p>
          <p>{profile.occupation}</p>
          {profile.location.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className={styles.login}>
            Last Login:
            <br />
            {today}
          </p>
          <span className={styles.online}>
            <i aria-hidden='true' />
            Online Now!
          </span>
        </div>
      </div>
      <p className={styles.viewMy}>
        View My: <a href={profile.resumeUrl} target='_blank' rel='noopener noreferrer'>Résumé</a> |{' '}
        <a href={profile.githubUrl} target='_blank' rel='noopener noreferrer'>Code</a>
      </p>
    </section>
  );
};

export default ProfileCard;
