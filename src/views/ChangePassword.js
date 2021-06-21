import React, { useState } from 'react';
import WellcomeTemplate from 'templates/WellcomeTemplate';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { SetChangePassword } from 'api/FetchLogin';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
`;

const Form = styled.form`
  width: 100%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 10%;
`;

const InputStyled = styled(Input)`
  width: 80%;
  margin-top: 40px;
`;

const ButtonStyled = styled(Button)`
  margin-top: 30px;
  width: 80%;
  text-transform: uppercase;
`;

const Line = styled.hr`
  margin-top: 20px;
  height: 1px;
  width: 80%;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.borderColor};
`;

const ChangePassword = ({ match }) => {
  const [errorPassChange, setErrorPassChange] = useState(null);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredPasswordConfirm, setEnteredPasswordConfirm] = useState('');
  const history = useHistory();

  const PasswordCatcher = (event) => {
    setEnteredPassword(event.target.value);
  };

  const PasswordConfirmCatcher = (event) => {
    setEnteredPasswordConfirm(event.target.value);
  };

  const VerifyPassword = () => {
    setErrorPassChange(null);
    const passwordFirst = enteredPassword;
    const passwordSecond = enteredPasswordConfirm;

    if (passwordFirst === '' || passwordSecond === '') {
      setErrorPassChange('Pole hasła nie może być puste');
    } else if (passwordFirst !== passwordSecond) {
      setErrorPassChange('Wpisane hasła róznią się');
    } else if (passwordFirst.length < 7 || passwordSecond.length < 7) {
      setErrorPassChange('Hasło za krótkie');
    } else if (passwordFirst.length > 15 || passwordSecond.length > 15) {
      setErrorPassChange('Hasło za dlugie');
    } else {
      ChangePasswordData(passwordFirst);
    }
  };

  async function ChangePasswordData(passwordFirst) {
    const res = await SetChangePassword(match.params.id, passwordFirst);
    try {
      console.log(res);
      if (res.data.Poprawnosc === true) {
        history.push('/');
      } else {
        setErrorPassChange(res.data.Tresc);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const ChangePasswordHandler = (event) => {
    event.preventDefault();
    VerifyPassword();
  };

  return (
    <WellcomeTemplate>
      <Wrapper>
        <Form onSubmit={ChangePasswordHandler}>
          <Heading>Aktualizuj Hasło</Heading>
          <InputStyled type="password" placeholder="Hasło" onChange={PasswordCatcher} />
          <InputStyled type="password" placeholder="Powtórz hasło" onChange={PasswordConfirmCatcher} />
          <ButtonStyled type="submit" typeButton="zaloguj">
            aktualizuj hasło
          </ButtonStyled>
          <Line />
          <Paragraph style={{ color: 'red' }}>{errorPassChange}</Paragraph>
        </Form>
      </Wrapper>
    </WellcomeTemplate>
  );
};

ChangePassword.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default ChangePassword;
