import React, { useState } from 'react';
import WellcomeTemplate from 'templates/WellcomeTemplate';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import { SetLostPassword } from 'api/FetchLogin';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

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

const LostPassword = ({ match }) => {
  const [enteredUser, setEnteredUser] = useState('');
  const [Message, setMessage] = useState(null);

  // console.log('Entered User: ', enteredUser);

  const UserCatcher = (event) => {
    setEnteredUser(event.target.value);
  };

  const LostPasswordHandler = async (event) => {
    event.preventDefault();

    const data = {
      login: enteredUser,
    };

    const res = await SetLostPassword(data);

    setMessage(res.data.Tresc);
  };

  return (
    <WellcomeTemplate>
      <Wrapper>
        <Form onSubmit={LostPasswordHandler}>
          <Heading>Odzyskaj Hasło</Heading>
          <InputStyled type="text" placeholder="Nazwa użytkownika" onChange={UserCatcher} />
          <ButtonStyled type="submit" typeButton="zaloguj">
            odzyskaj
          </ButtonStyled>
          <Line />
          <Paragraph>{Message}</Paragraph>
        </Form>
      </Wrapper>
    </WellcomeTemplate>
  );
};

LostPassword.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LostPassword;
