import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import allStores from './stores';
import { routes }  from './common/routes';
import App from './App';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider stores={allStores}>
      <Switch>
        <Route path={routes.app} component={App} />
        <Redirect from="/" to={routes.app} />
      </Switch>
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
