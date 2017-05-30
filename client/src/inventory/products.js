import React from 'react';
import { inject } from 'mobx-react';
import { INVENTORY_ROUTE } from '../config/routes';
import DomainPage from '../templates/domain-page';

@inject("stores")
class Products extends React.Component {

  linkConfig = {
    base: INVENTORY_ROUTE,
    path: '/products'
  }

  listConfig = {
    label: 'Product',
    editRoute: INVENTORY_ROUTE + '/products/edit',
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
    address: {
      name: 'cost',
      label: 'Cost',
      placeholder: 'Enter product cost',
      type: 'number',
      rules:'number|required'
    },
  }

  formConfig = {
    label: 'Product',
    fields: this.fields,
    icon: 'shopping basket',
    from: { pathname: INVENTORY_ROUTE + '/products' },
    submit: { label: 'Save', icon: 'check' }
  }

  render() {
    const store = this.props.stores.productStore;
    return (
      <DomainPage store={store} linkConfig={this.linkConfig} listConfig={this.listConfig} formConfig={this.formConfig} />
    )
  }
}

export default Products;
