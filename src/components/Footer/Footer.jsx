import { NavigationList } from "../NavigationList/NavigationList";
import styles from "./Footer.module.css";
import { Container } from "../Container/Container";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <NavigationList />
        {/* <p className={styles.footer__text">Subscribe</p>
      <input
        placeholder="Enter your email"
        type="text"
        className={styles.footer__filling"
      />
      <button className={styles.footer__btn">Subscribe</button>
      <p className={styles.footer__conditions">
        By subscribing you agree to with our Privacy Policy
      </p> */}
        <ul className={styles.footerList}>
          <li className={styles.footerList__item}>
            <a href="#" className={styles.footerList__link}>
              Privacy Policy
            </a>
          </li>
          <li className={styles.footerList__item}>
            <a href="#" className={styles.footerList__link}>
              Terms of Service
            </a>
          </li>
          <li className={styles.footerList__item}>
            <a href="#" className={styles.footerList__link}>
              Cookies Settings
            </a>
          </li>
        </ul>
        <p className={styles.footer__rights}>
          2022 FoodSta. All right reserved.
        </p>
      </Container>
    </footer>
  );
};
