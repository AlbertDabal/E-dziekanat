import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainThame';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Alert from 'components/atoms/Alert/Alert';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import TextArea from 'components/atoms/Input/TextArea';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const MainTemplate = () => (
  <Wrapper>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Heading big>TEST</Heading>
      <Paragraph>TEST</Paragraph>
      <Alert type="error">NEW</Alert>
      <Alert type="warning">NEW</Alert>
      <Alert>NEW</Alert>
      <Button>Dalej</Button>
      <Button type="edytuj">Edytuj</Button>
      <Button type="zaloguj">ZALOGUJ</Button>
      <Input placeholder="Nazwa użytkownika" />
      <TextArea placeholder="Nazwa użytkownika" />
    </ThemeProvider>
  </Wrapper>
);

export default MainTemplate;
