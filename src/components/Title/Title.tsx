import styles from './Title.module.css';

type TitleProps = {
  titleText: string;
};

const Title = ({ titleText }: TitleProps) => {
  return (
    <div className={styles.headerSection}>
      {titleText}
    </div>
  );
};

export default Title;
