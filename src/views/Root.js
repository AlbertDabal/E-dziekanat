import React from 'react';
import MainTemplate from 'templates/MainTemplate';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
import Wellcome from 'views/Wellcome';
import LessonPlan from 'views/LessonPlan';
import { routes } from 'routes';

const Root = () => (
  <Router>
    {/*
      A <Switch> looks through all its children <Route>
      elements and renders the first one whose path
      matches the current URL. Use a <Switch> any time
      you have multiple routes, but you want only one
      of them to render at a time
    */}
    <Switch>
      <Route exact path={routes.wellcome} component={Wellcome} />
      <Route exact path={routes.login} component={Login} />
      <Route exact path={routes.dashboard} component={Dashboard} />
      <Route exact path={routes.lessonPlan} component={LessonPlan} />
    </Switch>
  </Router>
);

export default Root;
