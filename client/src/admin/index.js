import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { routes } from '../common/routes';

class Admin extends React.Component {
  render() {
    return(
      <Grid stackable>
        <Grid.Column width={3} style={{paddingRight:0}}>
          <Menu vertical>
            <NavLink className='item' activeClassName='active' exact to={routes.admin}>
              Default
            </NavLink>
          </Menu>
        </Grid.Column>
        <Grid.Column width={13} style={{paddingRight:0}}>
          <p>Admin Under Construction</p>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Admin;
