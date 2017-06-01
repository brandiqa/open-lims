import React from 'react';
import { Segment, Header, Statistic, Divider } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

@inject("stores") @observer
class LabSummary extends React.Component {

  componentDidMount() {
    const { serviceStore, taskStore } = this.props.stores;
    serviceStore.count();
    taskStore.count();
  }

  render() {
    const { serviceStore, taskStore } = this.props.stores;

    const statsPanel = (
      <Segment inverted color='green'>
        <Header inverted>Monthly Summary</Header>
        <Divider/>
        <Statistic.Group widths='four'>
          <Statistic inverted>
            <Statistic.Value>{serviceStore.total}</Statistic.Value>
            <Statistic.Label>Registered Services</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>{taskStore.total}</Statistic.Value>
            <Statistic.Label>Test Types</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>24</Statistic.Value>
            <Statistic.Label>Ongoing Jobs</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>4</Statistic.Value>
            <Statistic.Label>Overdue Jobs</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    );

    return(
      <div>
        {statsPanel}
      </div>
    )
  }
}

export default LabSummary;
