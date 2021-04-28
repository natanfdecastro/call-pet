import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import AlimentoPage from './pages/AlimentoPage';
import App from './App';
ReactDOM.render(
  <Router>
    <App>
        <Switch>
         <Redirect exact from="/" to="/dashboard"/>
          <Route key="index" exact path="/dashboard" component={DashboardPage} />
          <Route key="table" path="/alimentos" component={AlimentoPage} />
          <Redirect to="/dashboard" />
        </Switch>
    </App>
  </Router>, // eslint-disable-next-line no-undef
  document.getElementById('root')
);
