
import styles from './WorkHistory.module.css';
const WorkHistoryCard = ({ job }) => {
  return (
    <div className={styles.workHistoryCard}>
      <div className={styles.jobContent}>
        
      </div>
      <h3>{job.title}</h3>
      <h4>{job.company}</h4>
      <p>{job.description}</p>
    </div>
  );
}

export default WorkHistoryCard;