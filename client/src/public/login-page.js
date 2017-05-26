import React from 'react';
// import MobxForm from '../common/mobx-form';
// import FormComp from '../common/form';

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

  componentOnMount() {
    // this.form = new Form()
  }

  render() {
    return (
      <p>display form here</p>
    )
  }
}

export default Login;
