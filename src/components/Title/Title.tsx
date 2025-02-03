import styles from './Title.module.css';

type TitleProps = {
  titleText: string;
};

const Title = ({ titleText }: TitleProps) => {
  return (
    <div className={styles.headerSection}>
      <div>{titleText}</div>
    </div>
  );
};

export default Title;
