import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

class LabSummary extends React.Component {
  render() {
    const square = { width: 175, height: 175 };

    return(
      <Grid columns={4} stackable>
        <Grid.Column>
          <Segment circular style={square}>
           <Header as='h2'>
             Services
             <Header.Subheader>
               10 available
             </Header.Subheader>
           </Header>
         </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment circular style={square}>
            <Header as='h2'>
              Tests
              <Header.Subheader>
                100 available
              </Header.Subheader>
            </Header>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LabSummary;
