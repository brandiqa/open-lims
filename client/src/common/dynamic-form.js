import React from 'react';
import { observer } from 'mobx-react';
import { Form, Button, Grid, Message } from 'semantic-ui-react';

@observer
class DynamicForm extends React.Component {

  render() {
    const { form } = this.props;

    return (
      <div>
        <Form onSubmit={form.onSubmit}>
          <p>input field here</p>
        </Form>
      </div>
    );
  }
}

export default DynamicForm;
