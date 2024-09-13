import styles from './LanguageIcon.module.css';
const LanguageIcon = ({ language, key }) => {
  return (
    <img className={styles.languageIcon} key={key} src={language.img} alt={language.name} />
  );
}

export default LanguageIcon;