import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainThame';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from 'views/Login';
import LostPassword from 'views/LostPassword';
import ChangePassword from 'views/ChangePassword';
import Dashboard from 'views/Dashboard';
import LessonPlan from 'views/LessonPlan';
import News from 'views/News';
import NewsBig from 'views/NewsBig';
import Documents from 'views/Documents';
import Wellcome from 'views/Wellcome';
import Settings from 'views/Settings';
import { routes } from 'routes';
import Polls from './Polls';
import PoolDetails from './PoolDetails';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={routes.wellcome} component={Wellcome} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.lostPassword} component={LostPassword} />
        <Route exact path={routes.changePassword} component={ChangePassword} />
        <PrivateRoute exact path={routes.dashboard}>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path={routes.lessonPlan}>
          <LessonPlan />
        </PrivateRoute>
        <PrivateRoute exact path={routes.news}>
          <News />
        </PrivateRoute>
        <PrivateRoute exact path={routes.documents}>
          <Documents />
        </PrivateRoute>
        <PrivateRoute exact path={routes.polls}>
          <Polls />
        </PrivateRoute>
        <PrivateRoute exact path={routes.pollsId}>
          <PoolDetails />
        </PrivateRoute>
        <PrivateRoute exact path={routes.settings}>
          <Settings />
        </PrivateRoute>
        <PrivateRoute exact path={routes.theme}>
          <Settings />
        </PrivateRoute>
        <Route exact path={routes.test} component={MainTemplate} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Root;

function PrivateRoute({ children }) {
  return (
    <Route render={() => (sessionStorage.getItem('isAuth') !== null ? children : <Redirect to={routes.wellcome} />)} />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
