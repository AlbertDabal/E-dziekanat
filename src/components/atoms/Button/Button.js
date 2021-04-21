import styled, { css } from 'styled-components';
// prettier-ignore
const Button = styled.button`
  height: 70px;
  width: 230px;
  border-radius: 30px;
  color: white;
  background-color: ${({ theme }) => theme.alertColorSucces};
  font-size: 20px;
  font-weight: 600px;
  border: 2px solid transparent;
  outline: none;
  font-family: 'Poppins', sans-serif;

  ${({ type }) => type === 'edytuj'
  && css`
      background-color: ${({ theme }) => theme.alertColorWarning};
    `}
  ${({ type }) => type === 'zaloguj'
  && css`
      background-color: ${({ theme }) => theme.studentColor};
      height: 70px;
      width: 80%;

      &:hover {
        border: 2px solid #a8dadc;
      }
    `}
`;

export default Button;
