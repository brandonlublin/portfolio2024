import styles from './Title.module.css';
const Title = ({ titleText }) => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.underline}></div>
      <h2>{titleText}</h2>
    </div>
  )
}

export default Title;