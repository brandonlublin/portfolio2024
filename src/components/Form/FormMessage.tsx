import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, fastTransition } from '../../utils/animations';
import styles from './Form.module.css';

type FormMessageProps = {
  type: 'success' | 'error';
  message: string;
  show: boolean;
};

const FormMessage = ({ type, message, show }: FormMessageProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.p
          className={type === 'success' ? styles.successMessage : styles.errorMessage}
          {...fadeIn}
          transition={fastTransition}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default FormMessage;



