import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import allStores from './stores';
import { APP_ROUTE, DASHBOARD_ROUTE } from './config/routes';
import App from './App';
import Dashboard from './Dashboard';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider stores={allStores}>
      <Switch>
        <Route path={APP_ROUTE} component={App} />
        <Route path={DASHBOARD_ROUTE} component={Dashboard} />
        <Redirect from="/" to={APP_ROUTE} />
      </Switch>
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
