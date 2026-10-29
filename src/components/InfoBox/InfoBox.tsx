import { ReactNode } from 'react';
import styles from './InfoBox.module.css';

type InfoBoxProps = {
  title: string;
  id?: string;
  variant?: 'default' | 'friends';
  children: ReactNode;
};

export const InfoBox = ({ title, id, variant = 'default', children }: InfoBoxProps) => {
  return (
    <section className={styles.box} id={id}>
      <h2 className={variant === 'friends' ? `${styles.title} ${styles.friends}` : styles.title}>{title}</h2>
      <div className={styles.body}>{children}</div>
    </section>
  );
};

type InfoTableProps = {
  rows: { label: string; value: ReactNode }[];
};

export const InfoTable = ({ rows }: InfoTableProps) => {
  return (
    <table className={styles.table}>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <th scope='row'>{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
