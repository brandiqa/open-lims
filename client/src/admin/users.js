import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import { inject } from 'mobx-react';
import { ADMIN_ROUTE } from '../common/routes';
import UserList from './user-list';
import UserForm from './user-form';

@inject("stores")
class Users extends React.Component {
  render() {
    const listLink = `${ADMIN_ROUTE}/users`;
    const newLink = `${ADMIN_ROUTE}/users/new`;
    const editLink = `${ADMIN_ROUTE}/users/edit/:_id`;
    const store = this.props.stores.userStore;

    return (
      <div>
        <Menu>
          <NavLink className="item" activeClassName="active" exact to={listLink}>Users List</NavLink>
          <NavLink className="item" activeClassName="active" to={newLink}>Add User</NavLink>
        </Menu>
        <h3>User Administration</h3>
        <Route component={() => (<UserList store={store}/>)} exact path={listLink}/>
        <Route component={() => (<UserForm store={store}/>)} path={newLink}/>
        <Route component={() => (<UserForm store={store}/>)} path={editLink} />
      </div>
    )
  }
}

export default Users;
