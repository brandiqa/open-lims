import React from 'react';
import { observer } from 'mobx-react';
import { Form } from 'semantic-ui-react';
import classnames from 'classnames';

export default observer(({field}) => (
  <Form.Field className={classnames({error:field.error})}>
    <label htmlFor={field.id}>
      {field.label} {field.rules.indexOf('required') !== -1 ? <span className="red">*</span> : ''}
    </label>
    <select {...field.bind()}>
      <option value="">{field.placeholder}</option>
      {field.options.map(option => (<option key={option.toLowerCase()} value={option.toLowerCase()}>{option}</option>) )}
    </select>
    <span className="error">{field.error}</span>
  </Form.Field>
));
