import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import { Section } from "../Section/Section";

export const Offerings = () => {
  return (
    <Section>
      <img src="#" alt="apple" className="offerings__photo" />
      <Title>What’s Special About Our Offerings</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </Text>
      <ul className="offerings-list">
        <li className="offerings-list__item">
          <svg className="offerings-list__icon"></svg>
          <h3 className="offerings-list__title">Fastest Delivery</h3>
          <p className="offerings-list__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
        </li>
        <li className="offerings-list__item">
          <svg className="offerings-list__icon"></svg>
          <h3 className="offerings-list__title">Easy To Order</h3>
          <p className="offerings-list__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
        </li>
      </ul>
      <Button>Order Now</Button>
    </Section>
  );
};
