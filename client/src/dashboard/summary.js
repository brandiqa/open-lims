import React, { Component } from 'react';
import { Icon, Statistic, Divider, Segment } from 'semantic-ui-react';

class DashboardSummary extends Component {

  render() {
    const statsPanel = (
      <Segment inverted>
        <Statistic.Group widths='four'>
          <Statistic inverted>
            <Statistic.Value>142</Statistic.Value>
            <Statistic.Label>Total Customers</Statistic.Label>
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
    )

    return (
      <div>
        {statsPanel}
      </div>
    )
  }
}

export default DashboardSummary;
