import React from 'react';
import { observer } from 'mobx-react';
import { Message, Icon, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UserCard from './user-card'

@observer
class UserList extends React.Component {

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
           <Message.Header>No User(s) Found</Message.Header>
           <span>Add some user(s) to get started..</span>
          <Link to={'/dashboard/admin/users/new'} className="ui button primary right floated">Add New User</Link>
       </Message.Content>
      </Message>
    );

    const cardList = entities.map(user => (
      <UserCard key={user._id} user={user} deleteUser={deleteOne} />
    ));

    const cardGroup = (
      <Card.Group>
        { cardList }
      </Card.Group>
    );

    return (
      <div>
        { loading && fetchingMessage }
        { entities.length === 0 && !loading  && !errors.global && emptyMessage }
        { errors.global && errorMessages}
        { cardGroup }
      </div>
    )
  }
}

export default UserList;
