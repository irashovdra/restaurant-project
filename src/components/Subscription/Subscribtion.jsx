import React from "react";

import styles from "./Subscribtion.module.css";
import { Container } from "../Container/Container";

export class Subscribtion extends React.Component {
  state = {
    userData: {},
  };

  formSubmit = (event) => {
    event.preventDefault();
    const emailInput = event.currentTarget.elements.userEmail;
    let userEmail = event.currentTarget.elements.userEmail.value;
    if (userEmail === "") {
      emailInput.style.border = "1px solid #FF705D";
      const emailValidation = document.createElement("p");
      emailValidation.classList.add("emailValidation");
      emailValidation.textContent =
        "The email must be between 3 and 25 characters";
      emailValidation.classList.add("orderModal__validation");
      emailInput.after(emailValidation);
    } else {
      emailInput.style.border = "0.854px solid var(--Yellow-main, #ffe550)";
      this.setState({ userData: userEmail });
      emailInput.value = "";
    }
  };

  render() {
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
          <form onSubmit={this.formSubmit} className="subscribtion__flex">
            <input
              name="userEmail"
              placeholder="Enter your email"
              type="text"
              className={styles.subscribtion__filling}
            />
            <button className={styles.subscribtion__btn} type="submit">
              Subscribe
            </button>
          </form>
        </Container>
      </section>
    );
  }
}
