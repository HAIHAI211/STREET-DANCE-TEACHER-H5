import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import workbench from "../pages/workbench";
import BeginningPeriod from "../pages/BeginningPeriod";
const history = createBrowserHistory();

const RouterConfig = () => (
  <Router history={history}>
    <Switch>
      <Route path={`/`} exact render={() => <Redirect to={`/workbench`} />} />
      <Route path={`/workbench`} component={workbench} />
      <Route path={`/beginning-period`} component={BeginningPeriod} />
    </Switch>
  </Router>
);
export default RouterConfig;
