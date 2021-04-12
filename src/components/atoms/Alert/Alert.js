import styled from 'styled-components';

const Alert = styled.h6`
  text-align: center;
  color: white;
  border-radius: 30px;
  padding: 3px 5px;
  background-color: ${({ theme }) => theme.alertColorSucces};
  font-size: ${({ theme }) => theme.fontSize.sx};
  width: 60px;
`;

export default Alert;
