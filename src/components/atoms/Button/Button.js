import styled, { css } from 'styled-components';
// prettier-ignore
const Button = styled.button`
  height: 70px;
  width: 230px;
  border-radius: 30px;
  color: white;
  background-color: ${({ theme }) => theme.alertColorSucces};
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  border: 2px solid transparent;
  outline: none;

  ${({ typeButton }) => typeButton === 'edytuj'
  && css`
      background-color: ${({ theme }) => theme.alertColorWarning};
    `}
  ${({ typeButton }) => typeButton === 'zaloguj'
  && css`
      background-color: ${({ theme }) => theme.studentColor};
      height: 70px;
      &:hover {
        border: 2px solid #A8DADC;
      }
    `}
  ${({ typeButton }) => typeButton === 'stypendia'
  && css`
      background: #FFFFFF;
      border: 1.25373px solid #DFE0EB;
      height: 127px;
      width: 250px;
      color: black;
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: 400;
      }
    `}
  ${({ typeButton }) => typeButton === 'czesne'
  && css`
      background: #1D3557;
      border: 1.25373px solid #DFE0EB;
      height: 127px;
      width: 250px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: 400;
      color: #A8DADC;
      }
    `}
    

`;

export default Button;
