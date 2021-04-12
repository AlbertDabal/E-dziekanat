import styled, { css } from 'styled-components';
// prettier-ignore
const Alert = styled.h6`
  text-align: center;
  color: white;
  border-radius: 30px;
  padding: 3px 5px;
  background-color: ${({ theme }) => theme.alertColorSucces};
  font-size: ${({ theme }) => theme.fontSize.sx};
  width: 60px;

  ${({ type }) => type
    && css`
     background-color: ${({ theme }) => theme.alertColorError};
    `}

    ${({ type }) => type === 'warning'
    && css`
     background-color: ${({ theme }) => theme.alertColorWarning};
    `}

    
`;

export default Alert;
