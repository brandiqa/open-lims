import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { ADMIN_ROUTE, getMenuLinks, getRoutes } from '../common/routes';

class Admin extends React.Component {
  render() {
    return(
      <Grid stackable>
        <Grid.Column width={3} style={{paddingRight:0}}>
          <Menu vertical>
            {getMenuLinks(ADMIN_ROUTE)}
          </Menu>
        </Grid.Column>
        <Grid.Column width={13} style={{paddingRight:0}}>
          {getRoutes(ADMIN_ROUTE)}
        </Grid.Column>
      </Grid>
    );
  }
}

export default Admin;
