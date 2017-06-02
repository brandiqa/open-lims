import React from 'react';
import { inject } from 'mobx-react';
import { SALES_ROUTE } from '../config/routes';
import DomainSchema from '../templates/domain-schema';
import DomainRoutes from '../templates/domain-routes';
import DomainList from '../templates/domain-list';

@inject("stores")
class CustomerInvoiceTable extends React.Component {

  table  = {
    headers: ['Invoice No', 'Date', 'Service', 'Amount', 'Paid', 'Job Status'],
    columns: ['invoiceNo', 'createdAt', 'service', 'amount', 'payment', 'job']
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
    const routes = new DomainRoutes(SALES_ROUTE, '/invoices');
    const schema = new DomainSchema('Invoice', this.table, this.form);
    const store = this.props.stores.invoiceStore;

    return (
      <div>
        <DomainList routes={routes} schema={schema} store={store} />
      </div>
    )
  }
}

export default CustomerInvoiceTable;
