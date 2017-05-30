import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import { inject } from 'mobx-react';
import { secondary } from '../config/theme';
import DomainList from '../templates/domain-list';
import DomainForm from '../templates/domain-form';

export default ({listConfig, formConfig}) => (
  <div>
    <Menu inverted color={secondary}>
      <NavLink className="item" activeClassName="active" exact to={listConfig.listLink}>
        <Icon name='list'/> {listConfig.label}s List</NavLink>
      <NavLink className="item" activeClassName="active" to={listConfig.newLink}>
        <Icon name='add'/>Add {listConfig.label}
      </NavLink>
    </Menu>
    <h3>{listConfig.label}s</h3>
    <Route component={props => (<DomainList {...props} config={listConfig} store={store}/>)} exact path={listConfig.listLink}/>
    <Route component={props => (<DomainForm {...props} config={formConfig} store={store}/>)} path={listConfig.newLink}/>
    <Route component={props => (<DomainForm {...props} config={formConfig} store={store}/>)} path={listConfig.editLink} />
  </div>
);
