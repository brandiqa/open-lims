import React from 'react';
import createForm from '../common/mobx-form';
import DynamicForm from '../common/dynamic-form';
import { inject } from 'mobx-react';

@inject("stores")
class Login extends React.Component {

  fields = {
    email: {
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      type: 'email',
      rules:'email|string|required'
    },
    password: {
      name: 'password',
      label: 'Password',
      placeholder: 'Password',
      type: 'password',
      rules:'string|required'
    }
  }

  form = null;

  constructor(props) {
    super(props);
    this.form = createForm(this.fields, this.props.stores.authStore);
  }

  render() {
    return (
      <DynamicForm form={this.form}/>
    )
  }
}

export default Login;
