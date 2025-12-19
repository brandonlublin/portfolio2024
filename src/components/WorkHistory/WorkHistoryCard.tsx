import styles from './WorkHistory.module.css';
import { Job } from '../../types';

type WorkHistoryCardProps = {
  job: Job;
};

const WorkHistoryCard = ({ job }: WorkHistoryCardProps) => {
  return (
    <div className={styles.workHistoryCard}>
      <div className={styles.jobContent}>
        <h3>{job.title}</h3>
        <h4>{job.company}</h4>
        <p>{job.description}</p>
      </div>
    </div>
  );
};

export default WorkHistoryCard;
