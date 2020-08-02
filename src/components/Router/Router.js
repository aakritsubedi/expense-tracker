import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from 'components/Login';
import Dashboard from 'components/Dashboard';

import * as route from "constants/routes";



function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={route.LOGIN} component={Login} />
        <Route exact path={route.DASHBOARD} component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
