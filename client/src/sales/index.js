import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { SALES_ROUTE, getMenuLinks, getRoutes } from '../common/routes';

class Sales extends React.Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Column width={3} style={{paddingRight:0}}>
          <Menu vertical>
            {getMenuLinks(SALES_ROUTE)}
          </Menu>
        </Grid.Column>
        <Grid.Column width={13} style={{paddingRight:0}}>
          {getRoutes(SALES_ROUTE)}
        </Grid.Column>
      </Grid>
    );
  }
}

export default Sales;
