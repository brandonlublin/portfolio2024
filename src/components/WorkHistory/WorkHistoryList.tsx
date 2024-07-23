import WorkHistoryCard from './WorkHistoryCard';
import styles from './WorkHistory.module.css';
const WorkHistoryList = ({ workHistory }) => {
  return (
    <div className={styles.workHistoryList}>
      <h3 className={styles.cardHeader}>Work History</h3>
      {workHistory.map((job) => (
        <WorkHistoryCard key={job.company} job={job} />
      ))}
    </div>
  );
}

export default WorkHistoryList;