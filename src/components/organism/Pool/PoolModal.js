import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import PropTypes from 'prop-types';
import { NewAnswerPool } from 'api/FetchPolls';

const InputStyled = styled(Input)`
  width: 100%;
  margin-top: 40px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const FormStyled = styled.form`
  width: 100%;
  padding: 30px;
`;

const Modal = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  width: 40%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border-radius: 30px;
`;

const ModalWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  width: 100%;
  height: 100vh;
  background-color: rgba(98, 98, 98, 0.2);
`;

const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinkStyled = styled(Paragraph)`
  margin-top: 20px;
  font-weight: 400;
  cursor: pointer;
`;

const PoolModal = ({ IsOpen, id, SetNewAnswer, setUpdate }) => {
  const [valid, setValid] = useState(false);
  async function NowaOdp(e) {
    e.preventDefault();
    const tresc = e.target[0].value;
    if (tresc.length < 3) {
      setValid(true);
    } else {
      const res = await NewAnswerPool(id, tresc);
      if (res.data === 0) {
        IsOpen();
        SetNewAnswer(true);
      } else {
        IsOpen();
        setUpdate(true);
      }
    }
  }
  return (
    <ModalWrapper>
      <Modal>
        <FormStyled onSubmit={NowaOdp}>
          <Heading>Nowa odpowiedz</Heading>

          <InputStyled placeholder="Dodaj nową odpowiedz" />
          <WrapperButton>
            <StyledButton type="button" onClick={() => IsOpen()} typeButton="edytuj" style={{ height: '50px' }}>
              POWROT
            </StyledButton>
            <StyledButton type="submit" style={{ height: '50px' }}>
              DODAJ ODPOWIEDZ
            </StyledButton>
          </WrapperButton>
          {valid && (
            <>
              <LinkStyled style={{ color: 'red' }}>Nie poprawna długość odpowiedzi (minimum 3 znaki)!</LinkStyled>
              <br />
            </>
          )}
        </FormStyled>
      </Modal>
    </ModalWrapper>
  );
};

PoolModal.propTypes = {
  IsOpen: PropTypes.func.isRequired,
  SetNewAnswer: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default PoolModal;
