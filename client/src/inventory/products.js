import React from 'react';
import { inject } from 'mobx-react';
import { INVENTORY_ROUTE } from '../config/routes';
import DomainPage from '../templates/domain-page';
import DomainRoutes from '../templates/domain-routes';
import DomainSchema from '../templates/domain-schema';

@inject("stores")
class Products extends React.Component {

  table= {
    headers: ['Name', 'Cost'],
    columns: ['name', 'cost']
  }

  fields = {
    name: {
      name: 'name',
      label: 'Name',
      placeholder: 'Enter product name',
      type: 'text',
      rules:'string|required'
    },
    cost: {
      name: 'cost',
      label: 'Unit Cost',
      placeholder: 'Enter product cost',
      type: 'number',
      rules:'numeric|required'
    },
  }

  form = {
    fields: this.fields,
    icon: 'shopping basket',
    submit: { label: 'Save', icon: 'check' }
  }

  render() {
    const store = this.props.stores.productStore;
    const routes = new DomainRoutes(INVENTORY_ROUTE, '/products');
    const schema = new DomainSchema('Product', this.table, this.form);

    return (
      <DomainPage store={store} routes={routes} schema={schema} />
    )
  }
}

export default Products;
