import styles from './LanguageIcon.module.css';

interface LanguageProps {
  language: {
    img: string;
    name: string;
  };
}

const LanguageIcon = ({ language }: LanguageProps) => {
  if (!language) return null;

  return (
    <img
      className={styles.languageIcon}
      src={language.img}
      alt={`${language.name} logo`}
      loading="lazy"
    />
  );
}

export default LanguageIcon;
