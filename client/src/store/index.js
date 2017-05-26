import remotedev from 'mobx-remotedev';
import Store from './store';

const config = {
  global: true,
  onlyActions:true,
  filters: {
    whitelist: /fetch|update|create|Event|entity|entities|handleErrors/
  }
};

const customerStore = new Store('api/customers');

const allStores = {
  customerStore: remotedev(customerStore, Object.assign(config, {name:'Customer'}))
};

export default allStores;
