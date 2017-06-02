import React from 'react';
import { observer } from 'mobx-react';
import { Message, Icon, Table, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

@observer
class DomainList extends React.Component {

  componentDidMount() {
    this.props.store.fetchAll();
  }

  handleDoubleClick = (_id) => {
    const { history, routes } = this.props;
    history.push(routes.baseEdit + _id)
  }

  handlePageClick = (skip) => {
    const { store } = this.props;
    store.pagination.skip = skip;
    store.fetchAll();
  }

  render() {
    const { routes, schema, store } = this.props;
    const { label, table } = schema;
    const { entities, loading, errors, pageNumbers, previousPage, nextPage, pagination } = store;
    const messages = errors.messages ? errors.messages.toJS() : [];

    const errorMessages = (
      <Message negative header={errors.global} list={messages.reverse()}/>
    );

    // const fetchingMessage = (
    //   <Message icon info>
    //     <Icon name='circle notched' loading />
    //     <Message.Content>
    //        <Message.Header>Just one moment</Message.Header>
    //        We are fetching that content for you.
    //    </Message.Content>
    //   </Message>
    // );

    const emptyMessage = (
      <Message icon info>
        <Icon name='warning circle' />
        <Message.Content>
           <Message.Header>No {label}(s) Found</Message.Header>
           <span>Add some {label}(s) to get started..</span>
          <Link to={routes.new} className="ui button primary right floated">Add New {label}</Link>
       </Message.Content>
      </Message>
    );

    const tableHeaderCells = table.headers.map(header => (
      <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
    ));

    const tableData = entities.map(entity => (
      <Table.Row key={entity._id} onDoubleClick={() => this.handleDoubleClick(entity._id)}>
        {
          table.columns.map(column => (
            <Table.Cell key={column}>{entity[column]}</Table.Cell>
          ))
        }
      </Table.Row>
    ));

    const pageItems = pageNumbers.map(page => (
      <Menu.Item as='a' key={page.skip} onClick={() => this.handlePageClick(page.skip)} className={classnames({active:pagination.skip === page.skip})}>
        {page.page}
      </Menu.Item>
    ));


    const paginationLinks = (
      <Menu floated='right' pagination>
        <Menu.Item as='a' icon onClick={() => this.handlePageClick(previousPage)}>
          <Icon name='left chevron' />
        </Menu.Item>
        {pageItems}
        <Menu.Item as='a' icon onClick={() => this.handlePageClick(nextPage)}>
          <Icon name='right chevron' />
        </Menu.Item>
      </Menu>
    )

    const tableView = (
      <Table celled selectable striped>
        <Table.Header>
          <Table.Row>
            {tableHeaderCells}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableData}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell>
                <Link to={routes.new} className="ui button orange icon"><Icon name='add'/> Add New {label}</Link>
            </Table.HeaderCell>
            <Table.HeaderCell colSpan={table.columns.length}>
              {paginationLinks}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )

    return (
      <div>
        {/* { loading && fetchingMessage } */}
        { entities.length === 0 && !loading  && !errors.global && emptyMessage }
        { errors.global && errorMessages}
        { tableView }
      </div>
    )
  }
}

export default DomainList;
