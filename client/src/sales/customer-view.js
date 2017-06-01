import React from 'react';
import { observer } from 'mobx-react';
import { Grid, Segment, Menu, Icon }  from 'semantic-ui-react';
import { brand } from '../config/theme';

@observer
class CustomerView extends React.Component {

  render() {

    const customerMenu = (
      <Menu style={{marginBottom:0}} inverted color={brand}>
        <Menu.Item>
          <Icon name='chevron left'/>
        </Menu.Item>
      </Menu>
    )

    const invoiceMenu = (
      <Menu inverted color={brand}>
        <Menu.Item>
          Customer Invoices
        </Menu.Item>
      </Menu>
    )

    const grid = (
      <Grid stackable>
          <Grid.Column width={4} style={{paddingRight:0}}>
            {customerMenu}
            Customer Detail
          </Grid.Column>
          <Grid.Column width={12} style={{paddingLeft:0}}>
            {invoiceMenu}
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
