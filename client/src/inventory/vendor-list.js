import React from 'react';
import { observer } from 'mobx-react';
import { Message, Icon, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { INVENTORY_ROUTE } from '../common/routes';

@observer
class VendorList extends React.Component {

  componentDidMount() {
    this.props.store.fetchAll();
  }

  render() {
    const { entities, loading, errors, deleteOne } = this.props.store;
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
           <Message.Header>No Vendor(s) Found</Message.Header>
           <span>Add some vendor(s) to get started..</span>
          <Link to={`${INVENTORY_ROUTE}/vendors/new`} className="ui button primary right floated">Add New Vendor</Link>
       </Message.Content>
      </Message>
    );

    const tableData = entities.map(vendor => (
      <Table.Row key={vendor._id}>
        <Table.Cell>{vendor.name}</Table.Cell>
        <Table.Cell>{vendor.address}</Table.Cell>
        <Table.Cell>{vendor.phone}</Table.Cell>
        <Table.Cell>{vendor.email}</Table.Cell>
      </Table.Row>
    ));

    const table = (
      <Table celled selectable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
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

export default VendorList;
