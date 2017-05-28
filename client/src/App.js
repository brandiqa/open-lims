import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Icon, Segment, Header } from 'semantic-ui-react';
import LoginPage from './public/login-page';
import { APP_ROUTE }  from './common/routes';
import { brand } from './common/theme';

class App extends Component {
  render() {
    return (
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
    )
  }
}

export default App;
