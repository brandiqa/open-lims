import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import { inject } from 'mobx-react';
import { INVENTORY_ROUTE } from '../config/routes';
import { secondary } from '../config/theme';
import DomainList from '../templates/domain-list';
import DomainForm from '../templates/domain-form';

@inject("stores")
class Vendors extends React.Component {

  listLink = `${INVENTORY_ROUTE}/vendors`;
  newLink = `${INVENTORY_ROUTE}/vendors/new`;
  editRoute = `${INVENTORY_ROUTE}/vendors/edit/`;
  editLink = `${INVENTORY_ROUTE}/vendors/edit/:_id`;
  label = 'Vendor';

  listConfig  = {
    label: this.label,
    newLink: this.newLink,
    editLink: this.editLink,
    editRoute: this.editRoute,
    headers: ['Name', 'Address', 'Phone', 'Email'],
    columns: ['name', 'address', 'phone', 'email']
  };

  fields = {
    name: {
      name: 'name',
      label: 'Name',
      placeholder: 'Enter vendor name',
      type: 'text',
      rules:'string|required'
    },
    address: {
      name: 'address',
      label: 'Address',
      placeholder: 'Enter vendor address',
      type: 'textarea',
      rules:'string|required'
    },
    phone: {
      name: 'phone',
      label: 'Phone',
      placeholder: 'Enter phone',
      type: 'text',
      rules:'string|required'
    },
    email: {
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      type: 'email',
      rules:'email|string'
    }
  };

  formConfig = {
    label: this.label,
    fields: this.fields,
    icon: 'address book',
    from: { pathname: this.listLink },
    submit: { label: 'Save', icon: 'check' }
  };

  render() {
    const store = this.props.stores.vendorStore;

    return (
      <div>
        <Menu inverted color={secondary}>
          <NavLink className="item" activeClassName="active" exact to={this.listLink}>
            <Icon name='list'/> {this.label}s List</NavLink>
          <NavLink className="item" activeClassName="active" to={this.newLink}>
            <Icon name='add'/>Add {this.label}
          </NavLink>
        </Menu>
        <h3>{this.label}s</h3>
        <Route component={props => (<DomainList {...props} config={this.listConfig} store={store}/>)} exact path={this.listLink}/>
        <Route component={props => (<DomainForm {...props} config={this.formConfig} store={store}/>)} path={this.newLink}/>
        <Route component={props => (<DomainForm {...props} config={this.formConfig} store={store}/>)} path={this.editLink} />
      </div>
    )
  }
}

export default Vendors;
