import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Redirect } from 'react-router-dom';
import { Icon, Segment, Header } from 'semantic-ui-react';
import LoginPage from './public/login-page';
import { APP_ROUTE, DASHBOARD_ROUTE }  from './common/routes';
import { brand } from './common/theme';

@inject('stores') @observer
class App extends Component {

  constructor(props) {
    super(props);
    const authStore = props.stores.authStore;
    authStore.sessionAuth();
  }

  render() {
    const authStore = this.props.stores.authStore;

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
          authStore.isAuthenticated ? <Redirect to={{ pathname:DASHBOARD_ROUTE, state:{from: this.props.location } }} /> :
          app
        }
      </div>
    )
  }
}

export default App;
