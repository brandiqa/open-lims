import React from 'react';
import { inject } from 'mobx-react';
import { INVENTORY_ROUTE } from '../config/routes';
import DomainPage from '../templates/domain-page';
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
      <DomainPage store={store} routes={routes} schema={schema} />
    )
  }
}

export default Vendors;
