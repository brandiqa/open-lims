import React from 'react';
import { observer } from 'mobx-react';
import { Segment, Header, Icon } from 'semantic-ui-react';
import MobxForm from '../common/mobx-form';
import DynamicForm from '../common/dynamic-form';
import { ADMIN_ROUTE } from '../common/routes';
import { brand } from '../common/theme';

@observer
class UserForm extends React.Component {

  form = null;
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

  passwordGroup = {
    password: {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Confirm Password',
      rules: 'required|string|between:5,25'
    },
    password_confirmation: {
      name: 'password_confirmation',
      label: 'Password Confirmation',
      placeholder: 'Confirm Password',
      type: 'password',
      rules: 'same:password'
    }
  };

  config = {
    from: { pathname: `${ADMIN_ROUTE}/users` },
    submit: { label: 'Save', icon: 'check' }
  }

  constructor(props) {
    super(props);
    const { _id } = props.match.params;
    let fields = this.fields;
    if(!_id){
      fields = { ...this.fields, ...this.passwordGroup};
    }
    this.form = MobxForm.createForm(fields, props.store)
  }

  componentDidMount() {
    const { _id } = this.props.match.params;
    const { store } = this.props;
    if(_id){
      store.fetch(_id)
    } else {
      store.newEntity();
    }
  }

  render() {
    const { entity } = this.props.store;

    return (
      <div>
          <Segment style={{maxWidth:'30vw'}}>
            <Header color={brand} as='h4'>
              <Icon name="user"/> { entity._id ? 'Edit User' : 'New User' }
            </Header>
            <DynamicForm store={this.props.store} form={this.form} config={this.config} entity={entity}/>
          </Segment>
      </div>
    )
  }
}

export default UserForm;