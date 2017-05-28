import React from 'react';
import { observer } from 'mobx-react';
import { Form, Button, Message, Icon } from 'semantic-ui-react';
import _ from 'lodash';
import InputField from '../common/input-field';
import { primary } from '../common/theme';

@observer
class DynamicForm extends React.Component {

  render() {
    const { form, submit } = this.props;
    // console.log(form.store)
    const { errors, loading } = form.store;
    const fields = form.fields.toJS();
    const messages = errors.messages ? errors.messages.toJS() : [];

    const inputFields = () => {
      return _.map(fields, field => {
        return (
          <InputField key={field.name} field={form.$(field.name)} />
        )
      })
    }

    const errorMessages = (
      <Message negative header={errors.global} list={messages.reverse()}/>
    );

    return (
      <div>
        {errors.global && errorMessages }
        <Form onSubmit={form.onSubmit} loading={loading}>
          {inputFields()}
          <Button color={primary} icon labelPosition="left">
            <Icon name={submit.icon}/>
            {submit.label}
          </Button>
        </Form>
      </div>
    );
  }
}

export default DynamicForm;
