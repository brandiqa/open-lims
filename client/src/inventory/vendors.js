import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';
import { inject } from 'mobx-react';
import { INVENTORY_ROUTE } from '../config/routes';
// import VendorList from './vendor-list';
// import VendorForm from './vendor-form';
import DomainList from '../templates/domain-list';

@inject("stores")
class Vendors extends React.Component {
  render() {
    const listLink = `${INVENTORY_ROUTE}/vendors`;
    const newLink = `${INVENTORY_ROUTE}/vendors/new`;
    const editLink = `${INVENTORY_ROUTE}/vendors/edit/:_id`;
    const store = this.props.stores.vendorStore;

    return (
      <div>
        <Menu>
          <NavLink className="item" activeClassName="active" exact to={listLink}>Vendors List</NavLink>
          <NavLink className="item" activeClassName="active" to={newLink}>Add Vendor</NavLink>
        </Menu>
        <h3>Vendors</h3>
        <Route component={() => (<DomainList store={store}/>)} exact path={listLink}/>
        {/* <Route component={() => (<VendorList store={store}/>)} exact path={listLink}/> */}
        {/* <Route component={props => (<VendorForm {...props} store={store}/>)} path={newLink}/>
        <Route component={props => (<VendorForm {...props} store={store}/>)} path={editLink} /> */}
      </div>
    )
  }
}

export default Vendors;
