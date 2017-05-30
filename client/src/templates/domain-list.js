import React from 'react';
import { observer } from 'mobx-react';
import { Message, Icon, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

@observer
class DomainList extends React.Component {

  constructor(props) {
    super(props)
    this.config  = {
      label: 'Vendor',
      newLink: '/dashboard/inventory/vendors/new',
      headers: ['Name', 'Address', 'Phone', 'Email'],
      columns: ['name', 'address', 'phone', 'email']
    }
  }

  componentDidMount() {
    this.props.store.fetchAll();
  }

  render() {
    // const { config, store }
    const config = this.config;
    const { entities, loading, errors } = this.props.store;
    const messages = errors.messages ? errors.messages.toJS() : [];

    const errorMessages = (
      <Message negative header={errors.global} list={messages.reverse()}/>
    );

    const fetchingMessage = (
      <Message icon info>
        <Icon name='circle notched' loading />
        <Message.Content>
           <Message.Header>Just one moment</Message.Header>
           We are fetching that content for you.
       </Message.Content>
      </Message>
    );

    const emptyMessage = (
      <Message icon info>
        <Icon name='warning circle' />
        <Message.Content>
           <Message.Header>No {config.label}(s) Found</Message.Header>
           <span>Add some {config.label}(s) to get started..</span>
          <Link to={config.newLink} className="ui button primary right floated">Add New {config.label}</Link>
       </Message.Content>
      </Message>
    );

    const tableHeaderCells = config.headers.map(header => (
      <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
    ));

    const tableData = entities.map(entity => (
      <Table.Row key={entity._id}>
        {
          config.columns.map(column => (
            <Table.Cell key={column}>{entity[column]}</Table.Cell>
          ))
        }
      </Table.Row>
    ));

    const table = (
      <Table celled selectable striped>
        <Table.Header>
          <Table.Row>
            {tableHeaderCells}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableData}
        </Table.Body>
      </Table>
    )

    return (
      <div>
        { loading && fetchingMessage }
        { entities.length === 0 && !loading  && !errors.global && emptyMessage }
        { errors.global && errorMessages}
        { table }
      </div>
    )
  }
}

export default DomainList;
