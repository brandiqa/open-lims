import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { routes } from '../common/routes';

class SalesPage extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Column width={3} style={{paddingRight:0}}>
          <Menu vertical>
            <NavLink className='item grey' activeClassName='active' exact to={routes.sales}>
              Sales
            </NavLink>
            <NavLink className='item grey' activeClassName='active' to={routes.customer}>
              Customers
            </NavLink>
            <NavLink className='item grey' activeClassName='active' exact to={routes.sales}>
              Invoice
            </NavLink>
            <NavLink className='item grey' activeClassName='active' exact to={routes.sales}>
              Payments
            </NavLink>
            <NavLink className='item grey' activeClassName='active' exact to={routes.sales}>
              Accounts
            </NavLink>
          </Menu>
        </Grid.Column>
        <Grid.Column width={3} style={{paddingRight:0}}>
          put page content here
        </Grid.Column>
      </Grid>
    )
  }
}

export default SalesPage;
