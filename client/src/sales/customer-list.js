import React from 'react';
import { observer } from 'mobx-react';
import DomainList from '../templates/domain-list';

@observer
class CustomerList extends DomainList {

  handleDoubleClick = (_id) => {
    const { history, routes } = this.props;
    history.push(routes.baseView + _id)
  }

}

export default CustomerList;
