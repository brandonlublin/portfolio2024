import styles from './Pill.module.css';
const Pill = ({ key, data }) => {
  return (
    <span className={styles.pill}>{data}</span>
  );
}

export default Pill;