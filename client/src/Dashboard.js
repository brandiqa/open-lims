import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar, Segment, Menu, Icon, Button } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import DashboardPage from './dashboard/dashboard-page';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment} style={{height:"100vh"}}>
          <Sidebar as={Menu} width='thin' vertical visible inverted color='green'>
            <Segment basic inverted style={{ height: "80px", marginBottom:0}} color='green'>
              {/* <Image src={icon} size="small" centered style={{width:"50px"}}/> */}
              <Icon name='lab' size="huge" centered style={{width:"50px"}} />
            </Segment>
            <NavLink className="item teal" activeClassName="active" exact to="/">
              <Icon name='home' /> Dashboard
            </NavLink>
            <NavLink className="item teal" activeClassName="active" exact to="/users">
              <Icon name='users' /> Customers
            </NavLink>
            <NavLink className="item teal" activeClassName="active" exact to="/tickets">
              <Icon name='book' /> Invoices
            </NavLink>
            <NavLink className="item teal" activeClassName="active" exact to="/issues">
              <Icon name='puzzle' /> Services
            </NavLink>
            <NavLink className="item teal" activeClassName="active" exact to="/backlog">
              <Icon name='tasks' /> Jobs
            </NavLink>
            <NavLink className="item teal" activeClassName="active" exact to="/users">
              <Icon name='user' /> Users
            </NavLink>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic padded style={{width:"92vw"}}>
              <Menu secondary>
                <Menu.Header>
                  {/* <Image src={logo} size="small"/> */}
                  <h2>Open-LIMS</h2>
                </Menu.Header>
                <Menu.Menu position="right">
                  <Menu.Item>
                    Logged in as [name]
                  </Menu.Item>
                  <Menu.Item>
                    <Button basic>Logout</Button>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
              <hr/>
              <Route component={DashboardPage} exact path="/dashboard/" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Dashboard;
