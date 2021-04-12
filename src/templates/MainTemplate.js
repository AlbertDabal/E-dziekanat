import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainThame';
import Heading from 'components/atoms/Heading/Heading';

const MainTemplate = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Heading theme={theme} big>
        TEST
      </Heading>
    </ThemeProvider>
  </div>
);

export default MainTemplate;
