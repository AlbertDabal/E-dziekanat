import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainThame';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'views/Login';
import LostPassword from 'views/LostPassword';
import ChangePassword from 'views/ChangePassword';
import Dashboard from 'views/Dashboard';
import LessonPlan from 'views/LessonPlan';
import News from 'views/News';
import NewsBig from 'views/NewsBig';
import Wellcome from 'views/Wellcome';
import { routes } from 'routes';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={routes.wellcome} component={Wellcome} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.lostPassword} component={LostPassword} />
        <Route exact path={routes.changePassword} component={ChangePassword} />
        <Route exact path={routes.dashboard} component={Dashboard} />
        <Route exact path={routes.lessonPlan} component={LessonPlan} />
        <Route exact path={routes.news} component={News} />
        <Route exact path={routes.newsbig} component={NewsBig} />
        <Route exact path={routes.test} component={MainTemplate} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Root;
