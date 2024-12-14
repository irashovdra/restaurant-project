import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { NavigationList } from "../NavigationList/NavigationList";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <a className="header__logo" href="#">
          <img className="header__photo" src="#" alt="logo" />
        </a>
        <NavigationList />
        <Button>Order Now</Button>
      </Container>
    </header>
  );
};
