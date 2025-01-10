import styles from './HowDidIGetHere.module.css';
import selfie from '../../assets/images/selfie.png';

const HowDidIGetHere = () => {
  return (
    <div className={styles.howIGotHere}>
      <img className={styles.selfie} src={selfie} alt="Selfie" />
      <div className={styles.selfBlurb}>Highly collaborative Frontend Software Engineer with 4 years of experience at a rapidly growing SaaS B2B startup. Expert in cultivating effective cross-functional relationships, I excel at partnering with diverse teams to create high-performance, accessible products.</div>
    </div>
  )
}

export default HowDidIGetHere;