import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { NavigationList } from "../NavigationList/NavigationList";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__container}>
          <a className={styles.header__logo} href="/">
            <img
              className={styles.header__photo}
              src="../../images/header-logo"
              alt="logo"
            />
          </a>
          <NavigationList />
          <button className={styles.header__mobileBtn}>
            <svg
              className={styles.header__icon}
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.33301 7.00004C2.33301 6.69062 2.45592 6.39388 2.67472 6.17508C2.89351 5.95629 3.19026 5.83337 3.49967 5.83337H24.4997C24.8091 5.83337 25.1058 5.95629 25.3246 6.17508C25.5434 6.39388 25.6663 6.69062 25.6663 7.00004C25.6663 7.30946 25.5434 7.60621 25.3246 7.825C25.1058 8.04379 24.8091 8.16671 24.4997 8.16671H3.49967C3.19026 8.16671 2.89351 8.04379 2.67472 7.825C2.45592 7.60621 2.33301 7.30946 2.33301 7.00004ZM2.33301 14.0374C2.33301 13.728 2.45592 13.4312 2.67472 13.2124C2.89351 12.9936 3.19026 12.8707 3.49967 12.8707H24.4997C24.8091 12.8707 25.1058 12.9936 25.3246 13.2124C25.5434 13.4312 25.6663 13.728 25.6663 14.0374C25.6663 14.3468 25.5434 14.6435 25.3246 14.8623C25.1058 15.0811 24.8091 15.204 24.4997 15.204H3.49967C3.19026 15.204 2.89351 15.0811 2.67472 14.8623C2.45592 14.6435 2.33301 14.3468 2.33301 14.0374ZM3.49967 19.908C3.19026 19.908 2.89351 20.031 2.67472 20.2497C2.45592 20.4685 2.33301 20.7653 2.33301 21.0747C2.33301 21.3841 2.45592 21.6809 2.67472 21.8997C2.89351 22.1185 3.19026 22.2414 3.49967 22.2414H24.4997C24.8091 22.2414 25.1058 22.1185 25.3246 21.8997C25.5434 21.6809 25.6663 21.3841 25.6663 21.0747C25.6663 20.7653 25.5434 20.4685 25.3246 20.2497C25.1058 20.031 24.8091 19.908 24.4997 19.908H3.49967Z"
                fill="#7EB101"
              />
            </svg>
          </button>

          <Button className={styles.header__btn}>Order Now</Button>
        </div>
      </Container>
    </header>
  );
};
