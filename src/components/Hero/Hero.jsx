import {
  Container,
  HeroButton,
  HeroSection,
  HeroText,
  Title,
} from 'styled-components/styled';

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Title title="true">Test assignment for front-end developer</Title>
        <HeroText title="true">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </HeroText>
        <HeroButton>Sign up</HeroButton>
      </Container>
    </HeroSection>
  );
};
