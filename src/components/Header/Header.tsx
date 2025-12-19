import { motion } from 'framer-motion';
import LinkButton from "../LinkButton/LinkButton";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { fadeInDown, defaultTransition } from '../../utils/animations';

const Header = () => {
  return (
    <motion.header
      className={styles.header}
      aria-label="Main navigation"
      {...fadeInDown}
      transition={defaultTransition}
    >
      <div className={styles.headerContainer}>
        <Logo />
        <LinkButton text="Contact Me" href="/contact" />
      </div>
    </motion.header>
  );
};

export default Header;
