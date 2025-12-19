import WorkHistoryCard from './WorkHistoryCard';
import styles from './WorkHistory.module.css';
import { Job } from '../../types';

type WorkHistoryListProps = {
  workHistory: Job[];
};

const WorkHistoryList = ({ workHistory }: WorkHistoryListProps) => {
  return (
    <div className={styles.workHistoryList}>
      <h3 className={styles.cardHeader}>Work History</h3>
      {workHistory.map((job) => (
        <WorkHistoryCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default WorkHistoryList;
