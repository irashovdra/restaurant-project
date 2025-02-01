import React from "react";

import styles from "./OrderModal.module.css";

export class OrderModal extends React.Component {
  state = {
    userData: {},
  };

  formSubmit = (event) => {
    event.preventDefault();
    const nameInput = event.currentTarget.elements.userName;
    const telephoneInput = event.currentTarget.elements.userTelephone;
    const emailInput = event.currentTarget.elements.userEmail;
    const userName = event.currentTarget.elements.userName.value;
    const userTelephone = event.currentTarget.elements.userTelephone.value;
    const userEmail = event.currentTarget.elements.userEmail.value;
    const user = {
      userName,
      userTelephone,
      userEmail,
    };
    if (userName === "") {
      nameInput.style.border = "1px solid #FF705D";
      const nameValidation = document.createElement("p");
      nameValidation.classList.add("nameValidation");
      nameValidation.textContent =
        "The name must be between 3 and 25 characters";
      nameValidation.classList.add("orderModal__validation");
      nameInput.after(nameValidation);
    } else if (userTelephone === "") {
      telephoneInput.style.border = "1px solid #FF705D";
      nameInput.style.border = "none";
      const nameValidation = document.querySelector(".nameValidation");
      nameValidation.textContent = " ";
      const phoneValidation = document.createElement("p");
      phoneValidation.classList.add("phoneValidation");
      phoneValidation.textContent =
        "This phone must be in the format  099 000 00 00";
      phoneValidation.classList.add("orderModal__validation");
      telephoneInput.after(phoneValidation);
    } else if (userEmail === "") {
      emailInput.style.border = "1px solid #FF705D";
      telephoneInput.style.border = "none";
      const phoneValidation = document.querySelector(".phoneValidation");
      phoneValidation.textContent = " ";
      const emailValidation = document.createElement("p");
      emailValidation.classList.add("emailValidation");
      emailValidation.textContent = "Please enter a valid email address";
      emailValidation.classList.add("orderModal__validation");
      emailInput.after(emailValidation);
    } else {
      const emailValidation = document.querySelector(".emailValidation");
      emailValidation.textContent = " ";
      emailInput.style.border = "none";
      this.setState({ userData: { ...user } });
      this.props.closeModal();
    }
  };

  render() {
    console.log(this.state.userData);
    return (
      <div className={styles.backdrop}>
        <div className={styles.orderModal}>
          <button
            onClick={this.props.closeModal}
            className={styles.orderModal__close}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
            >
              <g filter="url(#filter0_d_5642_364)">
                <g filter="url(#filter1_i_5642_364)">
                  <path
                    d="M13.178 12.0461L17.1816 8.04553C17.3166 7.88806 17.3871 7.6855 17.3791 7.47833C17.3711 7.27116 17.2851 7.07464 17.1384 6.92804C16.9917 6.78144 16.7951 6.69556 16.5877 6.68756C16.3804 6.67956 16.1777 6.75002 16.0201 6.88488L12.0165 10.8443L7.9882 6.81903C7.83061 6.68417 7.6279 6.61371 7.42057 6.62171C7.21324 6.62971 7.01657 6.71559 6.86986 6.86219C6.72315 7.00879 6.6372 7.20531 6.62919 7.41248C6.62119 7.61965 6.69171 7.8222 6.82666 7.97967L10.8467 12.0461L6.90904 15.9313C6.82281 16.0051 6.75277 16.0959 6.70332 16.1981C6.65388 16.3002 6.62609 16.4114 6.62171 16.5248C6.61733 16.6382 6.63644 16.7512 6.67786 16.8568C6.71927 16.9625 6.78209 17.0584 6.86237 17.1386C6.94266 17.2188 7.03867 17.2816 7.14438 17.323C7.25009 17.3644 7.36322 17.3835 7.47667 17.3791C7.59012 17.3747 7.70144 17.347 7.80365 17.2976C7.90585 17.2481 7.99673 17.1782 8.07058 17.092L12 13.1655L15.9048 17.0673C16.0624 17.2021 16.2651 17.2726 16.4724 17.2646C16.6797 17.2566 16.8764 17.1707 17.0231 17.0241C17.1698 16.8775 17.2558 16.681 17.2638 16.4738C17.2718 16.2667 17.2013 16.0641 17.0663 15.9066L13.178 12.0461Z"
                    fill="#2C2C2C"
                  />
                </g>
              </g>
            </svg>
          </button>
          <h3 className={styles.orderModal__title}>Order Modal</h3>
          <form
            onSubmit={this.formSubmit}
            className={styles.orderModalForm}
            action=""
          >
            <ul className={styles.orderModalList}>
              <li className={styles.orderModalList__item}>
                <label className={styles.orderModalList__name}>Name</label>
                <input
                  name="userName"
                  type="text"
                  placeholder="Your name"
                  className={styles.orderModalList__filling}
                />
              </li>
              <li className={styles.orderModalList__item}>
                <label className={styles.orderModalList__name}>
                  Phone Number
                </label>
                <input
                  name="userTelephone"
                  placeholder="+38(0_ _) _ _ _   _ _   _ _"
                  type="text"
                  className={styles.orderModalList__filling}
                />
              </li>
              <li className={styles.orderModalList__item}>
                <label className={styles.orderModalList__name}>E-mail</label>
                <input
                  name="userEmail"
                  type="text"
                  placeholder="example@gmail.com"
                  className={styles.orderModalList__filling}
                />
              </li>
            </ul>
            <button className={styles.orderModal__send} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}
