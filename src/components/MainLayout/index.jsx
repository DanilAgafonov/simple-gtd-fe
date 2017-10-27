import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from 'components/PageNotFound';

const MainLayout = () => (
  <Switch>
    <Route
      path="/"
      exact
      render={() => (1)}
    />
    <Route
      component={PageNotFound}
    />
  </Switch>
);

export default MainLayout;
