import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Segment, Header, Icon } from 'semantic-ui-react';
import MobxForm from '../common/mobx-form';
import DynamicForm from '../common/dynamic-form';
import { brand } from '../common/theme';

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

  config = {
    submit: { label:'Log In', icon:'sign in' },
    from: { pathname: '/app/'}
  }

  loginForm = null;

  constructor(props) {
    super(props);
    this.loginForm = MobxAuthForm.createForm(this.fields, this.props.stores.authStore);
  }

  render() {
    return (
      <Container>
        <Segment compact padded='very' className='centered' style={{marginTop:'5vh'}}>
          <Header color={brand} as='h3'>
            <Icon name="lock"/>Sign in to your Account
          </Header>
          <DynamicForm form={this.loginForm} config={this.config}/>
        </Segment>
      </Container>
    )
  }
}

export default Login;
