import { motion } from 'framer-motion';
import styles from './Title.module.css';
import { scrollFadeInUp, defaultTransition } from '../../utils/animations';

type TitleProps = {
  titleText: string;
};

const Title = ({ titleText }: TitleProps) => {
  return (
    <motion.div
      className={styles.headerSection}
      {...scrollFadeInUp}
      transition={defaultTransition}
    >
      {titleText}
    </motion.div>
  );
};

export default Title;
