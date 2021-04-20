import styled from 'styled-components';

const Input = styled.input`
  border-radius: 30px;
  height: 70px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 0;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.sx};
  color: black;
  font-family: 'Poppins', sans-serif;
  padding: 0 30px;

  ::placeholder {
    color: ${({ theme }) => theme.borderColor};
  }
`;

export default Input;
