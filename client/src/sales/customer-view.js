import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Icon, Item }  from 'semantic-ui-react';
import { brand } from '../config/theme';
import CustomerInvoiceTable from './customer-invoice-table';

@observer
class CustomerView extends React.Component {

  componentDidMount() {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.store.fetch(_id)
    }
  }

  handleBackClick = () => {
    this.props.history.goBack();
  }

  render() {
    const { routes } = this.props;
    const { entity:customer } = this.props.store;

    const customerMenu = (
      <Menu style={{marginBottom:0}} inverted color={brand}>
        <Menu.Item onClick={() => this.handleBackClick()}>
          <Icon name='chevron left'/>
        </Menu.Item>
      </Menu>
    )

    const invoiceMenu = (
      <Menu inverted color={brand}></Menu>
    )

    const customerDetail = (
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Header style={{textDecoration:'underline'}}>
              {customer.name}
            </Item.Header>
            <Item.Meta>
              <Icon name='mail'/> {customer.email}
            </Item.Meta>
            <Item.Meta>
              <Icon name='phone'/> {customer.phone}
            </Item.Meta>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content>
            <Item.Header>
              Lab Services
            </Item.Header>
            <Item.Meta>
              3 Finished Jobs
            </Item.Meta>
            <Item.Meta>
              1 Active Job
            </Item.Meta>
          </Item.Content>
        </Item>
        <Item>
          <Link to={`${routes.baseEdit}${customer._id}`} className="ui button primary">Edit</Link>
        </Item>
      </Item.Group>
    )

    const grid = (
      <Grid stackable>
          <Grid.Column width={4} style={{paddingRight:0}}>
            {customerMenu}
            {customerDetail}
          </Grid.Column>
          <Grid.Column width={12} style={{paddingLeft:0}}>
            {invoiceMenu}
            <CustomerInvoiceTable customer={this.props.store.entity}/>
          </Grid.Column>
      </Grid>
    )

    return(
      <div>
        {grid}
      </div>
    )
  }
}

export default CustomerView;
