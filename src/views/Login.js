import React, { useState } from 'react';
import WellcomeTemplate from 'templates/WellcomeTemplate';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import { SetLogin } from 'api/FetchLogin';

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

const ParagraphStyled = styled(Paragraph)`
  margin-top: 20px;
  font-weight: 400;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  margin-top: 20px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  font-size: ${({ theme, data }) => (data ? theme.fontSize.sxx : theme.fontSize.sx)};
  color: black;
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

  async function Zaloguj(e) {
    setErrorLogin(null);
    e.preventDefault();

    const login = e.target[0].value;
    const password = e.target[1].value;

    const res = await SetLogin(login, password, match.params.id);

    if (res.data === null) {
      setErrorLogin('*Nie poprawna nazwa użytkownika lub hasło');
      // console.log('nie poprawne hasło');
    } else {
      // console.log('poprawne');

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

          <StyledLink to="/lostpassword">Nie pamiętasz Nazwy Użytkownika lub hasła?</StyledLink>
          {errorLogin && (
            <>
              <ParagraphStyled style={{ color: 'red' }}>{errorLogin}</ParagraphStyled>
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default Login;
