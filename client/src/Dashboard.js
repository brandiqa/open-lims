import React from 'react';
import { Sidebar, Segment, Menu, Icon, Button, Divider } from 'semantic-ui-react';
import { DASHBOARD_ROUTE, getSidebarLinks, getRoutes } from './common/routes';
import { brand } from './common/theme';

class Dashboard extends React.Component {

  render() {
    return (
      <div>
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
                    Logged in as [name]
                  </Menu.Item>
                  <Menu.Item>
                    <Button basic>Logout</Button>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
              <Divider/>
              { getRoutes(DASHBOARD_ROUTE) }
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Dashboard;
