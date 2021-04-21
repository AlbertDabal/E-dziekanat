import React from 'react';
import WellcomeTemplate from 'templates/WellcomeTemplate';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 30px;
`;
// prettier-ignore
const ButtonChangeRole = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  height: 138px;
  background-color: ${({ theme }) => theme.studentColor};
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  width: 80%;
  border-radius: 30px;
  margin-top: 50px;
  border: 2px solid ${({ theme }) => theme.teacherColor};

  ${({ role }) => role === 'teacher'
  && css`
      background-color: ${({ theme }) => theme.teacherColor};
    `}
  ${({ role }) => role === 'worker'
  && css`
      background-color: ${({ theme }) => theme.workerColor};
    `}


     &:hover {
    border: 2px solid black;
  }
`;

const Wellcome = () => (
  <WellcomeTemplate>
    <Wrapper>
      <Heading>Wybierz swoją role</Heading>
      <ButtonChangeRole to="/login/student">STUDENT</ButtonChangeRole>
      <ButtonChangeRole to="/login/wykladowca" role="teacher">
        WYKŁADOWCA
      </ButtonChangeRole>
      <ButtonChangeRole to="/login/dziekanat" role="worker">
        PRACOWNIK
      </ButtonChangeRole>
    </Wrapper>
  </WellcomeTemplate>
);

export default Wellcome;
