import React, {Component} from 'react';
import { Menu, Icon, Segment, Header } from 'semantic-ui-react';
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
        <h2>Login form component missing</h2>
      </div>
    )
  }
}

export default App;
