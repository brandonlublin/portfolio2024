import styles from './Pill.module.css';
const Pill = ({ id, data }) => {
  return (
    <span key={`${id + data}`} className={styles.pill}>{data}</span>
  );
}

export default Pill;