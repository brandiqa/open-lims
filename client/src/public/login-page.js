import React from 'react';
import { inject } from 'mobx-react';
import { Container, Segment, Header, Icon } from 'semantic-ui-react';
import createForm from '../common/mobx-form';
import DynamicForm from '../common/dynamic-form';
import { brand } from '../common/theme';


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

  loginForm = null;

  constructor(props) {
    super(props);
    this.loginForm = createForm(this.fields, this.props.stores.authStore);
  }

  render() {
    const submit = { label:'Log In', icon:'sign in' };
    return (
      <Container>
        <Segment compact padded='very' className='centered' style={{marginTop:'5vh'}}>
          <Header color={brand} as='h3'>
            <Icon name="lock"/>Sign in to your Account
          </Header>
          <DynamicForm form={this.loginForm} submit={submit}/>
        </Segment>
      </Container>
    )
  }
}

export default Login;
