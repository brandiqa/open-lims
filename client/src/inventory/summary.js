import React, { Component } from 'react';
import { Statistic, Divider, Segment, Header } from 'semantic-ui-react';

class InventorySummary extends Component {
  render() {
    const statsPanel = (
      <Segment inverted color='teal'>
        <Header inverted>Monthly Summary</Header>
        <Divider/>
        <Statistic.Group widths='four'>
          <Statistic inverted>
            <Statistic.Value>252</Statistic.Value>
            <Statistic.Label>Product Types</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>58</Statistic.Value>
            <Statistic.Label>Units In</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>24</Statistic.Value>
            <Statistic.Label>Units out</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>72</Statistic.Value>
            <Statistic.Label>Low Stock</Statistic.Label>
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

export default InventorySummary;
