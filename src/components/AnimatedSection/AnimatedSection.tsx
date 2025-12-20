import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { scrollFadeInUp, defaultTransition } from '../../utils/animations';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedSection = ({ children, className, delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      {...scrollFadeInUp}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;


