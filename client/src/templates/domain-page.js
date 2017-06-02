import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import { secondary } from '../config/theme';
import DomainList from './domain-list';
import DomainForm from './domain-form';

export default ({store, routes, schema}) => (
  <div>
    {/* <Menu inverted color={secondary}>
      <NavLink className="item" activeClassName="active" exact to={routes.list}>
        <Icon name='list'/> {schema.label}s List</NavLink>
      <NavLink className="item" activeClassName="active" to={routes.new}>
        <Icon name='add'/>Add {schema.label}
      </NavLink>
    </Menu> */}
    <h3>{schema.label}s</h3>
    <Route component={props => (<DomainList {...props} routes={routes} schema={schema} store={store} />)} exact path={routes.list}/>
    <Route component={props => (<DomainForm {...props} routes={routes} schema={schema} store={store} />)} path={routes.new}/>
    <Route component={props => (<DomainForm {...props} routes={routes} schema={schema} store={store} />)} path={routes.edit} />
  </div>
);
