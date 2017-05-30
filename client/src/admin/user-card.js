import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { ADMIN_ROUTE } from '../config/routes';

export default function UserCard({user, deleteUser}) {
  const editLink = `${ADMIN_ROUTE}/users/edit`;

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='user outline'/> {user.firstName} {user.lastName}
        </Card.Header>
        <Card.Description>
          <p><Icon name='mail outline'/> {user.email}</p>
          <p><Icon name='users'/><span className="card-label">Role</span> :  {user.role}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`${editLink}/${user._id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() => deleteUser(user._id)} >Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}
