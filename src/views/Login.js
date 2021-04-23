import React, { useEffect, useState } from 'react';
import WellcomeTemplate from 'templates/WellcomeTemplate';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
  width: 80%;
`;

const Line = styled.hr`
  margin-top: 20px;
  height: 1px;
  width: 80%;
  background-color: ${({ theme }) => theme.borderColor};
`;

const Login = ({ match }) => {
  const [errorLogin, setErrorLogin] = useState(null);

  const history = useHistory();

  useEffect(() => {
    console.log(match.params.id);
  }, []);

  async function Zaloguj(e) {
    setErrorLogin(null);
    e.preventDefault();
    const res = await axios
      .post('http://178.43.51.218/api/logowanie/zaloguj', {
        login: e.target[0].value,
        password: e.target[1].value,
        kod_roli: match.params.id,
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(res.data);

    if (res.data === null) {
      setErrorLogin('*Nie poprawna nazwa użytkownika lub hasło');
      console.log('nie poprawne hasło');
    } else {
      console.log('poprawne');
      history.push('/dashboard');
    }
  }

  return (
    <WellcomeTemplate>
      <Wrapper>
        <Form onSubmit={Zaloguj}>
          <Heading>Zaloguj się</Heading>
          <InputStyled placeholder="Nazwa użytkownika" />
          <InputStyled placeholder="Hasło" type="password" />
          <ButtonStyled type="submit" typeButton="zaloguj">
            ZALOGUJ
          </ButtonStyled>
          <Line />

          <LinkStyled>Nie pamiętasz Hasła?</LinkStyled>
          <LinkStyled>Nie pamiętasz Nazwy Użytkownika?</LinkStyled>
          {errorLogin && (
            <>
              <LinkStyled style={{ color: 'red' }}>{errorLogin}</LinkStyled>
              <br />
            </>
          )}
          <br />
        </Form>
      </Wrapper>
    </WellcomeTemplate>
  );
};

Login.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Login;
