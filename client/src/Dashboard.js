import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar, Segment, Menu, Icon, Button } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import { routes } from './common/routes';
import { brand } from './common/theme';
import DashboardPage from './dashboard/dashboard-page';
import SalesPage from './sales/sales-page';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment} style={{height:'100vh'}}>
          <Sidebar as={Menu} width='thin' vertical visible inverted color={brand}>
            <Segment basic inverted style={{ height: '80px', marginBottom:0}} color={brand}>
              <Icon name='lab' size='huge' style={{width:'50px',textAlign:'center'}} />
            </Segment>
            <NavLink className='item' activeClassName='active' exact to={routes.dashboard}>
              <Icon name='home' /> Dashboard
            </NavLink>
            <NavLink className='item' activeClassName='active' to={routes.sales}>
              <Icon name='money' /> Sales
            </NavLink>
            <NavLink className='item' activeClassName='active' to={routes.inventory}>
              <Icon name='book' /> Inventory
            </NavLink>
            <NavLink className='item' activeClassName='active' to={routes.lab}>
              <Icon name='lab' /> Lab
            </NavLink>
            <NavLink className='item' activeClassName='active' to={routes.admin}>
              <Icon name='user' /> Admin
            </NavLink>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic padded style={{width:'92vw'}}>
              <Menu secondary>
                <Menu.Header as='h2'>
                  Open-LIMS
                </Menu.Header>
                <Menu.Menu position='right'>
                  <Menu.Item>
                    Logged in as [name]
                  </Menu.Item>
                  <Menu.Item>
                    <Button basic>Logout</Button>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
              <hr/>
              <Route component={DashboardPage} exact path={routes.dashboard} />
              <Route component={SalesPage} path={routes.sales} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Dashboard;
