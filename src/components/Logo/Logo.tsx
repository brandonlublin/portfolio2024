import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showTooltip, setShowTooltip] = useState(false);
  const placeholderAvatar = 'https://ui-avatars.com/api/?name=BL&background=2D3A36&color=fff&size=128&bold=true';

  const handleClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.location.reload();
    }
  };

  const isHome = location.pathname === '/';

  return (
    <motion.div
      className={styles.logoContainer}
      onClick={handleClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      role="button"
      tabIndex={0}
      aria-label="Go to home"
      whileHover={{
        scale: 1.05,
        rotate: [0, -2, 2, -2, 0],
        transition: {
          rotate: {
            duration: 0.4,
            ease: "easeInOut"
          },
          scale: {
            duration: 0.2
          }
        }
      }}
      whileTap={{
        scale: 0.98,
        rotate: 0
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
    >
      <motion.img
        className={styles.logo}
        src={placeholderAvatar}
        alt="Brandon Lublin"
        whileHover={{
          filter: "brightness(1.2)",
        }}
      />
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className={styles.tooltip}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {isHome ? 'Refresh' : 'Go to Home'}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Logo;
