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
    this.form = MobxForm.createForm(props.config.fields, props.store)
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
    const { config, store } = this.props;
    const { entity } = store;

    return (
      <div>
          <Segment style={{maxWidth:'30vw'}}>
            <Header color={brand} as='h4'>
              <Icon name={config.icon}/> { entity._id ? 'Edit' : 'New' } {config.label}
            </Header>
            <DynamicForm store={this.props.store} form={this.form} config={config} entity={entity}/>
          </Segment>
      </div>
    )
  }

}

export default DomainForm;
