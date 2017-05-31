import React from 'react';
import { inject } from 'mobx-react';
import { SALES_ROUTE } from '../config/routes';
import DomainPage from '../templates/domain-page';
import DomainRoutes from '../templates/domain-routes';
import DomainSchema from '../templates/domain-schema';

@inject("stores")
class Customers extends React.Component {

  table= {
    headers: ['Name', 'Address', 'Phone', 'Email', 'Cr Limit'],
    columns: ['name', 'address', 'phone', 'email', 'creditLimit']
  }

  fields = {
    name: {
      name: 'name',
      label: 'Name',
      placeholder: 'Enter customer name',
      type: 'text',
      rules:'string|required'
    },
    address: {
      name: 'address',
      label: 'Address',
      placeholder: 'Enter customer address',
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
    },
    creditLimit: {
      name: 'creditLimit',
      label: 'Credit Limit',
      placeholder: 'Email',
      type: 'number',
      rules:'numeric'
    }
  }

  form = {
    fields: this.fields,
    icon: 'users',
    submit: { label: 'Save', icon: 'check' }
  }

  render() {
    const store = this.props.stores.customerStore;
    const routes = new DomainRoutes(SALES_ROUTE, '/customers');
    const schema = new DomainSchema('Customer', this.table, this.form);

    return (
      <DomainPage store={store} routes={routes} schema={schema} />
    )
  }
}

export default Customers;
