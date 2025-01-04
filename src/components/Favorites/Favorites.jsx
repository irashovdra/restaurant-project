export const Favorites = () => {
  return (
    <section className="favorites">
      <h2 className="favorites__title">Some of Our Favorites</h2>
      <p className="favorites__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <ul className="favoritesList">
        <li className="favoritesList__item">
          <img src="" alt="burger" className="favoritesList__photo" />
        </li>
        <li className="favoritesList__item">
          <img src="" alt="pasta" className="favoritesList__photo" />
        </li>
        <li className="favoritesList__item">
          <img src="" alt="pizza" className="favoritesList__photo" />
        </li>
        <li className="favoritesList__item">
          <img src="" alt="chicken&rice" className="favoritesList__photo" />
        </li>
        <li className="favoritesList__item">
          <img src="" alt="salad" className="favoritesList__photo" />
        </li>
        <li className="favoritesList__item">
          <img src="" alt="borsch" className="favoritesList__photo" />
        </li>
      </ul>
    </section>
  );
};
