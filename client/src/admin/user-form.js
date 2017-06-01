import React from 'react';
import { observer } from 'mobx-react';
import { Segment, Header, Icon } from 'semantic-ui-react';
import MobxForm from '../templates/mobx-form';
import DynamicForm from '../templates/dynamic-form';
import DomainRoutes from '../templates/domain-routes';
import DomainSchema from '../templates/domain-schema';
import { ADMIN_ROUTE } from '../config/routes';
import { brand } from '../config/theme';

@observer
class UserForm extends React.Component {

  baseFields = {
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

  passwordFields = {
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

  constructor(props) {
    super(props);
    const { _id } = props.match.params;
    if(!_id){
      this.fields = { ...this.baseFields, ...this.passwordGroup};
    } else {
      this.fields = this.baseFields;
    }
    this.form = MobxForm.createForm(this.fields, props.store)
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
    const { store } = this.props;
    const { entity } = store;
    const routes = new DomainRoutes(ADMIN_ROUTE, '/users');
    const formSchema = {
      fields: this.fields,
      icon: 'users',
      submit: { label: 'Save', icon: 'check' }
    }
    const schema = new DomainSchema('User', null, formSchema);

    return (
      <div>
          <Segment style={{maxWidth:'30vw'}}>
            <Header color={brand} as='h4'>
              <Icon name="user"/> { entity._id ? 'Edit User' : 'New User' }
            </Header>
            <DynamicForm store={store} form={this.form} schema={schema} entity={entity} routes={routes}/>
          </Segment>
      </div>
    )
  }
}

export default UserForm;
