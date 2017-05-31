import React from 'react';
import { inject } from 'mobx-react';
import { LAB_ROUTE } from '../config/routes';
import DomainPage from '../templates/domain-page';
import DomainRoutes from '../templates/domain-routes';
import DomainSchema from '../templates/domain-schema';

@inject("stores")
class Services extends React.Component {

  table= {
    headers: ['Name', 'Description', 'Duration(Days)', 'Price(KES)'],
    columns: ['name', 'description', 'duration', 'price']
  }

  fields = {
    name: {
      name: 'name',
      label: 'Name',
      placeholder: 'Enter service name',
      type: 'text',
      rules:'string|required'
    },
    description: {
      name: 'description',
      label: 'Description',
      placeholder: 'Describe service',
      type: 'textarea',
      rules:'string|required'
    },
    duration: {
      name: 'duration',
      label: 'Duration(Days)',
      placeholder: 'Enter duration',
      type: 'number',
      rules:'numeric|required'
    },
    price: {
      name: 'price',
      label: 'Price(KES)',
      placeholder: 'Enter service price',
      type: 'number',
      rules:'numeric|required'
    },
  }

  form = {
    fields: this.fields,
    icon: 'lab',
    submit: { label: 'Save', icon: 'check' }
  }

  render() {
    const store = this.props.stores.serviceStore;
    const routes = new DomainRoutes(LAB_ROUTE, '/services');
    const schema = new DomainSchema('Service', this.table, this.form);

    return (
      <DomainPage store={store} routes={routes} schema={schema} />
    )
  }
}

export default Services;
