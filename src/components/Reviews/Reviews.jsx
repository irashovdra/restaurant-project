import styles from "./Reviews.module.css";
import Review1 from "../../images/review1.png";
import Review2 from "../../images/review2.png";

export const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <h2 className={styles.reviews__title}>What our Customers Say</h2>
      <p className={styles.reviews__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <ul className={styles.reviewsList}>
        <li className={styles.reviewsList__item}>
          <svg
            className={styles.reviewsList__icon}
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="16"
            viewBox="0 0 101 16"
            fill="none"
          >
            <g clip-path="url(#clip0_3777_20)">
              <path
                d="M7.71026 0.51869C8.00245 -0.172898 8.99759 -0.172897 9.28978 0.518692L11.0142 4.60057C11.1375 4.89213 11.416 5.09134 11.7357 5.11657L16.2118 5.46986C16.9702 5.52972 17.2777 6.46147 16.6999 6.94875L13.2896 9.82474C13.046 10.0302 12.9396 10.3526 13.014 10.6597L14.0559 14.9599C14.2324 15.6885 13.4274 16.2644 12.7781 15.874L8.94588 13.5695C8.67215 13.4049 8.3279 13.4049 8.05418 13.5695L4.22195 15.874C3.57265 16.2644 2.76757 15.6885 2.9441 14.9599L3.98602 10.6597C4.06044 10.3526 3.95406 10.0302 3.71048 9.82474L0.300104 6.94875C-0.277711 6.46147 0.0298078 5.52972 0.788199 5.46986L5.26436 5.11657C5.58409 5.09134 5.8626 4.89213 5.98577 4.60057L7.71026 0.51869Z"
                fill="#FFE550"
              />
              <path
                d="M28.7103 0.51869C29.0024 -0.172898 29.9976 -0.172897 30.2898 0.518692L32.0142 4.60057C32.1375 4.89213 32.416 5.09134 32.7357 5.11657L37.2118 5.46986C37.9702 5.52972 38.2777 6.46147 37.6999 6.94875L34.2896 9.82474C34.046 10.0302 33.9396 10.3526 34.014 10.6597L35.0559 14.9599C35.2324 15.6885 34.4274 16.2644 33.7781 15.874L29.9459 13.5695C29.6721 13.4049 29.3279 13.4049 29.0542 13.5695L25.222 15.874C24.5727 16.2644 23.7676 15.6885 23.9441 14.9599L24.986 10.6597C25.0604 10.3526 24.9541 10.0302 24.7105 9.82474L21.3001 6.94875C20.7223 6.46147 21.0298 5.52972 21.7882 5.46986L26.2644 5.11657C26.5841 5.09134 26.8626 4.89213 26.9858 4.60057L28.7103 0.51869Z"
                fill="#FFE550"
              />
              <path
                d="M49.7103 0.51869C50.0024 -0.172898 50.9976 -0.172897 51.2898 0.518692L53.0142 4.60057C53.1375 4.89213 53.416 5.09134 53.7357 5.11657L58.2118 5.46986C58.9702 5.52972 59.2777 6.46147 58.6999 6.94875L55.2896 9.82474C55.046 10.0302 54.9396 10.3526 55.014 10.6597L56.0559 14.9599C56.2324 15.6885 55.4274 16.2644 54.7781 15.874L50.9459 13.5695C50.6721 13.4049 50.3279 13.4049 50.0542 13.5695L46.222 15.874C45.5727 16.2644 44.7676 15.6885 44.9441 14.9599L45.986 10.6597C46.0604 10.3526 45.9541 10.0302 45.7105 9.82474L42.3001 6.94875C41.7223 6.46147 42.0298 5.52972 42.7882 5.46986L47.2644 5.11657C47.5841 5.09134 47.8626 4.89213 47.9858 4.60057L49.7103 0.51869Z"
                fill="#FFE550"
              />
              <path
                d="M70.7103 0.51869C71.0024 -0.172898 71.9976 -0.172897 72.2898 0.518692L74.0142 4.60057C74.1375 4.89213 74.416 5.09134 74.7357 5.11657L79.2118 5.46986C79.9702 5.52972 80.2777 6.46147 79.6999 6.94875L76.2896 9.82474C76.046 10.0302 75.9396 10.3526 76.014 10.6597L77.0559 14.9599C77.2324 15.6885 76.4274 16.2644 75.7781 15.874L71.9459 13.5695C71.6721 13.4049 71.3279 13.4049 71.0542 13.5695L67.222 15.874C66.5727 16.2644 65.7676 15.6885 65.9441 14.9599L66.986 10.6597C67.0604 10.3526 66.9541 10.0302 66.7105 9.82474L63.3001 6.94875C62.7223 6.46147 63.0298 5.52972 63.7882 5.46986L68.2644 5.11657C68.5841 5.09134 68.8626 4.89213 68.9858 4.60057L70.7103 0.51869Z"
                fill="#FFE550"
              />
              <path
                d="M91.7103 0.51869C92.0024 -0.172898 92.9976 -0.172897 93.2898 0.518692L95.0142 4.60057C95.1375 4.89213 95.416 5.09134 95.7357 5.11657L100.212 5.46986C100.97 5.52972 101.278 6.46147 100.7 6.94876L97.2896 9.82474C97.046 10.0302 96.9396 10.3526 97.014 10.6597L98.0559 14.9599C98.2324 15.6885 97.4274 16.2644 96.7781 15.874L92.9459 13.5695C92.6721 13.4049 92.3279 13.4049 92.0542 13.5695L88.222 15.874C87.5727 16.2644 86.7676 15.6885 86.9441 14.9599L87.986 10.6597C88.0604 10.3526 87.9541 10.0302 87.7105 9.82474L84.3001 6.94876C83.7223 6.46147 84.0298 5.52972 84.7882 5.46986L89.2644 5.11657C89.5841 5.09134 89.8626 4.89213 89.9858 4.60057L91.7103 0.51869Z"
                fill="#FFE550"
              />
            </g>
            <defs>
              <clipPath id="clip0_3777_20">
                <rect width="101" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className={styles.reviewsList__text}>
            “The Best app I have used to order food in a while, so many options
            to choose from too, I would recommend to a freind, No questions
            asked”
          </p>
          <div className={styles.reviewsList__flex}>
            <img
              src={Review1}
              alt="review1"
              className={styles.reviewsList__photo}
            />
            <div>
              <h3 className={styles.reviewsList__name}>Sumith Shah</h3>
              <p className={styles.reviewsList__bio}>Some Dude</p>
            </div>
          </div>
        </li>
        <li className={styles.reviewsList__item}>
          <svg
            className={styles.reviewsList__icon}
            width="101"
            height="16"
            viewBox="0 0 101 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3777_20)">
              <path
                d="M7.71026 0.51869C8.00245 -0.172898 8.99759 -0.172897 9.28978 0.518692L11.0142 4.60057C11.1375 4.89213 11.416 5.09134 11.7357 5.11657L16.2118 5.46986C16.9702 5.52972 17.2777 6.46147 16.6999 6.94875L13.2896 9.82474C13.046 10.0302 12.9396 10.3526 13.014 10.6597L14.0559 14.9599C14.2324 15.6885 13.4274 16.2644 12.7781 15.874L8.94588 13.5695C8.67215 13.4049 8.3279 13.4049 8.05418 13.5695L4.22195 15.874C3.57265 16.2644 2.76757 15.6885 2.9441 14.9599L3.98602 10.6597C4.06044 10.3526 3.95406 10.0302 3.71048 9.82474L0.300104 6.94875C-0.277711 6.46147 0.0298078 5.52972 0.788199 5.46986L5.26436 5.11657C5.58409 5.09134 5.8626 4.89213 5.98577 4.60057L7.71026 0.51869Z"
                fill="#FFE550"
              />
              <path
                d="M28.7103 0.51869C29.0024 -0.172898 29.9976 -0.172897 30.2898 0.518692L32.0142 4.60057C32.1375 4.89213 32.416 5.09134 32.7357 5.11657L37.2118 5.46986C37.9702 5.52972 38.2777 6.46147 37.6999 6.94875L34.2896 9.82474C34.046 10.0302 33.9396 10.3526 34.014 10.6597L35.0559 14.9599C35.2324 15.6885 34.4274 16.2644 33.7781 15.874L29.9459 13.5695C29.6721 13.4049 29.3279 13.4049 29.0542 13.5695L25.222 15.874C24.5727 16.2644 23.7676 15.6885 23.9441 14.9599L24.986 10.6597C25.0604 10.3526 24.9541 10.0302 24.7105 9.82474L21.3001 6.94875C20.7223 6.46147 21.0298 5.52972 21.7882 5.46986L26.2644 5.11657C26.5841 5.09134 26.8626 4.89213 26.9858 4.60057L28.7103 0.51869Z"
                fill="#FFE550"
              />
              <path
                d="M49.7103 0.51869C50.0024 -0.172898 50.9976 -0.172897 51.2898 0.518692L53.0142 4.60057C53.1375 4.89213 53.416 5.09134 53.7357 5.11657L58.2118 5.46986C58.9702 5.52972 59.2777 6.46147 58.6999 6.94875L55.2896 9.82474C55.046 10.0302 54.9396 10.3526 55.014 10.6597L56.0559 14.9599C56.2324 15.6885 55.4274 16.2644 54.7781 15.874L50.9459 13.5695C50.6721 13.4049 50.3279 13.4049 50.0542 13.5695L46.222 15.874C45.5727 16.2644 44.7676 15.6885 44.9441 14.9599L45.986 10.6597C46.0604 10.3526 45.9541 10.0302 45.7105 9.82474L42.3001 6.94875C41.7223 6.46147 42.0298 5.52972 42.7882 5.46986L47.2644 5.11657C47.5841 5.09134 47.8626 4.89213 47.9858 4.60057L49.7103 0.51869Z"
                fill="#FFE550"
              />
              <path
                d="M70.7103 0.51869C71.0024 -0.172898 71.9976 -0.172897 72.2898 0.518692L74.0142 4.60057C74.1375 4.89213 74.416 5.09134 74.7357 5.11657L79.2118 5.46986C79.9702 5.52972 80.2777 6.46147 79.6999 6.94875L76.2896 9.82474C76.046 10.0302 75.9396 10.3526 76.014 10.6597L77.0559 14.9599C77.2324 15.6885 76.4274 16.2644 75.7781 15.874L71.9459 13.5695C71.6721 13.4049 71.3279 13.4049 71.0542 13.5695L67.222 15.874C66.5727 16.2644 65.7676 15.6885 65.9441 14.9599L66.986 10.6597C67.0604 10.3526 66.9541 10.0302 66.7105 9.82474L63.3001 6.94875C62.7223 6.46147 63.0298 5.52972 63.7882 5.46986L68.2644 5.11657C68.5841 5.09134 68.8626 4.89213 68.9858 4.60057L70.7103 0.51869Z"
                fill="#FFE550"
              />
              <path
                d="M91.7103 0.51869C92.0024 -0.172898 92.9976 -0.172897 93.2898 0.518692L95.0142 4.60057C95.1375 4.89213 95.416 5.09134 95.7357 5.11657L100.212 5.46986C100.97 5.52972 101.278 6.46147 100.7 6.94876L97.2896 9.82474C97.046 10.0302 96.9396 10.3526 97.014 10.6597L98.0559 14.9599C98.2324 15.6885 97.4274 16.2644 96.7781 15.874L92.9459 13.5695C92.6721 13.4049 92.3279 13.4049 92.0542 13.5695L88.222 15.874C87.5727 16.2644 86.7676 15.6885 86.9441 14.9599L87.986 10.6597C88.0604 10.3526 87.9541 10.0302 87.7105 9.82474L84.3001 6.94876C83.7223 6.46147 84.0298 5.52972 84.7882 5.46986L89.2644 5.11657C89.5841 5.09134 89.8626 4.89213 89.9858 4.60057L91.7103 0.51869Z"
                fill="#FFE550"
              />
            </g>
            <defs>
              <clipPath id="clip0_3777_20">
                <rect width="101" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className={styles.reviewsList__text}>
            “The ease with which I can just go in and order what i want was
            amazing, It has been a very pleasant experience ordering from this
            app”
          </p>
          <div className={styles.reviewsList__flex}>
            <img
              src={Review2}
              alt="review2"
              className={styles.reviewsList__photo}
            />
            <div>
              <h3 className={styles.reviewsList__name}>Sumith Shah</h3>
              <p className={styles.reviewsList__bio}>Some Dude</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
