import styles from './LanguageIcon.module.css';
const LanguageIcon = ({ language, id }) => {
  return (
    <img className={styles.languageIcon} key={id} src={language.img} alt={language.name} />
  );
}

export default LanguageIcon;