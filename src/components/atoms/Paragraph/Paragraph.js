import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme, data }) => (data ? theme.fontSize.sxx : theme.fontSize.sx)};
`;

export default Paragraph;
