import { Container, SectionBox, Title } from 'styled-components/styled';

export const Section = ({ children, title }) => {
  return (
    <SectionBox>
      <Container>
        <Title title="false">{title}</Title>
        {children}
      </Container>
    </SectionBox>
  );
};
