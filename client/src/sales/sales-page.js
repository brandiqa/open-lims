import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import { routes } from '../common/routes';
import SalesDashboard from './sales-dashboard';
import Customers from './customers';
import Invoices from './invoices';
import Payments from './payments';
import Accounts from './accounts';

class SalesPage extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Column width={3} style={{paddingRight:0}}>
          <Menu vertical>
            <NavLink className='item orange' activeClassName='active' exact to={routes.sales}>
              Sales
            </NavLink>
            <NavLink className='item orange' activeClassName='active' to={routes.customer}>
              Customers
            </NavLink>
            <NavLink className='item orange' activeClassName='active' exact to={routes.invoice}>
              Invoice
            </NavLink>
            <NavLink className='item orange' activeClassName='active' exact to={routes.payment}>
              Payments
            </NavLink>
            <NavLink className='item orange' activeClassName='active' exact to={routes.account}>
              Accounts
            </NavLink>
          </Menu>
        </Grid.Column>
        <Grid.Column width={13} style={{paddingRight:0}}>
            <Route component={SalesDashboard} exact path={routes.sales} />
            <Route component={Customers} exact path={routes.customer} />
            <Route component={Invoices} exact path={routes.invoice} />
            <Route component={Payments} exact path={routes.payment} />
            <Route component={Accounts} exact path={routes.account} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default SalesPage;
