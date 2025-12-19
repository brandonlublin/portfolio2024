import { motion } from 'framer-motion';
import { peerFeedback as peerFeedbackData } from "../../data/data";
import styles from "./PeerFeedback.module.css";
import { staggerContainer, staggerItemLeft, defaultTransition } from '../../utils/animations';

const PeerFeedback = () => {
  return (
    <motion.div
      className={styles.peerFeedbackContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        ...staggerContainer,
        visible: {
          ...staggerContainer.visible,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {peerFeedbackData.map((peerFeedback, index) => (
        <motion.div
          key={index}
          className={styles.feedback}
          variants={staggerItemLeft}
          transition={defaultTransition}
        >
          <p className={styles.feedbackText}>{peerFeedback.feedback}</p>
          <span className={styles.feedbackUser}>{peerFeedback.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PeerFeedback;
