import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Section } from "../Section/Section";

export const Hero = () => {
  return (
    <Section>
      <Container>
        <h1 className="hero__title">Enjoy Your Favorite Food From Anywhere</h1>
        <p className="hero__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <Button>Order Now</Button>
        <div className="slider">
          <img src="#" alt="slide" className="slider__photo" />
        </div>
      </Container>
    </Section>
  );
};
