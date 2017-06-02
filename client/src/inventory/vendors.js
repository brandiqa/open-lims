import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import { inject } from 'mobx-react';
import { INVENTORY_ROUTE } from '../config/routes';
import { secondary } from '../config/theme';
import DomainList from '../templates/domain-list';
import DomainForm from '../templates/domain-form';
import DomainRoutes from '../templates/domain-routes';
import DomainSchema from '../templates/domain-schema';

@inject("stores")
class Vendors extends React.Component {

  table  = {
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

  form = {
    fields: this.fields,
    icon: 'address book',
    submit: { label: 'Save', icon: 'check' }
  };

  render() {
    const store = this.props.stores.vendorStore;
    const routes = new DomainRoutes(INVENTORY_ROUTE, '/vendors');
    const schema = new DomainSchema('Vendor', this.table, this.form);

    return (
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
    )
  }
}

export default Vendors;
