import React from "react";
import { NavigationList } from "../NavigationList/NavigationList";
import styles from "./HeaderMobileModal.module.css";

export const HeaderMobileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay} onClick={onClose}></div>
      <div className={styles.modal__content}>
        <button className={styles.modal__close} onClick={onClose}>
          &times;
        </button>
        <NavigationList />
      </div>
    </div>
  );
};
