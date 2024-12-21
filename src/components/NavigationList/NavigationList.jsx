import styles from "./NavigationList.module.css";

export const NavigationList = () => {
  return (
    <ul className={styles.navigationList}>
      <li className={styles.navigationList__item}>
        <a href="#home" className={styles.navigationList__link}>
          Home
        </a>
      </li>
      <li className={styles.navigationList__item}>
        <a href="#about" className={styles.navigationList__link}>
          About
        </a>
      </li>
      <li className={styles.navigationList__item}>
        <a href="#service" className={styles.navigationList__link}>
          Service
        </a>
      </li>
      <li className={styles.navigationList__item}>
        <a href="#menu" className={styles.navigationList__link}>
          Menu
        </a>
      </li>
      <li className={styles.navigationList__item}>
        <a href="#contact" className={styles.navigationList__link}>
          Contact
        </a>
      </li>
    </ul>
  );
};
