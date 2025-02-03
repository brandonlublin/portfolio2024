import LinkButton from "../LinkButton/LinkButton";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={styles.header} aria-label="Main navigation">
      <div className={styles.headerContainer}>
        <Logo />
        <LinkButton text="Contact Me" href="/contact" />
      </div>
    </header>
  );
};

export default Header;
