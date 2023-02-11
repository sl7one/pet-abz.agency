import {
  BtnWrap,
  Button,
  Container,
  HeaderBox,
  HeaderWrap,
  LogoImg,
} from 'styled-components/styled';
import logo from './img/Logo.svg';

export const Haeder = () => {
  return (
    <HeaderBox>
      <Container>
        <HeaderWrap>
          <LogoImg src={logo} alt="logo" />
          <BtnWrap>
            <Button type="button">Users</Button>
            <Button type="button">Sign up </Button>
          </BtnWrap>
        </HeaderWrap>
      </Container>
    </HeaderBox>
  );
};
