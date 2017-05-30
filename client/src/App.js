import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Redirect } from 'react-router-dom';
import { Icon, Segment, Header } from 'semantic-ui-react';
import LoginPage from './public/login';
import { APP_ROUTE, DASHBOARD_ROUTE }  from './config/routes';
import { brand } from './config/theme';

@inject('stores') @observer
class App extends Component {

  constructor(props) {
    super(props);
    const authStore = props.stores.authStore;
    authStore.sessionAuth();
  }

  render() {
    const authStore = this.props.stores.authStore;
    const { from } = this.props.location.state || {from:{pathname:DASHBOARD_ROUTE}};

    const app = (
      <div>
        <Segment color={brand} style={{marginTop: 0}} inverted>
          <Header as='h2' icon textAlign='center' size='huge'>
            <Icon name='lab' />
            <Header.Content>
              Open-LIMS
            </Header.Content>
            <Header.Subheader style={{color:'white'}}>
              Open Laboratory Information System
            </Header.Subheader>
          </Header>
        </Segment>
        <Route path={APP_ROUTE} component={LoginPage} />
      </div>
    );

    return (
      <div>
        {
          authStore.isAuthenticated ? <Redirect to={{pathname:from.pathname, state:{from: this.props.location}}} /> :
          app
        }
      </div>
    );
  }
}

export default App;
