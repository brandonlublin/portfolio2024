import LinkButton from "../LinkButton/LinkButton";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>          
        <Logo />
        <LinkButton />
      </div>
    </div>
  );
};

export default Header;