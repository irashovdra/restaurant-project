import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import styles from "./Hero.module.css";
import { Slider } from "../Slider/Slider";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__textComponents}>
          <h1 className={styles.hero__title}>
            Enjoy Your Favorite Food From Anywhere
          </h1>
          <p className={styles.hero__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <Slider></Slider>
          <Button>Order Now</Button>
        </div>
      </Container>
    </section>
  );
};
