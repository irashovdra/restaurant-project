import React, { useState } from "react";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { NavigationList } from "../NavigationList/NavigationList";
import { MobileModal } from "../MobileModal/MobileModal"; 
import styles from "./Header.module.css";
import Logo from "../../images/header-logo.png";

export const Header = ({ openModal }) => {
  const [isMobileModalOpen, setMobileModalOpen] = useState(false);

  return (
    <header id="header" className={styles.header}>
      <Container>
        <div className={styles.header__container}>
          <a className={styles.header__logo} href="/">
            <img className={styles.header__photo} src={Logo} alt="logo" />
          </a>
          <NavigationList />
          <button
            type="button"
            className={styles.header__mobileBtn}
            onClick={() => setMobileModalOpen(true)}
          >
            <svg
              className={styles.header__icon}
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333008 2.00004C0.333008 1.69062 0.455924 1.39388 0.674717 1.17508C0.893509 0.956291 1.19026 0.833374 1.49967 0.833374H22.4997C22.8091 0.833374 23.1058 0.956291 23.3246 1.17508C23.5434 1.39388 23.6663 1.69062 23.6663 2.00004C23.6663 2.30946 23.5434 2.60621 23.3246 2.825C23.1058 3.04379 22.8091 3.16671 22.4997 3.16671H1.49967C1.19026 3.16671 0.893509 3.04379 0.674717 2.825C0.455924 2.60621 0.333008 2.30946 0.333008 2.00004ZM0.333008 9.03737C0.333008 8.72795 0.455924 8.43121 0.674717 8.21242C0.893509 7.99362 1.19026 7.87071 1.49967 7.87071H22.4997C22.8091 7.87071 23.1058 7.99362 23.3246 8.21242C23.5434 8.43121 23.6663 8.72795 23.6663 9.03737C23.6663 9.34679 23.5434 9.64354 23.3246 9.86233C23.1058 10.0811 22.8091 10.204 22.4997 10.204H1.49967C1.19026 10.204 0.893509 10.0811 0.674717 9.86233C0.455924 9.64354 0.333008 9.34679 0.333008 9.03737ZM1.49967 14.908C1.19026 14.908 0.893509 15.031 0.674717 15.2497C0.455924 15.4685 0.333008 15.7653 0.333008 16.0747C0.333008 16.3841 0.455924 16.6809 0.674717 16.8997C0.893509 17.1185 1.19026 17.2414 1.49967 17.2414H22.4997C22.8091 17.2414 23.1058 17.1185 23.3246 16.8997C23.5434 16.6809 23.6663 16.3841 23.6663 16.0747C23.6663 15.7653 23.5434 15.4685 23.3246 15.2497C23.1058 15.031 22.8091 14.908 22.4997 14.908H1.49967Z"
                fill="#7EB101"
              />
            </svg>
          </button>
          <Button openModal={openModal} className={styles.header__btn}>
            Order Now
          </Button>
        </div>
      </Container>
      {isMobileModalOpen && (
        <MobileModal closeModal={() => setMobileModalOpen(false)} />
      )}
    </header>
  );
};
