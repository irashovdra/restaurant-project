import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__textComponents">
          <h1 className={styles.hero__title}>
            Enjoy Your Favorite Food From Anywhere
          </h1>
          <p className={styles.hero__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <Button className={styles.hero__btn}>Order Now</Button>
        </div>
        <div className={styles.slider}>
          <img
            src="./images/hero-slider-img1.png"
            alt="slide"
            className={styles.slider__photo}
          />
        </div>
      </Container>
    </section>
  );
};
