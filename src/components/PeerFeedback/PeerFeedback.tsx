import { peerFeedback as peerFeedbackData } from "../../data/data";
import styles from './PeerFeedback.module.css';

const PeerFeedback = () => {
  return (
    <div className={styles.peerFeedbackContainer}>
      {peerFeedbackData.map((peerFeedback) => (
        console.log('peerFeedback', peerFeedback),
        <div className={styles.feedback}>
          <div className={styles.feedbackHeader}>
            <div>{peerFeedback.name}</div>
            <div>{peerFeedback.date}</div>
          </div>
          <div>{peerFeedback.feedback}</div>
        </div>
      ))}
    </div>
  );
}

export default PeerFeedback