import styled, { css } from 'styled-components';
// prettier-ignore
const Button = styled.button`
  height: 70px;
  width: 230px;
  border-radius: 30px;
  color: white;
  background-color: ${({ theme }) => theme.alertColorSucces};
  font-size: ${({ theme }) => theme.fontSize.sx};
  font-family: 'Poppins', sans-serif;
  text-align: center;
  border: 2px solid transparent;
  outline: none;

  ${({ type }) => type === 'edytuj'
  && css`
      background-color: ${({ theme }) => theme.alertColorWarning};
    `}
  ${({ type }) => type === 'zaloguj'
  && css`
      background-color: ${({ theme }) => theme.studentColor};
      width: 570px;
      height: 140px;
      
      &:hover {
        border: 2px solid #A8DADC;
      }
    `}

    

`;

export default Button;
