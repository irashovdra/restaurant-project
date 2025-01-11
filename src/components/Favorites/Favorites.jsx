import styles from "./Favorites.module.css";
import Burger from "../../images/gamburger.png";
import Pizza from "../../images/pizza.png";
import Pasta from "../../images/pasta.png";
import Chicken from "../../images/chicken.png";
import Salad from "../../images/salad.png";
import Borshch from "../../images/borshch.png";

export const Favorites = () => {
  return (
    <section className={styles.favorites}>
      <h2 className={styles.favorites__title}>Some of Our Favorites</h2>
      <p className={styles.favorites__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <ul className={styles.favoritesList}>
        <li className={styles.favoritesList__item}>
          <img
            src={Burger}
            alt="burger"
            className={styles.favoritesList__photo}
          />
        </li>
        <li className={styles.favoritesList__item}>
          <img
            src={Pasta}
            alt="pasta"
            className={styles.favoritesList__photo}
          />
        </li>
        <li className={styles.favoritesList__item}>
          <img
            src={Pizza}
            alt="pizza"
            className={styles.favoritesList__photo}
          />
        </li>
        <li className={styles.favoritesList__item}>
          <img
            src={Chicken}
            alt="chicken&rice"
            className={styles.favoritesList__photo}
          />
        </li>
        <li className={styles.favoritesList__item}>
          <img
            src={Salad}
            alt="salad"
            className={styles.favoritesList__photo}
          />
        </li>
        <li className={styles.favoritesList__item}>
          <img
            src={Borshch}
            alt="borshch"
            className={styles.favoritesList__photo}
          />
        </li>
      </ul>
    </section>
  );
};
