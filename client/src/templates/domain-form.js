import React from 'react';
import { observer } from 'mobx-react';
import { Segment, Header, Icon } from 'semantic-ui-react';
import MobxForm from '../templates/mobx-form';
import DynamicForm from '../templates/dynamic-form';
import { brand } from '../config/theme';

@observer
class DomainForm extends React.Component {

  constructor(props) {
    super(props);
    this.form = MobxForm.createForm(props.schema.fields, props.store)
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
    const { routes, schema, store } = this.props;
    const { label } = schema;
    const { entity } = store;

    return (
      <div>
        <Segment style={{maxWidth:'30vw'}}>
          <Header color={brand} as='h4'>
            <Icon name={schema.icon}/> { entity._id ? 'Edit' : 'New' } {label}
          </Header>
          <DynamicForm store={store} form={this.form} schema={schema} entity={entity} routes={routes} history={this.props.history}/>
        </Segment>
      </div>
    )
  }
}

export default DomainForm;
