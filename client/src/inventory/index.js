import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { INVENTORY_ROUTE, getMenuLinks, getRoutes } from '../config/routes';

class Inventory extends React.Component {
  render() {
    return(
      <Grid stackable>
        <Grid.Column width={3} style={{paddingRight:0}}>
          <Menu vertical>
            {getMenuLinks(INVENTORY_ROUTE)}
          </Menu>
        </Grid.Column>
        <Grid.Column width={13} style={{paddingRight:0}}>
          {getRoutes(INVENTORY_ROUTE)}
        </Grid.Column>
      </Grid>
    );
  }
}

export default Inventory;
