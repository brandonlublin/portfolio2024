import styles from './Title.module.css';
const Title = ({ titleText }) => {
  return (
    <div class={styles.headerSection}>
      <div class={styles.underline}></div>
      <h2>{titleText}</h2>
    </div>
  )
}

export default Title;