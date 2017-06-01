import React, { Component } from 'react';
import { Icon, Statistic, Divider, Segment, Progress, Grid, Feed } from 'semantic-ui-react';

class SalesSummary extends Component {
  render() {
    const statsPanel = (
      <Segment inverted>
        <Statistic.Group widths='four'>
          <Statistic inverted>
            <Statistic.Value>8</Statistic.Value>
            <Statistic.Label>Completed Sales</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>16</Statistic.Value>
            <Statistic.Label>New Invoices</Statistic.Label>
          </Statistic>
          <Statistic inverted color='teal'>
            <Statistic.Value>9</Statistic.Value>
            <Statistic.Label>Paid Invoices</Statistic.Label>
          </Statistic>
          <Statistic inverted color='red'>
            <Statistic.Value>8</Statistic.Value>
            <Statistic.Label>Unpaid Payments</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    );

    return (
      <div>
        <h3>Monthly Summary</h3>
        {statsPanel}
      </div>
    )
  }
}

export default SalesSummary;
