import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

@inject("stores") @observer
class LabSummary extends React.Component {

  componentDidMount() {
    const { serviceStore, taskStore } = this.props.stores;
    serviceStore.count();
    taskStore.count();
  }

  render() {
    const square = { width: 175, height: 175 };
    const { serviceStore, taskStore } = this.props.stores;

    return(
      <Grid columns={4} stackable>
        <Grid.Column>
          <Segment circular style={square}>
           <Header as='h2'>
             Services
             <Header.Subheader>
               {serviceStore.total} available
             </Header.Subheader>
           </Header>
         </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment circular style={square}>
            <Header as='h2'>
              Tests
              <Header.Subheader>
                {taskStore.total} available
              </Header.Subheader>
            </Header>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LabSummary;
