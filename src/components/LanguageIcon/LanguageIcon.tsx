import styles from './LanguageIcon.module.css';

type LanguageProps = {
  language: {
    img: string;
    name: string;
  };
  id?: number;
};

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
