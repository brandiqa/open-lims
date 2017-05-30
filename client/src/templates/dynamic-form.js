import React from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router';
import { Form, Button, Message, Icon } from 'semantic-ui-react';
import _ from 'lodash';
import InputField from '../templates/input-field';
import TextAreaField from '../templates/textarea-field';
import { primary } from '../config/theme';

@observer
class DynamicForm extends React.Component {

  componentWillReceiveProps = (nextProps) => {
    const { form } = this.props;
    const entity = nextProps.entity;
    form.update(entity);
  }

  render() {
    const { form, schema, store, routes } = this.props;
    const { errors, loading, redirect } = store;
    const fields = schema.fields;
    const messages = errors.messages ? errors.messages.toJS() : [];

    const inputFields = () => {
      return _.map(fields, field => {
        if(field.type === 'textarea') {
          return(<TextAreaField key={field.name} field={form.$(field.name)} />)
        } else {
          return(<InputField key={field.name} field={form.$(field.name)} />)
        }
      })
    }

    const errorMessages = (
      <Message negative header={errors.global} list={messages.reverse()}/>
    );

    const formView = (
      <div>
        {errors.global && errorMessages }
        <Form onSubmit={form.onSubmit} loading={loading}>
          {inputFields()}
          <Button color={primary} icon labelPosition="left">
            <Icon name={schema.submitIcon}/>
            {schema.submitLabel}
          </Button>
        </Form>
      </div>
    );

    return (
      <div>
        { redirect ? <Redirect to={routes.list} /> : formView }
      </div>
    );
  }
}

export default DynamicForm;
