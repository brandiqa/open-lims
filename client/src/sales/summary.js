import React, { Component } from 'react';
import { Statistic, Divider, Segment, Header } from 'semantic-ui-react';

class SalesSummary extends Component {
  render() {
    const statsPanel = (
      <Segment inverted color='orange'>
        <Header inverted>Monthly Summary</Header>
        <Divider/>
        <Statistic.Group widths='four'>
          <Statistic inverted>
            <Statistic.Value>8</Statistic.Value>
            <Statistic.Label>Completed Sales</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>16</Statistic.Value>
            <Statistic.Label>New Invoices</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>9</Statistic.Value>
            <Statistic.Label>Paid Invoices</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>8</Statistic.Value>
            <Statistic.Label>Unpaid Payments</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    );

    return (
      <div>
        {statsPanel}
      </div>
    )
  }
}

export default SalesSummary;
