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

import Sidebar from 'components/organism/Navigation/Sidebar';
import LessonPlanItem from 'components/organism/LessonPlan/LessonPlanItem';
import LessonPlanList from 'components/organism/LessonPlan/LessonPlanList';

import NewsItem from 'components/organism/News/NewsItem';

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
      <Sidebar />
      <Paragraph>--------------------------------</Paragraph>
      <Alert type="error">NEW</Alert>
      <Alert type="warning">NEW</Alert>
      <Alert>NEW</Alert>
      <Button>Dalej</Button>
      <Button typeButton="edytuj">Edytuj</Button>
      <Button typeButton="zaloguj">ZALOGUJ</Button>
      <Button typeButton="czesne">ZALOGUJ</Button>
      <Button typeButton="stypendia">ZALOGUJ</Button>
      <Input placeholder="Nazwa użytkownika" />
      <TextArea placeholder="Nazwa użytkownika" />
      <LessonPlanList />
    </ThemeProvider>
  </Wrapper>
);

export default MainTemplate;
