import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import DomainList from './domain-list';
import DomainForm from './domain-form';

class DomainPage extends React.Component {

   render() {
     const { store, routes, schema} = this.props;

     return (
       <div>
         <Header>{schema.label}s</Header>
         <Divider/>
         <Route component={props => (<DomainList {...props} routes={routes} schema={schema} store={store} />)} exact path={routes.list}/>
         <Route component={props => (<DomainForm {...props} routes={routes} schema={schema} store={store} />)} path={routes.new}/>
         <Route component={props => (<DomainForm {...props} routes={routes} schema={schema} store={store} />)} path={routes.edit} />
       </div>
     );
   }
}

export default DomainPage;
