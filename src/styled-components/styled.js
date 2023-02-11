import styled from 'styled-components';
import heroBg from '../components/Hero/img/herobg.jpg';

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0px auto;
  background-color: var(--main-bg);
  padding: 0px 16px;
`;
export const HeaderBox = styled.header`
  display: flex;
  padding: 13px 0px;
`;
export const LogoImg = styled.img`
  width: 104px;
`;
export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 14px;
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryBG};
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBTN};
  }
`;
export const HeroSection = styled.section`
  background-image: url(${heroBg});
  background-position: center;
  background-size: cover;
  padding-top: 40px;
  padding-bottom: 71px;
`;
export const Title = styled.h1`
  text-align: center;
  color: ${({ theme, title }) => {
    return title === 'true' ? theme.colors.mainWHITE : theme.colors.mainBLACK;
  }};
`;
export const Text = styled.p`
  margin-top: ${({ title }) => (title === 'true' ? '21px' : 0)};
  text-align: center;
  color: ${({ theme, title }) =>
    title === 'true' ? theme.colors.mainWHITE : theme.colors.mainBLACK};
`;
export const HeroButton = styled(Button)`
  margin: 32px auto 0 auto;
`;
export const SectionBox = styled.section`
  padding-top: 140px;
`;
export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;
export const UserItem = styled.li`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.mainWHITE};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const UserPhoto = styled.img`
  width: 70px;
`;
export const Input = styled.input`
  border: 1px solid #d0cfcf;
  border-radius: 4px;
  padding: 14px 16px;
  width: 100%;
  border: 3px solid gray;

  border-color: ${({ isValid }) => {
    switch (isValid) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'gray';
    }
  }};
`;
export const InputsField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
`;
