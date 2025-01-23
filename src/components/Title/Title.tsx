import styles from './Title.module.css';
const Title = ({ titleText }) => {
  return (
    <div className={styles.headerSection}>
      <h2>{titleText}</h2>
    </div>
  )
}

export default Title;