import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fastTransition, hoverScale } from '../../utils/animations';
import arrowIcon from '../../assets/icons/arrow.png';
import styles from './ScrollToTop.module.css';

type ScrollToTopProps = {
  show: boolean;
  onClick: () => void;
};

const ScrollToTop = ({ show, onClick }: ScrollToTopProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          onClick={onClick}
          className={styles.scrollToTopButton}
          {...fadeInUp}
          transition={fastTransition}
          {...hoverScale}
        >
          <img className={styles.scrollToTopArrow} src={arrowIcon} alt="Scroll to top" />
          <div className={styles.backToTop}>Back to Top</div>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;



