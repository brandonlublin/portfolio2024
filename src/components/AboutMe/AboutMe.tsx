import styles from './AboutMe.module.css';
import Pill from '../Pill/Pill';
import LinkButton from '../LinkButton/LinkButton';
import LanguageIcon from '../LanguageIcon/LanguageIcon';
import { quirks, languageIcons } from '../../data/data';
const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.name}>Brandon Lublin</div>
      <div className={styles.title}>Senior Frontend Engineer</div>
      <div className={styles.quirksContainer}>
        {quirks.map((quirk, index) => (
          <Pill data={quirk} key={index} id={index} />
        ))}
      </div>
      <div className={styles.languagesContainer}>
        {languageIcons.map((language, index) => (
          <LanguageIcon language={language} key={index} id={index} />
        ))}
      </div>
    </div>
  );
}

export default AboutMe;