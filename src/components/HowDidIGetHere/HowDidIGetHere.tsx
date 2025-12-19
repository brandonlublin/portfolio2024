import { motion } from 'framer-motion';
import styles from "./HowDidIGetHere.module.css";
import selfie from "../../assets/images/selfie.png";
import { scrollFadeInUp, defaultTransition } from '../../utils/animations';

const HowDidIGetHere = () => {
  return (
    <motion.section
      className={styles.howIGotHere}
      aria-label="About Me"
      {...scrollFadeInUp}
      transition={defaultTransition}
    >
      <div className={styles.selfieContainer}>
        <picture>
          <source srcSet={selfie} type="image/png" />
          <img className={styles.selfie} src={selfie} alt="Portrait of a frontend software engineer" />
        </picture>
      </div>
      <div className={styles.selfBlurb}>
        <p>
          Highly collaborative Frontend Software Engineer with 4 years of experience at a rapidly growing SaaS B2B startup. Expert in cultivating effective cross-functional relationships, I excel at partnering with diverse teams to create high-performance, accessible products.
        </p>
        <p>
          When I'm not coding, you'll find me exploring new destinations, hitting the slopes on my snowboard, perfecting my swing on the golf course, or cheering on my favorite teams. But my favorite activity? Spending quality time with my two-year-old daughter. Whether we're playing games, going on adventures, or just enjoying the simple moments together, she's changed me for the better in every way. I'm passionate about sports of all kinds, both as a spectator and participant, and I love the balance they bring to my life.
        </p>
      </div>
    </motion.section>
  );
};

export default HowDidIGetHere;
