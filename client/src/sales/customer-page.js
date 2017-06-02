import React from 'react';
import { Route } from 'react-router-dom';
import CustomerList from './customer-list';
import CustomerView from './customer-view';
import DomainForm from '../templates/domain-form';
// import DomainPage from '../templates/domain-form';

export default ({store, routes, schema}) => (
  <div>
    <h3>{schema.label}s</h3>
    <Route component={props => (<CustomerList {...props} routes={routes} schema={schema} store={store} />)} exact path={routes.list}/>
    <Route component={props => (<DomainForm {...props} routes={routes} schema={schema} store={store} />)} path={routes.new}/>
    <Route component={props => (<DomainForm {...props} routes={routes} schema={schema} store={store} />)} path={routes.edit} />
    <Route component={props => (<CustomerView {...props} routes={routes} schema={schema} store={store} />)} path={routes.view} />
  </div>
);

// class CustomerPage extends DomainPage {
//
//   routeComponents(store, routes, schema) {
//     return [
//       <Route key={routes.list} component={props => (<CustomerList {...props} routes={routes} schema={schema} store={store} />)} exact path={routes.list}/>,
//       <Route key={routes.new} component={props => (<DomainForm {...props} routes={routes} schema={schema} store={store} />)} path={routes.new}/>,
//       <Route key={routes.edit} component={props => (<DomainForm {...props} routes={routes} schema={schema} store={store} />)} path={routes.edit} />,
//       <Route key={routes.view} component={props => (<CustomerView {...props} routes={routes} schema={schema} store={store} />)} path={routes.view} />
//     ]
//   }
//
// }
//
// export default CustomerPage;
