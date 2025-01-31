import styles from './Title.module.css';
const Title = ({ titleText }) => {
  return (
    <div className={styles.headerSection}>
      <div>{titleText}</div>
    </div>
  )
}

export default Title;