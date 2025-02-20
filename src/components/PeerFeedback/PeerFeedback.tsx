import { peerFeedback as peerFeedbackData } from "../../data/data";
import styles from "./PeerFeedback.module.css";

const PeerFeedback = () => {
  return (
    <div className={styles.peerFeedbackContainer}>
      {peerFeedbackData.map((peerFeedback, index) => (
        <div key={index} className={styles.feedback}>
          <p className={styles.feedbackText}>{peerFeedback.feedback}</p>
          <span className={styles.feedbackUser}>— {peerFeedback.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PeerFeedback;
