import React from 'react';
import { Table } from 'semantic-ui-react';

class Roles extends React.Component {
  render() {
    return (
      <div>
        <h3>Roles</h3>
        <Table celled selectable striped>
          <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Role</Table.HeaderCell>
                <Table.HeaderCell>Users</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Admin</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Full administrative access</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Manager</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Full access with special priviledges(e.g. approve customer credit limit)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Accountant</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Sales, Invoicing, Billing & Payment Access</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Supervisor</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Full Access to Jobs, Tests, Reports and Payments</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Technician</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Access to Jobs, Tests and Reports</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default Roles;
