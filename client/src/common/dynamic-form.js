import React from 'react';
import { observer } from 'mobx-react';
import { Form, Button, Grid, Message } from 'semantic-ui-react';

@observer
class DynamicForm extends React.Component {

  render() {
    const { form, loading } = this.props;

    return (
      <div>
        <Form onSubmit={form.onSubmit} loading={loading}>
          <p>input field here</p>
        </Form>
      </div>
    );
  }
}

export default DynamicForm
