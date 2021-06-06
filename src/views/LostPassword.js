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
  margin-bottom: 20px;
  width: 80%;
  background-color: ${({ theme }) => theme.borderColor};
`;

const ShadowWrapper = styled.div`
  position: absolute;
  background-color: rgba(98, 98, 98, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Modal = styled.div`
  position: absolute;
  top: 35%;
  left: 30%;
  width: 40%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border-radius: 30px;
`;

const LostPassword = ({ match }) => {
  const [enteredUser, setEnteredUser] = useState('');
  const [Message, setMessage] = useState(null);
  const [open, setOpen] = useState(false);

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

    console.log(res);

    if (res.data.Poprawnosc === true) {
      setOpen(true);
    }
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
          <Paragraph style={{ color: 'red' }}>{Message}</Paragraph>
        </Form>
        {open && (
          <ShadowWrapper>
            <Modal>
              <Paragraph>Na twój adres email została wysłana wiadomość z linkiem do resetu hasła</Paragraph>
            </Modal>
          </ShadowWrapper>
        )}
      </Wrapper>
    </WellcomeTemplate>
  );
};

LostPassword.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LostPassword;
