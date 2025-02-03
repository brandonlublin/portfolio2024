import styles from './Pill.module.css';

interface PillProps {
  id: string | number;
  data: string;
}

const Pill = ({ id, data }: PillProps) => (
  <span key={`${id}${data}`} className={styles.pill}>
    {data}
  </span>
);

export default Pill;
