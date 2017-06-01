import React, { Component } from 'react';
import { Icon, Statistic, Divider, Segment, Progress, Grid, Feed } from 'semantic-ui-react';

class DashboardSummary extends Component {

  render() {
    const statsPanel = (
      <Segment inverted>
        <Statistic.Group widths='four'>
          <Statistic inverted>
            <Statistic.Value>323</Statistic.Value>
            <Statistic.Label>Completed Jobs</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>331</Statistic.Value>
            <Statistic.Label>Total Sales</Statistic.Label>
          </Statistic>
          <Statistic inverted color='teal'>
            <Statistic.Value>9</Statistic.Value>
            <Statistic.Label>New Jobs</Statistic.Label>
          </Statistic>
          <Statistic inverted color='green'>
            <Statistic.Value>16</Statistic.Value>
            <Statistic.Label>Tests in Progress</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    );

    const feedPanel = (
      <Segment centered padded>
        <h3>Activity Feed</h3>
        <Feed>
         <Feed.Event>
           <Feed.Label>
             <Icon name='lab' />
           </Feed.Label>
           <Feed.Content>
             <Feed.Date>Today</Feed.Date>
             <Feed.Summary>
               Job #1700130 - Ndegwa started Biometric testing for at 9.01am
             </Feed.Summary>
           </Feed.Content>
         </Feed.Event>
         <Feed.Event>
           <Feed.Label>
             <Icon name='tasks' />
           </Feed.Label>
           <Feed.Content>
             <Feed.Date>Today</Feed.Date>
             <Feed.Summary>
               Job #1700130 - New job posted for Kenchic Ltd at 3.45pm
             </Feed.Summary>
           </Feed.Content>
         </Feed.Event>
         <Feed.Event>
           <Feed.Label>
             <Icon name='check' />
           </Feed.Label>
           <Feed.Content>
             <Feed.Date>Yesterday</Feed.Date>
             <Feed.Summary>
               Job #1700128 - James approved final report at 3.45pm
             </Feed.Summary>
           </Feed.Content>
         </Feed.Event>
         <Feed.Event>
           <Feed.Label>
             <Icon name='shopping basket' />
           </Feed.Label>
           <Feed.Content>
             <Feed.Date>Yesterday</Feed.Date>
             <Feed.Summary>
               Stock #1700098 - Potassium stock increased by 250 units at 3.45pm
             </Feed.Summary>
           </Feed.Content>
         </Feed.Event>
       </Feed>
      </Segment>
    )

    const progressPanel = (
      <Segment inverted>
        <h3>Monthly Progress Summary</h3>
        <Progress percent={21} inverted progress>
          Pending Invoices
        </Progress>
        <Progress percent={85} inverted progress success>
          Completed Jobs
        </Progress>
        <Progress percent={45} inverted progress warning>
          Testing in Progress
        </Progress>
        <Progress percent={10} inverted progress error>
          Overdue Jobs
        </Progress>
      </Segment>
    )

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            {statsPanel}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            {feedPanel}
          </Grid.Column>
          <Grid.Column width={10}>
            {progressPanel}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default DashboardSummary;
