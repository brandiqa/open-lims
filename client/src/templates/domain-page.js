import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import DomainList from './domain-list';
import DomainForm from './domain-form';

class DomainPage extends React.Component {

  routeComponents(store, routes, schema) {
    return [
      <Route key={routes.list} component={props => (<DomainList {...props} routes={routes} schema={schema} store={store} />)} exact path={routes.list}/>,
      <Route key={routes.new} component={props => (<DomainForm {...props} routes={routes} schema={schema} store={store} />)} path={routes.new}/>,
      <Route key={routes.edit} component={props => (<DomainForm {...props} routes={routes} schema={schema} store={store} />)} path={routes.edit} />
    ]
  }

   render() {
     const { store, routes, schema } = this.props;

     return (
       <div>
         <Header>{schema.label}s</Header>
         <Divider/>
         {this.routeComponents(store, routes, schema)}
       </div>
     );
   }
}

export default DomainPage;
