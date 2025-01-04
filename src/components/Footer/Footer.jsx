import { NavigationList } from "../NavigationList/NavigationList";

export const Footer = () => {
  return (
    <footer>
      <NavigationList />
      <p className="footer__text">Subscribe</p>
      <input
        placeholder="Enter your email"
        type="text"
        className="footer__filling"
      />
      <button className="footer__btn">Subscribe</button>
      <p className="footer__conditions">
        By subscribing you agree to with our Privacy Policy
      </p>
      <ul className="footerList">
        <li className="footerList__item">
          <a href="#" className="footerList__link">
            Privacy Policy
          </a>
        </li>
        <li className="footerList__item">
          <a href="#" className="footerList__link">
            Terms of Service
          </a>
        </li>
        <li className="footerList__item">
          <a href="#" className="footerList__link">
            Cookies Settings
          </a>
        </li>
      </ul>
      <p className="footer__rights">2022 FoodSta. All right reserved.</p>
    </footer>
  );
};
