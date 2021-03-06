import React from 'react';
import { inject, observer } from 'mobx-react';
import {  Redirect } from 'react-router-dom';
import { Sidebar, Segment, Menu, Icon, Button, Divider } from 'semantic-ui-react';
import { APP_ROUTE, DASHBOARD_ROUTE, getSidebarLinks, getRoutes } from './config/routes';
import { brand } from './config/theme';

@inject('stores') @observer
class Dashboard extends React.Component {

  render() {
    const { authStore } = this.props.stores;

    const dashboard = (
      <Sidebar.Pushable as={Segment} style={{height:'100vh'}}>
        <Sidebar as={Menu} width='thin' vertical visible inverted color={brand}>
          <Segment basic inverted style={{ height: '140px', marginBottom:0}} color={brand}>
            <Icon name='lab' size='huge' circular />
          </Segment>
          { getSidebarLinks(DASHBOARD_ROUTE) }
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic padded style={{width:'92vw'}}>
            <Menu secondary>
              <Menu.Header as='h2'>
                Open Laboratory Information Management System
              </Menu.Header>
              <Menu.Menu position='right'>
                <Menu.Item>
                  Logged in as { authStore.fullName }
                </Menu.Item>
                <Menu.Item>
                  <Button basic onClick={() => {
                    authStore.logout();
                    this.props.history.push(APP_ROUTE);
                  }}>
                    Logout
                  </Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            <Divider/>
            { getRoutes(DASHBOARD_ROUTE) }
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );

    return (
      <div>
        {
          authStore.isAuthenticated ? dashboard :
          <Redirect to={{ pathname:APP_ROUTE, state:{from: this.props.location} }} />
        }
      </div>
    );
  }
}

export default Dashboard;
