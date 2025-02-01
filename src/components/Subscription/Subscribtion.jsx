import styles from "./Subscribtion.module.css";
import { Container } from "../Container/Container";

export const Subscribtion = () => {
  return (
    <section className={styles.subscribtion}>
      <Container>
        <h2 className={styles.subscribtion__title}>
          Subscribe To Get Special Offers
        </h2>
        <p className={styles.subscribtion__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="subscribtion__flex">
          <input
            placeholder="Enter your email"
            type="text"
            className={styles.subscribtion__filling}
          />
          <button className={styles.subscribtion__btn}>Subscribe</button>
        </div>
        {/* <img src="" alt="banana" className={styles.subscribtion__photo} /> */}
      </Container>
    </section>
  );
};
