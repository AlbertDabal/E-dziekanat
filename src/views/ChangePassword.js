import React, { useState } from 'react';
import WellcomeTemplate from 'templates/WellcomeTemplate';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';

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
  background-color: ${({ theme }) => theme.borderColor};
`;

const ChangePassword = ({ props }) => {
  const [errorPassChange, setErrorPassChange] = useState(null);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredPasswordConfirm, setEnteredPasswordConfirm] = useState('');

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
      console.log('Puste pole hasła');
    } else if (passwordFirst !== passwordSecond) {
      setErrorPassChange('Wpisane hasła róznią się');
      console.log('Hasła różnią się');
    } else if (passwordFirst.length < 8 || passwordSecond.length < 8) {
      setErrorPassChange('Hasło za krótkie');
      console.log('Hasło za krótkie');
    } else if (passwordFirst.length > 15 || passwordSecond.length > 15) {
      setErrorPassChange('Hasło za dlugie');
      console.log('Hasło za dlugie');
    } else {
      console.log('Hasła poprawne');
      // history.pushState('/');
    }
  };

  const ChangePasswordHandler = (event) => {
    event.preventDefault();
    VerifyPassword();
  };

  return (
    <WellcomeTemplate>
      <Wrapper>
        <Form onSubmit={ChangePasswordHandler}>
          <Heading>Aktualizuj Hasło</Heading>
          <InputStyled placeholder="Hasło" onChange={PasswordCatcher} />
          <InputStyled placeholder="Powtórz hasło" onChange={PasswordConfirmCatcher} />
          <ButtonStyled type="submit" typeButton="zaloguj">
            aktualizuj hasło
          </ButtonStyled>
          <Line />
          <p>{errorPassChange}</p>
        </Form>
      </Wrapper>
    </WellcomeTemplate>
  );
};

ChangePassword.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChangePassword;
