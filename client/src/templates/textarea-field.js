import React from 'react';
import { observer } from 'mobx-react';
import { Form, TextArea } from 'semantic-ui-react';
import classnames from 'classnames';

export default observer(({field,autoHeight}) => (
  <Form.Field className={classnames({error:field.error})}>
    <label htmlFor={field.id}>
      {field.label} {field.rules.indexOf('required') !== -1 ? <span className="red">*</span> : ''}
    </label>
    <TextArea autoHeight={autoHeight} {...field.bind()}/>
    <span className="error">{field.error}</span>
  </Form.Field>
));
