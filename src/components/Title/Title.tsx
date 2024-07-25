import styles from './Title.module.css';
const Title = ({ titleText }) => {
  return (
    <div className={styles.titleContainer}>
      <span className={styles.ellipsis}>•••</span>
      <span className={styles.title}>{titleText}</span>
      <span className={styles.ellipsis}>•••</span>
    </div>
  )
}

export default Title;