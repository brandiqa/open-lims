import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import { secondary } from '../config/theme';
import DomainList from '../templates/domain-list';
import DomainForm from '../templates/domain-form';

function listLink(linkConfig) {
  return linkConfig.base + linkConfig.path
}

function newLink(linkConfig) {
  return linkConfig.base + linkConfig.path + '/new'
}

function editLink(linkConfig) {
  return linkConfig.base + linkConfig.path + '/edit/:_id'
}


export default ({store, linkConfig, listConfig, formConfig}) => (
  <div>
    <Menu inverted color={secondary}>
      <NavLink className="item" activeClassName="active" exact to={listLink(listConfig)}>
        <Icon name='list'/> {listConfig.label}s List</NavLink>
      <NavLink className="item" activeClassName="active" to={newLink(listConfig)}>
        <Icon name='add'/>Add {listConfig.label}
      </NavLink>
    </Menu>
    <h3>{listConfig.label}s</h3>
    <Route component={props => (<DomainList {...props} config={listConfig} store={store}/>)} exact path={listLink(listConfig)}/>
    <Route component={props => (<DomainForm {...props} config={formConfig} store={store}/>)} path={newLink(listConfig)}/>
    <Route component={props => (<DomainForm {...props} config={formConfig} store={store}/>)} path={editLink(listConfig)} />
  </div>
);
