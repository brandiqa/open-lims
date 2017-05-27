import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import { routes } from '../common/routes';
import { primary } from '../common/theme';
import SalesDashboard from './sales-dashboard';
import Customers from './customers';
import Invoices from './invoices';
import Payments from './payments';
import Accounts from './accounts';

const className = `item ${primary}`;

class Sales extends React.Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Column width={3} style={{paddingRight:0}}>
          <Menu vertical>
            <NavLink className={className} activeClassName='active' exact to={routes.sales}>
              Sales
            </NavLink>
            <NavLink className='item orange' activeClassName='active' exact to={routes.customers}>
              Customers
            </NavLink>
            <NavLink className='item orange' activeClassName='active' exact to={routes.invoices}>
              Invoice
            </NavLink>
            <NavLink className='item orange' activeClassName='active' exact to={routes.payments}>
              Payments
            </NavLink>
            <NavLink className='item orange' activeClassName='active' exact to={routes.accounts}>
              Accounts
            </NavLink>
          </Menu>
        </Grid.Column>
        <Grid.Column width={13} style={{paddingRight:0}}>
            <Route component={SalesDashboard} exact path={routes.sales} />
            <Route component={Customers} exact path={routes.customers} />
            <Route component={Invoices} exact path={routes.invoices} />
            <Route component={Payments} exact path={routes.payments} />
            <Route component={Accounts} exact path={routes.accounts} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Sales;
