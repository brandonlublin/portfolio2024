import WorkHistoryCard from './WorkHistoryCard';
import styles from './WorkHistory.module.css';

type Job = {
  title: string;
  company: string;
  description: string;
};

type WorkHistoryListProps = {
  workHistory: Job[];
};

const WorkHistoryList = ({ workHistory }: WorkHistoryListProps) => {
  return (
    <div className={styles.workHistoryList}>
      <h3 className={styles.cardHeader}>Work History</h3>
      {workHistory.map((job) => (
        <WorkHistoryCard key={job.company} job={job} />
      ))}
    </div>
  );
};

export default WorkHistoryList;
