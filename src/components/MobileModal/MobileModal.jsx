import styles from "./MobileModal.module.css";

export const MobleModal = () => {
  return (
    <div className={mobileModal}>
      <ul className={mobileList}>
        <li className={mobileList__item}>
          <a href="#header" className={mobileList__link}>
            Home
          </a>
        </li>
        <li className={mobileList__item}>
          <a href="#hero" className={mobileList__link}>
            About
          </a>
        </li>
        <li className={mobileList__item}>
          <a href="#offerings" className={mobileList__link}>
            Service
          </a>
        </li>
        <li className={mobileList__item}>
          <a href="#favorites" className={mobileList__link}>
            Menu
          </a>
        </li>
        <li className={mobileList__item}>
          <a href="#footer" className={mobileList__link}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
