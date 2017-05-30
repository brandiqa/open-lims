import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Segment, Header, Icon } from 'semantic-ui-react';
import MobxForm from '../templates/mobx-form';
import DynamicForm from '../templates/dynamic-form';
import { brand } from '../config/theme';
import DomainSchema from '../templates/domain-schema';

class MobxAuthForm extends MobxForm {
  onSuccess(form) {
    this.store.login(form.values())
  }
}

@inject("stores") @observer
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

  form = {
    fields: this.fields,
    icon: 'address book',
    from: { pathname: '/app/'},
    submit: { label:'Log In', icon:'sign in' },
  };

  loginForm = null;

  constructor(props) {
    super(props);
    this.loginForm = MobxAuthForm.createForm(this.fields, this.props.stores.authStore);
  }

  render() {
    const store =  this.props.stores.authStore;
    const schema = new DomainSchema('Sign In', null, this.form);
    return (
      <Container>
        <Segment compact padded='very' className='centered' style={{marginTop:'5vh'}}>
          <Header color={brand} as='h3'>
            <Icon name="lock"/>Sign in to your Account
          </Header>
          <DynamicForm store={store} form={this.loginForm} schema={schema}/>
        </Segment>
      </Container>
    )
  }
}

export default Login;
