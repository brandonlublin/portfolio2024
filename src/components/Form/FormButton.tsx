import { motion } from 'framer-motion';
import { hoverScale } from '../../utils/animations';
import styles from './Form.module.css';

type FormButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  success?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const FormButton = ({ 
  type = 'button', 
  disabled = false, 
  loading = false, 
  success = false,
  children, 
  onClick 
}: FormButtonProps) => {
  const getButtonText = () => {
    if (loading) return 'Sending...';
    if (success) return 'Sent!';
    return children;
  };

  return (
    <motion.button
      type={type}
      className={styles.submitButton}
      disabled={disabled || loading}
      onClick={onClick}
      {...hoverScale}
    >
      {getButtonText()}
    </motion.button>
  );
};

export default FormButton;

