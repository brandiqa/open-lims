import React from 'react';
import { inject } from 'mobx-react';
import { SALES_ROUTE } from '../config/routes';
import DomainPage from '../templates/domain-page';
import DomainRoutes from '../templates/domain-routes';
import DomainSchema from '../templates/domain-schema';

@inject("stores")
class Invoices extends React.Component {

  table  = {
    headers: ['Invoice No', 'Date', 'Amount'],
    columns: ['invoiceNo', 'createdAt', 'amount']
  };

  fields = {
    invoiceNo: {
      name: 'invoiceNo',
      label: 'Invoice No',
      placeholder: 'Enter invoice no',
      type: 'text',
      rules:'string|required'
    },
    amount: {
      name: 'amount',
      label: 'Phone',
      placeholder: 'Enter amount',
      type: 'number',
      rules:'numeric|required'
    },
  };

  form = {
    fields: this.fields,
    icon: 'money',
    submit: { label: 'Save', icon: 'check' }
  }

  render() {
    const store = this.props.stores.invoiceStore;
    const routes = new DomainRoutes(SALES_ROUTE, '/invoices');
    const schema = new DomainSchema('Invoice', this.table, this.form);

    return (
      <DomainPage store={store} routes={routes} schema={schema} />
    )
  }
}

export default Invoices;
