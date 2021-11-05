import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import NotFoundPage from "../pages/_misc/components/NotFoundPage";
import Portfolio from "../pages/portfolio/components/Portfolio";
import IndecisionApp from "../pages/indecision/components/IndecisionApp";
import DrumMachine from "../pages/drum/components/DrumMachine";

const history = createBrowserHistory();

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Portfolio} exact />
        <Route path="/indecision-app" component={IndecisionApp} />
        <Route path="/drum-machine" component={DrumMachine} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
