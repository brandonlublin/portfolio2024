import styles from './Pill.module.css';

type PillProps = {
  id: string | number;
  data: string;
};

const Pill = ({ id, data }: PillProps) => (
  <span className={styles.pill}>
    {data}
  </span>
);

export default Pill;
