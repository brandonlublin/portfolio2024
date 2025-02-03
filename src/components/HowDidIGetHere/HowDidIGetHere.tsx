import styles from "./HowDidIGetHere.module.css";
import selfie from "../../assets/images/selfie.png";

const HowDidIGetHere = () => {
  return (
    <section className={styles.howIGotHere} aria-label="About Me">
      <div className={styles.selfieContainer}>
        <picture>
          <source srcSet={selfie} type="image/png" />
          <img className={styles.selfie} src={selfie} alt="Portrait of a frontend software engineer" />
        </picture>
      </div>
      <p className={styles.selfBlurb}>
        Highly collaborative Frontend Software Engineer with 4 years of experience at a rapidly growing SaaS B2B startup. Expert in cultivating effective cross-functional relationships, I excel at partnering with diverse teams to create high-performance, accessible products.
      </p>
    </section>
  );
};

export default HowDidIGetHere;
