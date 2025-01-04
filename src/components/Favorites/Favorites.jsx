import styles from "./Favorites.module.css";

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
            src="../../images/gamburger.png"
            alt="burger"
            className={styles.favoritesList__photo}
          />
        </li>
        <li className={styles.favoritesList__item}>
          <img
            src="../../images/pasta.png"
            alt="pasta"
            className={styles.favoritesList__photo}
          />
        </li>
        <li className={styles.favoritesList__item}>
          <img
            src="../../images/pizza.png"
            alt="pizza"
            className={styles.favoritesList__photo}
          />
        </li>
        <li className={styles.favoritesList__item}>
          <img
            src="../../images/chicken.png"
            alt="chicken&rice"
            className={styles.favoritesList__photo}
          />
        </li>
        <li className={styles.favoritesList__item}>
          <img
            src="../../images/salad.png"
            alt="salad"
            className={styles.favoritesList__photo}
          />
        </li>
        <li className={styles.favoritesList__item}>
          <img
            src="../../src/images/borshch.png"
            alt="borshch"
            className={styles.favoritesList__photo}
          />
        </li>
      </ul>
    </section>
  );
};
