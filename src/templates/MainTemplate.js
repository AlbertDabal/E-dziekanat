import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainThame';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Alert from 'components/atoms/Alert/Alert';
import Button from 'components/atoms/Button/Button';

const MainTemplate = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Heading big>TEST</Heading>
      <Paragraph>TEST</Paragraph>
      <Alert>NEW</Alert>
      <Button
      >PRZYCISK</Button>
    </ThemeProvider>
  </div>
);

export default MainTemplate;
