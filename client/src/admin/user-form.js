import React from 'react';
import { observer } from 'mobx-react';
import { Segment, Header, Icon } from 'semantic-ui-react';
import MobxForm from '../common/mobx-form';
import DynamicForm from '../common/dynamic-form';
import { brand } from '../common/theme';

@observer
class UserForm extends React.Component {
  fields = {
    firstName: {
      name: 'firstName',
      label: 'First Name',
      placeholder: 'Enter first name',
      type: 'text',
      rules:'string|required'
    },
    lastName: {
      name: 'lastName',
      label: 'Last Name',
      placeholder: 'Enter last name',
      type: 'text',
      rules:'string'
    },
    email: {
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      type: 'email',
      rules:'email|string|required'
    },
    role: {
      name: 'role',
      label: 'Role',
      placeholder: 'Enter role',
      type: 'text',
      rules:'string|required'
    }
  }

  form = null;

  constructor(props) {
    super(props);
    this.form = MobxForm.createForm(this.fields, props.store)
  }

  componentWillReceiveProps = (nextProps) => {
    const user = nextProps.user;
    this.form.update(user);
  }

  render() {
    const submit = { label:'Save', icon:'check' };
    return (
      <div>
          <Segment style={{maxWidth:'30vw'}}>
            <Header color={brand} as='h4'>
              <Icon name="user"/>New User
            </Header>
            <DynamicForm form={this.form} submit={submit}/>
          </Segment>
      </div>
    )
  }
}

export default UserForm;
