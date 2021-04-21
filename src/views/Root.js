import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainThame';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
import Wellcome from 'views/Wellcome';
import LessonPlan from 'views/LessonPlan';
import { routes } from 'routes';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={routes.wellcome} component={Wellcome} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.dashboard} component={Dashboard} />
        <Route exact path={routes.lessonPlan} component={LessonPlan} />
        <Route exact path={routes.test} component={MainTemplate} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Root;
