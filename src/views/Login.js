import React, { useEffect } from 'react';
import WellcomeTemplate from 'templates/WellcomeTemplate';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 10%;
`;

const InputStyled = styled(Input)`
  width: 80%;
  margin-top: 40px;
`;

const LinkStyled = styled(Paragraph)`
  margin-top: 20px;
  font-weight: 400;
  cursor: pointer;
`;

const Form = styled.form`
  width: 100%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonStyled = styled(Button)`
  margin-top: 30px;
`;

const Line = styled.hr`
  margin-top: 20px;
  height: 1px;
  width: 80%;
  background-color: ${({ theme }) => theme.borderColor};
`;

const Login = ({ match }) => {
  useEffect(() => {
    console.log(match.params.id);
  }, []);

  const Zaloguj = () => {};

  return (
    <WellcomeTemplate>
      <Wrapper>
        <Form>
          <Heading>Zaloguj się</Heading>
          <InputStyled placeholder="Nazwa użytkownika" />
          <InputStyled placeholder="Hasło" type="password" />
          <ButtonStyled type="zaloguj">ZALOGUJ</ButtonStyled>
          <Line />
          <LinkStyled>Nie pamiętasz Hasła?</LinkStyled>
          <LinkStyled>Nie pamiętasz Nazwy Użytkownika?</LinkStyled>
        </Form>
      </Wrapper>
    </WellcomeTemplate>
  );
};

Login.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Login;
