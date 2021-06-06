import React from 'react';
import styled from 'styled-components';
import DashboardTemplate from 'templates/DashboardTemplate';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid #cbcbcd;
  flex-direction: column;
`;

const WrapperTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 30px;
  border-bottom: 1px solid #cbcbcd;
  font-size: 24px;
`;

const WrapperMiddle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
  padding: 40px 100px 40px 100px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 10px;
  margin-top: 15px;
  margin-left: 555px;
`;

const InputStyled = styled(Input)`
  width: 100%;
  margin-top: 10px;
`;

const ParagraphStyled = styled(Paragraph)`
  margin-top: 20px;
  margin-left: 25px;
  font-size: 18px;
`;

const Settings = () => {
  const PasswordCatcher = (event) => {};

  const ChangePasswordHandler = (event) => {
    event.preventDefault();
  };

  return (
    <DashboardTemplate>
      <Wrapper>
        <WrapperTop>Ustawienia Konta</WrapperTop>
        <WrapperMiddle>
          <ParagraphStyled>Dane osobowe</ParagraphStyled>
          <Form onSubmit={ChangePasswordHandler}>
            <ParagraphStyled>Email</ParagraphStyled>
            <InputStyled placeholder="email" onChange={PasswordCatcher} />
            <ParagraphStyled>Numer telefonu</ParagraphStyled>
            <InputStyled placeholder="numer telefonu" />
            <ParagraphStyled>Adres</ParagraphStyled>
            <InputStyled placeholder="adres" />
            <ParagraphStyled>Numer konta</ParagraphStyled>
            <InputStyled placeholder="numer konta" />
            <StyledButton typeButton="zaloguj">ZAPISZ ZMIANY</StyledButton>
          </Form>
        </WrapperMiddle>
      </Wrapper>
    </DashboardTemplate>
  );
};

export default Settings;
