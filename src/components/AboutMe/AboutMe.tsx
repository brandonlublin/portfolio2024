import styles from './AboutMe.module.css';
import Pill from '../Pill/Pill';
import LinkButton from '../LinkButton/LinkButton';
import LanguageIcon from '../LanguageIcon/LanguageIcon';
import { quirks, languageIcons } from '../../data/data';
const AboutMe = () => {
  return (
    <div>
      <LinkButton />
      <h1 className={styles.name}>Brandon Lublin</h1>
      <h2 className={styles.title}>Senior Frontend Engineer</h2>
      <div className={styles.quirksContainer}>
        {quirks.map((quirk, index) => (
          <Pill data={quirk} key={index} />
        ))}
      </div>
      <div className={styles.languagesContainer}>
        {languageIcons.map((language, index) => (
          <LanguageIcon language={language} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AboutMe;