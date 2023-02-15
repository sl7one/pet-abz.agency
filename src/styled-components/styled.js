import PhoneInput from 'react-phone-number-input';
import styled, { keyframes } from 'styled-components';
import bgPic from '../components/Hero/img/bg-pic.jpg';
import bg2xPic from '../components/Hero/img/bg-pic@2x.jpg';

export const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  background-color: var(--main-bg);
  padding: 0px 16px;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    padding: 0px 32px;
    max-width: 768px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding: 0px 60px;
  }
  @media screen and (min-width: 1170px) {
    max-width: 1170px;
    padding: unset;
  }
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

  &:not([disabled]):hover {
    background-color: ${({ theme }) => theme.colors.hoverBTN};
  }
`;
export const HeroSection = styled.section`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${bgPic});
  background-position: center;
  background-size: cover;
  padding: 40px 0 71px 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1170px;

  @media only screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${bg2xPic});
  }

  @media screen and (min-width: 768px) {
    padding: 89px 0;
  }
  @media screen and (min-width: 1024px) {
    padding: 164px 0 163px 0;
  }

  ${Container} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
export const Title = styled.h1`
  text-align: center;
  max-width: 380px;
  color: ${({ theme, title }) => {
    return title === 'true' ? theme.colors.mainWHITE : theme.colors.mainBLACK;
  }};
`;
export const HeroText = styled.p`
  margin-top: 21px;
  text-align: center;
  max-width: 380px;
  color: ${({ theme }) => theme.colors.mainWHITE};
`;
export const Text = styled.p`
  margin-top: ${({ title }) => (title === 'true' ? '21px' : 0)};
  max-width: 400px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: ${props => (props['data-tooltip-content'] ? 'pointer' : 'auto')};

  color: ${({ theme, title }) =>
    title === 'true' ? theme.colors.mainWHITE : theme.colors.mainBLACK};
`;
export const HeroButton = styled(Button)`
  margin-top: 32px;
`;
export const SectionBox = styled.section`
  padding-top: 140px;

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${Title} {
    max-width: unset;
  }
`;
export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: unset;
    flex-wrap: wrap;
    gap: 16px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: unset;
    flex-wrap: wrap;
    gap: 29px;
  }
`;
const user = keyframes`
from{
  opacity: 0;
  transform: translate(0, -50%);
}
to{
  transform:  translate(0, 0);
  opacity: 1;
}`;

export const UserItem = styled.li`
  padding: 20px;
  width: 100%;
  max-width: 328px;
  background-color: ${({ theme }) => theme.colors.mainWHITE};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${Text} {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 768px) {
    max-width: 344px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 282px;
  }
  @media screen and (min-width: 1170px) {
    /* min-width: 282px;
    max-width: 370px; */
    max-width: 370px;
  }

  animation: ${user} 350ms ease-in-out;
`;
export const UserPhoto = styled.img`
  width: 70px;
  border-radius: 50%;
`;
export const InfoWrap = styled.div`
  width: 100%;
`;
export const ShowMoreBtn = styled(Button)`
  margin-top: 50px;
  width: 120px;
  background-color: ${({ theme, disabled }) => {
    return disabled ? theme.colors.disabledBTN : theme.colors.primaryBG;
  }};
`;
export const Input = styled.input`
  border: 1px solid rgba(208, 207, 207, 1);
  border-radius: 4px;
  padding: 16px 16px;
  width: 100%;
  height: 54px;

  &::placeholder {
    /* font-size: inherit; */
  }

  background-color: white;

  border-color: ${({ isvld }) => {
    switch (isvld) {
      case 'init':
        return 'rgba(208, 207, 207, 1)';
      case 'true':
        return 'green';
      case 'false':
        return 'red';
      default:
        return 'rgba(208, 207, 207, 1)';
    }
  }};
`;
export const UserForm = styled.form`
  min-width: 328px;
  @media screen and (min-width: 480px) {
    min-width: 380px;
  }
`;
export const InputsField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
`;
const show = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100%);
  }
`;
export const ErrorText = styled(Text)`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  transform: translateY(100%);

  animation-name: ${show};
  animation-duration: 350ms;
  animation-timing-function: ease-in-out;
`;
export const Label = styled.label`
  position: relative;
`;
export const FormBtn = styled(Button)`
  margin: 50px auto 100px auto;
  background-color: ${({ theme, disabled }) => {
    return disabled ? theme.colors.disabledBTN : theme.colors.primaryBG;
  }};
  color: white;
`;
export const RadioList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const RadioItemWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const TextForm = styled(Text)`
  margin: 43px 0 11px 0;
  text-align: left;
`;
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(208, 207, 207, 1);
    transition: border 350ms ease-in-out;
    border-radius: 50%;
    margin-right: 12px;
  }
  &::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: rgba(0, 189, 211, 1);
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translate(-50%, 80%);
    transition: transform 350ms ease-in-out, opacity 350ms ease-in-out;
  }

  &:hover::before {
    border: 1px solid rgba(0, 189, 211, 1);
  }
`;
export const RadioInput = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  z-index: -99999;
  width: 0;
  height: 0;

  &:checked ~ ${RadioLabel}::before {
    border: 1px solid rgba(0, 189, 211, 1);
  }

  &:checked ~ ${RadioLabel}::after {
    opacity: 1;
    transform: translate(50%, 80%);
  }
`;
export const PhoneInputComponent = styled(PhoneInput)`
  .PhoneInputInput {
    border: 1px solid rgba(208, 207, 207, 1);
    border-radius: 4px;
    padding: 14px 16px;
    width: 100%;
    height: 54px;

    background-color: white;

    border-color: ${({ isvld }) => {
      switch (isvld) {
        case 'init':
          return 'rgba(208, 207, 207, 1)';
        case 'true':
          return 'green';
        case 'false':
          return 'red';
        default:
          return 'rgba(208, 207, 207, 1)';
      }
    }};
  }

  .PhoneInputCountryIcon {
    width: auto;
    height: 47px;
  }
`;
export const UploadWrapper = styled.div`
  position: relative;
  margin-top: 47px;
`;
export const UploadLabel = styled(Label)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(208, 207, 207, 1);
  border-radius: 4px;
  width: 100%;
  height: 54px;

  background-color: white;

  border-color: ${props => {
    switch (props.children.props.isvld) {
      case 'init':
        return 'rgba(208, 207, 207, 1)';
      case 'true':
        return 'green';
      case 'false':
        return 'red';
      default:
        return 'rgba(208, 207, 207, 1)';
    }
  }};

  &::before {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    content: 'Upload';
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.87);
    border-radius: 4px 0px 0px 4px;
    bottom: 0;
    left: 0;
    height: 52px;
    width: 83px;
  }
`;
export const UploadInput = styled(Input)`
  visibility: hidden;
`;
export const UploadBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 83px;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;
export const UploadFile = styled(Text)`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(0, -50%);
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  background-color: ${({ theme }) => theme.colors.disabledBTN};
  padding: 5px;
  border-radius: 4px;
`;
