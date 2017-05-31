import React from 'react';
import { inject } from 'mobx-react';
import { LAB_ROUTE } from '../config/routes';
import DomainPage from '../templates/domain-page';
import DomainRoutes from '../templates/domain-routes';
import DomainSchema from '../templates/domain-schema';

@inject("stores")
class Tasks extends React.Component {

  table= {
    headers: ['Name', 'Description', 'Duration(Hours)', 'Cost(KES)'],
    columns: ['name', 'description', 'duration', 'cost']
  }

  fields = {
    name: {
      name: 'name',
      label: 'Name',
      placeholder: 'Enter task name',
      type: 'text',
      rules:'string|required'
    },
    description: {
      name: 'description',
      label: 'Description',
      placeholder: 'Describe task',
      type: 'textarea',
      rules:'string|required'
    },
    duration: {
      name: 'duration',
      label: 'Duration(Hours)',
      placeholder: 'Enter duration',
      type: 'number',
      rules:'numeric|required'
    },
    cost: {
      name: 'cost',
      label: 'Cost(KES)',
      placeholder: 'Enter task price',
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
    const store = this.props.stores.taskStore;
    const routes = new DomainRoutes(LAB_ROUTE, '/tests');
    const schema = new DomainSchema('Test', this.table, this.form);

    return (
      <DomainPage store={store} routes={routes} schema={schema} />
    )
  }
}

export default Tasks;
