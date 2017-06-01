import React from 'react';
import { observer } from 'mobx-react';
import { Grid, Segment, Menu }  from 'semantic-ui-react';
// import { brand } from '../config/theme';

@observer
class CustomerView extends React.Component {

  render() {
    const grid = (
      <Grid stackable>
          <Grid.Column width={6}>
            Customer Detail
          </Grid.Column>
          <Grid.Column width={10}>
            Customer Invoices
          </Grid.Column>
      </Grid>
    );

    return(
      <div>
        {grid}
      </div>
    )
  }
}

export default CustomerView;
