import styled from 'styled-components';

const TextArea = styled.textarea`
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.sx};
  color: black;
  font-family: 'Poppins', sans-serif;
  padding: 30px 0 0 30px;
  height: 200px;
  resize: none;

  ::placeholder {
    color: ${({ theme }) => theme.borderColor};
  }
`;

export default TextArea;
