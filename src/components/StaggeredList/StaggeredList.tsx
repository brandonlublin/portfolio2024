import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { staggerContainer, staggerItem, defaultTransition } from '../../utils/animations';

type StaggeredListProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  itemVariant?: typeof staggerItem;
  delay?: number;
};

const StaggeredList = ({
  children,
  className,
  staggerDelay = 0.1,
  itemVariant = staggerItem,
  delay = 0
}: StaggeredListProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        ...staggerContainer,
        visible: {
          ...staggerContainer.visible,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariant} transition={defaultTransition}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
};

export default StaggeredList;



