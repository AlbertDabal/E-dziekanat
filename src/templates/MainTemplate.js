import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainThame';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Alert from 'components/atoms/Alert/Alert';
import Input from 'components/atoms/Input/Input';

const MainTemplate = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Heading big>TEST</Heading>
      <Paragraph>TEST</Paragraph>
      <Alert type="error">NEW</Alert>
      <Alert type="warning">NEW</Alert>
      <Alert>NEW</Alert>
      <Input />
    </ThemeProvider>
  </div>
);

export default MainTemplate;
