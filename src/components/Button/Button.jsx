import styles from "./Button.module.css";

export const Button = ({ openModal }) => {
  return (
    <button onClick={openModal} className={styles.openButton} type="button">
      Order Now
    </button>
  );
};
